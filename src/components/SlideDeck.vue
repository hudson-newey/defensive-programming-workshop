<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Slide1 from './slides/1Slide.vue';
import Slide2 from './slides/2Slide.vue';
import Slide3 from './slides/3Slide.vue';
import endSlide from './slides/endSlide.vue';

const slides = [Slide1, Slide2, Slide3, endSlide]

const currentSlide = ref(0)

onMounted(() => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            if (currentSlide.value >= slides.length - 1) return;
            currentSlide.value = (currentSlide.value + 1)
        } else if (event.key === 'ArrowLeft') {
            if (currentSlide.value === 0) return;
            currentSlide.value = (currentSlide.value - 1)
        }
    })
})
</script>

<template>
    <component :is="slides[currentSlide]"></component>
</template>

<style>
</style>
