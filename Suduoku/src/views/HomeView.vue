<template>
  <div>
    <h1>Sudoku</h1>
    <div style="display: flex;">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <SudokuBoard></SudokuBoard>
        <RemainingNumbersBar></RemainingNumbersBar>
      </div>
      <GameControls></GameControls>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameControls from '@/components/GameControls.vue';
import RemainingNumbersBar from '@/components/RemainingNumbersBar.vue';
import SudokuBoard from '@/components/SudokuBoard.vue'
</script>
