<template>
  <div class="board">
    <Nonet v-for="(cell, index) in 9" :key="index" :n-index="index"/>
  </div>
</template>

<script setup lang="ts">
import Nonet from './Nonet.vue'
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
