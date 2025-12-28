<script lang="ts" setup>
const card = defineModel<Card<CardType.Weapon>>({ required: true });

const {
  weaponDamageTypeTitle,
  weaponPropertyTitle,
  weaponMasteryTitle,
  weaponTypeTitle,
} = useWeapon();

const availableProperties = (
  item: CardWeaponProperty,
): CardWeaponProperty[] => {
  return useMapToArray(weaponPropertyTitle, 'value', 'label').map((prop) => ({
    ...prop,
    disabled:
      card.value.properties.filter((p) => p !== item && p.value === prop.value)
        .length > 0,
  }));
};
</script>

<template>
  <div class="flex gap-4">
    <UFormField label="Type d'arme" class="w-full">
      <URadioGroup
        v-model="card.weaponType"
        class="w-full d-radio-group-wrap"
        orientation="horizontal"
        variant="card"
        :items="useMapToArray(weaponTypeTitle, 'value', 'label')"
      />
    </UFormField>
  </div>

  <div class="flex gap-4">
    <UFormField label="Dégâts" class="w-full">
      <UInput v-model="card.damageDie" class="w-full" />
    </UFormField>
    <UFormField label="Type des dégâts" class="w-full">
      <USelect
        v-model="card.damageType"
        class="w-full"
        :items="useMapToArray(weaponDamageTypeTitle, 'value', 'label')"
      />
    </UFormField>
    <UFormField label="Surcharge du champs dégâts" class="w-full">
      <UInput v-model="card.overrideDamage" class="w-full" />
    </UFormField>
  </div>

  <UCard class="mx-px">
    <template #header>
      <h3>Propriétés</h3>
    </template>
    <div class="flex flex-col gap-2">
      <div
        v-for="(item, index) in card.properties"
        :key="index"
        class="flex gap-4 items-end"
      >
        <UFormField label="Propriété" class="w-full">
          <USelect
            v-model="item.value"
            :items="availableProperties(item)"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Détails de la propriété" class="w-full">
          <UInput v-model="item.details" class="w-full" />
        </UFormField>
        <UButton
          variant="outline"
          size="md"
          color="error"
          icon="lucide:trash"
          @click="card.properties.splice(card.properties.indexOf(item), 1)"
        >
          Supprimer
        </UButton>
      </div>
      <UButton
        variant="outline"
        icon="lucide:plus"
        class="mt-2 justify-center"
        @click="card.properties.push({})"
      >
        Ajouter une propriété
      </UButton>
    </div>
  </UCard>

  <UFormField label="Surcharge du champs dégâts" class="w-full">
    <URadioGroup
      v-model="card.mastery"
      variant="card"
      orientation="horizontal"
      :items="useMapToArray(weaponMasteryTitle, 'value', 'label')"
      class="w-full d-radio-group-wrap"
    />
  </UFormField>

  <div class="flex gap-4">
    <UFormField label="Poids" class="w-full">
      <UInput v-model="card.weight" class="w-full" />
    </UFormField>
    <UFormField label="Coût" class="w-full">
      <UInput v-model="card.price" class="w-full" />
    </UFormField>
  </div>
</template>

<style lang="scss">
.d-radio-group-wrap fieldset {
  flex-wrap: wrap;
}
</style>
