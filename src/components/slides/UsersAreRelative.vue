<script setup lang="ts">
import Slide from '../Slide.vue'
import Step from '../Step.vue'
</script>

<template>
    <Slide :title="'Users are relative'">
        <p>
            Who are your end users? Unless you're working directly at the UI
            level, it's probably not customers.
        </p>

        <Step :step="1">
            <p class="has-text-white">
                Your users are probably other developers.
            </p>
        </Step>
    </Slide>
</template>
