<template lang="pug">
  v-container.error-page
    h1 Oop, something went wrong!
    p Back to&nbsp;
      a(href="/") safety
      | &nbsp;!
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
a
  text-decoration none
  color red

</style>


