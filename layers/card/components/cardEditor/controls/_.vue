<script lang="ts" setup>
import {
  CardEditorControlsItem,
  CardEditorControlsMagicObject,
  CardEditorControlsSpell,
  CardEditorControlsTrait,
  CardEditorControlsWeapon,
} from '#components';

const { index, canDelete } = defineProps<{
  index: number;
  canDelete: boolean;
}>();

const accordionModel = ref<string>('card');

const card = defineModel<Card>({ required: true });

const emit = defineEmits<{ delete: []; duplicate: [] }>();

const { getDefaultValue } = useCard();

const isMap = new Map<CardType, Component>([
  [CardType.MagicItem, CardEditorControlsMagicObject],
  [CardType.Spell, CardEditorControlsSpell],
  [CardType.Item, CardEditorControlsItem],
  [CardType.Trait, CardEditorControlsTrait],
  [CardType.Weapon, CardEditorControlsWeapon],
]);
</script>

<template>
  <div
    class="h-full shadow-xl bg-white dark:bg-slate-900 dark:border dark:border-slate-700 py-1 px-6 rounded-xl"
    @click="accordionModel = accordionModel === 'card' ? '' : 'card'"
  >
    <UAccordion
      v-model="accordionModel"
      :items="[
        {
          label: `Carte ${index + 1}${card.name !== '' ? ` - ${card.name}` : ''}`,
          value: 'card',
        },
      ]"
      @click.stop
    >
      <template #trailing="{ open }">
        <div class="flex gap-2 flex-1 justify-end items-center">
          <UTooltip @click.stop>
            <UButton
              icon="lucide:copy"
              color="secondary"
              @click="emit('duplicate')"
            />
            <template #content>Dupliquer la carte</template>
          </UTooltip>

          <UButton
            icon="lucide:trash"
            color="error"
            :disabled="!canDelete"
            @click.stop
            @click="emit('delete')"
          />
          <UIcon
            name="lucide:chevron-down"
            class="size-6 ease-in-out duration-200 transition-all"
            :class="open ? '-rotate-180' : ''"
          />
        </div>
      </template>

      <template #content>
        <USeparator class="mb-2" />
        <div class="flex gap-4 flex-col lg:flex-row mb-4">
          <div class="flex w-full flex-col gap-3">
            <div class="flex gap-4">
              <UFormField label="Titre" class="w-full">
                <UInput v-model="card.name" class="w-full" />
              </UFormField>
              <UFormField label="Type de carte" class="w-full">
                <USelect
                  v-model="card.type"
                  :items="[
                    { label: 'Objet magique', value: CardType.MagicItem },
                    { label: 'Objet', value: CardType.Item },
                    { label: 'Sort', value: CardType.Spell },
                    { label: 'Aptitudes', value: CardType.Trait },
                    { label: 'Arme', value: CardType.Weapon },
                    { label: 'Armure', value: CardType.Armor },
                  ]"
                  class="w-full"
                  @update:modelValue="card = getDefaultValue($event)"
                />
              </UFormField>
            </div>

            <component :is="isMap.get(card.type)!" v-model="card" />

            <UFormField label="Description">
              <UiEditor v-model="card.description" class="w-full min-h-21" />
            </UFormField>

            <UFormField label="Image">
              <UFileUpload
                v-model="card.image"
                label="Image"
                description="SVG, PNG, JPG or GIF (max. 2MB)"
                class="w-full min-h-48"
              />
            </UFormField>
            <label class="flex gap-2 items-center">
              Remplir l'espace
              <USwitch v-model="card.imageContain" />
              Afficher l'image en entier
            </label>
          </div>

          <div class="w-full max-w-107.5 @container">
            <CardEditorCard :card />
          </div>
        </div>
      </template>
    </UAccordion>
  </div>
</template>
