<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
});

const title = 'Nuxt Starter Template';
const description =
  'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: undefined,
  twitterImage: undefined,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <UApp class="bg-red-500">
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
    <UMain class="mb-16 mt-12 print:m-0 w-full px-2 md:px-16">
      <NuxtPage />
    </UMain>
  </UApp>
</template>
