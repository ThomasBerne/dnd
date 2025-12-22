<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const { cardMagicItemRarityLabel } = useCardMagicObject();

const rarityText = computed((): string => {
  if (card.rarityDescription && card.rarityDescription.trim() !== '') {
    return card.rarityDescription;
  }

  return cardMagicItemRarityLabel.get(
    card.rarity ?? CardMagicItemRarity.Common,
  )!;
});
</script>

<template>
  <div
    class="h-[637px] w-[420px] rounded-xl border-2 border-slate-500 overflow-hidden"
  >
    <div
      class="bg-[url(@/assets/images/card/card-wp.webp)] bg-cover h-full p-2 flex gap-2 flex-col"
    >
      <div class="flex gap-2 items-center">
        <CardEditorCardMagicItemType :card />

        <div class="flex flex-col w-full">
          <UiReducingText
            class="font-bold text-lg max-h-11.5 min-h-11.5 flex items-center w-full"
          >
            {{ card.name !== '' ? card.name : "Nom de l'objet magique" }}
          </UiReducingText>

          <div class="py-1 px-2 border-2 rounded-lg">
            <UiReducingText
              class="italic w-full max-h-6 min-h-6"
              :maxFontSize="32"
            >
              {{ rarityText }}
              <span v-if="card.attunementRequired">
                - Harmonisation requise {{ card.attunementDescription }}
              </span>
            </UiReducingText>
          </div>
        </div>
      </div>
      <div class="py-1 px-2 border-2 rounded-lg min-h-[530px] max-h-[530px]">
        <UiReducingText :maxFontSize="24">
          <UiPreviewHtml
            class="text-justify"
            :content="
              !!card.description && card.description !== ''
                ? card.description
                : '<i>Aucune description</i>'
            "
          />
        </UiReducingText>
      </div>
    </div>
  </div>
</template>
