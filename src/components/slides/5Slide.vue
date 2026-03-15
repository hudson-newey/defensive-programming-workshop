<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
public class User {
    private String name;
    private int age;
}
`;
</script>

<template>
    <Slide :title="'Assumption 3: Side Effects'">
        <h2>
            <CodeBlock :code="code" />
        </h2>
    </Slide>
</template>
