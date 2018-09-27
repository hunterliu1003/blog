import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.component('nuxt-link', {
  // functional: true,
  render (createElement, context) {
    let allClass = {}
    let arrClass = context.data.staticClass
      ? context.data.staticClass.split(' ')
      : []
    arrClass.forEach(theClass => {
      allClass[theClass] = true
    })
    return createElement('a', { class: allClass }, context.children)
  }
})
Vue.component('no-ssr', {
  // functional: true,
  render (createElement, context) {
    return context.children
  }
})

/* start Css resources */
import '!!style-loader!css-loader!stylus-loader!../assets/style/reset.styl'
import '!!style-loader!css-loader!stylus-loader!../assets/style/base.styl'
/* end Css resources */

setOptions({
  name: 'nuxt blog',
  url: 'https://github.com/hunterliu1003/blog',
  addonPanelInRight: true
})

const req = require.context('../components', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
