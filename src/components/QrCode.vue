<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <vue-qrcode :value="src"></vue-qrcode>
</template>
