<template>

    <div class="p-4">
        <h1 class="text-xl font-bold">Nuxt3 useState 使用</h1>

        <p>コンポーネントを下記にて、呼び出し</p>
        <CounterDisolay />
        <CounterButton />

    </div>

</template>

<script setup lang="ts">

import CounterDisolay from '~/components/CounterDisolay.vue';
import CounterButton from '~/components/CounterButton.vue';

</script>