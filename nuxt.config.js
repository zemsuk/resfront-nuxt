export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'resfront',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", type:"text/css", href:"/css/grid.css"},
      // { rel:"stylesheet", href:"/css/style.css"},
      { rel:"stylesheet", href:"http://localhost/css/main.css"},
    ],
    script: [
      { src: "/js/main.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/static/css/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://resback.ezesoft.uk/api/",
  },
  publicRuntimeConfig: {
    baseURL: 'http://localhost:3000/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: '~/components/loading.vue'
}
