<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import Slide1 from './slides/1Slide.vue';
import Slide2 from './slides/2Slide.vue';
import Slide3 from './slides/3Slide.vue';
import Slide4 from './slides/4Slide.vue';
import Slide5 from './slides/5Slide.vue';
import endSlide from './slides/endSlide.vue';

const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    endSlide,
]

const currentSlide = ref(0)
const progressPercentage = computed(() => {
    return ((currentSlide.value) / (slides.length - 1)) * 100
})

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
    <div class="slide-container">
        <component :is="slides[currentSlide]"></component>
        <progress class="presentation-progress progress is-small is-info" :value="progressPercentage" max="100">{{ progressPercentage }}%</progress>
    </div>
</template>

<style scoped>
    .slide-container {
        display: flex;
        flex-direction: column;
        height: 100dvh;
    }

    .presentation-progress {
        margin-top: auto;
        margin-bottom: 1rem;
        width: 70%;
        height: 6px !important;
        align-self: center;
    }
</style>
