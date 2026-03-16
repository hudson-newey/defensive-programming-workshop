<script setup lang="ts">
import Slide from '../Slide.vue'
import Step from '../Step.vue';
</script>

<template>
    <Slide :title="'Graceful Degradation'">
        <p>Graceful degradation means refusing to continue with invalid or unsafe state and returning a useful error or
            fallback.</p>

        <section class="mt-6">
            <h3 class="is-size-6">Handle external boundary problems gracefully</h3>
            <ul>
                <li>Treat APIs, files, environment variables, and browsers as unreliable boundaries.</li>
                <li>Validate what came in before the rest of the app depends on it.</li>
                <li>Return a safe fallback, retry option, or clear error message when the boundary fails.</li>
                <li><strong>Example:</strong> If <code>APP_MODE</code> is missing, start in <code>DEV</code> instead of
                    crashing on boot.</li>
                <li><strong>Example:</strong> If an API request times out, show cached data with an “offline” message
                    instead of a blank screen.</li>
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
                    <li><strong>Example:</strong> Disable a feature with a message like “Export unavailable for guest
                        users” instead of letting it fail halfway through.</li>
                </ul>
            </section>

        </Step>
    </Slide>
</template>
