<script lang="ts" setup>
const {
  only = undefined,
  isBack = false,
  wrapperWidth,
} = defineProps<{
  only?: CardOnlyProp;
  isBack?: boolean;
  wrapperWidth: number;
}>();

const displayOnly = computed(
  (): boolean => !only || (only === 'back' ? isBack : !isBack),
);

// Calculate scale based on wrapper width
const relativeScale = computed((): number => {
  if (only) return 0;

  const usableWidth = wrapperWidth - 16;
  const baseWidth = 420;
  const scale = Math.min(usableWidth / baseWidth, 1);
  return scale;
});
</script>

<template>
  <div
    v-if="displayOnly"
    class="print:flex print:w-full print:justify-start"
    :class="{ 'd-card-wrapper-spacer': !only }"
  >
    <h2 v-if="displayOnly" class="font-bold text-2xl mb-2 print:hidden">
      {{ isBack ? 'Verso' : 'Recto' }}
    </h2>

    <div :class="{ 'd-card-wrapper-card__item': !only }">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.d-card-wrapper-card__item {
  transform-origin: top left;
  transform: scale(v-bind(relativeScale));
  width: calc(420px * v-bind(relativeScale));
  height: calc(637px * v-bind(relativeScale));
}
</style>
