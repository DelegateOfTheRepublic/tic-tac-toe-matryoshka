<script setup lang="ts">
import MLocalMap from '@/components/MLocalMap.vue';
import { ref } from 'vue';
import { CellPlacement } from '@/types';

const selectedCellId = ref<keyof CellPlacement>();
const cellSize = 200;
const gap = 8;
const size = `${cellSize * 3 + gap * 2}px`;
</script>

<template>
  <div class="container">
    <m-local-map
      v-for="placement in Object.keys(CellPlacement)"
      :key="placement"
      :cell-size="cellSize"
      :placement="CellPlacement[placement]"
      :is-selected="selectedCellId === placement"
      @click="selectedCellId = placement"
      @esc="() => (selectedCellId = undefined)"
    />
  </div>
</template>

<style scoped>
.container {
  width: v-bind(size);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: v-bind(gap+'px');
}
</style>
