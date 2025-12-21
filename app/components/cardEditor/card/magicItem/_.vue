<script lang="ts" setup>
import { toBlob } from 'html-to-image';

const { card } = defineProps<{ card: Card<CardType.MagicItem> }>();

const frontRef = ref<HTMLDivElement>();
const backRef = ref<HTMLDivElement>();

// const slugify = (text: string): string => {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w\-]+/g, '')
//     .replace(/--+/g, '-')
//     .replace(/^-+/, '')
//     .replace(/-+$/, '');
// };

const downloadImage = async (side: 'front' | 'back'): Promise<void> => {
  const dataUrl = await toBlob(
    document.querySelector<HTMLDivElement>(`#${side}Ref`)!,
    { cacheBust: false, skipFonts: true },
  );
  const url = useObjectUrl(dataUrl).value;
  navigateTo(url, {
    open: {
      target: '_blank',
      windowFeatures: {
        width: 420,
        height: 637,
      },
    },
  });
};
</script>

<template>
  <div class="flex gap-4">
    <div>
      <div class="flex justify-between mb-2">
        <h2 class="font-bold text-2xl">Recto</h2>
        <UButton icon="lucide:download" @click="downloadImage('front')" />
      </div>

      <CardEditorCardMagicItemFront id="frontRef" ref="frontRef" :card />
    </div>

    <div>
      <div class="flex justify-between mb-2">
        <h2 class="font-bold text-2xl">Verso</h2>
        <UButton icon="lucide:download" @click="downloadImage('back')" />
      </div>

      <CardEditorCardMagicItemBack id="backRef" ref="backRef" :card />
    </div>
  </div>
</template>

<style lang="scss">
* {
  -webkit-print-color-adjust: exact !important;
  color-adjust: exact !important;
  print-color-adjust: exact !important;
}

@media print {
  body {
    zoom: 80%;
  }
}
</style>
