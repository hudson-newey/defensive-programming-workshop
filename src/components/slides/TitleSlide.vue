<script setup lang="ts">
import Slide from '../Slide.vue'
import CodeBlock from '../CodeBlock.vue'
import Image from '../Image.vue'

const cloneRepoCommand = `
$ git clone https://github.com/hudson-newey/defensive-exercises.git
>
`
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

        <div class="columns">
            <Image class="column" src="/bubble-wrapped.webp" alt="Bubble wrap illustrating protective defensive programming" :width="400" :height="400" />
            <div class="column">
                <a class="is-size-4 has-text-white" href="https://defensive-coding-workshop.netlify.app" target="_blank" rel="noopener noreferrer">
                    defensive-coding-workshop.netlify.app
                </a>
            </div>
        </div>
    </Slide>
</template>
