<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Weapon> }>();
</script>

<template>
  <CardEditorCardBaseBack :card />
</template>
