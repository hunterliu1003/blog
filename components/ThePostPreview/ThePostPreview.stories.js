import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import StoryCentered from '../StoryCentered'
import ThePostPreview from './'

Vue.component('StoryCentered', StoryCentered)
Vue.component('ThePostPreview', ThePostPreview)

storiesOf('ThePostPreview', module)
  .add('ThePostPreview default', withReadme(README, () => ({
    data: vm => ({
      thePost: {
        id: '1',
        title: 'Article111',
        lastUpdateTime: '25. Oct 2018',
        previewContent: 'Preview Content',
        tags: ['vue', 'nuxt 2', 'vuetify'],
        isShow: true
      }
    }),
    methods: {
      log() {
        action('ThePostPreview')()
      },
    },
    template: (
      pug
      `StoryCentered
        ThePostPreview(
          style="width: 500px;"
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
    data: vm => ({
      thePost: {
        id: '1',
        title: 'Article111',
        lastUpdateTime: '25. Oct 2018',
        previewContent: 'Preview Content',
        tags: ['vue', 'nuxt 2', 'vuetify'],
        isShow: true
      }
    }),
    methods: {
      log() {
        action('ThePostPreview')()
      },
    },
    template: (
      pug
      `StoryCentered
        ThePostPreview(
          style="width: 500px;"
          :id="thePost.id"
          :title="thePost.title"
          :lastUpdateTime="thePost.lastUpdateTime"
          :previewContent="thePost.previewContent"
          :tags="thePost.tags"
          :isShow="thePost.isShow"
          isAdmin
        ) `
    )
  })))