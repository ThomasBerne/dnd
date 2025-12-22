<script lang="ts" setup>
const { height = 24, maxFontSize = 32 } = defineProps<{
  height?: number;
  maxFontSize?: number;
  textClass?:
    | string
    | Record<string, boolean>
    | (string | Record<string, boolean>)[];
}>();
</script>

<template>
  <UiCard class="h-card-reducing-text">
    <UiReducingText
      class="h-card-reducing-text italic size-full block"
      :class="textClass"
      :maxFontSize
    >
      <slot />
    </UiReducingText>
  </UiCard>
</template>

<style lang="scss" scoped>
.h-card-reducing-text {
  min-height: calc(v-bind(height) * 1px);
  max-height: calc(v-bind(height) * 1px);
}

.h-card-reducing-text > div {
  min-height: calc(v-bind(height) * 1px - 0.75rem);
  max-height: calc(v-bind(height) * 1px - 0.75rem);
}
</style>
