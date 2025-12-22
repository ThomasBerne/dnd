<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const imageSrc = computed((): string | undefined => {
  return useObjectUrl(card.image).value;
});
</script>

<template>
  <div
    class="h-[637px] w-[420px] rounded-xl border-2 border-slate-500 overflow-hidden"
  >
    <div class="relative h-full">
      <img
        class="absolute w-full h-full object-cover"
        src="@/assets/images/card/card-wp.webp"
      />
      <img class="absolute w-full h-full object-cover" :src="imageSrc" />
      <img
        class="absolute w-full h-full"
        src="@/assets/images/card/magic-verso.webp"
      />
    </div>
  </div>
</template>
