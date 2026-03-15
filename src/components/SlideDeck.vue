<script setup lang="ts">
import { ref } from 'vue';
import Slide1 from './slides/1Slide.vue';
import Slide2 from './slides/2Slide.vue';
import Slide3 from './slides/3Slide.vue';

    const slides = [Slide1, Slide2, Slide3]

    const currentSlide = ref(0)
</script>

<template>
    <component :is="slides[currentSlide]"></component>
</template>

<style>
</style>
