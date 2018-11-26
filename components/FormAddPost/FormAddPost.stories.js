import Vue from 'vue'

import centerDecorator from '@/plugins/storybook/centerDecorator'
import { storiesOf } from '@storybook/vue'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import FormAddPost from './'

Vue.component('FormAddPost', FormAddPost)

storiesOf('FormAddPost', module)
  .addDecorator(centerDecorator)
  .add('FormAddPost', withReadme(README, () => ({
    template: (
      pug
      `FormAddPost `
    )
  })))