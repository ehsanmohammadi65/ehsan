// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
   icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt', '@nuxt/icon', '@fullpage/nuxt-fullpage',],  vite: {
    plugins: [
      tailwindcss(),
    ],
    
  },css: ['~/assets/css/main.css'],
  

})