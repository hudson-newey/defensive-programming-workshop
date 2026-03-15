<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
public class StudentVulnerable {
    private final List<Integer> grades;

    public StudentVulnerable(List<Integer> grades) {
        // VULNERABLE: Stores the reference to the external list
        this.grades = grades;
    }

    public List<Integer> getGrades() {
        // VULNERABLE: Returns the direct reference
        return grades;
    }
}
`
</script>

<template>
    <Slide :title="'Side Effects'">
        <CodeBlock :code="code" />
    </Slide>
</template>
