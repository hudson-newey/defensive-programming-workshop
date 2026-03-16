<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue'
import Slide from '../Slide.vue'

const solution = `
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class DeploymentPlan {
    private final List<String> steps;

    public DeploymentPlan(List<String> steps) {
        this.steps = new ArrayList<>(steps);
    }

    public List<String> getSteps() {
        return Collections.unmodifiableList(new ArrayList<>(steps));
    }
}
`
</script>

<template>
    <Slide :title="'Solution: Mutating Internal State'">
        <CodeBlock :code="solution" />
        <ul>
            <li>Copy mutable constructor input so callers cannot keep editing your internal state later.</li>
            <li>Do not return the real internal list from a getter.</li>
            <li>Return a defensive copy, a read-only view, or both when the collection is mutable.</li>
            <li>This preserves class invariants even when consumers behave carelessly.</li>
        </ul>
    </Slide>
</template>
