<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { useMutationObserver, useResizeObserver } from '@vueuse/core';

const { minFontSize = 10, maxFontSize = 24 } = defineProps<{
  minFontSize?: number;
  maxFontSize?: number;
}>();

const container = ref<HTMLDivElement>();
const text = ref<HTMLDivElement>();

const fitText = async (): Promise<void> => {
  await nextTick();

  if (!container.value || !text.value) return;

  let size = maxFontSize;
  text.value.style.fontSize = size + 'px';

  while (
    size > minFontSize &&
    (text.value.scrollWidth > container.value.clientWidth ||
      text.value.scrollHeight > container.value.clientHeight)
  ) {
    size--;
    text.value.style.fontSize = size + 'px';
  }
};

useResizeObserver([container], fitText);

watch([() => minFontSize, () => maxFontSize], fitText);

useMutationObserver(text, () => fitText(), {
  childList: true,
  subtree: true,
  characterData: true,
});
</script>

<template>
  <div ref="container" class="d-auto-fit-container">
    <div ref="text" class="d-auto-fit-text">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.d-auto-fit-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.d-auto-fit-text {
  display: inline-block;
  width: 100%;
  word-break: break;
}
</style>
