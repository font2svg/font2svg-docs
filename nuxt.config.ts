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
    serverBundle: 'remote',
    clientBundle: {
      icons: [
        'lucide:circle-arrow-right',
        'lucide:arrow-up-right',
        'lucide:circle-dot',
        'lucide:github',
        'lucide:info',
        'lucide:play',
        'lucide:rocket',
        'lucide:star',
        'noto:construction',
        'vscode-icons:file-type-docker',
        'vscode-icons:file-type-yaml',
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
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
