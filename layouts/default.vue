<template lang="pug">
  v-app(dark)
    v-content.default-layout
      v-layout.default-nav.main(row wrap align-content-center)
        v-container.text-xs-center.pa-3
          nuxt-link.link.white--text(to="/")
            v-avatar(size="175px")
              img.img-circle.elevation-7.mb-1(src="~/static/v.png")
            h1.display-1.mt-2 Hunterliu
        v-container.pa-0
          v-layout(column align-center)
            nuxt-link.link.default-link.white--text.font-ch.pa-1(to="/about") 關於我
            nuxt-link.link.default-link.white--text.font-ch.pa-1(to="/posts") 文章列表
            nuxt-link.link.default-link.white--text.font-ch.pa-1(to="/tags") 標籤列表
          v-layout.mt-4(justify-center)
            p.subheading.grey--text © 2018. All rights reserved.
      v-layout.default-content
        nuxt
</template>

<style lang="stylus">
  @import '~vuetify/src/stylus/settings/_variables'

  .default-layout
    padding 0
  .default-nav
    width 350px
    padding 20px
    position fixed
    height 100%
  .default-content
    padding 40px 30px
    margin-left 350px
    height 100%
  .default-link
    font-size 20px
    text-align center
    width 80%
  @media $display-breakpoints.md-only
    .default-nav
      width 300px
    .default-content
      margin-left 300px
  @media $display-breakpoints.sm-and-down
    .default-layout
      flex-direction column
    .default-nav
      width 100%
      position relative
    .default-content
      padding 0
      margin-left 0
      margin-top 20px
    .default-link
      font-size 16px
      width 50%
</style>
