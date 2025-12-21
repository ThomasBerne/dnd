<script lang="ts" setup>
const card = ref<Card>({
  name: 'Le super bâton de la mort qui ',
  type: CardType.MagicItem,
  objectType: CardMagicItemObjectType.Weapon,
  objectTypeDescription: 'Arc long',
  rarity: CardMagicItemRarity.Rare,
  rarityDescription: 'Rare',
});
</script>

<template>
  <div class="flex gap-4 mt-12 w-full px-16">
    <CardEditorControls v-model="card" class="print:hidden" />

    <div>
      <CardEditorCard :card />
    </div>
  </div>
</template>
