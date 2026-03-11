<script lang="ts" setup>
const model = defineModel<boolean>({ default: false });

const childRef = ref<HTMLDivElement>();
const mounted = ref<boolean>(false);

const { height: childHeight } = useElementSize(childRef);

onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, 400);
});
</script>

<template>
  <div class="relative">
    <div
      class="d-parent"
      :class="{ 'd-parent--expanded': model, 'd-parent--mounted': mounted }"
    >
      <div ref="childRef" class="d-child px-0.5">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="css">
.d-parent {
  position: relative;
  overflow: hidden;
  height: 0;
}

.d-parent--mounted {
  transition: height 0.3s ease-in;
}

.d-parent--expanded {
  height: calc(v-bind(childHeight) * 1px);
}

.d-child {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
</style>
