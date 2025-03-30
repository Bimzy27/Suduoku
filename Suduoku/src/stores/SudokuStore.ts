import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSudokuStore = defineStore('sudoku', () => {
  const board = ref<number[]>(
    Array(81).fill(0)
  );

  const selectedIndex = ref<number>(-1);

  function updateCell(value: number) {
    if (selectedIndex.value !== -1) {
      board.value[selectedIndex.value] = value;
    }
  }

  function setSelectedIndex(index: number) {
    if (index >= 0 && index < 81) {
      selectedIndex.value = index;
    } else {
      selectedIndex.value = -1;
    }
  }

  function getCellValue(index: number): number {
    if (index < 0 || index >= 81) {
      return 0;
    }
    return board.value[index];
  }

  function resetBoard() {
    board.value = Array(81).fill(0);
    selectedIndex.value = -1;
  }

  return {
    board,
    selectedIndex,
    updateCell,
    setSelectedIndex,
    getCellValue,
    resetBoard,
  };
});
