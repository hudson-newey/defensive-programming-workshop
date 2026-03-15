<script setup lang="ts">
    import Slide from '../Slide.vue';
</script>

<template>
    <Slide :title="'What is Defensive Programming'">
        <h3 class="is-size-4">What Assumptions Have I Made?</h3>
        <ol class="ml-5">
            <li>Can these assumptions ever change</li>
            <li>What should happen if these assumptions are violated</li>
        </ol>
    </Slide>
</template>
