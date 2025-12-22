export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@nuxt/hints/runtime/hydration/component',
        'dompurify',
        '@vueuse/core',
        'html-to-image',
        '@nuxt/ui/utils/editor',
      ],
    },
  },
});
