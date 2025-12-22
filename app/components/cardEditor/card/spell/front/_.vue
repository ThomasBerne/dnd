<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Spell> }>();

const { spellSchoolIcon, spellSchoolTitle, spellComponentLetter } = useSpell();

const components = computed((): string => {
  if (!card.components || card.components.length === 0) {
    return 'Aucune';
  }

  return card.components
    .map((component) => spellComponentLetter.get(component))
    .join(', ');
});
const showComponentsDetails = computed((): boolean => {
  return (
    !!card.components?.includes(SpellComponent.Material) &&
    card.componentsDetails !== ''
  );
});
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <div class="flex gap-2">
        <div class="max-h-16 flex flex-col items-center">
          <img :src="spellSchoolIcon.get(card.school!)" class="size-10" />

          <UiReducingText :maxFontSize="12">
            {{ spellSchoolTitle.get(card.school!) }}
          </UiReducingText>
        </div>

        <UiCardReducingText
          :height="64"
          :maxFontSize="28"
          class="w-full"
          textClass="flex items-center"
        >
          {{ card.name !== '' ? card.name : 'Nom du sort' }}
        </UiCardReducingText>

        <UiCard :height="64">
          <div
            v-if="card.level && card.level > 0"
            class="flex flex-col items-center justify-center h-full"
          >
            <span class="text-xs">Niveau</span>

            <span class="text-3xl"> {{ card.level }} </span>
          </div>
          <div v-else class="text-center italic">Sort Mineur</div>
        </UiCard>
      </div>

      <div class="flex gap-2 w-full">
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Tps d'incant.</span>
          <div class="inline-flex gap-1">
            <span class="text-right">
              {{ card.incantationTime ? card.incantationTime : '-' }}
            </span>
            <div
              v-if="card.ritual"
              class="text-white bg-black p-1 text-xs rounded-full size-5 flex items-center justify-center"
            >
              R
            </div>
          </div>
        </UiCard>
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Portée</span>
          <span class="text-right">{{ card.range ? card.range : '-' }}</span>
        </UiCard>
      </div>

      <div class="flex gap-2 w-full">
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Durée</span>
          <div class="inline-flex gap-1">
            <span class="text-right">
              {{ card.duration ? card.duration : '-' }}
            </span>
            <div
              v-if="card.concentration"
              class="text-white bg-black p-1 text-xs rounded-full size-5 flex items-center justify-center"
            >
              C
            </div>
          </div>
        </UiCard>
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Composantes</span>
          <span class="text-right">{{ components }}</span>
        </UiCard>
      </div>

      <UiCardReducingText v-if="showComponentsDetails" :height="32">
        {{ card.componentsDetails ? card.componentsDetails : '-' }}
      </UiCardReducingText>

      <UiCardReducingText
        :height="showComponentsDetails ? 426 : 466"
        :maxFontSize="24"
      >
        <UiPreviewHtml
          class="text-justify"
          :content="
            !!card.description && card.description !== ''
              ? card.description
              : '<i>Aucune description</i>'
          "
        />
      </UiCardReducingText>
    </div>
  </CardEditorCardBase>
</template>
