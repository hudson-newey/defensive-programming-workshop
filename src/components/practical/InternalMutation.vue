<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = ``
</script>

<template>
    <Slide :title="'Practical: Mutating Internal State'">
        <CodeEditor :code="code" />
    </Slide>
</template>
