<script lang="ts" setup>
const { card } = defineProps<{ card: Card }>();

const imageSrc = computed((): string | undefined => {
  return useObjectUrl(card.image).value;
});
</script>

<template>
  <CardEditorCardBase>
    <img
      class="absolute w-full h-full object-cover"
      src="@/layers/card/app/assets/images/card/card-wp.webp"
    />
    <img
      v-if="!!card.image"
      class="absolute w-full h-full"
      :src="imageSrc"
      :class="card.imageContain ? 'object-contain' : 'object-cover'"
    />
    <img
      class="absolute w-full h-full"
      src="@/layers/card/app/assets/images/card/magic-verso.webp"
    />
  </CardEditorCardBase>
</template>
