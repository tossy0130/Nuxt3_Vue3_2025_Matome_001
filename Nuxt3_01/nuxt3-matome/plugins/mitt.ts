import mitt from 'mitt';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    const mitter = mitt();

    // ****** Nuxt2 の $emitter 書き換え用 ******
    // プロジェクト全体で使用
    return {
        provide: {
            mitter,
        },
    };
})