export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [// https://github.com/nuxt-modules/plausible
  '@nuxtjs/plausible', // https://github.com/nuxt/devtools
  '@nuxt/devtools', "@nuxtjs/tailwindcss"],
  nitro: {
    compatibilityDate: '2024-12-02',
  },
  // Ensure TypeScript is set to use ES modules in tsconfig.json
  // Check if any modules need to be imported differently
})
