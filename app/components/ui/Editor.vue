<script setup lang="ts">
import type { Editor, JSONContent } from '@tiptap/vue-3';
import type { EditorToolbarItem } from '@nuxt/ui';
import { TableKit } from '@tiptap/extension-table';
import { mapEditorItems } from '@nuxt/ui/utils/editor';

const { editable = true } = defineProps<{ editable?: boolean }>();

const value = defineModel<string>({ default: '' });

const selectedNode = ref<{ node: JSONContent; pos: number }>();

const getItems = (editor: Editor): EditorToolbarItem[][] => {
  return mapEditorItems(editor, [
    [
      {
        kind: 'mark',
        mark: 'bold',
        icon: 'i-lucide-bold',
        tooltip: { text: 'Bold' },
      },
      {
        kind: 'mark',
        mark: 'italic',
        icon: 'i-lucide-italic',
        tooltip: { text: 'Italic' },
      },
      {
        kind: 'mark',
        mark: 'underline',
        icon: 'i-lucide-underline',
        tooltip: { text: 'Underline' },
      },
    ],
    [
      {
        kind: 'undo',
        icon: 'i-lucide-rotate-ccw',
        tooltip: { text: 'Annuler' },
      },
      {
        kind: 'redo',
        icon: 'i-lucide-rotate-cw',
        tooltip: { text: 'Refaire' },
      },
    ],
    [
      {
        kind: 'clearFormatting',
        icon: 'i-lucide-eraser',
        tooltip: { text: 'Clear formatting' },
      },
    ],

    [
      {
        kind: 'bulletList',
        icon: 'i-lucide-list',
        tooltip: { text: 'Bullet list' },
      },
      {
        kind: 'orderedList',
        icon: 'i-lucide-list-ordered',
        tooltip: { text: 'Ordered list' },
      },
    ],
    ...(selectedNode.value
      ? [
          [
            {
              kind: 'duplicate',
              icon: 'i-lucide-copy',
              pos: selectedNode.value.pos,
              tooltip: { text: 'Duplicate node' },
            },
            {
              kind: 'delete',
              icon: 'i-lucide-trash-2',
              pos: selectedNode.value.pos,
              tooltip: { text: 'Delete node' },
            },
          ],
          [
            {
              kind: 'moveUp',
              icon: 'i-lucide-arrow-up',
              pos: selectedNode.value.pos,
              tooltip: { text: 'Move node up' },
            },
            {
              kind: 'moveDown',
              icon: 'i-lucide-arrow-down',
              pos: selectedNode.value.pos,
              tooltip: { text: 'Move node down' },
            },
          ],
        ]
      : []),
  ]);
};
</script>

<template>
  <div>
    <UEditor
      v-slot="{ editor }"
      v-model="value"
      :extensions="[TableKit.configure({ table: { resizable: true } })]"
      contentType="html"
      class="w-full min-h-48 rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors px-2.5 py-1.5 text-sm gap-1.5 text-highlighted bg-default ring ring-inset ring-accented focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      :editable
    >
      <UEditorToolbar
        v-if="editable"
        :editor="editor"
        :items="getItems(editor)"
        layout="fixed"
      />

      <UEditorDragHandle :editor="editor" @nodeChange="selectedNode = $event" />

      <!-- <UEditorSuggestionMenu
        :editor="editor"
        :items="items"
        :appendTo="appendToBody"
      /> -->
    </UEditor>
  </div>
</template>
