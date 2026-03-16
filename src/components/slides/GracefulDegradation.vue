<script setup lang="ts">
import Slide from '../Slide.vue'
</script>

<template>
    <Slide :title="'Graceful Degradation'">
        <p>Graceful degradation means refusing to continue with invalid or unsafe state and returning a useful error or fallback.</p>
        <ul>
            <li>Fail fast in your own modules.</li>
            <li>Handle external boundary problems gracefully.</li>
            <li>Prefer an explicit fallback over silent undefined behavior.</li>
        </ul>
    </Slide>
</template>
