import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";

// === Nuxt3 で、 pinia の準備
export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    nuxtApp.vueApp.use(pinia)
})

