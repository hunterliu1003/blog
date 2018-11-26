<template lang="pug">
  v-layout(column justify-center align-center fill-height)
    h1.headline Oop, something went wrong!
    p Back to&nbsp;
      nuxt-link.link.headline(to="/") home page
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style lang="stylus" scoped>
.error-page
  text-align center
  height 100%
  display flex
  flex-direction column
  justify-content center
</style>