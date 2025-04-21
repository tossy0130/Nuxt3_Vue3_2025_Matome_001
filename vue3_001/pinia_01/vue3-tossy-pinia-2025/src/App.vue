<template>

<div>
  <div>
    <h1>piniaテスト</h1>

    <div>
      <p>
        <button @click="counterStore.count++">プラス1</button>
      </p>
      <p>{{ counterStore.count }}</p>
    </div>

    <div>
      <p>
        <button @click="useComp.YonUp">プラス4</button>
      </p>

      <p>{{ useComp.user }}</p>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// pinia 呼び出し
import { useCounterStore } from './stores/counter'
import { useUserStore } from './stores/user'


const counterStore = useCounterStore()
const useComp = useUserStore()

const TwoUp = () => {
  useComp.user * 2
}

</script>


