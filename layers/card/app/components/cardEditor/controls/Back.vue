<script lang="ts" setup>
const card = defineModel<Card>({ required: true });
</script>

<template>
  <div class="flex flex-col gap-6">
    <UFormField label="Format">
      <label class="flex gap-2 items-center w-fit">
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
          description="SVG, PNG, JPG or GIF (max. 2MB)"
          class="w-full min-h-48"
        />
      </UFormField>
      <label class="flex gap-2 items-center">
        Remplir l'espace
        <USwitch v-model="card.imageContain" />
        Afficher l'image en entier
      </label>
      <label class="flex gap-2 items-center">
        <USwitch v-model="card.hideFrame" />
        Masquer le cadre
      </label>
    </template>

    <UFormField v-else label="Description">
      <UiEditor v-model="card.backDescription" class="w-full min-h-48" />
    </UFormField>
  </div>
</template>
