<template>
     <p class="mt-4 text-lg">
        現在のカウント：{{ count.count }}
    </p>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/store/counter';

// オブジェクトで取得
// "$id": "counter", "count": 0, "_isOptionsAPI": true
const count = useCounterStore()
</script>