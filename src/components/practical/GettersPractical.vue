<script setup lang="ts">
import CodeEditor from '../CodeEditor.vue'
import Slide from '../Slide.vue'

const code = `
class Main {
    public static void main(String[] args) {
        Tests.run();
    }
}

class ReminderService {
    public String buildReminderMessage(UserProfile profile) {
        // TODO: a getter may be impure and return a different value every time.
        if (profile.getEmail() != null && profile.getEmail().contains("@")) {
            return "Sending reminder to " + profile.getEmail();
        }

        return "Missing email address";
    }
}

class UserProfile {
    private final String email;
    private int getterCalls = 0;

    public UserProfile(String email) {
        this.email = email;
    }

    public String getEmail() {
        getterCalls++;

        if (getterCalls == 1) {
            return email;
        }

        return null;
    }
}
`

const solution = `
class Main {
    public static void main(String[] args) {
        Tests.run();
    }
}

class ReminderService {
    public String buildReminderMessage(UserProfile profile) {
        String email = profile.getEmail();

        if (email != null && email.contains("@")) {
            return "Sending reminder to " + email;
        }

        return "Missing email address";
    }
}

class UserProfile {
    private final String email;
    private int getterCalls = 0;

    public UserProfile(String email) {
        this.email = email;
    }

    public String getEmail() {
        getterCalls++;

        if (getterCalls == 1) {
            return email;
        }

        return null;
    }
}
`

const testHarness = `
class Tests {
    public static void run() {
        try {
            usesSingleGetterSnapshot();
            handlesMissingEmail();
            doesNotCallGetterMoreThanOnce();
            System.out.println("All untrusted getter tests passed.");
        } catch (AssertionError error) {
            System.out.println(error.getMessage());
            System.exit(1);
        }
    }

    private static void usesSingleGetterSnapshot() {
        ReminderService service = new ReminderService();
        String message = service.buildReminderMessage(new UserProfile("sam@example.com"));

        assertEquals(
            "Sending reminder to sam@example.com",
            message,
            "Snapshot test failed: the same getter result should be reused throughout the method."
        );
    }

    private static void handlesMissingEmail() {
        ReminderService service = new ReminderService();
        String message = service.buildReminderMessage(new MissingEmailProfile());

        assertEquals(
            "Missing email address",
            message,
            "Null test failed: missing data should be handled without repeated getter calls."
        );
    }

    private static void doesNotCallGetterMoreThanOnce() {
        ReminderService service = new ReminderService();
        CountingProfile profile = new CountingProfile("alex@example.com");

        String message = service.buildReminderMessage(profile);
        assertEquals(
            "Sending reminder to alex@example.com",
            message,
            "Call count test failed: the reminder should use the first observed getter value."
        );
        assertEquals(
            Integer.valueOf(1),
            Integer.valueOf(profile.getObservedCalls()),
            "Call count test failed: getEmail() should only be invoked once."
        );
    }

    private static void assertEquals(Object expected, Object actual, String message) {
        if (!expected.equals(actual)) {
            throw new AssertionError(message + "\\nExpected: " + expected + "\\nActual: " + actual);
        }
    }
}

class MissingEmailProfile extends UserProfile {
    public MissingEmailProfile() {
        super(null);
    }

    @Override
    public String getEmail() {
        return null;
    }
}

class CountingProfile extends UserProfile {
    private final String stableEmail;
    private int observedCalls = 0;

    public CountingProfile(String stableEmail) {
        super(stableEmail);
        this.stableEmail = stableEmail;
    }

    @Override
    public String getEmail() {
        observedCalls++;

        if (observedCalls == 1) {
            return stableEmail;
        }

        return stableEmail + ".changed";
    }

    public int getObservedCalls() {
        return observedCalls;
    }
}
`
</script>

<template>
    <Slide :title="'Practical: Untrusted Getters'">
        <CodeEditor :code="code" :solution="solution" :testHarness="testHarness" />
    </Slide>
</template>
