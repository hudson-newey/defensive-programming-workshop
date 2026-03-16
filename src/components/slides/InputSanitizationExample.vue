<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'
import Step from '../Step.vue'

// Example of code that is vulnerable to SQL injection.
const vulnerableSqlCode = `
System.out.print("Username:");
String username = TUI.getInput();

System.out.print("Password:");
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

const exampleExploitInput = `
Username: ' OR '1'='1
Password: ' OR '1'='1
`;
</script>

<template>
    <Slide :title="'Input Validation / sanitization: SQL Injection'">
        <p class="has-text-weight-semibold">Can you spot the issue?</p>

        <CodeBlock :code="vulnerableSqlCode" />

        <Step :step="1">
            <CodeBlock :code="exampleExploitInput" />
        </Step>
    </Slide>
</template>
