export default defineNuxtConfig({
  modules: ['nuxt-security'],

  security: {
    headers: {
      contentSecurityPolicy: false,
    },
  },
});
