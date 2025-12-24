<script lang="ts" setup>
import {
  CardEditorCardItem,
  CardEditorCardMagicItem,
  CardEditorCardSpell,
  CardEditorCardTrait,
} from '#components';

const { card, only = undefined } = defineProps<{
  card: Card;
  only?: CardOnlyProp;
}>();

const isMap = new Map<CardType, Component>([
  [CardType.MagicItem, CardEditorCardMagicItem],
  [CardType.Item, CardEditorCardItem],
  [CardType.Spell, CardEditorCardSpell],
  [CardType.Trait, CardEditorCardTrait],
]);
</script>

<template>
  <component :is="isMap.get(card.type)!" :card :only v-bind="$attrs" />
</template>
