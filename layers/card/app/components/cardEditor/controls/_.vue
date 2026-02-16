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

const cardTypeItems = [
  { label: 'Objet magique', value: CardType.MagicItem },
  { label: 'Objet', value: CardType.Item },
  { label: 'Sort', value: CardType.Spell },
  { label: 'Aptitudes', value: CardType.Trait },
  // { label: 'Arme', value: CardType.Weapon },
  // { label: 'Armure', value: CardType.Armor },
];

const tabValue = ref<'front' | 'back'>('front');
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
            <UFormField label="Type de carte" class="w-full">
              <URadioGroup
                v-model="card.type"
                class="w-full d-radio-group-wrap"
                orientation="horizontal"
                variant="card"
                :items="cardTypeItems"
                @update:modelValue="
                  ($event) => {
                    card = getDefaultValue($event);
                    tabValue = 'front';
                  }
                "
              />
            </UFormField>
            <UFormField label="Titre" class="w-full">
              <UInput v-model="card.name" class="w-full" />
            </UFormField>

            <UTabs
              v-model="tabValue"
              :items="[
                { label: 'Recto', slot: 'front', value: 'front' },
                { label: 'Verso', slot: 'back', value: 'back' },
              ]"
            >
              <template #front>
                <div class="flex w-full flex-col gap-3">
                  <component :is="isMap.get(card.type)!" v-model="card" />

                  <UFormField label="Description">
                    <UiEditor
                      v-model="card.description"
                      class="w-full min-h-21"
                    />
                  </UFormField>
                </div>
              </template>

              <template #back>
                <CardEditorControlsBack v-model="card" />
              </template>
            </UTabs>
          </div>

          <div class="w-full max-w-107.5 @container">
            <CardEditorCard :card :only="tabValue" />
          </div>
        </div>
      </template>
    </UAccordion>
  </div>
</template>
