<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { EventKeys } from '../constants/eventKeys';

import TitleSlide from './slides/TitleSlide.vue';
import IntroSlide from './slides/Intro.vue';
import AntiIntroSlide from './slides/AntiIntro.vue';
import AssumptionsValidationSlide from './slides/AssumptionsValidation.vue';
import AssumptionsEnvironmentalSlide from './slides/AssumptionsEnvironmental.vue';
import AssumptionsSideEffectsSlide from './slides/AssumptionsSideEffects.vue';
import DefensiveCopyingSlide from './slides/DefensiveCopying.vue';

import PracticalIntro from './slides/PracticalIntro.vue';

import endSlide from './slides/EndSlide.vue';

const slides = [
    TitleSlide,
    IntroSlide,
    AntiIntroSlide,
    AssumptionsValidationSlide,
    AssumptionsEnvironmentalSlide,
    AssumptionsSideEffectsSlide,
    DefensiveCopyingSlide,

    PracticalIntro,

    endSlide,
]

const currentSlide = ref(0)
const progressPercentage = computed(() => {
    return ((currentSlide.value) / (slides.length - 1)) * 100
})

onMounted(() => {
    document.addEventListener('keydown', (event) => {
        if (event.key === EventKeys.RightArrow || event.key === EventKeys.Space) {
            if (currentSlide.value >= slides.length - 1) return;
            currentSlide.value = (currentSlide.value + 1)
        } else if (event.key === EventKeys.LeftArrow) {
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
        min-height: 100dvh;
    }

    .presentation-progress {
        margin-top: auto;
        margin-block: 1.5rem;
        width: 70%;
        height: 6px !important;
        align-self: center;
    }
</style>
