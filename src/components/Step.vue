<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { EventKeys } from '../constants/eventKeys'

const { step } = defineProps({
    step: {
        type: Number,
        required: true,
    }
})

const currentStep = ref(0)

let keydownListener: (event: KeyboardEvent) => void

onMounted(() => {
    keydownListener = (event: KeyboardEvent) => {
        if (event.key === EventKeys.RightArrow || event.key === EventKeys.Space) {
            currentStep.value++
        }

        if (event.key === EventKeys.LeftArrow) {
            if (currentStep.value > 0) {
                event.stopPropagation()
            }
            currentStep.value = Math.max(0, currentStep.value - 1)
        }

        if (currentStep.value === step) {
            event.stopPropagation()
        }
    }

    document.body.addEventListener('keydown', keydownListener)
});

onBeforeUnmount(() => {
    console.log('Removing keydown listener')
    if (keydownListener) {
        document.body.removeEventListener('keydown', keydownListener)
    }
});
</script>

<template>
    <slot v-if="currentStep >= step" />
</template>



