<template>
    <div class="nonet">
        <Cell v-for="(index) in 9" :key="index" :c-index="cellIndex(index - 1)"/>
    </div>
</template>

<script setup lang="ts">
import Cell from './Cell.vue'

const props = defineProps(['nIndex'])

function cellIndex(cIndex: number) {
    const nDiv = Math.floor(props.nIndex / 3);
    const nMod = Math.floor(props.nIndex % 3);
    const cDiv = Math.floor(cIndex / 3);
    const cMod = Math.floor(cIndex % 3);
    return (nDiv * 27) + (nMod * 3) + (9 * cDiv) + cMod;
}

</script>

<style scoped>
.nonet {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 5px;
    row-gap: 5px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    padding: 2px;
}
</style>