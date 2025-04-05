<template>
  <div class="remainingNumbersBar">
    <RemainingNumber v-for="(index) in 9" :key="index" :index="index"></RemainingNumber>
  </div>
</template>

<script setup lang="ts">
import RemainingNumber from './RemainingNumber.vue';

</script>

<style scoped>
.remainingNumbersBar {
  display: flex;
  flex-direction: row;
  gap: 6px;
  height: fit-content;
  width: fit-content;
}
</style>
