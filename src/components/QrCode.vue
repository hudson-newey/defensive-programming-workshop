<script setup lang="ts">
const { src } = defineProps({
  src: {
    type: String,
    required: true
  }
})

// remove the http:// or https:// from the src for better QR code readability
const trimmedSrc = src.replace(/^https?:\/\//, '')
</script>

<template>
  <div>
    <vue-qrcode :value="src"></vue-qrcode>
    <a :href="src">{{ trimmedSrc }}</a>
  </div>
</template>
