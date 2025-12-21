<script lang="ts" setup>
const { card } = defineProps<{ card: Card }>();
</script>

<template>
  <CardEditorCardMagicItem v-if="card.type === CardType.MagicItem" :card />
</template>
