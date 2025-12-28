<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Weapon> }>();
</script>

<template>
  <CardEditorCardWrapper>
    <template #front>
      <CardEditorCardWeaponFront :card />
    </template>

    <template #back>
      <CardEditorCardWeaponBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
