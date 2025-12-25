// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['infrastructure/vite', 'infrastructure/typescript'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/hints',
    '@vueuse/nuxt',
  ],
  experimental: { typedPages: true },

  imports: { dirs: ['~/types'] },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',
});
