<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const { cardMagicItemObjectTypeLabel } = useCardMagicObject();

const name = new Map<CardMagicItemObjectType, string>([
  [CardMagicItemObjectType.Ring, 'game-icons:big-diamond-ring'],
  [CardMagicItemObjectType.Weapon, 'game-icons:crossed-swords'],
  [CardMagicItemObjectType.Armor, 'game-icons:shoulder-armor'],
  [CardMagicItemObjectType.Wand, 'game-icons:fairy-wand'],
  [CardMagicItemObjectType.Staff, 'game-icons:wizard-staff'],
  [CardMagicItemObjectType.WondrousItem, 'game-icons:magic-broom'],
  [CardMagicItemObjectType.Scroll, 'game-icons:scroll-unfurled'],
  [CardMagicItemObjectType.Potion, 'game-icons:round-potion'],
  [CardMagicItemObjectType.Rod, 'game-icons:rod-of-asclepius'],
]);

const iconColor = new Map<CardMagicItemObjectType, string>([
  [CardMagicItemObjectType.Ring, 'text-yellow-400'],
  [CardMagicItemObjectType.Weapon, 'text-gray-500'],
  [CardMagicItemObjectType.Armor, 'text-gray-600'],
  [CardMagicItemObjectType.Wand, 'text-purple-400'],
  [CardMagicItemObjectType.Staff, 'text-brown-400'],
  [CardMagicItemObjectType.WondrousItem, 'text-pink-400'],
  [CardMagicItemObjectType.Scroll, 'text-orange-600'],
  [CardMagicItemObjectType.Potion, 'text-red-400'],
  [CardMagicItemObjectType.Rod, 'text-red-600'],
]);
</script>

<template>
  <div
    class="flex justify-center items-center flex-col p-1 border-2 rounded-lg min-w-20 min-h-20 max-w-20 max-h-20"
  >
    <div class="text-sm italic font-bold text-center">
      {{
        cardMagicItemObjectTypeLabel.get(
          card.objectType ?? CardMagicItemObjectType.WondrousItem,
        )
      }}
    </div>
    <UIcon
      class="size-12"
      :name="name.get(card.objectType ?? CardMagicItemObjectType.WondrousItem)"
      :class="
        iconColor.get(card.objectType ?? CardMagicItemObjectType.WondrousItem)
      "
    />
    <div v-if="card.objectTypeDescription" class="text-xs italic text-center">
      {{ card.objectTypeDescription }}
    </div>
  </div>
</template>
