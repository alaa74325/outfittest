// ****** START:: IMPORTING LOCALES FILES ****** //
import arLocales from './locales/ar-AR.js'
import enLocales from './locales/en-US.js'
// ****** END:: IMPORTING LOCALES FILES ****** //

// import colors from 'vuetify/es5/util/colors'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  ssr: true,

  head: {
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // ****** START:: IMPORTING MAIN SCSS STYLES ****** //
    '@/assets/sass/main.scss',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    // ****** END:: IMPORTING MAIN SCSS STYLES ****** //
  ],

  script: [
    // ****** START:: IMPORTING BOOTSTRAP SCRIPT FILE ****** //
    '@bootstrap.bundle.min.js',
    // ****** END:: IMPORTING BOOTSTRAP SCRIPT FILE ****** //
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // ****** Start:: Importing Main Script File ****** //
    '@/plugins/main.js',
    // ****** End:: Importing Main Script File ****** //

    // ****** Start:: Importing Ant-Design File ****** //
    '@/plugins/antd-ui.js',
    // ****** End:: Importing Ant-Design File ****** //

    // ****** Start:: Importing Vue-DateTime File ****** //
    '@/plugins/vue-datetime.js',
    // ****** End:: Importing Vue-DateTime File ****** //

    // "@/plugins/izi-toast.js",

    // ****** Start:: Importing AOS File ****** //
    '@/plugins/aos.js',
    // ****** End:: Importing AOS File ****** //

    // ****** Start:: Importing Font Awesome File ****** //
    { src: '@/plugins/font-awesome.js' },
    // ****** End:: Importing Font Awesome File ****** //

    { src: '@/plugins/slick-carousel.js', ssr: false },

    // ****** Start:: Importing V-Owl Carousel File ****** //
    { src: '@/plugins/v-owl.js', ssr: false },
    // ****** End:: Importing V-Owl Carousel File ****** //

    // ****** Start:: Importing Bootstrap ****** //
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      mode: 'client',
    },
    // ****** End:: Importing Bootstrap ****** //
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    'nuxt-izitoast',

    // ===== END:: PROJECT MODULES
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'عربي ',
            code: 'ar',
            iso: 'ar-AR',
            file: 'ar-AR.js',
            dir: 'rtl',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
            dir: 'ltr',
          },
        ],
        lazy: true,
        langDir: 'locales/',
        vueI18n: {
          locale: 'en',
          fallbackLocale: 'en',
        },
        defaultLocale: 'en',
        detectBrowserLanguage: false,
      },
    ],
    // "@bootstrap/dist/js/bootstrap.js",
  ],

  styleResources: {
    scss: [
      '@/assets/sass/abstracts/_mixins.scss',
      '@/assets/sass/abstracts/_variables.scss',
    ],
  },

  izitoast: {
    position: 'bottomCenter',
    transitionIn: 'bounceInTop',
    transitionOut: 'fadeOutBottom',
    timeout: 2000,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://outfit.phpv8.aait-d.com/api/',

    headers: {
      common: {
        'cache-control': 'cache-control',
        Accept: 'application/json',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  router: {
    mode: 'history',
    base: '/',
    // extendRoutes(routes) {
    //     routes.push({
    //         path: '*',
    //         redirect: '/',
    //     }, {
    //         path: '/en',
    //         redirect: '/',
    //     })
    // },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3,
    //     },
    //   },
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: true,
  },

  server: {
    port: 3000,
  },

  env: {
    baseUrl: process.env.baseUrl || '',
  },
}
