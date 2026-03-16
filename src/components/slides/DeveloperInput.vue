<script setup lang="ts">
import Slide from '../Slide.vue'
</script>

<template>
    <Slide :title="'Developer Inputs'">
        <p>Sometimes your users are other developers and not end users. Your method contracts are the boundary.</p>
        <ul>
            <li>Validate inputs from your teammates.</li>
            <li>Use assertions or explicit checks at private boundaries.</li>
            <li>Keep behavior predictable even with invalid data.</li>
        </ul>
    </Slide>
</template>
