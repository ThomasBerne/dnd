export default defineNuxtConfig({
  modules: [
    [
      'nuxt-electron',
      {
        build: [
          {
            // Main-Process entry file of the Electron App.
            entry: 'infrastructure/electron/main.ts',
          },
        ],
        disableDefaultOptions: true,
      },
    ],
  ],
});
