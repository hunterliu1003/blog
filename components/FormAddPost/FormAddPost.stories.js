import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import FormAddPost from './'

Vue.component('FormAddPost', FormAddPost)

storiesOf('FormAddPost', module)
  .add('FormAddPost', withReadme(README, () => ({
    methods: {
      log() {
        action('FormAddPost')()
      },
    },
    template: (
      pug
      `FormAddPost `
    )
  })))