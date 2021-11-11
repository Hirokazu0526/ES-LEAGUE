import Sass from 'sass'
import Fiber from 'fibers'
require("dotenv").config();
const { API_KEY } = process.env;
const { API_URL } = process.env;

export default {
  srcDir: 'src/',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'es-league',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reseter.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-microcms-module',
    'nuxt-animejs',
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    'nuxt-webfontloader',
  ],
  webfontloader: {
    google: {
      families: ['Alegreya SC', 'Red Rose:400,700', 'Noto+Sans+JP:400,700'] 
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { proxy: true },

  // proxy: {
  //   '/api/': { target: 'http://192.168.1.8:3000/', pathRewrite: {'^/api/': ''} }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  // トランジション設定
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  
  env: {
    API_KEY ,
    API_URL
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
    apiUrl: API_URL,
   }
}
