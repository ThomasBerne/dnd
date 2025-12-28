// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'infrastructure/file',
    'infrastructure/typescript',
    'infrastructure/ui',
    'infrastructure/vite',
  ],

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@vueuse/nuxt'],
  experimental: { typedPages: true },

  imports: {
    dirs: [
      './infrastructure/*/types',
      './infrastructure/*/composables',

      './layers/*/types',
      './layers/*/composables',
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ['~/infrastructure/ui/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',
});
