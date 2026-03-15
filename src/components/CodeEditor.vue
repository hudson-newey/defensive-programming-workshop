<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { CodeEditor } from 'monaco-editor-vue3'
import { runCode } from '../utils/runCode'
import type { Ref } from 'vue';

const { code, inputs } = defineProps({
  code: {
    type: String,
    required: true
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
const execOutput: Ref<string | null> = ref(null)
const isSubmitting = ref(false)

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
    })
    .catch((error) => {
      execOutput.value = `Error: ${error.message}`
    })
    .finally(() => {
      isSubmitting.value = false
    })
}

function resetCode() {
  editedCode.value = code.trimStart()
}

onMounted(() => {
  window.addEventListener('keyup', keyupListener)
});

onUnmounted(() => {
  window.removeEventListener('keyup', keyupListener)
});
</script>

<template>
  <CodeEditor
    v-model:value="editedCode"
    language="java"
    theme="vs-dark"
    :options="editorOptions"
  />

  <div class="mt-2">
    <button class="button is-primary is-small" @click="checkCode" :disabled="isSubmitting">
      {{ isSubmitting ? 'Submitting...' : 'Check' }}
    </button>
    <button class="button is-small ml-2" @click="resetCode">Reset</button>
  </div>

  <div class="modal" :class="{ 'is-active': execOutput !== null }">
    <div class="modal-background"></div>

    <div class="modal-card">
      <section class="modal-card-body">
        <p class="modal-card-title">Output</p>
        <pre>{{ execOutput }}</pre>
      </section>

      <footer class="modal-card-foot p-2 pl-3">
        <button class="button is-primary" @click="execOutput = null">Close</button>
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
</style>
