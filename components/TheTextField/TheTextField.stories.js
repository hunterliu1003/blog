import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import TheTextField from '.'

Vue.component('TheTextField', TheTextField)

storiesOf('TheTextField', module)
  .add('TheTextField', withReadme(README, () => ({
    methods: {
      log() {
        action('TheTextField')()
      },
    },
    template: (
      pug
      `TheTextField `
    )
  })))