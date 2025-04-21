<template>

    <div class="p-4">
        <h1 class="text-xl font-bold">Nuxt3 Pinia 使用</h1>

        <p>コンポーネントを下記にて、呼び出し</p>
        <CountViewerPinia />
        <CountControlPinia />

    </div>

</template>

<script setup lang="ts">

import CountViewerPinia from '~/components/CountViewerPinia.vue'
import CountControlPinia from '~/components/CountControlPinia.vue'

</script>