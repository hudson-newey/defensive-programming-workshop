<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { EventKeys } from '../constants/eventKeys'

// Intro
import TitleSlide from './slides/TitleSlide.vue'
import IntroSlide from './slides/Intro.vue'
import AntiIntroSlide from './slides/AntiIntro.vue'

// Validation
import AssumptionsValidationSlide from './slides/AssumptionsValidation.vue'
import InputValidationExample from './slides/InputValidationExample.vue'
import InputOutputPractical from './practical/InputValidationPractical.vue'
import InputValidationSolution from './slides/InputValidationSolution.vue'

// "Users" are relative
import UsersAreRelativeSlide from './slides/UsersAreRelative.vue'
import DeveloperInput from './slides/DeveloperInput.vue'
import DeveloperInputExample from './slides/DeveloperInputExample.vue'
import DeveloperInputPractical from './practical/DeveloperInputPractical.vue'

// Side effects
import AssumptionsSideEffectsSlide from './slides/AssumptionsSideEffects.vue'
import SideEffectsExample from './slides/SideEffectsExample.vue'
import DefensiveCopyingSlide from './slides/DefensiveCopying.vue'
import ImmutabilitySlide from './slides/Immutability.vue'
import GettersPractical from './practical/GettersPractical.vue'
import InternalMutationPractical from './practical/InternalMutation.vue'

import endSlide from './slides/EndSlide.vue'

const slides = [
    TitleSlide,

    IntroSlide,
    AntiIntroSlide,

    AssumptionsValidationSlide,
    InputValidationExample,
    InputOutputPractical,
    InputValidationSolution,

    UsersAreRelativeSlide,
    DeveloperInput,
    DeveloperInputExample,
    DeveloperInputPractical,

    AssumptionsSideEffectsSlide,
    DefensiveCopyingSlide,
    ImmutabilitySlide,
    SideEffectsExample,
    InternalMutationPractical,
    GettersPractical,

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

        <div class="progress-container">
            <div class="progress-controls">
                <button class="button is-small" @click="currentSlide = Math.max(0, currentSlide - 1)">&lt;</button>
                <button class="button is-small" @click="currentSlide = Math.min(slides.length - 1, currentSlide + 1)">&gt;</button>
            </div>
            <progress class="presentation-progress progress is-small is-info" :value="progressPercentage" max="100">{{ progressPercentage }}%</progress>
        </div>
    </div>
</template>

<style scoped>
    .slide-container {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }

    .progress-container {
        display: flex;
        align-items: center;
        align-self: center;

        gap: 1rem;

        margin-top: auto;
        margin-block: 1.5rem;
        width: 70%;
    }

    .progress-controls {
        display: flex;
        gap: 0.5rem;
    }

    .presentation-progress {
        height: 6px !important;
    }
</style>
