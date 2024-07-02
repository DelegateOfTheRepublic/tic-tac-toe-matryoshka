<template>
  <div
    :class="[
      'm-local-map',
      { 'move-to-center': props.isSelected, hover: !isSelected },
    ]"
    @click="$emit('click')"
    @keydown.esc="() => {
      delay(); $emit('esc') }"
    tabindex="0"
  >
    <div
      :class="['m-local-map__cells', {'m-local-map__cells--selected': props.isSelected}]">
      <m-cell
        v-for="cellId in 9"
        :key="cellId"
        :style="{scale: props.isSelected? 1 : 0}"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, withDefaults, ref,
} from 'vue';
import { PlacementCoeff } from '@/types';
import MCell from '@/components/MCell.vue';

const props = withDefaults(
  defineProps<{
    cellSize: number;
    offset?: number;
    isSelected?: boolean;
    placement: PlacementCoeff;
  }>(),
  {
    cellSize: 100,
    offset: 8,
    isSelected: false,
  },
);

const emits = defineEmits<{(e: 'click'): void; (e: 'esc'): void }>();

const size = `${props.cellSize}px`;
const coordToCenter = {
  x: `${props.placement.x * (props.cellSize + props.offset)}px`,
  y: `${props.placement.y * (props.cellSize + props.offset)}px`,
};
const isDisabled = ref<boolean>(true);
const delay = () => setTimeout(() => { isDisabled.value = !props.isSelected; }, 900);
</script>

<style scoped>
.m-local-map {
  width: v-bind(size);
  height: v-bind(size);
  background-color: white;
  outline: 0 solid grey;
  transform: translate(0, 0) scale(1);
  transition: outline 0.2s ease, transform 0.4s ease;
}
.hover:hover {
  outline: 8px solid grey;
}
.move-to-center {
  transform: translate(v-bind(coordToCenter.x), v-bind(coordToCenter.y)) scale(3.08);
  z-index: 9999;
}
.m-local-map__cells {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.m-local-map__cells--selected {
  opacity: 1;
  pointer-events: all;
}
</style>
