<template lang="pug">
  v-app(dark)
    v-toolbar.admin-header(fixed height="50")
      nuxt-link.title.white--text.admin-title.mr-4(nuxt to="/admin") Admin
      nuxt-link.title.white--text.admin-title(nuxt to="/") Hunterliu
      v-spacer
      v-btn(v-if="authenticated" icon title="登出" @click="signOut")
        v-icon(size="20") fas fa-sign-out-alt
    no-ssr
      nuxt.admin-content
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  },
  beforeCreate () {
    this.$store.dispatch('auth/signInAuto')
      .then(user => {
        user 
          ? this.$router.push('/admin') 
          : this.$router.push('/admin/login')
      })
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
        .then(() => {
          this.$router.push('/admin/login')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .admin-header
    z-index 999
  .admin-title
    text-decoration none
  .admin-content
    margin-top 50px
</style>
