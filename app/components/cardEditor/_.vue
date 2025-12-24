<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui';

const { cards, getDefaultValue } = useCard();

if (cards.value.length === 0) cards.value = [getDefaultValue(CardType.Spell)];

enum CardTab {
  Controls = 'controls',
  Preview = 'preview',
}

const tabModel = ref<CardTab>(CardTab.Controls);
const tabItems: TabsItem[] = [
  {
    label: 'Contrôles',
    value: CardTab.Controls,
    icon: 'mdi-cog',
    slot: CardTab.Controls,
  },
  {
    label: 'Aperçu',
    value: CardTab.Preview,
    icon: 'mdi-eye',
    slot: CardTab.Preview,
  },
];

const addCard = (): void => {
  cards.value.push(getDefaultValue(CardType.Spell));
};

const deleteCard = (index: number): void => {
  cards.value.splice(index, 1);
};
</script>

<template>
  <div class="mt-12 print:mt-0 w-full px-16">
    <div class="flex justify-between gap-4">
      <UTabs v-model="tabModel" :items="tabItems" variant="link" class="w-full">
        <template #list-trailing>
          <div class="flex-1 flex gap-2 justify-end">
            <UButton icon="lucide:plus" @click="addCard">
              Ajouter une carte
            </UButton>
            <UButton icon="lucide:printer" :to="{ name: 'print' }">
              Imprimer
            </UButton>
          </div>
        </template>

        <template #controls>
          <div class="flex gap-4 flex-wrap">
            <CardEditorControls
              v-for="(_, index) in cards"
              :key="index"
              v-model="cards[index]"
              :index
              :canDelete="cards.length > 1"
              class="print:hidden min-w-[calc(50%-0.5rem)] max-w-[calc(50%-0.5rem)]"
              @deleteCard="deleteCard(index)"
            />
          </div>
        </template>

        <template #preview>
          <div v-for="(card, index) in cards" :key="index">
            <CardEditorCard :card />
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>
