<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
import java.util.Scanner;

class Main {
	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);

		System.out.println("Enter a number: ");
		int myNumber = reader.nextInt();

		System.out.println("You input: " + myNumber);

		reader.close();
	}
}
`
</script>

<template>
    <Slide :title="'Practical: Input Validation'">
        <CodeEditor :code="code" :inputs="['not a number', '42']" />
    </Slide>
</template>
