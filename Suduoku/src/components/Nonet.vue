<template>
    <div class="nonet">
        <Cell v-for="(cell, index) in 9" :key="index" :c-index="nIndex * 9 + index"/>
    </div>
</template>

<script setup lang="ts">
import Cell from './Cell.vue'

defineProps(['nIndex'])
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