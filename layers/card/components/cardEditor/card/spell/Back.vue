<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Spell> }>();
</script>

<template>
  <CardEditorCardBaseBack :card />
</template>
