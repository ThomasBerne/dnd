<script lang="ts" setup>
const card = defineModel<Card<CardType.MagicItem>>({ required: true });

const cardObjectTypes = [
  { label: 'Anneau', value: CardMagicItemObjectType.Ring },
  { label: 'Arme', value: CardMagicItemObjectType.Weapon },
  { label: 'Armure', value: CardMagicItemObjectType.Armor },
  { label: 'Baguette', value: CardMagicItemObjectType.Wand },
  { label: 'Bâton', value: CardMagicItemObjectType.Staff },
  { label: 'Objet merveilleux', value: CardMagicItemObjectType.WondrousItem },
  { label: 'Parchemin', value: CardMagicItemObjectType.Scroll },
  { label: 'Potion', value: CardMagicItemObjectType.Potion },
  { label: 'Sceptre', value: CardMagicItemObjectType.Rod },
];

const cardRarityItems = [
  { label: 'Commun', value: CardMagicItemRarity.Common },
  { label: 'Peu commun', value: CardMagicItemRarity.Uncommon },
  { label: 'Rare', value: CardMagicItemRarity.Rare },
  { label: 'Très rare', value: CardMagicItemRarity.VeryRare },
  { label: 'Légendaire', value: CardMagicItemRarity.Legendary },
  { label: 'Artéfact', value: CardMagicItemRarity.Artifact },
  { label: 'Variable', value: CardMagicItemRarity.Variable },
];
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
