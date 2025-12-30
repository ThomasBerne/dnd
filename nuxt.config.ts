// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'infrastructure/devtools',
    'infrastructure/file',
    'infrastructure/nuxt',
    'infrastructure/prisma',
    'infrastructure/security',
    'infrastructure/typescript',
    'infrastructure/ui',
    'infrastructure/vite',
    'infrastructure/vueuse',
  ],

  imports: {
    dirs: ['./infrastructure/*/types', './layers/*/app/types'],
  },

  nitro: {
    imports: {
      dirs: ['./layers/*/server/services', './layers/*/server/controllers'],
    },
  },
});
