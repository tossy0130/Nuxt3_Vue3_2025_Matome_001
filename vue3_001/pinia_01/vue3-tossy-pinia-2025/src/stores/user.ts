import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref(0)
    const TestNum = ref(1);
    const UpNumFunc = computed(() => TestNum.value * 4);

    const YonUp = () => {
        user.value = user.value + 4
    }


    return {
        user,
        TestNum,
        UpNumFunc,
        YonUp,
    }
})