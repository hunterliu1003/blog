import Vue from 'vue'

import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItPlayground from 'markdown-it-playground'

import markdownItHighlightjs from './markdownItHighlightjs'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix: 'ht-'
})

md.use(markdownItAttrs)
md.use(markdownItPlayground)
md.use(markdownItHighlightjs)

Vue.use({
  install (Vue, options) {
    Vue.prototype.$md = md
  }
})