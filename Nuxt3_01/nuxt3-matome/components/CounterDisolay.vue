<template>
    <p class="mt-4 text-lg">
        現在のカウント：{{ count }}
    </p>
</template>

<script setup lang="ts">
const count = useState('counter', () => 0)
</script>