// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg',
        },
      ],
    },
  },
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  icon: {
    serverBundle: 'auto',
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/getting-started',
        '/getting-started/introduction',
        '/getting-started/installation',
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  compatibilityDate: '2024-07-17',
})
