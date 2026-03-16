<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Image from '../Image.vue'
import Slide from '../Slide.vue'
import Step from '../Step.vue'

const tryCatchCode = `
try {
    System.out.println("Hello, World!");
} catch (Exception e) {
    // There may not be an IO device connected to print to.
    panic("Unexpected error: " + e.getMessage());
}
`

const defaultValueCode = `
function getUserName(user) {
    return user.name || "Default User";
}`;
</script>

<template>
    <Slide :title="'What is your risk tolerance?'">
        <section>
            <h3 class="is-size-6">1. Providing default values everywhere</h3>
            <CodeBlock :code="defaultValueCode" />
        </section>

        <Step :step="1">
            <h3 class="is-size-6">2. Adding <code>try {} catch () {}</code> blocks everywhere</h3>
            <CodeBlock :code="tryCatchCode" />
        </Step>

        <Step :step="2">
            <h3 class="is-size-6">3. Being paranoid about 1/10m events like cosmic bit flips</h3>
            <Image src="/cosmic_bits.webp" :width="400" :height="400" />
        </Step>
    </Slide>
</template>
