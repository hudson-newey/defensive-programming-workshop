<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'
import Step from '../Step.vue'

// Example of code that is vulnerable to SQL injection.
const vulnerableSqlCode = `
// Assuming that these TUI method helpers do not perform any input validation or
// sanitization.
String username = TUI.getInput();
String password = TUI.getInput();

String query = new StringBuilder()
    .append("SELECT * FROM users WHERE username = '")
    .append(username)
    .append("' AND password = '")
    .append(password)
    .append("'")
    .toString();

Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery(query);
`
</script>

<template>
    <Slide :title="'Input Validation: SQL Injection'">
        <CodeBlock :code="vulnerableSqlCode" />

        <Step :step="1">
            <p class="has-text-white">Do you see the issue?</p>
        </Step>
    </Slide>
</template>
