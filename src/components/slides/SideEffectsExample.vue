<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';
import Step from '../Step.vue';

const code = `
@project = Project.find(params[:project_id])
@site.projects << @project if defined?(@site)
    && defined?(@project)
    && !@site.projects.include?(@project)
`;
</script>

<template>
    <Slide :title="'Side Effects (Real Example): Bypassing Authentication'">
        <CodeBlock :code="code" :lang="'ruby'" />

        <Step :step="1">
            <section>
                <h2>Identifying the Side Effect</h2>
                <p>Can you easily identify the issue?</p>
            </section>
        </Step>
    </Slide>
</template>
