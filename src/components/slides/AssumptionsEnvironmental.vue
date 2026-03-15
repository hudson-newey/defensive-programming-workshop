<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
URL yahoo = new URL("http://www.yahoo.com/");
URLConnection yc = yahoo.openConnection();
BufferedReader in = new BufferedReader(
                        new InputStreamReader(
                        yc.getInputStream()));
String inputLine;

while ((inputLine = in.readLine()) != null) 
    System.out.println(inputLine);
in.close();
`;
</script>

<template>
    <Slide :title="'Assumption 2: Environmental'">
        <CodeBlock :code="code" />

        <section>
            <h3 class="is-size-6">Have you made any assumptions about where you app will be running?</h3>
            <ul>
                <li>Operating system</li>
                <li>Hardware architecture</li>
                <li>Internet access</li>
                <li>Fast internet</li>
                <li>Computer speed</li>
            </ul>

        </section>
    </Slide>
</template>
