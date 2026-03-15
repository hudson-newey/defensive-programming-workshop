<script setup lang="ts">
    import VCodeBlock from '@wdns/vue-code-block';

    defineProps({
        code: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        }
    })
</script>

<template>
    <div>
        <VCodeBlock
            :code="code.trim()"
            highlightjs
            lang="java"
            theme="github-dark-dimmed"
        />
        <a v-if="link" :href="link" target="_blank" class="button is-small mt-3">
            View on TIO
        </a>
    </div>
</template>

<style scoped>
</style>
