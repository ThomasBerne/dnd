<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Trait> }>();
</script>

<template>
  <CardEditorCardWrapper>
    <template #front>
      <CardEditorCardTraitFront :card />
    </template>

    <template #back>
      <CardEditorCardTraitBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
