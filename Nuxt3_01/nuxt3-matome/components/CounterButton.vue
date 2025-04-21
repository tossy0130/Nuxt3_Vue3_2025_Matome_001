<template>
     <button @click="increment" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        カウント プラス １
    </button>
</template>

<script setup lang="ts">

const counter = useState('counter', () => 0)
const increment = () => {
    counter.value +=1
}

</script>