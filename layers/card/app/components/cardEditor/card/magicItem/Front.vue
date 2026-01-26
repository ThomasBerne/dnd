<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const { rarityLabel } = useMagicItem();

const rarityText = computed((): string => {
  if (card.rarityDescription && card.rarityDescription.trim() !== '') {
    return card.rarityDescription;
  }

  return rarityLabel.get(card.rarity ?? MagicItemRarity.Common)!;
});
</script>

<template>
  <CardEditorCardBase>
    <div class="p-2 flex gap-2 flex-col">
      <div class="flex gap-2 items-center">
        <CardEditorCardMagicItemType :card />

        <div class="flex flex-col w-full">
          <UiReducingText
            class="font-bold text-lg max-h-11.5 min-h-11.5 flex items-center w-full"
          >
            {{ card.name !== '' ? card.name : "Nom de l'objet magique" }}
          </UiReducingText>

          <UiCardReducingText :height="34" :maxFontSize="18">
            {{ rarityText }}
            <span v-if="card.attunementRequired">
              - Harmonisation requise {{ card.attunementDescription }}
            </span>
          </UiCardReducingText>
        </div>
      </div>
      <UiCardReducingText :height="530" :maxFontSize="24">
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
