<script lang="ts" setup>
const card = defineModel<Card<CardType.Trait>>({ required: true });

const { sourceTitle } = useClassTrait();
</script>

<template>
  <div class="flex gap-4">
    <UFormField label="Source" class="w-full">
      <USelect
        v-model="card.source"
        :items="useMapToArray(sourceTitle, 'value', 'label')"
        class="w-full"
      />
    </UFormField>
    <UFormField
      :label="card.source === TraitSource.Class ? 'Niveau' : 'Prérequis'"
      class="w-full"
    >
      <UInput v-model="card.requirements" class="w-full" />
    </UFormField>
  </div>
</template>
