<script lang="ts" setup>
const { title, divClass = undefined } = defineProps<{
  title: string;
  divClass?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <div class="text-base font-bold">{{ title }}</div>

    <div :class="divClass" class="w-full">
      <slot />
    </div>
  </div>
</template>
