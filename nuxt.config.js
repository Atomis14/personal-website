export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3010
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Michel Sabbatini - Fullstack Web Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex' },
      { hid: 'description', name: 'description', content: 'Michel Sabbatini - Fullstack Web Developer and Computer Science Student @ University of Zurich' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes: 'image/png', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' }
      /* { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;800&family=Playfair+Display:wght@500' } */
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/styles/mediaqueries.scss',
      '~/assets/styles/definitions.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // eslint
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  image: {

  }
};
