export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-tiptap-editor'],

  css: ['~/infrastructure/ui/assets/css/main.css'],

  components: { dirs: [{ path: './components', prefix: 'Ui' }] },

  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
});
