<script lang="ts" setup>
const { card, only } = defineProps<{
  card: Card<CardType.Weapon>;
  only: CardOnlyProp;
}>();
</script>

<template>
  <CardEditorCardWrapper :only>
    <template #front>
      <CardEditorCardWeaponFront :card />
    </template>

    <template #back>
      <CardEditorCardWeaponBack :card />
    </template>
  </CardEditorCardWrapper>
</template>
