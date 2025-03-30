<template>
    <div class="cell" @click="selectCell">
        <label>{{ cIndex }}</label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['cIndex'])

function selectCell() {
    console.log(`Cell clicked with index: ${ props.cIndex }`);
}
</script>

<style scoped>
.cell {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>