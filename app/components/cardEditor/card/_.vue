<script lang="ts" setup>
const { card } = defineProps<{ card: Card }>();
</script>

<template>
  <CardEditorCardMagicItem v-if="card.type === CardType.MagicItem" :card />
  <CardEditorCardItem v-if="card.type === CardType.Item" :card />
  <CardEditorCardSpell v-if="card.type === CardType.Spell" :card />
</template>
