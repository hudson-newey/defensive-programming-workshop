<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.println("Enter mode (PROD, STAGE, DEV):");
        String mode = reader.nextLine();

        // TODO: handle invalid modes gracefully
        if (mode.equals("PROD")) {
            System.out.println("Production path");
        } else if (mode.equals("STAGE")) {
            System.out.println("Staging path");
        } else if (mode.equals("DEV")) {
            System.out.println("Developer path");
        } else {
            System.out.println("Unknown mode: " + mode);
        }

        reader.close();
    }
}
`

const solution = `
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.println("Enter mode (PROD, STAGE, DEV):");
        String mode = reader.nextLine();

        if (mode == null) {
            System.out.println("No mode set. Defaulting to DEV.");
            mode = "DEV";
        }

        mode = mode.strip().toUpperCase();
        if (mode.equals("PROD")) {
            System.out.println("Production path");
        } else if (mode.equals("STAGE")) {
            System.out.println("Staging path");
        } else if (mode.equals("DEV")) {
            System.out.println("Developer path");
        } else {
            System.out.println("Unknown mode " + mode + ". Falling back to DEV.");
            System.out.println("Developer path");
        }

        reader.close();
    }
}
`
</script>

<template>
    <Slide :title="'Practical: Graceful Degradation'">
        <CodeEditor :code="code" :solution="solution" />
    </Slide>
</template>
