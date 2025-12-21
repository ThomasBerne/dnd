<script lang="ts" setup>
const card = ref<Card>({
  name: '',
  type: CardType.Item,
});
</script>

<template>
  <UCard class="">
    <div>
      <CardEditorControls v-model="card" />
    </div>

    <div>
      <CardEditorCard :card />
    </div>
  </UCard>
</template>
