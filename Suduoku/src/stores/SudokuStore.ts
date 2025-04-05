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

  const solvedBoard = [
    3, 7, 8, /* | */ 9, 6, 2, /* | */ 5, 1, 4,
    4, 2, 9, /* | */ 1, 8, 5, /* | */ 3, 6, 7,
    5, 6, 1, /* | */ 3, 7, 4, /* | */ 8, 2, 9,
    /* ------------------------------------ */
    8, 3, 2, /* | */ 4, 9, 6, /* | */ 7, 5, 1,
    1, 9, 6, /* | */ 7, 5, 3, /* | */ 4, 8, 2,
    7, 4, 5, /* | */ 2, 1, 8, /* | */ 6, 9, 3,
    /* ------------------------------------ */
    9, 8, 4, /* | */ 5, 3, 1, /* | */ 2, 7, 6,
    2, 5, 7, /* | */ 6, 4, 9, /* | */ 1, 3, 8,
    6, 1, 3, /* | */ 8, 2, 7, /* | */ 9, 4, 5,
  ];

  const board = ref<number[]>([...initialBoard]);
  const mistakes = ref<number>(0);
  const timer = ref<number>(0);
  setInterval(() => {
    timer.value++;
  }, 1000);

  const selectedIndex = ref<number>(-1);
  const lastPlayedIndex = ref<number>(-1);

  function updateCell(value: number) {
    if (selectedIndex.value !== -1 && !isCorrectValue(selectedIndex.value)) {
      if (lastPlayedIndex.value > -1 && !isCorrectValue(lastPlayedIndex.value)) {
        board.value[lastPlayedIndex.value] = 0;
        lastPlayedIndex.value = -1;
      }

      if (value !== solvedBoard[selectedIndex.value])
      {
        mistakes.value++;
      }
      board.value[selectedIndex.value] = value;
      lastPlayedIndex.value = selectedIndex.value;
    }
  }

  function isValidValue(index: number) {
    return board.value[index] === 0 || isCorrectValue(index);
  }

  function isCorrectValue(index: number) {
    return board.value[index] === solvedBoard[index];
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
    timer.value = 0;
  }

  function numberCompleted(num: number): boolean {
    let numCounter = 0;
    for (let i = 0; i < board.value.length; i++) {
      if (board.value[i] === num && isCorrectValue(i)) {
        numCounter++;
      }
    }
    return numCounter === 9;
  }

  return {
    board,
    selectedIndex,
    mistakes,
    timer,
    updateCell,
    setSelectedIndex,
    getCellValue,
    resetBoard,
    isValidValue,
    numberCompleted,
  };
});
