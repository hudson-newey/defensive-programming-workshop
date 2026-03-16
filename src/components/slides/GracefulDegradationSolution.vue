<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const code = `
String mode = System.getenv("APP_MODE");
if (mode == null || mode.isBlank()) {
    mode = "DEV";
}

switch (mode.toUpperCase()) {
    case "PROD":
        runProd();
        break;
    case "STAGE":
        runStage();
        break;
    default:
        // fail gracefully with safe default
        runDev();
        break;
}
`
</script>

<template>
    <Slide :title="'Solution: Graceful Degradation'">
        <CodeBlock :code="code" />
        <ul>
            <li>Check and sanitize external inputs before using them.</li>
            <li>Use safe defaults for unknown states.</li>
            <li>Fail with diagnostics if unable to continue.</li>
        </ul>
    </Slide>
</template>