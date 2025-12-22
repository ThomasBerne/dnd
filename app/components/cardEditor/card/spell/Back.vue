<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Spell> }>();

const imageSrc = computed((): string | undefined => {
  return useObjectUrl(card.image).value;
});
</script>

<template>
  <CardEditorCardBase>
    <img
      class="absolute w-full h-full object-cover"
      src="@/assets/images/card/card-wp.webp"
    />
    <img
      v-if="!!card.image"
      class="absolute w-full h-full object-cover"
      :src="imageSrc"
    />
    <img
      class="absolute w-full h-full"
      src="@/assets/images/card/magic-verso.webp"
    />
  </CardEditorCardBase>
</template>
