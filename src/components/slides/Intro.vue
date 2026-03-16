<script setup lang="ts">
import Slide from '../Slide.vue'
import Step from '../Step.vue'
</script>

<template>
    <Slide :title="'What is Defensive Programming'">
        <ol>
            <Step :step="1">
                <li>What can go wrong?</li>
            </Step>
            <Step :step="2">
                <li>What assumptions do we make?</li>
            </Step>
            <Step :step="3">
                <li>Can these assumptions ever change</li>
            </Step>
            <Step :step="4">
                <li>What should happen if these assumptions are violated</li>
            </Step>
            <Step :step="5">
                <li>Is there a way that I can track assumptions violations (not covered)</li>
            </Step>
        </ol>

        <Step :step="6">
            <section class="mt-4">
                <h4>Murphy's Law</h4>
                <blockquote>Anything that can go wrong will go wrong</blockquote>
            </section>
        </Step>
    </Slide>
</template>
