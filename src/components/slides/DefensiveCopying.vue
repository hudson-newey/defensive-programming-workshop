<script setup lang="ts">
import CodeBlock from '../CodeBlock.vue';
import Slide from '../Slide.vue';

const code = `
// Producer accidentally mutates the shared list
public class OrderService {
    public void addItem(List<String> orderItems, String item) {
        // Mutates caller-owned list
        orderItems.add(item);
    }
}

public class Checkout {
    public static void main(String[] args) {
        List<String> cart = new ArrayList<>(List.of("apple", "banana"));
        OrderService service = new OrderService();

        // Consumer expects cart not to change except through their own logic
        service.addItem(cart, "orange");

        // Unexpected mutation: cart now has orange
        System.out.println(cart); // [apple, banana, orange]
    }
}
`;
</script>

<template>
    <Slide :title="'Fix 3a: Defensive Copying'">
        <CodeBlock :code="code" />
    </Slide>
</template>
