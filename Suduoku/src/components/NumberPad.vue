<template>
  <div class="numberPad">
    <button class="btnNumber" v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="number" @click="selectNumber(number)">
      {{ number }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSudokuStore } from '@/stores/SudokuStore';
const sudokuStore = useSudokuStore();
function selectNumber(number: number) {
  sudokuStore.updateCell(number);
}
</script>

<style scoped>
.numberPad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  height: fit-content;
}
.btnNumber {
  width: 80px;
  height: 80px;
  font-size: 24px;
  background-color: #eaeef4;
  color: #325aaf;
  border-radius: 8px;
}
.btnNumber:hover {
  color: #1c2e55;
}
.btnNumber:active {
  color: #091d47;
}
</style>
