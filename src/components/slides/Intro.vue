<script setup lang="ts">
import Slide from '../Slide.vue';
import Step from '../Step.vue';
</script>

<template>
    <Slide :title="'What is Defensive Programming'">
        <ol>
            <li>What can go wrong?</li>
            <li>What assumptions do we make?</li>
            <li>Can these assumptions ever change</li>
            <li>What should happen if these assumptions are violated</li>
            <li>Is there a way that I can track assumptions violations (not covered)</li>
        </ol>

        <Step :step="1">
            <section class="mt-4">
                <h4>Murphy's Law</h4>
                <blockquote>Anything that can go wrong will go wrong</blockquote>
            </section>
        </Step>

        <Step :step="2">
            <section class="mt-6">
                <h3>Workshop Overview</h3>
                <ol>
                    <li>What assumptions do we make?</li>
                    <ul>
                        <li>We assume that input data will be valid</li>
                        <li>We assume that external systems will behave as expected</li>
                    </ul>
                </ol>
            </section>
        </Step>
    </Slide>
</template>
