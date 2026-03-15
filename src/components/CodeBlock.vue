<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';

defineProps({
    code: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: false,
        default: 'java'
    },
    link: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="mb-3">
        <VCodeBlock :code="code.trim()" :lang="lang" highlightjs theme="github-dark-dimmed" />
        <a v-if="link" :href="link" target="_blank" class="button is-small mt-3">
            View on TIO
        </a>
    </div>
</template>

<style>
pre.language-java,
pre.language-ruby,
pre.language-ruby,
pre.language-bash {
    padding: 0 !important;
}
</style>
