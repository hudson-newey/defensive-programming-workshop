<script setup lang="ts">
import Slide from '../Slide.vue'
</script>

<template>
    <Slide :title="'Defensive vs Offensive Programming'">
        <div class="table-container">
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Defensive Programming</th>
                        <th>Offensive Programming</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Philosophy</td>
                        <td>Keep the lights on at all costs.</td>
                        <td>If it's broken, stop everything.</td>
                    </tr>
                    <tr>
                        <td>Best Used For</td>
                        <td>External boundaries (APIs, UI).</td>
                        <td>Internal logic and private methods.</td>
                    </tr>
                    <tr>
                        <td>Result of Error</td>
                        <td>Error message or safe fallback.</td>
                        <td>Instant crash or hard exception.</td>
                    </tr>
                    <tr>
                        <td>Audience</td>
                        <td>The end-user.</td>
                        <td>The developer.</td>
                    </tr>
                    <tr>
                        <td>Core Tool</td>
                        <td>Validation, try-catch, defaults.</td>
                        <td>Assertions, strict type-checking.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Slide>
</template>

<style scoped>
.table td,
.table th {
  padding: 0.85rem 1rem;
  vertical-align: middle;
}
</style>
