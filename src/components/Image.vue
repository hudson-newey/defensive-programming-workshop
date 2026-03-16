<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: false,
    default: ''
  },
  width: {
    type: [Number, String],
    required: false,
    default: 'auto'
  },
  height: {
    type: [Number, String],
    required: false,
    default: 'auto'
  }
})
</script>

<template>
    <img
        class="is-rounded"
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
    />
</template>

<style scoped>
    img {
        contain: content;
        border-radius: 1rem;
    }
</style>
