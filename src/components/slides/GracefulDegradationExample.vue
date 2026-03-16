<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const code = `
public class Main {
    public static void main(String[] args) {
        String currentMode = System.getenv("APP_MODE");

        // ASSUMPTION: mode is a known value
        if (currentMode.equals("PROD")) {
            System.out.println("Run in production mode");
        } else {
            System.out.println("Run in safe default mode");
        }
    }
}
`
</script>

<template>
    <Slide :title="'Graceful Degradation: Example'">
        <p>Here we assumed an environment variable always exists. This can crash on startup.</p>
        <CodeBlock :code="code" />
    </Slide>
</template>
