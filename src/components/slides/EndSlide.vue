<script setup lang="ts">
import QrCode from '../QrCode.vue'
import Slide from '../Slide.vue'
</script>

<template>
    <Slide :title="'Thank you!'">
        <p class="subtitle">Any questions?</p>

        <QrCode src="https://defensive-coding-workshop.netlify.app" />
    </Slide>
</template>
