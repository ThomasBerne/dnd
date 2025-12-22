<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();
</script>

<template>
  <CardEditorCardWrapper>
    <template #front>
      <CardEditorCardMagicItemFront :card />
    </template>

    <template #back>
      <CardEditorCardMagicItemBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
