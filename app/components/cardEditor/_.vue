<script lang="ts" setup>
const getDefaultValue = (type: CardType) => {
  switch (type) {
    case CardType.MagicItem:
      return {
        name: '',
        type: CardType.MagicItem,
        objectType: CardMagicItemObjectType.Weapon,
        objectTypeDescription: '',
        rarity: CardMagicItemRarity.Common,
        rarityDescription: '',
        attunementDescription: '',
        attunementRequired: false,
        description: '',
        image: undefined,
      } as Card<CardType.MagicItem>;
    case CardType.Item:
      return {
        type: CardType.Item,
        name: '',
        description: '',
        weight: undefined,
      } as Card<CardType.Item>;
    case CardType.Spell:
      return {
        name: '',
        type: CardType.Spell,
        image: undefined,
        description: '',
        classes: [],
        level: SpellLevel.Cantrip,
        school: SpellSchool.Abjuration,
        components: [],
        componentsDetails: '',
        castingTime: '',
        range: '',
        duration: '',
        ritual: false,
        concentration: false,
        incantationTime: '',

        // name: '',
        // type: CardType.Spell,
        // image: undefined,
        // description: '',
        // classes: [],
        // level: SpellLevel.Nine,
        // school: SpellSchool.Abjuration,
        // components: [
        //   SpellComponent.Verbal,
        //   SpellComponent.Somatic,
        //   SpellComponent.Material,
        // ],
        // componentsDetails: '',
        // castingTime: '',
        // range: '',
        // duration: '',
        // ritual: false,
        // concentration: false,
        // incantationTime: '',
      } as Card<CardType.Spell>;
    default:
      throw new Error('Unsupported card type');
  }
};

const card = ref<Card>(getDefaultValue(CardType.Spell));

watch(
  () => card.value.type,
  (newType) => {
    card.value = getDefaultValue(newType);
  },
);
</script>

<template>
  <div class="flex gap-4 mt-12 print:mt-0 w-full px-16">
    <CardEditorControls v-model="card" class="print:hidden" />

    <CardEditorCard :card />
  </div>
</template>
