<script setup lang="ts">
import Image from '../Image.vue';
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
            <p class="has-text-weight-semibold">
                Your users are probably other developers.
            </p>

            <Image src="/you-you-you-meme.webp" />
        </Step>
    </Slide>
</template>
