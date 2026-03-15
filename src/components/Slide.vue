<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
});
</script>

<template>
    <div class="container">
        <section class="hero">
            <div class="hero-body">
                <h2 class="title">{{ title }}</h2>
            </div>
        </section>

        <div class="slide-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 3rem;
    }

    .slide-content {
        color: white;
        margin-left: 3rem;
    }
</style>
