<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const code = `
public final class Student {
    private final List<Integer> grades;

    public Student(List<Integer> grades) {
        this.grades = List.copyOf(grades);
    }

    public List<Integer> getGrades() {
        return List.copyOf(grades);
    }
}
`
</script>

<template>
    <Slide :title="'Side Effects (Fix 3b): Immutable Classes'">
        <p>Make your internal state impossible to mutate externally.</p>
        <CodeBlock :code="code" />
    </Slide>
</template>
