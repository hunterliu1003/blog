import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import StoryCentered from '../StoryCentered'
import TheTags from './'

Vue.component('StoryCentered', StoryCentered)
Vue.component('TheTags', TheTags)

storiesOf('TheTags', module)
  .add('TheTags', withReadme(README, () => ({
    data: () => ({
      tags: ['Vue', 'Vuex', 'Vue router', 'Vuetify'],
    }),
    mounted() {
      console.log(this.tags)
    },
    template: (
      pug
      `StoryCentered
        TheTags(:tags='tags') `
    )
  })))