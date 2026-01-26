<script lang="ts" setup>
const {
  title,
  content = undefined,
  width = '100%',
} = defineProps<{
  title: string;
  content?: string;
  width?: string;
}>();
</script>

<template>
  <UiCard class="d-ui-card-content items-center text-xs max-h-13 min-h-13">
    <span class="font-bold italic">{{ title }}</span>
    <div class="flex justify-between items-center text-xs gap-1 max-w-full">
      <UiReducingText
        class="max-w-fit wrap-break-word min-h-6 max-h-6 flex items-center"
      >
        {{ !content || content === '' ? '-' : content }}
      </UiReducingText>

      <slot />
    </div>
  </UiCard>
</template>

<style lang="scss" scoped>
.d-ui-card-content {
  min-width: v-bind(width);
  max-width: v-bind(width);
}
</style>
