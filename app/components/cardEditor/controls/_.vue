<script lang="ts" setup>
const card = defineModel<Card>({ required: true });
</script>

<template>
  <div class="flex-1">
    <h2 class="font-bold text-2xl">Contrôles</h2>

    <UCard class="h-full">
      <div class="flex flex-col gap-3">
        <div class="flex gap-4">
          <UFormField label="Titre" class="w-full">
            <UInput v-model="card.name" class="w-full" />
          </UFormField>
          <UFormField label="Type de carte" class="w-full">
            <USelect
              v-model="card.type"
              :items="[
                { label: 'Objet magique', value: CardType.MagicItem },
                { label: 'Objet', value: CardType.Item },
                { label: 'Sort', value: CardType.Spell },
                { label: 'Aptitudes', value: CardType.Skill },
                { label: 'Arme', value: CardType.Weapon },
                { label: 'Armure', value: CardType.Armor },
              ]"
              class="w-full"
            />
          </UFormField>
        </div>

        <CardEditorControlsMagicObject
          v-if="card.type === CardType.MagicItem"
          v-model="card"
        />
        <CardEditorControlsSpell
          v-else-if="card.type === CardType.Spell"
          v-model="card"
        />
        <CardEditorControlsItem
          v-else-if="card.type === CardType.Item"
          v-model="card"
        />

        <UFormField label="Description">
          <UiEditor v-model="card.description" class="w-full min-h-21" />
        </UFormField>

        <UFileUpload
          v-model="card.image"
          label="Image"
          description="SVG, PNG, JPG or GIF (max. 2MB)"
          class="w-full min-h-48"
        />
        <label class="flex gap-2 items-center">
          Remplir l'espace
          <USwitch v-model="card.imageContain" />
          Afficher l'image en entier
        </label>
      </div>
    </UCard>
  </div>
</template>
