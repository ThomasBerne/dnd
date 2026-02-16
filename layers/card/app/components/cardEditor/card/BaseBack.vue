<script lang="ts" setup>
const { card } = defineProps<{ card: Card }>();

const imageSrc = computed((): string | undefined => {
  return useObjectUrl(card.image).value;
});
</script>

<template>
  <CardEditorCardBase>
    <template v-if="card.backType === CardBackType.Image">
      <img
        class="absolute w-full h-full object-cover"
        src="@/layers/card/app/assets/images/card/card-wp.webp"
      />
      <img
        v-if="!!card.image"
        class="absolute w-full h-full"
        :src="imageSrc"
        :class="card.imageContain ? 'object-contain' : 'object-cover'"
      />
      <img
        v-if="!card.hideFrame"
        class="absolute w-full h-full"
        src="@/layers/card/app/assets/images/card/magic-verso.webp"
      />
    </template>
    <div v-else class="p-2 flex gap-2 flex-col">
      <UiCardReducingText :height="618" :maxFontSize="24">
        <UiPreviewHtml
          :content="
            !!card.backDescription && card.backDescription !== ''
              ? card.backDescription
              : '<i>Aucune description</i>'
          "
        />
      </UiCardReducingText>
    </div>
  </CardEditorCardBase>
</template>
