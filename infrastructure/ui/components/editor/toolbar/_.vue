<script lang="ts" setup>
import type { Editor } from '@tiptap/vue-3';

const editor = defineModel<Editor>({ required: true });

type StyleItem = {
  tooltip: string;
  visible?: boolean;
  action: () => void;
  disabled?: boolean;
  icon?: string;
  active?: boolean;
};

type StyleSection = {
  title: string;
  items: StyleItem[];
};

const sections = computed((): StyleSection[] => [
  {
    title: 'Contrôles',
    items: [
      {
        tooltip: 'Annuler',
        icon: 'lucide:corner-up-left',
        action: () => editor.value.chain().focus().undo().run(),
        disabled: !editor.value.can().chain().focus().undo().run(),
      },
      {
        tooltip: 'Rétablir',
        icon: 'lucide:corner-up-right',
        action: () => editor.value.chain().focus().redo().run(),
        disabled: !editor.value.can().chain().focus().redo().run(),
      },
      {
        tooltip: 'Effacer le formatage',
        icon: 'lucide:eraser',
        action: () => editor.value.chain().focus().unsetAllMarks().run(),
      },
    ],
  },
  {
    title: 'Alignement',
    items: [
      {
        tooltip: 'Aligner à gauche',
        icon: 'lucide:align-left',
        action: () => editor.value.chain().focus().setTextAlign('left').run(),
        active: editor.value.isActive({ textAlign: 'left' }),
      },
      {
        tooltip: 'Aligner au centre',
        icon: 'lucide:align-center',
        action: () => editor.value.chain().focus().setTextAlign('center').run(),
        active: editor.value.isActive({ textAlign: 'center' }),
      },
      {
        tooltip: 'Aligner à droite',
        icon: 'lucide:align-right',
        action: () => editor.value.chain().focus().setTextAlign('right').run(),
        active: editor.value.isActive({ textAlign: 'right' }),
      },
      {
        tooltip: 'Justifier',
        icon: 'lucide:align-justify',
        action: () =>
          editor.value.chain().focus().setTextAlign('justify').run(),
        active: editor.value.isActive({ textAlign: 'justify' }),
      },
    ],
  },
  {
    title: 'Style',
    items: [
      {
        tooltip: 'Gras',
        icon: 'lucide:bold',
        action: () => editor.value.chain().focus().toggleBold().run(),
        active: editor.value.isActive('bold'),
      },
      {
        tooltip: 'Italique',
        icon: 'lucide:italic',
        action: () => editor.value.chain().focus().toggleItalic().run(),
        active: editor.value.isActive('italic'),
      },
      {
        tooltip: 'Barré',
        icon: 'lucide:strikethrough',
        action: () => editor.value.chain().focus().toggleStrike().run(),
        active: editor.value.isActive('strike'),
      },
      {
        tooltip: 'Souligné',
        icon: 'lucide:underline',
        action: () => editor.value.chain().focus().toggleUnderline().run(),
        active: editor.value.isActive('underline'),
      },
      {
        tooltip: 'Sous-script',
        icon: 'lucide:subscript',
        action: () => editor.value.chain().focus().toggleSubscript().run(),
        active: editor.value.isActive('subscript'),
      },
      {
        tooltip: 'Sur-script',
        icon: 'lucide:superscript',
        action: () => editor.value.chain().focus().toggleSuperscript().run(),
        active: editor.value.isActive('superscript'),
      },
    ],
  },
  {
    title: 'Listes & autres',
    items: [
      {
        tooltip: 'Liste à puces',
        icon: 'lucide:list',
        action: () => editor.value.chain().focus().toggleBulletList().run(),
        active: editor.value.isActive('bulletList'),
      },
      {
        tooltip: 'Liste numérotée',
        icon: 'lucide:list-ordered',
        action: () => editor.value.chain().focus().toggleOrderedList().run(),
        active: editor.value.isActive('orderedList'),
      },
      {
        tooltip: 'Citation',
        icon: 'lucide:quote',
        action: () => editor.value.chain().focus().toggleBlockquote().run(),
        active: editor.value.isActive('blockquote'),
      },
      {
        tooltip: 'Séparateur horizontal',
        icon: 'lucide:separator-horizontal',
        action: () => editor.value.chain().focus().setHorizontalRule().run(),
        active: editor.value.isActive('horizontalRule'),
      },
    ],
  },
  {
    title: 'Tableaux',
    items: [
      {
        tooltip: 'Ajouter un tableau',
        icon: 'lucide:table-2',
        action: () =>
          editor.value
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run(),
      },
      {
        tooltip: 'Supprimer le tableau',
        icon: 'lucide:trash-2',
        action: () => editor.value.chain().focus().deleteTable().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Ajouter une ligne au-dessus',
        icon: 'lucide:arrow-up-to-line',
        action: () => editor.value.chain().focus().addRowBefore().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Ajouter une ligne en-dessous',
        icon: 'lucide:arrow-down-to-line',
        action: () => editor.value.chain().focus().addRowAfter().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Ajouter une colonne à gauche',
        icon: 'lucide:arrow-left-to-line',
        action: () => editor.value.chain().focus().addColumnBefore().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Ajouter une colonne à droite',
        icon: 'lucide:arrow-right-to-line',
        action: () => editor.value.chain().focus().addColumnAfter().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Supprimer une ligne',
        icon: 'lucide:table-rows-split',
        action: () => editor.value.chain().focus().deleteRow().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Supprimer une colonne',
        icon: 'lucide:table-columns-split',
        action: () => editor.value.chain().focus().deleteColumn().run(),
        visible: editor.value.isActive('table'),
      },
      {
        tooltip: 'Fusionner/Diviser la cellule',
        icon: 'lucide:combine',
        action: () => editor.value.chain().focus().mergeOrSplit().run(),
        visible: editor.value.isActive('table'),
      },
    ],
  },
]);
</script>

<template>
  <div
    class="flex gap-2 flex-wrap items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
  >
    <template v-for="(section, index) in sections" :key="index">
      <div>
        <div class="font-bold">{{ section.title }}</div>
        <div class="flex gap-1 my-1">
          <UTooltip
            v-for="(item, key) in section.items.filter(
              (i) => i.visible !== false,
            )"
            :key
            :text="item.tooltip"
          >
            <UButton
              :icon="item.icon"
              :disabled="item.disabled"
              :variant="
                typeof item.active !== 'boolean' || item.active
                  ? 'solid'
                  : 'link'
              "
              @click="item.action"
            />
          </UTooltip>
        </div>
      </div>

      <USeparator
        v-if="index + 1 < sections.length"
        orientation="vertical"
        class="h-12"
      />
    </template>
  </div>
</template>
