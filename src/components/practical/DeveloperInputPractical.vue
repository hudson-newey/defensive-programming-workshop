<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = ``
</script>

<template>
    <Slide :title="'Developer Input: Practical'">
        <CodeEditor :code="code" />
    </Slide>
</template>
