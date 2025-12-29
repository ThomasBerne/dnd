<script lang="ts" setup>
const { only = undefined } = defineProps<{ only?: CardOnlyProp }>();

const wrapperRef = ref<HTMLDivElement>();
const { width: wrapperWidth } = useElementSize(wrapperRef);
</script>

<template>
  <div
    ref="wrapperRef"
    class="flex gap-4 dark:text-neutral-700 w-full print:w-auto"
    :class="{ 'flex-col': !only }"
  >
    <CardEditorCardWrapperSpacer :wrapperWidth :only>
      <slot name="front" />
    </CardEditorCardWrapperSpacer>

    <CardEditorCardWrapperSpacer :wrapperWidth :only isBack>
      <slot name="back" />
    </CardEditorCardWrapperSpacer>
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
