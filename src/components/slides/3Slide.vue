<script setup lang="ts">
    import Slide from '../Slide.vue';
    import VCodeBlock from '@wdns/vue-code-block';

    const code = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}`;
</script>

<template>
    <Slide :title="''">
        <h2>
            Spoiler: It's 90% Open Closed Principle, 9% Encapsulation and 1%
            Exception Handling.
        </h2>

        <VCodeBlock
            :code="code"
            highlightjs
            lang="java"
            theme="github-dark-dimmed"
        />
    </Slide>
</template>
