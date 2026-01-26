<script setup lang="ts">
import TextAlign from '@tiptap/extension-text-align';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';

const value = defineModel<string>({ default: '' });

const editor = useEditor({
  content: value.value,
  extensions: [
    TiptapStarterKit,
    TableKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Subscript,
    Superscript,
  ],
  onUpdate: ({ editor }) => (value.value = editor.getHTML()),
});

onMounted(() => {
  if (editor.value && editor.value.getHTML() !== value.value)
    editor.value.commands.setContent(value.value);
});

watch(value, (newValue) => {
  if (editor.value && editor.value.getHTML() !== newValue)
    editor.value.commands.setContent(newValue);
});

onBeforeUnmount(() => unref(editor)?.destroy());
</script>

<template>
  <UFormField
    data-slot="root"
    class="w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors px-2.5 py-1.5 text-sm gap-1.5 text-highlighted bg-default ring ring-inset ring-accented focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
  >
    <UiEditorToolbar v-if="editor" v-model="editor" />

    <UiEditorDragHandle v-if="editor" v-model="editor" />

    <TiptapEditorContent
      class="d-tiptap-editor-content appearance-none!"
      rows="10"
      :editor
    >
    </TiptapEditorContent>
  </UFormField>
</template>

<style lang="scss">
/* stylelint-disable selector-class-pattern */
/* stylelint-disable no-descending-specificity */
.d-tiptap-editor-content {
  .tiptap {
    min-height: 8rem;
    outline: none !important;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  hr {
    margin: 1rem 0;
    color: var(--color-gray-500);
  }

  p {
    margin: 0.15rem 0;
    word-break: break-all;
  }

  a {
    color: var(--color-green-500);

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
    padding-left: 0;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
    padding-left: 0;
  }

  img {
    border-radius: 1rem;
    margin: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid var(--color-neutral-500);
      padding: 0 0.25rem;
    }
  }

  code {
    background-color: var(--color-gray-800);
    color: var(--color-white);
    padding: 0.2rem 0.4rem;
    border-radius: 0.375rem;
  }

  blockquote {
    border-left: 4px solid var(--color-green-500);
    padding-left: 1rem;
    color: var(--color-dimmed);
    margin: 0.5rem 0;
  }
}
</style>
