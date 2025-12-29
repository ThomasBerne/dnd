<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();
</script>

<template>
  <CardEditorCardBaseBack :card />
</template>
