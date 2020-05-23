<template>
    <div class="tab__header">
        <a href="#" class="tab__link rounded p-4 block bg-white hover:bg-gray-200 flex justify-between"
            @click.prevent="active = !active">
            <strong>{{title}}</strong>
            <span class="down-Arrow" v-show="!active">&#9660;</span>
            <span class="up-Arrow" v-show="active">&#9650;</span>
        </a>
    </div>
    <div class="tab__content p-2" v-show="active">
        <slot />
    </div>
</template>

<script>
import { ref } from 'vue'
    export default {
        props: ['title'],
        setup({title}) {
            const active = ref(false);
            return {
                title,
                active
            }
        }
    }
</script>

<style>

</style>