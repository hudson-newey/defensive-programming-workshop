<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
public class Main {
    public static void main(String[] args) {
        User user = new User();
        System.out.println(user.getName());
    }
}

public class User {
    private String name;
    private int age;

    public String getName() {
        return name;
    }
}
`
</script>

<template>
    <Slide :title="'Practical: Untrusted Getters'">
        <CodeEditor :code="code" />
    </Slide>
</template>
