<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Item> }>();
</script>

<template>
  <CardEditorCardWrapper>
    <template #front>
      <CardEditorCardItemFront :card />
    </template>

    <template #back>
      <CardEditorCardItemBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
