import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import TheTags from './'

Vue.component('TheTags', TheTags)

storiesOf('TheTags', module)
  .add('TheTags', withReadme(README, () => ({
    data: () => ({
      tags: ['Vue', 'Vuex', 'Vue router', 'Vuetify'],
    }),
    template: (
      pug
      `TheTags(:tags='tags') `
    )
  })))