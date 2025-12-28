<script lang="ts" setup>
const { cards } = useCard();

definePageMeta({
  middleware: [
    () => {
      const { cards } = useCard();

      if (cards.value.length === 0) return navigateTo({ name: 'index' });
    },
  ],
});

const chunks = computed((): Card[][] => {
  const chunkSize = 4;
  const chunks: Card[][] = [];

  for (let i = 0; i < cards.value.length; i += chunkSize) {
    chunks.push(cards.value.slice(i, i + chunkSize));
  }
  return chunks;
});

const windowFocused = useWindowFocus();

const printDialogOpened = ref<boolean>(false);

const print = async (): Promise<void> => {
  await useTimeoutPromise(100);
  printDialogOpened.value = true;
  window.print();
};

onMounted(print);

watch(windowFocused, (newVal) => {
  if (newVal && printDialogOpened.value) navigateTo({ name: 'index' });
});
</script>

<template>
  <div class="h-full">
    <template v-for="(chunkCards, chunkIndex) in chunks" :key="chunkIndex">
      <div>
        <div class="flex flex-wrap justify-center h-full pt-24">
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
          class="flex flex-wrap justify-center flex-row-reverse h-full pt-24"
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
