<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        /*
         * A consumer should be able to inspect the steps without being able to
         * accidentally break the DeploymentPlan.
         *
         * Hidden tests will check that both:
         * 1. the constructor protects itself from future caller mutations
         * 2. the getter does not leak mutable internal state
         */
        Tests.run();
    }
}

class DeploymentPlan {
    private final List<String> steps;

    public DeploymentPlan(List<String> steps) {
        // TODO: take ownership of the incoming list safely.
        this.steps = steps;
    }

    public List<String> getSteps() {
        // TODO: do not let callers mutate internal state through this getter.
        return steps;
    }

    public String nextStep() {
        if (steps.isEmpty()) {
            throw new IllegalStateException("Deployment plan has no remaining steps");
        }

        return steps.get(0);
    }

    public int totalSteps() {
        return steps.size();
    }
}
`

const solution = `
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        /*
         * A consumer should be able to inspect the steps without being able to
         * accidentally break the DeploymentPlan.
         *
         * Hidden tests will check that both:
         * 1. the constructor protects itself from future caller mutations
         * 2. the getter does not leak mutable internal state
         */
        Tests.run();
    }
}

class DeploymentPlan {
    private final List<String> steps;

    public DeploymentPlan(List<String> steps) {
        this.steps = new ArrayList<>(steps);
    }

    public List<String> getSteps() {
        return Collections.unmodifiableList(new ArrayList<>(steps));
    }

    public String nextStep() {
        if (steps.isEmpty()) {
            throw new IllegalStateException("Deployment plan has no remaining steps");
        }

        return steps.get(0);
    }

    public int totalSteps() {
        return steps.size();
    }
}
`

const testHarness = `
class Tests {
    public static void run() {
        try {
            constructorDoesNotShareCallerList();
            getterDoesNotLeakInternalState();
            returnedListMutationDoesNotBreakProgram();
            System.out.println("All defensive copying tests passed.");
        } catch (AssertionError error) {
            System.out.println(error.getMessage());
            System.exit(1);
        }
    }

    private static void constructorDoesNotShareCallerList() {
        List<String> callerOwnedSteps = new ArrayList<>(Arrays.asList("Validate config", "Deploy app"));
        DeploymentPlan plan = new DeploymentPlan(callerOwnedSteps);

        callerOwnedSteps.clear();
        callerOwnedSteps.add("Accidentally replaced everything");

        assertEquals(
            "Validate config",
            plan.nextStep(),
            "Constructor test failed: mutating the caller's list should not rewrite DeploymentPlan state."
        );
        assertEquals(
            2,
            plan.totalSteps(),
            "Constructor test failed: DeploymentPlan should keep its original two steps."
        );
    }

    private static void getterDoesNotLeakInternalState() {
        DeploymentPlan plan = new DeploymentPlan(new ArrayList<>(Arrays.asList("Warm up service", "Switch traffic")));
        List<String> leakedSteps = plan.getSteps();

        try {
            leakedSteps.clear();
        } catch (UnsupportedOperationException ignored) {
            // Also acceptable: the getter returned a read-only list.
        }

        assertEquals(
            "Warm up service",
            plan.nextStep(),
            "Getter test failed: clearing the returned list should not empty the internal plan."
        );
        assertEquals(
            2,
            plan.totalSteps(),
            "Getter test failed: internal step count changed after consumer mutation."
        );
    }

    private static void returnedListMutationDoesNotBreakProgram() {
        DeploymentPlan plan = new DeploymentPlan(new ArrayList<>(Arrays.asList("Backup database", "Restart workers")));
        List<String> consumerView = plan.getSteps();

        try {
            consumerView.remove(0);
        } catch (UnsupportedOperationException ignored) {
            // Safe and expected if an immutable list is returned.
        }

        assertEquals(
            "Backup database",
            plan.nextStep(),
            "Program test failed: a consumer mutated the returned list and broke the next step lookup."
        );
        assertEquals(
            2,
            plan.getSteps().size(),
            "Program test failed: the internal list should still contain both original steps."
        );
    }

    private static void assertEquals(Object expected, Object actual, String message) {
        if (!expected.equals(actual)) {
            throw new AssertionError(
                message + "\\nExpected: " + expected + "\\nActual: " + actual
            );
        }
    }
}
`
</script>

<template>
    <Slide :title="'Practical: Mutating Internal State'">
        <CodeEditor :code="code" :solution="solution" :testHarness="testHarness" />
    </Slide>
</template>
