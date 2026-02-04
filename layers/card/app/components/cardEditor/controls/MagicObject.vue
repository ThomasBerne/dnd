<script lang="ts" setup>
const card = defineModel<Card<CardType.MagicItem>>({ required: true });

const { objectTypeLabel, rarityLabel } = useMagicItem();

const cardObjectTypes = useMapToArray(objectTypeLabel, 'value', 'label');

const cardRarityItems = useMapToArray(rarityLabel, 'value', 'label');
</script>

<template>
  <div class="flex gap-4">
    <UFormField label="Type d'objet" class="w-full">
      <USelect
        v-model="card.objectType"
        :items="cardObjectTypes"
        class="w-full"
      />
    </UFormField>
    <UFormField label="Précision sur le type d'objet" class="w-full">
      <UInput v-model="card.objectTypeDescription" class="w-full" />
    </UFormField>
  </div>
  <div class="flex gap-4">
    <UFormField label="Rareté" class="w-full">
      <USelect v-model="card.rarity" :items="cardRarityItems" class="w-full" />
    </UFormField>
    <UFormField label="Remplacer le texte de rareté" class="w-full">
      <UInput v-model="card.rarityDescription" class="w-full" />
    </UFormField>
  </div>
  <div class="flex gap-4 items-center">
    <USwitch
      v-model="card.attunementRequired"
      label="Harmonisation requise"
      class="w-full"
    />
    <UFormField label="Précision sur l'harmonisation" class="w-full">
      <UInput v-model="card.attunementDescription" class="w-full" />
    </UFormField>
  </div>
</template>
