<template>
  <div>
    <h1>Sudoku</h1>
    <div style="display: flex;">
      <SudokuBoard></SudokuBoard>
      <NumberPad></NumberPad>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberPad from '../components/NumberPad.vue';
import SudokuBoard from '../components/SudokuBoard.vue'
</script>
