<template lang="pug">
  .the-markdown(v-html="md")
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  props: {
    markdownText: {
      type: String,
      required: true
    }
  },
  data: vm => ({
    md: vm.markdownText,
    delay: 1000,
  }),
  watch: {
    markdownText () {
      this.updateMarkdown()
    }
  },
  created () {
    this.md = this.$md.render(this.markdownText)
    this.updateMarkdown = debounce(() => {
      this.md = this.$md.render(this.markdownText)
    }, this.delay)
  },
}
</script>

<style lang="stylus" scoped>
@import '~vuetify/src/stylus/settings/_colors'

.the-markdown
  width 100%
>>> a
  color: $light-blue.darken-1
  &:hover
    color: $light-blue.lighten-2
>>> h1, >>> h2, >>> h3, >>> h4, >>> h5, >>> h6, >>> p
  word-wrap break-word

>>> h1, >>> h2, >>> h3, >>> h4, >>> h5, >>> h6
  color #41B883
  padding 5px 0
>>> h1
  font-size 2.6em
>>> h2
  font-size 2.2em
>>> h3
  font-size 2.0em
>>> h4
  font-size 1.7em
>>> h5
  font-size 1.5em
>>> h6
  font-size 1.4em

>>> code:before, >>> code:after
    content none

>>> p code,
>>> li code,
>>> h1 code,
>>> h2 code,
>>> h3 code,
>>> h4 code,
>>> h5 code,
>>> h6 code
  color #41B883
  padding 0 5px
  margin 0 5px

>>> pre,
>>> iframe
  padding 10px 0

>>> p
  font-size 1.2em
  margin 0
  color: $grey.lighten-2

>>> ul,
>>> ol
  list-style-position inside

>>> li
  font-size 1.2em
  color: $grey.lighten-2

>>> blockquote
  border-left: 4px solid $green.lighten-2
  background-color: $grey.darken-3
  padding 5px
  margin 5px 0
</style>