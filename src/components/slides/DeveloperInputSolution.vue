<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const code = `
if (age < 0 || age > 150) {
    throw new IllegalArgumentException("Age must be between 0 and 150");
}
user.setAge(age);
`
</script>

<template>
    <Slide :title="'Solution: Developer Input'">
        <CodeBlock :code="code" />
        <ul>
            <li>Fail loudly at internal boundaries.</li>
            <li>Document preconditions and enforce them.</li>
            <li>Use simple guards instead of hidden assumptions.</li>
        </ul>
    </Slide>
</template>