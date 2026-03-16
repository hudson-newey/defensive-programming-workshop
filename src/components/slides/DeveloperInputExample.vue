<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const code = `
public class UserManager {
    public void setUserAge(User user, int yearsOld) {
        // Assume valid age is always provided.
        if (yearsOld < 0) {
            throw new IllegalArgumentException("Age must be non-negative");
        }
        user.setAge(yearsOld);
    }
}
`
</script>

<template>
    <Slide :title="'Developer Inputs: Example'">
        <p>Here we treat other developers' code as an input source with an assumption.</p>
        <CodeBlock :code="code" />
    </Slide>
</template>
