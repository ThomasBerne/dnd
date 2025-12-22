<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Item> }>();
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <UiReducingText
        class="font-bold text-lg max-h-11.5 min-h-11.5 flex items-center w-full"
      >
        {{ card.name !== '' ? card.name : "Nom de l'objet" }}
      </UiReducingText>

      <div class="flex gap-2 w-full">
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Poids</span>
          <span class="text-right">
            {{ card.weight ? card.weight : '-' }}
          </span>
        </UiCard>
        <UiCard class="w-full flex justify-between text-sm" :height="32">
          <span class="font-bold">Coût</span>
          <span class="text-right">{{ card.price ? card.price : '-' }}</span>
        </UiCard>
      </div>

      <UiCardReducingText :height="524" :maxFontSize="24">
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
