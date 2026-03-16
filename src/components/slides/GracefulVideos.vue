<script setup lang="ts">
import Image from '../Image.vue';
import Slide from '../Slide.vue';

</script>

<template>
    <Slide :title="'Graceful Degradation: Videos'">
        <h3 class="is-size-6">
            How do inline video's degrade?
        </h3>

        <Image :width="600" :height="600" :src="'/failed-video.webp'" />
    </Slide>
</template>
