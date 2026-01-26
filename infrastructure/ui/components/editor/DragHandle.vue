<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3';
import { DragHandle } from '@tiptap/extension-drag-handle-vue-3';

const editor = defineModel<Editor>({ required: true });
</script>

<template>
  <DragHandle v-if="editor" :editor>
    <UButton
      icon="lucide:grip-vertical"
      size="xs"
      color="neutral"
      variant="soft"
      class="mr-1"
    ></UButton>
  </DragHandle>
</template>

<style lang="scss">
/* stylelint-disable selector-class-pattern */
/* stylelint-disable no-descending-specificity */
.d-tiptap-editor-content {
  .ProseMirror {
    margin-top: 0.75em;
    margin-left: 1.5rem;
  }

  .ProseMirror-widget * {
    margin-top: auto;
  }

  ul,
  ol {
    padding: 0 1rem;
  }
}

.ProseMirror-noderangeselection {
  *::selection {
    background: transparent;
  }

  * {
    caret-color: transparent;
  }
}

.ProseMirror-selectednode,
.ProseMirror-selectednoderange {
  position: relative;

  &::before {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    content: '';
    inset: -0.25rem;
    background-color: #70cff850;
    border-radius: 0.2rem;
  }
}
</style>
