import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import TheTextField from './'

Vue.component('TheTextField', TheTextField)

storiesOf('TheTextField', module)
  .addDecorator(centered)
  .add('TheTextField', withReadme(README, () => ({
    methods: {
      log() {
        action('TheTextField')()
      },
    },
    template: (
      pug
      `v-app(dark)
        v-container(fluid)
          TheTextField `
    )
  })))