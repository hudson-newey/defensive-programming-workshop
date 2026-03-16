<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const solution = `
class ReminderService {
    public String buildReminderMessage(UserProfile profile) {
        String email = profile.getEmail();

        if (email != null && email.contains("@")) {
            return "Sending reminder to " + email;
        }

        return "Missing email address";
    }
}
`
</script>

<template>
    <Slide :title="'Solution: Untrusted Getters'">
        <CodeBlock :code="solution" />
        <ul>
            <li>Getter names do not guarantee purity or stability.</li>
            <li>Each getter invocation may observe new state or trigger side effects.</li>
            <li>Read once into a local variable, then validate and use that snapshot.</li>
            <li>This avoids time-of-check/time-of-use bugs and makes debugging easier.</li>
        </ul>
    </Slide>
</template>
