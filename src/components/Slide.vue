<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="content-container container">
        <section class="hero">
            <div class="hero-body">
                <h2 class="title">{{ title }}</h2>
            </div>
        </section>

        <div class="slide-content content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .content-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .slide-content {
        display: flex;
        flex-direction: column;
        flex: 1;

        margin-inline: 3rem;
    }
</style>
