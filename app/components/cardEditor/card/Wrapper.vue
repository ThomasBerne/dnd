<script lang="ts" setup>
import { toBlob } from 'html-to-image';

const { only = undefined } = defineProps<{ only?: CardOnlyProp }>();

const loading = ref<boolean>(false);

const downloadImage = async (side: 'front' | 'back'): Promise<void> => {
  loading.value = true;
  const el = document.querySelector<HTMLDivElement>(`#${side}Ref`)!;

  if (!el) return;

  try {
    const dataUrl = await toBlob(el, { cacheBust: false, skipFonts: true });

    const url = useObjectUrl(dataUrl).value;
    navigateTo(url, {
      open: { target: '_blank', windowFeatures: { width: 420, height: 637 } },
    });
  } catch (_) {
    // ignore
  }
  loading.value = false;
};
</script>

<template>
  <div class="flex gap-4 dark:text-neutral-700">
    <div
      v-if="!only || only === 'front'"
      class="print:flex print:w-full print:justify-start"
    >
      <div v-if="!only" class="flex justify-between mb-2 print:hidden">
        <h2 class="font-bold text-2xl">Recto</h2>
        <UButton
          icon="lucide:download"
          :loading="loading"
          @click="downloadImage('front')"
        />
      </div>

      <div id="frontRef">
        <slot name="front" />
      </div>
    </div>

    <div
      v-if="!only || only === 'back'"
      class="print:flex print:w-full print:justify-end"
    >
      <div v-if="!only" class="flex justify-between mb-2 print:hidden">
        <h2 class="font-bold text-2xl">Verso</h2>
        <UButton
          icon="lucide:download"
          :loading="loading"
          @click="downloadImage('back')"
        />
      </div>

      <div id="backRef">
        <slot name="back" />
      </div>
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
    zoom: 70%;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
