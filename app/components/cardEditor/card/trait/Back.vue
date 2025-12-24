<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Trait> }>();
</script>

<template>
  <CardEditorCardBaseBack :card />
</template>
