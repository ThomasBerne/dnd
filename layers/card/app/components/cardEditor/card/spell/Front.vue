<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Spell> }>();

const { spellSchoolIcon, spellSchoolTitle, spellComponentLetter } = useSpell();

const components = computed((): string => {
  if (!card.components || card.components.length === 0) {
    return '-';
  }

  return card.components
    .map((component) => spellComponentLetter.get(component))
    .join(', ');
});
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <div class="flex gap-2">
        <div class="max-h-16 flex flex-col items-center">
          <img
            :src="spellSchoolIcon.get(card.school!)"
            class="size-12 mt-0.75 -mb-1.5"
          />

          <UiReducingText
            :maxFontSize="12"
            class="min-w-17.5 max-w-17.5 text-center"
          >
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
        <UiCardContent
          title="Temps d'incantation"
          :content="card.incantationTime"
          width="calc(50% - 0.25rem)"
        >
          <UiTextChip v-if="card.ritual">R</UiTextChip>
        </UiCardContent>
        <UiCardContent
          title="Portée"
          :content="card.range"
          width="calc(50% - 0.25rem)"
        />
      </div>

      <div class="flex gap-2 w-full">
        <UiCardContent
          title="Durée"
          :content="card.duration"
          width="calc(50% - 0.25rem)"
        >
          <UiTextChip v-if="card.concentration">C</UiTextChip>
        </UiCardContent>
        <UiCardContent
          title="Composantes"
          :content="
            components +
            (card.componentsDetails ? ' (' + card.componentsDetails + ')' : '')
          "
          width="calc(50% - 0.25rem)"
        />
      </div>

      <UiCardReducingText :height="426" :maxFontSize="24">
        <UiPreviewHtml
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
