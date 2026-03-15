<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';
import Step from '../Step.vue';

const tryCatchCode = `
try {
    // some code that might throw an exception
} catch (Exception e) {
    System.out.println("An error occurred: " + e.getMessage());
}
`;
</script>

<template>
    <Slide :title="'What is NOT Defensive Programming?'">
        <p>
            These are the quickest ways to make everyone hate your code.
        </p>

        <ul>
            <li>Adding <code>try {} catch () {}</code> blocks everywhere</li>
            <li>Useless <code>try {} catch () {}</code> blocks</li>
            <li>Using <code>assert</code> guards at the start of every function/method</li>
            <li>Being paranoid about 1/10m events like cosmic bit flips</li>
            <li>Not following established coding practices and conventions</li>
        </ul>

        <Step :step="1">
            <div class="mt-6">
                <CodeBlock :code="tryCatchCode" />
            </div>
        </Step>
    </Slide>
</template>
