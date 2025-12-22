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
                { label: 'Aptitudes', value: CardType.Spell },
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
      </div>
    </UCard>
  </div>
</template>
