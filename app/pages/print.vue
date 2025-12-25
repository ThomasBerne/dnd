<script lang="ts" setup>
const { cards } = useCard();

definePageMeta({
  middleware: [
    () => {
      const { cards } = useCard();

      if (cards.value.length === 0) {
        return navigateTo({ name: 'index' });
      }
    },
  ],
});

const useTimeoutPromise = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const print = async (): Promise<void> => {
  await useTimeoutPromise(100);
  window.print();
  await useTimeoutPromise(1000);
  await navigateTo({ name: 'index' });
};

onMounted(print);

const chunks = computed((): Card[][] => {
  // Split cards into chunks of 4 cards
  const chunkSize = 4;
  const chunks: Card[][] = [];
  for (let i = 0; i < cards.value.length; i += chunkSize) {
    chunks.push(cards.value.slice(i, i + chunkSize));
  }
  return chunks;
});
</script>

<template>
  <div class="h-full">
    <template v-for="(chunkCards, chunkIndex) in chunks" :key="chunkIndex">
      <div>
        <div class="flex flex-wrap justify-between h-full gap-y-8">
          <CardEditorCard
            v-for="(card, index) in chunkCards"
            :key="`${index}-front`"
            :card
            only="front"
            :class="{ 'items-end': index >= 2 }"
          />
        </div>

        <div class="print:break-after-page" />

        <div
          class="flex flex-wrap justify-between flex-row-reverse h-full gap-y-8"
        >
          <CardEditorCard
            v-for="(card, index) in chunkCards"
            :key="`${index}-back`"
            :card
            only="back"
          />
        </div>
      </div>

      <div
        v-if="chunkIndex < chunks.length - 1"
        class="print:break-after-page"
      />
    </template>
  </div>
</template>

<style lang="scss">
@media print {
  body {
    background-color: white !important;
  }
}
</style>
