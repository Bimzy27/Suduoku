<template>
  <div class="gameControls">
    <div class="gameInfo">
      <label>Mistakes {{mistakes}}/3</label>
      <label>Time {{time}}</label>
    </div>
    <NumberPad />
    <button class="btnNewGame" @click="newGame()">New Game</button>
  </div>
</template>

<script setup lang="ts">
import { useSudokuStore } from '@/stores/SudokuStore';
import NumberPad from './NumberPad.vue';
import { computed } from 'vue';

const sudokuStore = useSudokuStore();

const mistakes = computed(() => sudokuStore.mistakes);
const time = computed(() => {
  const minutes = Math.floor(sudokuStore.timer / 60).toString().padStart(2, '0');
  const seconds = (sudokuStore.timer % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
});


function newGame() {
  sudokuStore.resetBoard();
}
</script>

<style scoped>
.gameControls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: fit-content;
}

.gameInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: fit-content;
}

.btnNewGame {
  height: 50px;
  width: 100%;
  font-size: 24px;
  background-color: #5a7bc0;
  color: white;
  border-radius: 8px;
}
</style>
