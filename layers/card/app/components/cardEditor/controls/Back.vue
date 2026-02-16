<script lang="ts" setup>
const card = defineModel<Card>({ required: true });
</script>

<template>
  <div class="flex flex-col gap-6">
    <UFormField label="Format">
      <label class="flex gap-2 items-center w-fit font-normal!">
        Image
        <USwitch
          :modelValue="card.backType === CardBackType.Description"
          @update:modelValue="
            (value) => {
              card.backType = value
                ? CardBackType.Description
                : CardBackType.Image;
            }
          "
        />
        Description
      </label>
    </UFormField>

    <template v-if="card.backType === CardBackType.Image">
      <UFormField label="Image">
        <UFileUpload
          v-model="card.image"
          label="Image"
          description="SVG, PNG, JPG or WEBP (max. 1 Mo)"
          class="w-full min-h-48"
          accept="image/*"
        />
      </UFormField>
      <UFormField label="Affichage de l'image">
        <label class="flex gap-2 items-center font-normal!">
          Remplir l'espace
          <USwitch v-model="card.imageContain" />
          Afficher l'image en entier
        </label>
      </UFormField>
      <UFormField label="Cadre" orientation="vertical">
        <label class="flex gap-2 font-normal!">
          <USwitch v-model="card.hideFrame" /> Masquer le cadre de la carte
        </label>
      </UFormField>
    </template>

    <UFormField v-else label="Description">
      <UiEditor v-model="card.backDescription" class="w-full min-h-48" />
    </UFormField>
  </div>
</template>
