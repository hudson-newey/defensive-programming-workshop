<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
public class StudentDefensive {
    private final List<Integer> grades;

    public StudentDefensive(List<Integer> grades) {
        // DEFENSIVE COPY: Create a new list so the caller can't modify internal state later
        this.grades = new ArrayList<>(grades);
    }

    public List<Integer> getGrades() {
        // Return an unmodifiable view (Java 10+)
        return List.copyOf(grades); 
    }
}
`
</script>

<template>
    <Slide :title="'Side Effects (Fix 3a): Defensive Copying'">
        <CodeBlock :code="code" />
    </Slide>
</template>
