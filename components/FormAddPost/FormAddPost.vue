<template lang="pug">
  v-layout(column)
    v-switch(
      v-model="thePost.isShow"
      label="Show"
      color="primary"
    )
    v-text-field(
      v-model="thePost.title"
      label="Title"
      :error="validation.hasError('thePost.title')"
      :error-messages="validation.firstError('thePost.title')"
      color="primary"
      autofocus
    )
    v-combobox.pt-3(
      v-model="thePost.tags"
      label="Tags"
      :filter="filter"
      :items="items"
      :error="validation.hasError('thePost.tags')"
      :error-messages="validation.firstError('thePost.tags')"
      hide-selected
      multiple
      small-chips
      dense
      color="primary"
      :menu-props="{ maxHeight: '200' }"
    )
      template(slot="selection", slot-scope="{ item, parent, selected }")
        v-chip(color="grey darken-4", :selected="selected" label small)
          span.pr-2.white--text {{ item }}
          v-icon(small color="white" @click="parent.selectItem(item)") close
      template(slot="item" slot-scope="{ index, item, parent }")
        v-list-tile-content
          v-chip.white--text(color="grey darken-4" label small) {{ item }}
    p.pt-3
      | Preview Content
      span.ml-2.caption.error--text(v-if="validation.hasError('thePost.previewContent')") {{ validation.firstError('thePost.previewContent') }}
    no-ssr
      codemirror(
        v-model="thePost.previewContent"
        :options="codemirrorOptions"
      )
    ThePostPreview(
      :id="thePost.id"
      :title="thePost.title"
      :lastUpdateTime="thePost.lastUpdateTime"
      :previewContent="thePost.previewContent"
      :tags="thePost.tags"
      :isShow="thePost.isShow"
    )
    p.pt-3
      | Article Content
      span.ml-2.caption.error--text(v-if="validation.hasError('thePost.articleContent')") {{ validation.firstError('thePost.articleContent') }}
    no-ssr
      codemirror(
        v-model="thePost.articleContent"
        :options="codemirrorOptions"
      )
    TheMarkdown.pa-3(
      :markdown-text="thePost.articleContent"
      )
    v-btn(right bottom fixed fab title="送出" @click="submit")
      v-icon(size="20") fas fa-paper-plane
</template>

<script>
import Vue from 'vue'
import TheMarkdown from '@/components/TheMarkdown'
import ThePostPreview from '@/components/ThePostPreview'
import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator
Vue.use(SimpleVueValidation, {
  mode: 'conservative'
})

export default {
  name: 'FormAddPost',
  components: {
    TheMarkdown,
    ThePostPreview
  },
  props: {
    post: { type: Object },
  },
  data: vm => ({
    thePost: vm.post
      ? { ...vm.post }
      : {
        isShow: false,
        title: '',
        tags: ['Vue'],
        previewContent: '',
        articleContent: '',
        lastUpdateTime: Date.now(),
        postTime: Date.now(),
      },
    items: ['Vue', 'Vuex', 'Vue Router', 'Vuetify'],
    codemirrorOptions: {
      tabSize: 4,
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    }
  }),
  validators: {
    'thePost.title': value => Validator.value(value).required(),
    'thePost.tags': value => Validator.value(value).required(),
    'thePost.previewContent': value => Validator.value(value).required(),
    'thePost.articleContent': value => Validator.value(value).required(),
  },
  methods: {
    submit () {
      this.$validate()
        .then(success => {
          if (success) {
            this.$emit('submit', this.thePost)
          }
        })
    },
    filter (item, queryText, itemText) {
      if (item.header) return false
      const hasValue = val => val != null ? val : ''
      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> .v-chip__content
  cursor pointer
</style>