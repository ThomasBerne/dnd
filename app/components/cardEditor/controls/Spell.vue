<script lang="ts" setup>
const card = defineModel<Card<CardType.Spell>>({ required: true });

const { spellSchoolTitle, spellLevelTitle, spellComponentTitle } = useSpell();

const sortComponents = (): void => {
  if (!card.value.components) return;

  const order = [
    SpellComponent.Verbal,
    SpellComponent.Somatic,
    SpellComponent.Material,
  ];

  card.value.components.sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
</script>

<template>
  <div class="flex gap-4">
    <UFormField label="École de magie" class="w-full">
      <USelect
        v-model="card.school"
        :items="useMapToArray(spellSchoolTitle, 'value', 'label')"
        class="w-full"
      />
    </UFormField>

    <UFormField label="Niveau du sort" class="w-full">
      <USelect
        v-model="card.level"
        :items="useMapToArray(spellLevelTitle, 'value', 'label')"
        class="w-full"
      />
    </UFormField>
  </div>

  <div class="flex gap-4">
    <UFormField label="Temps d'incantation" class="w-full">
      <UInput v-model="card.incantationTime" class="w-full" />
    </UFormField>

    <UFormField label="Portée" class="w-full">
      <UInput v-model="card.range" class="w-full" />
    </UFormField>
  </div>

  <div class="flex gap-4">
    <UFormField label="Durée" class="w-full">
      <UInput v-model="card.duration" class="w-full" />
    </UFormField>
  </div>

  <div class="flex gap-2 w-full">
    <USwitch
      v-model="card.concentration"
      label="Concentration"
      class="w-full"
    />
    <USwitch v-model="card.ritual" label="Rituel" class="w-full" />
  </div>

  <div class="flex gap-4">
    <UFormField label="Composantes" class="w-full">
      <USelect
        v-model="card.components"
        :items="useMapToArray(spellComponentTitle, 'value', 'label')"
        multiple
        class="w-full"
        @update:modelValue="sortComponents"
      />
    </UFormField>

    <UFormField label="Détails des composantes" class="w-full">
      <UInput v-model="card.componentsDetails" class="w-full" />
    </UFormField>
  </div>
</template>
