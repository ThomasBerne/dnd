<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Trait> }>();

const { sourceTitle } = useClassTrait();
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <div class="flex gap-2 items-center">
        <UiReducingText
          class="font-bold text-lg max-h-11.5 min-h-11.5 flex items-center w-full"
        >
          {{ card.name !== '' ? card.name : "Titre de l'aptitude" }}
        </UiReducingText>

        <UiCard class="flex flex-col gap-1 items-center justify-center text-sm">
          <span class="font-bold">Source</span>
          <span class="text-right text-xs">{{
            sourceTitle.get(card.source!)
          }}</span>
        </UiCard>
      </div>

      <UiCardReducingText
        v-if="card.requirements"
        :height="32"
        textClass="flex items-center"
      >
        <span class="inline-flex gap-2 justify-between w-full">
          <span class="font-bold">
            {{ card.source === TraitSource.Class ? 'Niveau' : 'Prérequis' }}
          </span>
          <span class="text-right">
            {{ card.requirements ? card.requirements : '-' }}
          </span>
        </span>
      </UiCardReducingText>

      <UiCardReducingText
        :height="card.requirements ? 518 : 558"
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
