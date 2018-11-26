import Vue from 'vue'
import Vuex from 'vuex'

import centerDecorator from '@/plugins/storybook/centerDecorator'
import { storiesOf } from '@storybook/vue'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import { db } from '@/plugins/firebase'

import ThePostPreview from './'

Vue.use(Vuex)

Vue.component('ThePostPreview', ThePostPreview)

storiesOf('ThePostPreview', module)
  .addDecorator(centerDecorator)
  .add('ThePostPreview default', withReadme(README, () => ({
    data: () => ({
      thePost: {}
    }),
    mounted () {
      db.collection('posts').doc('V7Wzgn3vWIHLxJbrkF97').get()
        .then(doc => {
          this.thePost = {
            id: doc.id,
            ...doc.data()
          }
        })
    },
    template: (
      pug
      `ThePostPreview(
        :id="thePost.id"
        :title="thePost.title"
        :lastUpdateTime="thePost.lastUpdateTime"
        :previewContent="thePost.previewContent"
        :tags="thePost.tags"
        :isShow="thePost.isShow"
      ) `
    )
  })))
  .add('ThePostPreview admin', withReadme(README, () => ({
    store: new Vuex.Store({
      actions: {
        'post/setPost'() {
          console.log('dispatch: post/setPost')
        }
      }
    }),
    data: () => ({
      thePost: {}
    }),
    mounted () {
      db.collection('posts').doc('V7Wzgn3vWIHLxJbrkF97').get()
        .then(doc => {
          this.thePost = {
            id: doc.id,
            ...doc.data()
          }
        })
    },
    template: (
      pug
      `ThePostPreview(
        :id="thePost.id"
        :title="thePost.title"
        :lastUpdateTime="thePost.lastUpdateTime"
        :previewContent="thePost.previewContent"
        :tags="thePost.tags"
        :isShow="thePost.isShow"
        :isAdmin="true"
      ) `
    )
  })))