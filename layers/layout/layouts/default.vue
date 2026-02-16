<script setup lang="ts">
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'fr',
  },
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
      class="pt-12 print:p-0 print:m-0 w-full px-2 pb-16 print:pb-0 light:bg-slate-100 print:bg-transparent!"
    >
      <UContainer>
        <NuxtPage />
      </UContainer>

      <UButton
        size="xl"
        icon="lucide:move-up"
        class="rounded-full fixed z-50 bottom-4 right-4 shadow-2xl print:hidden"
        @click="useScrollTo('body')"
      />
    </UMain>
  </UApp>
</template>
