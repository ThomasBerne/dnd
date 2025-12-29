<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'fr',
  },
});

const title = 'Générateur de cartes D&D';
const description =
  'Générez facilement des cartes pour vos parties de Donjons & Dragons avec notre outil en ligne simple et rapide. Personnalisez vos cartes selon vos besoins et imprimez-les en haute qualité.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/dungeons-dragons-artwork.avif',
  ogUrl: 'https://dnd-kappa-one.vercel.app',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/images/dungeons-dragons-artwork.avif',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <UApp>
    <UHeader class="print:hidden">
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain
      class="mb-16 pt-12 print:p-0 print:m-0 w-full px-2 md:px-16 light:bg-slate-100 print:bg-transparent!"
    >
      <NuxtPage />

      <UButton
        size="xl"
        icon="lucide:move-up"
        class="rounded-full fixed z-50 bottom-4 right-4 shadow-2xl print:hidden"
        @click="useScrollTo('body')"
      ></UButton>
    </UMain>
  </UApp>
</template>
