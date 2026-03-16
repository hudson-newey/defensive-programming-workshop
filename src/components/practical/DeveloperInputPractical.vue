<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
public class Main {
    public static void main(String[] args) {
        System.out.println("Set age for user (0-150):");
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        int age = scanner.nextInt();
        scanner.close();

        // TODO: ensure this input is within the expected range.
        if (age < 0 || age > 150) {
            System.out.println("Invalid age: " + age);
        } else {
            System.out.println("Accept age: " + age);
        }
    }
}
`

const solution = `
public class Main {
    public static void main(String[] args) {
        System.out.println("Set age for user (0-150):");
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        int age = scanner.nextInt();
        scanner.close();

        if (age < 0) {
            System.out.println("Age cannot be negative. Use 0.");
            age = 0;
        } else if (age > 150) {
            System.out.println("Age too large. Clamping to 150.");
            age = 150;
        } else {
            System.out.println("Age accepted: " + age);
        }

        System.out.println("Final age = " + age);
    }
}
`
</script>

<template>
    <Slide :title="'Developer Input: Practical'">
        <CodeEditor :code="code" :solution="solution" />
    </Slide>
</template>
