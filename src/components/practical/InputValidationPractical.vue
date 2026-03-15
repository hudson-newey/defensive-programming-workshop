<script setup lang="ts">
import { generateTestCaseComment } from '../../utils/testCaseComment'
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const testInputs = [
	'\'not a number\'',
	'42',
	'3.14',
	'-1',
	'0',
	'2147483647',
	'2147483648',
	'-2147483648',
	'-2147483649',
]

const code = `
import java.util.Scanner;

${generateTestCaseComment(testInputs)}

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

const solution = `
import java.util.Scanner;

${generateTestCaseComment(testInputs)}

class Main {
	public static void main(String[] args) {
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
	}
}
`
</script>

<template>
    <Slide :title="'Input Validation: Practical'">
        <CodeEditor
			:code="code"
			:inputs="testInputs"
			:solution="solution"
		/>
    </Slide>
</template>
