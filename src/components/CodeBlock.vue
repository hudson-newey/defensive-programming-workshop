<script setup lang="ts">
    import VCodeBlock from '@wdns/vue-code-block';

    defineProps({
        code: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <VCodeBlock
        :code="code"
        highlightjs
        lang="java"
        theme="github-dark-dimmed"
    />
</template>
