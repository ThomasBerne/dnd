<script lang="ts" setup>
const { cards, getDefaultValue, loadFromJsonFile, saveToJson } = useCard();

if (cards.value.length === 0) cards.value = [getDefaultValue(CardType.Spell)];

const addCard = async (): Promise<void> => {
  cards.value.push(getDefaultValue(CardType.Spell));
  await nextTick();
  useScrollTo(`.h-card-editor-controls-${cards.value.length}`, -2000);
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
  <div class="flex flex-col gap-4">
    <div class="flex-1 flex flex-wrap gap-2 mb-4">
      <UButton icon="lucide:download" @click="saveToJson">
        Enregistrer les cartes
      </UButton>
      <UButton icon="lucide:upload" @click="loadDialog.open()">
        Charger des cartes
      </UButton>
      <UButton icon="lucide:plus" @click="addCard"> Ajouter une carte </UButton>
      <UButton icon="lucide:printer" :to="{ name: 'print' }">
        Imprimer
      </UButton>
    </div>
    <div class="h-card-editor flex gap-4 flex-col">
      <CardEditorControls
        v-for="(_, index) in cards"
        :key="index"
        v-model="cards[index]"
        :index
        :canDelete="cards.length > 1"
        class="print:hidden"
        :class="`h-card-editor-controls-${index + 1}`"
        @duplicate="duplicateCard(index)"
        @delete="deleteCard(index)"
      />
      <UButton icon="lucide:plus" class="justify-center" @click="addCard">
        Ajouter une carte
      </UButton>
    </div>
  </div>
</template>
