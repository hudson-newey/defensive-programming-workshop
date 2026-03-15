<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'
import Step from '../Step.vue'

const solution = `
Scanner reader = new Scanner(System.in);

System.out.println("Enter a number: ");
int myNumber = 0;
if (reader.hasNextInt()) {
    myNumber = reader.nextInt();
    System.out.println("You input: " + myNumber);
} else {
    System.out.println("That's not a valid number!");
}

reader.close();
`
</script>

<template>
    <Slide :title="'Solution: Input Validation'">
        <CodeBlock :code="solution" />

        <Step :step="1">
            <p class="has-text-warning">but...</p>
        </Step>

        <Step :step="2">
            <p>We've made more assumptions...</p>
        </Step>
    </Slide>
</template>
