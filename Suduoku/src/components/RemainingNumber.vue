<template>
  <label class="numberLabel" :class="{ hidden: isHidden }">
    {{ index }}
  </label>
</template>

<script setup lang="ts">
import { useSudokuStore } from '@/stores/SudokuStore';
import { computed } from 'vue';

const props = defineProps(['index']);
const isHidden = computed(() => {
  return useSudokuStore().numberCompleted(props.index);
});
</script>

<style scoped>
.numberLabel {
  width: 50px;
  height: 50px;
  font-size: 32px;
  color: #325aaf;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #eaeef4;
}
.numberLabel.hidden {
  background-color: #ffffff;
  color: #ffffff;
}
</style>
