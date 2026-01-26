<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.Weapon> }>();
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <div class="flex gap-2 items-center">
        <UiReducingText
          class="font-bold text-lg max-h-11.5 min-h-11.5 flex items-center w-full"
        >
          {{ card.name !== '' ? card.name : "Titre de l'arme" }}
        </UiReducingText>
      </div>

      <UiCardReducingText :height="558" :maxFontSize="24">
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
