<template>
    <div class="cell" @click="selectCell" :class="{ selected: isSelected, highlighted: isHighlighted }">
        <label>{{ cellValue }}</label>
    </div>
</template>

<script setup lang="ts">
import { useSudokuStore } from '@/stores/sudokuStore';
import { computed } from 'vue';

const props = defineProps(['cIndex']);
const sudokuStore = useSudokuStore();

const isSelected = computed(() => sudokuStore.selectedIndex === props.cIndex);
const isHighlighted = computed(() => sudokuStore.getCellValue(sudokuStore.selectedIndex) === sudokuStore.getCellValue(props.cIndex) && sudokuStore.selectedIndex !== props.cIndex && sudokuStore.getCellValue(props.cIndex) > 0);
const cellValue = computed(() => {
    const val = sudokuStore.getCellValue(props.cIndex);
    return val > 0 ? val : '';
});

function selectCell() {
    console.log(`Cell clicked with index: ${ props.cIndex }`);
    sudokuStore.setSelectedIndex(props.cIndex);
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
    background-color: white;
}

.cell.selected {
    background-color: lightblue;
}

.cell.highlighted {
    background-color: lightyellow;
}
</style>