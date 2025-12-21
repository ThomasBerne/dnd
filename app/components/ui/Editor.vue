<script setup lang="ts">
import type { EditorToolbarItem } from '@nuxt/ui';

const { editable = true } = defineProps<{ editable?: boolean }>();

const value = defineModel<string>({ default: '' });

const items: EditorToolbarItem[][] = [
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
    {
      kind: 'mark',
      mark: 'strike',
      icon: 'i-lucide-strikethrough',
      tooltip: { text: 'Strikethrough' },
    },
  ],
];
</script>

<template>
  <UEditor
    v-slot="{ editor }"
    v-model="value"
    contentType="markdown"
    class="w-full min-h-21"
    :editable
  >
    <UEditorToolbar
      v-if="editable"
      :editor="editor"
      :items="items"
      layout="fixed"
    />
  </UEditor>
</template>
