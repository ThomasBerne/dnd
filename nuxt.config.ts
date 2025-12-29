// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'infrastructure/devtools',
    'infrastructure/file',
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

      './layers/*/types',
      './layers/*/composables',
    ],
  },
});
