<script setup lang="ts">
import Slide from '../Slide.vue';
</script>

<template>
    <Slide :title="'What is Defensive Programming'">
        <ol>
            <li>Can these assumptions ever change</li>
            <li>What should happen if these assumptions are violated</li>
            <li>Is there a way that I can track assumptions violations (not covered)</li>
        </ol>
    </Slide>
</template>
