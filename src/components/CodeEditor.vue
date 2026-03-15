<script setup>
import { ref } from 'vue'
import { CodeEditor } from 'monaco-editor-vue3'

defineProps({
  code: {
    type: String,
    required: true
  },
})

const editorOptions = {
  fontSize: 20,
  minimap: { enabled: false },
  automaticLayout: true
}
</script>

<template>
  <CodeEditor
    :value="code.trimStart()"
    language="java"
    theme="vs-dark"
    :options="editorOptions"
  />
</template>

<style scoped>
  .monaco-code-editor {
    flex: 1 1 0;
    min-height: 0;

    border-radius: 0.5rem;
    contain: content;
  }
</style>
