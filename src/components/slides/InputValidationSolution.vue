<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

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
    </Slide>
</template>
