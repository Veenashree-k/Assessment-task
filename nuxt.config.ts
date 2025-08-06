// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-08-03', 
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: [
    'swiper/swiper-bundle.css',
    'boxicons/css/boxicons.min.css'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css'
        }
      ]
    }
  }
});
