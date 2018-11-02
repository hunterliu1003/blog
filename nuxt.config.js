const pkg = require('./package')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: titleChunk => {
      return titleChunk ? `${ titleChunk } | Hunterliu's Blog` : `Hunterliu's Blog`
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/reset.styl',

    /* vuetify start */
    '@/assets/style/app.styl',
    /* vuetify end */

    /* markdown-it start */
      'highlight.js/styles/default.css',
      'highlight.js/styles/monokai-sublime.css',
    /* markdown-it end */

    /* codemirror start */
      'codemirror/lib/codemirror.css',
      'codemirror/theme/monokai.css',
    /* codemirror end */

    '@/assets/style/base.styl',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/filters/date.js',
    '@/plugins/markdown-it',
    { src: '@/plugins/codemirror', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    transpile: [/^vuetify/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.plugins.push(
        new VuetifyLoaderPlugin()
      )
      // if (ctx.isClient) {
        config.plugins.unshift(new LodashModuleReplacementPlugin)
        // rules[2].use[0] is babel-loader
        config.module.rules[2].use[0].options.plugins = ['lodash']
      // }
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
  render: {
    http2: {
      push: true
    }
  }
}
