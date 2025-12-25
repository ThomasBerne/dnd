<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui';

const { cards, getDefaultValue, loadFromJsonFile, saveToJson } = useCard();

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
    icon: 'lucide:settings',
    slot: CardTab.Controls,
  },
  {
    label: 'Aperçu',
    value: CardTab.Preview,
    icon: 'lucide:eye',
    slot: CardTab.Preview,
  },
];

const addCard = (): void => {
  cards.value.push(getDefaultValue(CardType.Spell));
};

const duplicateCard = (index: number): void => {
  const cardToDuplicate = cards.value[index];
  cards.value.splice(index + 1, 0, { ...cardToDuplicate });
};

const deleteCard = (index: number): void => {
  cards.value.splice(index, 1);
};

const loadDialog = useFileDialog({
  accept: 'application/json',
  directory: false,
  multiple: false,
});

loadDialog.onChange((files) => {
  if (files && files.length > 0) {
    loadFromJsonFile(files[0]);
  }
});
</script>

<template>
  <div class="flex justify-between gap-4">
    <UTabs v-model="tabModel" :items="tabItems" variant="link" class="w-full">
      <template #controls>
        <div class="flex-1 flex flex-wrap gap-2 mb-4">
          <UButton icon="lucide:download" @click="saveToJson">
            Enregistrer les cartes
          </UButton>
          <UButton icon="lucide:upload" @click="loadDialog.open()">
            Charger des cartes
          </UButton>
          <UButton icon="lucide:plus" @click="addCard">
            Ajouter une carte
          </UButton>
          <UButton icon="lucide:printer" :to="{ name: 'print' }">
            Imprimer
          </UButton>
        </div>
        <div class="flex gap-4 flex-wrap">
          <CardEditorControls
            v-for="(_, index) in cards"
            :key="index"
            v-model="cards[index]"
            :index
            :canDelete="cards.length > 1"
            class="print:hidden lg:min-w-[calc(50%-0.5rem)] lg:max-w-[calc(50%-0.5rem)]"
            @duplicate="duplicateCard(index)"
            @delete="deleteCard(index)"
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
</template>
