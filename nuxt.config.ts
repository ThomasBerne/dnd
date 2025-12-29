// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'infrastructure/devtools',
    'infrastructure/file',
    // 'infrastructure/graphql',
    'infrastructure/nuxt',
    'infrastructure/security',
    'infrastructure/typescript',
    'infrastructure/ui',
    'infrastructure/vite',
    'infrastructure/vueuse',
  ],

  imports: {
    dirs: [
      './infrastructure/*/types',
      './infrastructure/*/composables',

      './layers/*/app/types',
      './layers/*/app/composables',
    ],
  },
});
