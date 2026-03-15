<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const cloneRepoCommand = `
$ git clone https://github.com/defensive-programming-workshop/practical-exercise.git
>
`;
</script>

<template>
    <Slide :title="'Practical Exercise'">
        <p>
            Now that we've covered the theory, let's put it into practice!
        </p>

        <p>
            We'll be working on a simple Java application that has some
            common issues related to defensive programming.
        </p>

        <p>
            Don't worry if you're not familiar with Java, the concepts we'll
            be covering are applicable to any programming language.
        </p>

        <p>
            Let's get started!
        </p>

        <CodeBlock :lang="'bash'" :code="cloneRepoCommand" />
    </Slide>
</template>
