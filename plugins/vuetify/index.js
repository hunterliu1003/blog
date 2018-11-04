import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'

import theme from '@/vuetify.config.js'

Vue.use(Vuetify, {
  theme,
  components: {
    VLayout
  },
})
