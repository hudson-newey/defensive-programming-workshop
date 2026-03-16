<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
class User {
    private int age;

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}

class UserManager {
    public void setUserAge(User user, int yearsOld) {
        // TODO: protect this internal boundary.
        user.setAge(yearsOld);
    }
}

public class Main {
    public static void main(String[] args) {
        Tests.run();
    }
}
`

const solution = `
class User {
    private int age;

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}

class UserManager {
    public void setUserAge(User user, int yearsOld) {
        if (user == null) {
            throw new IllegalArgumentException("User is required");
        }

        if (yearsOld < 0 || yearsOld > 150) {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }

        user.setAge(yearsOld);
    }
}

public class Main {
    public static void main(String[] args) {
        Tests.run();
    }
}
`

const testHarness = `
class Tests {
    public static void run() {
        try {
            acceptsValidAge();
            rejectsNegativeAge();
            rejectsAgeAboveRange();
            rejectsMissingUser();
            System.out.println("All developer input tests passed.");
        } catch (AssertionError error) {
            System.out.println(error.getMessage());
            System.exit(1);
        }
    }

    private static void acceptsValidAge() {
        User user = new User();
        new UserManager().setUserAge(user, 42);

        assertEquals(
            42,
            user.getAge(),
            "Valid input test failed: expected a valid age to be stored."
        );
    }

    private static void rejectsNegativeAge() {
        assertThrows(
            () -> new UserManager().setUserAge(new User(), -1),
            "Negative age test failed: invalid ages should fail loudly at this boundary."
        );
    }

    private static void rejectsAgeAboveRange() {
        assertThrows(
            () -> new UserManager().setUserAge(new User(), 151),
            "Upper-bound test failed: ages above 150 should be rejected."
        );
    }

    private static void rejectsMissingUser() {
        assertThrows(
            () -> new UserManager().setUserAge(null, 30),
            "Null-user test failed: collaborators should not be accepted silently."
        );
    }

    private static void assertEquals(int expected, int actual, String message) {
        if (expected != actual) {
            throw new AssertionError(
                message + "\\nExpected: " + expected + "\\nActual: " + actual
            );
        }
    }

    private static void assertThrows(ThrowingRunnable callback, String message) {
        try {
            callback.run();
        } catch (IllegalArgumentException expected) {
            return;
        } catch (Exception unexpected) {
            throw new AssertionError(
                message + "\\nExpected IllegalArgumentException but got: " + unexpected
            );
        }

        throw new AssertionError(message + "\\nExpected IllegalArgumentException but nothing was thrown.");
    }
}

interface ThrowingRunnable {
    void run() throws Exception;
}
`
</script>

<template>
    <Slide :title="'Practical: Developer Input'">
        <CodeEditor :code="code" :solution="solution" :testHarness="testHarness" />
    </Slide>
</template>
