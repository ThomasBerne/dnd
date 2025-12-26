<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Item> }>();
</script>

<template>
  <CardEditorCardBaseBack :card />
</template>
