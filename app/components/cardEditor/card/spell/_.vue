<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Spell> }>();
</script>

<template>
  <CardEditorCardWrapper>
    <template #front>
      <CardEditorCardSpellFront :card />
    </template>

    <template #back>
      <CardEditorCardSpellBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
