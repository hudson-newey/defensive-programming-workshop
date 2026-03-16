<script setup lang="ts">
import Slide from '../Slide.vue'
import Step from '../Step.vue';
</script>

<template>
    <Slide :title="'Graceful Degradation'">
        <p>
            Isolate failures to the smallest possible scope and degrade
            gracefully instead of crashing the whole app.
        </p>

        <section class="mt-3">
            <h3 class="is-size-6">Isolate Failures on Boundaries</h3>
            <ul>
                <li>Keep parsing, validation, and error handling close to the API, file, or browser edge.</li>
                <li>Convert external failures into safe internal values before the rest of the app uses them.</li>
                <li>Contain the blast radius so one bad response breaks one feature, not the whole screen.</li>
                <li>Make boundary failures visible with logs, metrics, or messages instead of hiding them.</li>
            </ul>
        </section>

        <section class="mt-6">
            <h3 class="is-size-6">Handle external boundary problems gracefully</h3>
            <ul>
                <li>Treat APIs, files, environment variables, and browsers as unreliable inputs.</li>
                <li>Validate what came in before the rest of the app depends on it.</li>
                <li>Return a safe fallback, retry option, or clear error message when the boundary fails.</li>
            </ul>
        </section>

        <Step :step="1">
            <section class="mt-6">
                <h3 class="is-size-6">Prefer an explicit fallback over silent undefined behavior</h3>
                <ul>
                    <li>Make the fallback predictable so the system stays understandable under failure.</li>
                    <li>Avoid “sort of worked” states where bad data quietly spreads through the app.</li>
                    <li>Log or surface enough detail so developers can diagnose why the fallback happened.</li>
                    <li><strong>Example:</strong> Render a placeholder avatar when an image URL is broken instead of
                        leaving a broken UI element.</li>
                </ul>
            </section>

        </Step>
    </Slide>
</template>
