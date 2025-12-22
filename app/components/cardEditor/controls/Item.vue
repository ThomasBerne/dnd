<script lang="ts" setup>
const card = defineModel<Card<CardType.Item>>({ required: true });
</script>

<template>
  <div class="flex gap-4">
    <UFormField label="Poids" class="w-full">
      <UInput v-model="card.weight" class="w-full" />
    </UFormField>
    <UFormField label="Coût" class="w-full">
      <UInput v-model="card.price" class="w-full" />
    </UFormField>
  </div>
</template>
