<template lang="pug">
  v-app(dark)
    v-toolbar.admin-header(fixed height="50")
      nuxt-link.title.white--text.admin-title(nuxt to="/") Hunterliu
      v-spacer
      v-btn(icon title="登出" @click="signOut")
        v-icon(size="20") fas fa-sign-out-alt
    no-ssr
      nuxt.admin-content
</template>

<style lang="stylus" scoped>
  .admin-header
    z-index 999
  .admin-title
    text-decoration none
  .admin-content
    margin-top 50px
</style>
