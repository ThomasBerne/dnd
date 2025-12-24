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

onMounted(() => window.print());
</script>

<template>
  <div class="h-full">
    <UButton class="print:hidden" :to="{ name: 'index' }">Retour</UButton>
    <div>
      <div class="flex flex-wrap justify-between h-full gap-y-8">
        <CardEditorCard
          v-for="(card, index) in cards"
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
          v-for="(card, index) in cards"
          :key="`${index}-back`"
          :card
          only="back"
        />
      </div>
    </div>
  </div>
</template>
