<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { CodeEditor } from 'monaco-editor-vue3'
import { runCode } from '../utils/runCode'
import type { Ref } from 'vue';

const { code, inputs, solution } = defineProps({
  code: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: false,
    default: ''
  },
  inputs: {
    type: Array as () => string[],
    required: false,
    default: () => []
  }
})

const editorOptions = {
  fontSize: 20,
  minimap: { enabled: false },
  automaticLayout: true
}

const editedCode = ref(code.trimStart())
const isSubmitting = ref(false)

const execOutput: Ref<string | null> = ref(null)
const execExitCode: Ref<number | null> = ref(null)

const isSuccessful = computed(() => execExitCode.value === 0)
const outputTitle = computed(() => {
  if (execExitCode.value === null) {
    return `Output`
  }
  return isSuccessful.value ? `Success!` : `Try Again!`
})

let keyupListener = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
    checkCode()
  } else if (event.key === 'Escape') {
    execOutput.value = null
  }
}

function checkCode() {
  isSubmitting.value = true
  runCode(editedCode.value, inputs.join('\n') + '\n')
    .then((response) => {
      execOutput.value = response.output
      execExitCode.value = response.exitCode ?? null
    })
    .catch((error) => {
      execOutput.value = `Error: ${error.message}`
      execExitCode.value = null
    })
    .finally(() => {
      isSubmitting.value = false
    })
}

function resetCode() {
  editedCode.value = code.trimStart()
}

function showSolution() {
  editedCode.value = solution.trimStart()
}

onMounted(() => {
  window.addEventListener('keyup', keyupListener)
});

onUnmounted(() => {
  window.removeEventListener('keyup', keyupListener)
});
</script>

<template>
  <CodeEditor v-model:value="editedCode" language="java" theme="vs-dark" :options="editorOptions" />

  <div class="mt-2">
    <button class="button is-primary is-small" @click="checkCode" :disabled="isSubmitting">
      {{ isSubmitting ? 'Submitting...' : 'Check' }}
    </button>
    <button class="button is-small ml-2" @click="showSolution" v-if="solution">Show Solution</button>
    <button class="button is-small ml-2" @click="resetCode">Reset</button>
  </div>

  <div class="modal modal-fx-fadeInScale" :class="{ 'is-active': execOutput !== null }">
    <div class="modal-background"></div>

    <div class="modal-card">
      <section class="modal-card-body">
        <h4 class="modal-card-title" :class="{
          'has-text-success': isSuccessful,
          'has-text-danger': !isSuccessful,
        }">
          {{ outputTitle }}
        </h4>
        <pre>{{ execOutput }}</pre>
      </section>

      <footer class="modal-card-foot p-2 pl-3">
        <button class="button" :class="{
          'is-success': isSuccessful,
          'is-danger': !isSuccessful,
        }" @click="execOutput = null">
          Close
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.monaco-code-editor {
  flex: 1 1 0;
  min-height: 0;

  border-radius: 0.5rem;
  contain: content;
}

.test-case-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  padding: 1rem;
}
</style>
