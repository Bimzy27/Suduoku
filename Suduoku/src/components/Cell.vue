<template>
    <div class="cell" @click="selectCell" :class="{ selected: isSelected, highlighted: isHighlighted, shaded: isShaded }">
        <label class="labelValue" :class="{ invalid: !isValid }">{{ cellValue }}</label>
    </div>
</template>

<script setup lang="ts">
import { useSudokuStore } from '@/stores/SudokuStore';
import { getColumnIndexes, getNonetIndexes, getRowIndexes } from '@/utils/SudokuUtils';
import { computed } from 'vue';

const props = defineProps(['index']);
const sudokuStore = useSudokuStore();

const isValid = computed(() => sudokuStore.isValidValue(props.index));
const isSelected = computed(() => sudokuStore.selectedIndex === props.index);
const isHighlighted = computed(() => sudokuStore.getCellValue(sudokuStore.selectedIndex) === sudokuStore.getCellValue(props.index) && sudokuStore.selectedIndex !== props.index && sudokuStore.getCellValue(props.index) > 0);
const isShaded = computed(() => !isHighlighted.value && !isSelected.value && (getNonetIndexes(sudokuStore.selectedIndex).includes(props.index) || getRowIndexes(sudokuStore.selectedIndex).includes(props.index) || getColumnIndexes(sudokuStore.selectedIndex).includes(props.index)) && sudokuStore.selectedIndex !== -1 );
const cellValue = computed(() => {
    const val = sudokuStore.getCellValue(props.index);
    return val > 0 ? val : '';
});

function selectCell() {
    sudokuStore.setSelectedIndex(props.index);
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
    background-color: #bbdefb;
}

.cell.highlighted {
    background-color: #c3d7ea;
}

.cell.shaded {
    background-color: #e2ebf3;
}

.labelValue.invalid {
    color: red;
}
</style>