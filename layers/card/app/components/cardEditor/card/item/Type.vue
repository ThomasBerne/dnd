<script lang="ts" setup>
const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const { objectTypeLabel } = useMagicItem();

const name = new Map<MagicItemObjectType, string>([
  [MagicItemObjectType.Ring, 'game-icons:big-diamond-ring'],
  [MagicItemObjectType.Weapon, 'game-icons:crossed-swords'],
  [MagicItemObjectType.Armor, 'game-icons:shoulder-armor'],
  [MagicItemObjectType.Wand, 'game-icons:fairy-wand'],
  [MagicItemObjectType.Staff, 'game-icons:wizard-staff'],
  [MagicItemObjectType.WondrousItem, 'game-icons:magic-broom'],
  [MagicItemObjectType.Scroll, 'game-icons:scroll-unfurled'],
  [MagicItemObjectType.Potion, 'game-icons:round-potion'],
  [MagicItemObjectType.Rod, 'game-icons:rod-of-asclepius'],
]);

const iconColor = new Map<MagicItemObjectType, string>([
  [MagicItemObjectType.Ring, 'text-yellow-400'],
  [MagicItemObjectType.Weapon, 'text-gray-500'],
  [MagicItemObjectType.Armor, 'text-gray-600'],
  [MagicItemObjectType.Wand, 'text-purple-400'],
  [MagicItemObjectType.Staff, 'text-brown-400'],
  [MagicItemObjectType.WondrousItem, 'text-pink-400'],
  [MagicItemObjectType.Scroll, 'text-orange-600'],
  [MagicItemObjectType.Potion, 'text-red-400'],
  [MagicItemObjectType.Rod, 'text-red-600'],
]);
</script>

<template>
  <div
    class="flex justify-center items-center flex-col p-1 border-2 rounded-lg min-w-20 min-h-20 max-w-20 max-h-20"
  >
    <div class="text-sm italic font-bold text-center">
      {{
        objectTypeLabel.get(card.objectType ?? MagicItemObjectType.WondrousItem)
      }}
    </div>
    <UIcon
      class="size-12"
      :name="name.get(card.objectType ?? MagicItemObjectType.WondrousItem)"
      :class="
        iconColor.get(card.objectType ?? MagicItemObjectType.WondrousItem)
      "
    />
    <div v-if="card.objectTypeDescription" class="text-xs italic text-center">
      {{ card.objectTypeDescription }}
    </div>
  </div>
</template>
