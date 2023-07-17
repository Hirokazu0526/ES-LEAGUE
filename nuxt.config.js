import Sass from 'sass'
import Fiber from 'fibers'
import axios from 'axios'

require("dotenv").config();
const { API_KEY } = process.env;
const { API_URL } = process.env;
const { GOOGLE_ANALYTICS_ID } = process.env;

const baseDir = process.env.BASE_DIR || '/'

export default {
  srcDir: 'src/',
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ES LEAGUE 公式サイト',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - ' + 'ES LEAGUE 公式サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '日本初のセパタクロー国内リーグ ES LEAGUE 公式サイトです。' || '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'セパタクロー,セパタクローリーグ,エスリーグ,エス リーグ,SEPAKTAKRAW,sepaktakraw,セパ,ES LEAGUE,日本初,ESLEAGUE' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'ES LEAGUE' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://es-league.jp' },
      { hid: 'og:title', property: 'og:title', content: 'ES LEAGUE 公式サイト' },
      { hid: 'og:description', property: 'og:description', content: '日本初のセパタクロー国内リーグ ES LEAGUE 公式サイトです' },
      { hid: 'og:image', property: 'og:image', content: 'https://es-league.jp/img/ogp/ogp.jpg' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },

      // { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ES_LEAGUE_Japan' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/android-touch-icon.png' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
    ]
  },
  router: {
    base: baseDir,
    middleware: ['redirect']
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'reseter.css',
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global.js',
    '~/plugins/vuelidate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-microcms-module',
    'nuxt-animejs',
    '@nuxtjs/google-analytics',
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
    ['vue-scrollto/nuxt', {
      /* オプション色々あります。公式サイトから確認できます。 */
      duration: 500,
      offset: -80,
      easing: "ease-in"
    }],
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://es-league.jp',
    defaults: {
      lastmod: new Date(),
      changefreq: 'daily'
    },
    exclude: [
      '/error',
    ],
    routes:[
      '/match/752',
      '/team/483',
      '/team/493',
      '/team/202',
      '/team/703',
      '/team/292',
      '/team/18288jq802t',
      '/team/506',
    ]
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700', 'Noto+Serif+JP:200'] 
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
    },
  },
  // トランジション設定
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  
  env: {
    API_KEY ,
    API_URL,
    GOOGLE_ANALYTICS_ID,
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
    apiUrl: API_URL,
    googleAnalytics: {
      id: GOOGLE_ANALYTICS_ID
    }
  },
  googleAnalytics: {
    id: GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },


  generate: {
    fallback: true,
  },
}
