const pkg = require('./package')
const { uniq, flatten } = require('lodash')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

// import { db } from './plugins/firebase'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES'
  ? {
      router: {
        base: '/ironman-blog/'
      }
    }
  : {}

const faviconPath = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/ironman-blog/favicon.ico' : '/favicon.ico'

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
      { rel: 'icon', type: 'image/x-icon', href: faviconPath },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41B883' },

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
    '@/plugins/filters/date',
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
      config.plugins.unshift(new LodashModuleReplacementPlugin)
      // rules[2].use[0] is babel-loader
      config.module.rules[2].use[0].options.plugins = ['lodash']
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },

  ...routerBase,

  generate: {
    dir: (process.env.DEPLOY_ENV === 'GH_PAGES') ? 'ironman-blog' : 'dist',
    routes: function (callback) {
      db.collection('posts').where('isShow', '==', true).orderBy('postTime', 'desc').get()
        .then(({ docs }) => docs)
        .then(posts => {
          let routes = []
          posts.forEach(post => {
            routes.push('/posts/' + post.id )
          })

          let allTags = []
          posts.forEach(post => {
            allTags.push(post.data().tags)
          })
          allTags = uniq(flatten(allTags)).forEach(tag => {
            routes.push('/tags/' + tag)
          })

          let pageLength = Math.ceil(posts.length / 10)
          for (let i = 1; i <= pageLength; i++) {
            routes.push('/pages/' + i)
          }
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
