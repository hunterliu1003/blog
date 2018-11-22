import Vue from 'vue'

import centerDecorator from '@/plugins/storybook/centerDecorator'
import { storiesOf } from '@storybook/vue'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import { db } from '@/plugins/firebase'

import TheMarkdown from './'

Vue.component('TheMarkdown', TheMarkdown)

storiesOf('TheMarkdown', module)
  .addDecorator(centerDecorator)
  .add('TheMarkdown', withReadme(README, () => ({
    data: vm => ({
      md: ''
    }),
    mounted () {
      db.collection('posts').doc('V7Wzgn3vWIHLxJbrkF97').get()
        .then(doc => {
          this.md = doc.data().articleContent
        })
    },  
    template: (
      pug
      `TheMarkdown(:markdown-text='md') `
    )
  })))