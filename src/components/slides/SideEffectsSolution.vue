<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const solution = `
public class Student {
    private final List<Integer> grades;

    public Student(List<Integer> grades) {
        this.grades = new ArrayList<>(grades);
    }

    public List<Integer> getGrades() {
        return List.copyOf(grades);
    }
}
`
</script>

<template>
    <Slide :title="'Solution: Side Effects and Defensive Copying'">
        <CodeBlock :code="solution" />
        <ul>
            <li>Copy mutable inputs for internal ownership.</li>
            <li>Return safe copies or read-only views.</li>
            <li>Prefer immutability when you can.</li>
        </ul>
    </Slide>
</template>