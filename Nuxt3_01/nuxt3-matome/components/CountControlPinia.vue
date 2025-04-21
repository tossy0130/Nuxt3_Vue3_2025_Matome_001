<template>
<button @click="counter.increment" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
    カウント プラス １
</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/store/counter';

const counter = useCounterStore()
</script>