<template lang="pug">
  v-layout(wrap)
    nuxt-link.the-tag(v-for="tag in tags" :key="tag" :to="'/tags/' + tag" )
      v-chip.white--text(
        :selected="selected"
        color="grey darken-4"
        label
        small
      ) {{ tag }}
</template>

<script>
export default {
  name: 'TheTags',
  props: {
    tags: { type: Array },
    selected: { type: Boolean },
  }
}
</script>

<style lang="stylus" scoped>
  .the-tag
    text-decoration none
</style>

<style lang="stylus" scoped>
  .v-chip:after
    border-color #212121
  .v-chip:hover:after
    background-color #212121
    border none
    cursor pointer
  .v-chip--selected
    box-shadow none
  >>> .v-chip__content
    cursor pointer
</style>
