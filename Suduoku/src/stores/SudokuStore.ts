import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSudokuStore = defineStore('sudoku', () => {
  const initialBoard = [
    0, 0, 0, /* | */ 9, 6, 0, /* | */ 5, 0, 4,
    0, 2, 0, /* | */ 1, 0, 0, /* | */ 0, 6, 0,
    5, 0, 0, /* | */ 0, 0, 0, /* | */ 8, 0, 9,
    /* ------------------------------------ */
    0, 3, 2, /* | */ 0, 0, 0, /* | */ 0, 5, 1,
    1, 9, 6, /* | */ 7, 5, 3, /* | */ 0, 0, 2,
    7, 0, 5, /* | */ 0, 0, 0, /* | */ 0, 9, 0,
    /* ------------------------------------ */
    9, 8, 4, /* | */ 5, 0, 1, /* | */ 0, 0, 6,
    2, 0, 0, /* | */ 0, 0, 9, /* | */ 1, 0, 8,
    0, 0, 0, /* | */ 8, 2, 7, /* | */ 9, 0, 0,
  ];

  const board = ref<number[]>([...initialBoard]);

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
    board.value = [...initialBoard];
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
