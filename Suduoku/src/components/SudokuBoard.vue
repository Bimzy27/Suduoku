<template>
  <div class="board">
    <Nonet v-for="(index) in 9" :key="index" :n-index="index - 1"/>
  </div>
</template>

<script setup lang="ts">
import { getColumnIndexes, getNonetIndexes, getRowIndexes } from '@/utils/SudokuUtils';
import Nonet from './Nonet.vue'


console.log('Nonet Indexes!!');
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`nonet indexes: ${getNonetIndexes((j * 3) + (i * 27))} - i: ${i} - j: ${j}`);
    }
}
console.log('Row Indexes!!');
for (let i = 0; i < 9; i++) {
  console.log(`row indexes: ${getRowIndexes((i * 9))} - i: ${i}`);
}
console.log('Column Indexes!!');
for (let i = 0; i < 9; i++) {
  console.log(`column indexes: ${getColumnIndexes((i))} - i: ${i}`);
}

</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 5px;
  row-gap: 5px;
  margin: 5px;
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 2px;
}
</style>
