import Vue from 'vue'

import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItPlayground from 'markdown-it-playground'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix: 'blog-'
})

md.use(markdownItAttrs)
md.use(markdownItPlayground)

Vue.use({
  install (Vue, options) {
    Vue.prototype.$md = md
  }
})