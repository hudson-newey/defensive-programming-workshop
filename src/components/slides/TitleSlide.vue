<script setup lang="ts">
import Slide from '../Slide.vue';

import CodeBlock from '../CodeBlock.vue';

const cloneRepoCommand = `
$ git clone https://github.com/defensive-programming-workshop/practical-exercise.git
>
`;
</script>

<template>
    <Slide :title="'Defensive Programming'">
        <section>
            <p>
                Throughout this workshop, I'll have practical exercises for you to
                try.
            </p>

            <p>
                You can find the code for these exercises in this GitHub repository
                if you want to follow along on your own machine, or try the
                exercises after the workshop.
            </p>

            <CodeBlock :lang="'bash'" :code="cloneRepoCommand" />
        </section>
    </Slide>
</template>
