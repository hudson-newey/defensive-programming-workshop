<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
Scanner reader = new Scanner(System.in);
int myNumber = reader.nextInt();

System.out.println("Your number is: " + myNumber)
`;

const codeLink = "https://tio.run/##dc2xTgMxDAbgOfcUVqerEBkQExUjAwMsNyHUwb2zSq6JEyVOaYX67IfLndg6Wfn9@8uIR7yPiXgcDtPkQopZYNTQVnHedj0yU940Te@xFHhDx/DTmFR33vVQBEXHMboBgq7aTrLj/ecWMO/L@to0CwGZcNDxDEzfsIRtdy5CwTpe6xfanZ@xik0Kied29cKiZwhcw47yE6y0aowuIZzf/zI1Z9wyneSVpb2tfcQKjlMVheDun5gPFqX3sdDVMJfmMk2PD1/kffwF"

const errorMessage = `
Exception in thread "main" java.util.InputMismatchException
	at java.util.Scanner.throwFor(Scanner.java:864)
	at java.util.Scanner.next(Scanner.java:1485)
	at java.util.Scanner.nextInt(Scanner.java:2117)
	at java.util.Scanner.nextInt(Scanner.java:2076)
	at Main.main(Main.java:8)
`;
</script>

<template>
    <Slide :title="'Assumption 1: Validation'">
        <CodeBlock :code="code" :link="codeLink" />

        <p class="mt-6">We have assumed that the user will input a valid integer.</p>

        <CodeBlock :code="errorMessage" />

        <p>
            Java will <b>correctly</b> throw an exception when the user inputs
            invalid data.
        </p>

        <p>
            Do you want your program to crash when the user inputs invalid data?
            Sometimes you do.
        </p>
    </Slide>
</template>
