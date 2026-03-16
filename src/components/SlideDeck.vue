<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { EventKeys } from '../constants/eventKeys'

// Intro
import TitleSlide from './slides/TitleSlide.vue'
import WorkshopOverview from './slides/WorkshopOverview.vue'
import IntroSlide from './slides/Intro.vue'
import AntiIntroSlide from './slides/AntiIntro.vue'
import OffensiveProgramming from './slides/OffensiveProgramming.vue'

// Validation
import AssumptionsValidationSlide from './slides/AssumptionsValidation.vue'
import InputSanitizationExample from './slides/InputSanitizationExample.vue'
import InputOutputPractical from './practical/InputValidationPractical.vue'
import InputValidationSolution from './slides/InputValidationSolution.vue'

// Graceful degradation
import GracefulDegradation from './slides/GracefulDegradation.vue'
import GracefulVideos from './slides/GracefulVideos.vue'
import GracefulDegradationExample from './slides/GracefulDegradationExample.vue'
import GracefulDegradationPractical from './practical/GracefulDegradationPractical.vue'
import GracefulDegradationSolution from './slides/GracefulDegradationSolution.vue'

// "Users" are relative
import UsersAreRelativeSlide from './slides/UsersAreRelative.vue'
import DeveloperInput from './slides/DeveloperInput.vue'
import DeveloperInputExample from './slides/DeveloperInputExample.vue'
import DeveloperInputPractical from './practical/DeveloperInputPractical.vue'
import DeveloperInputSolution from './slides/DeveloperInputSolution.vue'

// Side effects
import AssumptionsSideEffectsSlide from './slides/AssumptionsSideEffects.vue'
import SideEffectsExample from './slides/SideEffectsExample.vue'
import DefensiveCopyingSlide from './slides/DefensiveCopying.vue'
import ImmutabilitySlide from './slides/Immutability.vue'
import SideEffectsSolution from './slides/SideEffectsSolution.vue'
import GettersPractical from './practical/GettersPractical.vue'
import GettersSolution from './slides/GettersSolution.vue'
import InternalMutationPractical from './practical/InternalMutationPractical.vue'
import InternalMutationSolution from './slides/InternalMutationSolution.vue'

import EndSlide from './slides/EndSlide.vue'

interface SlideDefinition {
    title: string;
    section: string;
    component: unknown;
}

const slides: SlideDefinition[] = [
    { title: 'Defensive Programming', section: 'Intro', component: TitleSlide },
    { title: 'Workshop Overview', section: 'Intro', component: WorkshopOverview },
    { title: 'Why Defensive Programming?', section: 'Intro', component: IntroSlide },
    { title: 'Anti-Patterns', section: 'Intro', component: AntiIntroSlide },

    { title: 'Assumption: Validation', section: 'Validation', component: AssumptionsValidationSlide },
    { title: 'Input Validation Example', section: 'Validation', component: InputSanitizationExample },
    { title: 'Input Validation Practical', section: 'Validation', component: InputOutputPractical },
    { title: 'Input Validation Solution', section: 'Validation', component: InputValidationSolution },

    { title: 'Graceful Degradation', section: 'Graceful degradation', component: GracefulDegradation },
    // { title: 'Assumption: Environmental', section: 'Graceful degradation', component: AssumptionsEnvironmentalSlide },
    { title: 'Graceful Degradation Example (Videos)', section: 'Graceful degradation', component: GracefulVideos },
    { title: 'Graceful Degradation Example (Env Vars)', section: 'Graceful degradation', component: GracefulDegradationExample },
    { title: 'Graceful Degradation Practical', section: 'Graceful degradation', component: GracefulDegradationPractical },
    { title: 'Graceful Degradation Solution', section: 'Graceful degradation', component: GracefulDegradationSolution },

    { title: 'Offensive Programming', section: 'Mindset', component: OffensiveProgramming },

    { title: 'Users Are Relative', section: 'Developer inputs', component: UsersAreRelativeSlide },
    { title: 'Developer Inputs', section: 'Developer inputs', component: DeveloperInput },
    { title: 'Developer Inputs Example', section: 'Developer inputs', component: DeveloperInputExample },
    { title: 'Developer Input Practical', section: 'Developer inputs', component: DeveloperInputPractical },
    { title: 'Developer Input Solution', section: 'Developer inputs', component: DeveloperInputSolution },

    { title: 'Assumption: Side Effects', section: 'Side effects', component: AssumptionsSideEffectsSlide },
    { title: 'Side Effects Example', section: 'Side effects', component: SideEffectsExample },
    { title: 'Defensive Copying', section: 'Side effects', component: DefensiveCopyingSlide },
    { title: 'Immutability', section: 'Side effects', component: ImmutabilitySlide },
    { title: 'Side Effects Solution', section: 'Side effects', component: SideEffectsSolution },
    { title: 'Internal Mutation Practical', section: 'Side effects', component: InternalMutationPractical },
    { title: 'Internal Mutation Solution', section: 'Side effects', component: InternalMutationSolution },
    { title: 'Getters Practical', section: 'Side effects', component: GettersPractical },
    { title: 'Getters Solution', section: 'Side effects', component: GettersSolution },

    { title: 'Thank You', section: 'Wrap-up', component: EndSlide },
]

const currentSlideIndex = ref(0)
const totalSlides = slides.length
const currentSlide = computed(() => slides[currentSlideIndex.value])
const isFirstSlide = computed(() => currentSlideIndex.value === 0)
const isLastSlide = computed(() => currentSlideIndex.value === totalSlides - 1)
const progressPercentage = computed(() => {
    return (currentSlideIndex.value / (totalSlides - 1)) * 100
})

function goToNextSlide() {
    if (isLastSlide.value) return
    currentSlideIndex.value += 1
}

function goToPreviousSlide() {
    if (isFirstSlide.value) return
    currentSlideIndex.value -= 1
}

function isInteractiveElement(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) {
        return false
    }

    const tagName = target.tagName.toLowerCase()
    return target.isContentEditable
        || ['input', 'textarea', 'select', 'button'].includes(tagName)
        || target.closest('.monaco-editor') !== null
}

function handleKeydown(event: KeyboardEvent) {
    if (isInteractiveElement(event.target)) {
        return
    }

    if (event.key === EventKeys.RightArrow || event.key === EventKeys.Space) {
        event.preventDefault()
        goToNextSlide()
    } else if (event.key === EventKeys.LeftArrow) {
        event.preventDefault()
        goToPreviousSlide()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
    <div class="slide-container">
        <component :is="currentSlide.component" :key="currentSlide.title"></component>

        <div class="progress-container">
            <div class="progress-controls">
                <button class="button is-small" :disabled="isFirstSlide" aria-label="Previous slide" @click="goToPreviousSlide">&lt;</button>
                <button class="button is-small" :disabled="isLastSlide" aria-label="Next slide" @click="goToNextSlide">&gt;</button>
            </div>

            <div class="progress-copy">
                <p class="slide-meta mb-1">{{ currentSlide.section }} · {{ currentSlideIndex + 1 }} / {{ totalSlides }}</p>
                <progress class="presentation-progress progress is-small is-info" :value="progressPercentage" max="100">{{ progressPercentage }}%</progress>
            </div>
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

    .progress-copy {
        flex: 1;
    }

    .slide-meta {
        font-size: 0.85rem;
        color: hsl(0, 0%, 35%);
    }

    .presentation-progress {
        height: 6px !important;
    }
</style>
