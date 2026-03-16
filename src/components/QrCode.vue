<script setup lang="ts">
import VueQrcode from '@chenfengyuan/vue-qrcode'

const { src } = defineProps({
  src: {
    type: String,
    required: true
  }
})

// remove the http:// or https:// from the src for better QR code readability
// also remove trailing slash if present
const trimmedSrc = src
  .replace(/^https?:\/\//, '')
  .replace(/\/$/, '')
</script>

<template>
  <div class="is-flex is-flex-direction-column">
    <a class="is-block is-size-4" :href="src" target="_blank">{{ trimmedSrc }}</a>
    <VueQrcode :value="src" />
  </div>
</template>
