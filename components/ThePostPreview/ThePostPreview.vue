<template lang="pug">
  v-card.mt-3.grey.darken-4(tag="article")
    v-card-title.pb-0
      div.post-preview.pl-2
        v-switch.is-show(
          v-if="isAdmin"
          v-model="isShowArticle"
          :label="showText"
          color="primary"
        )
        h1.display-1.grey--text.text--lighten-2(:class="{'admin-title': isAdmin}")
          nuxt-link.link.grey--text.text--lighten-2(:to="isAdmin ? '/admin/' + id : '/posts/' + id")
            | {{ title }}
        p.body-1.grey--text.my-1 {{ lastUpdateTime | date }}
        nuxt-link.link.grey--text.text--lighten-2(:to="isAdmin ? '/admin/' + id : '/posts/' + id")
          TheMarkdown.my-3(:markdownText="previewContent")
    v-card-actions.pl-3.pt-0
      TheTags(:tags="tags" selected)
      v-spacer
      nuxt-link.link.grey--text.text--lighten-2(:to="isAdmin ? '/admin/' + id : '/posts/' + id")
        v-btn.body-2(small flat) {{ isAdmin ? 'edit' : 'more'}}
</template>

<script>
import TheMarkdown from '@/components/TheMarkdown'
import TheTags from '@/components/TheTags'

export default {
  components: {
    TheMarkdown,
    TheTags
  },
  props: {
    id: { type: String },
    isAdmin: { type: Boolean, default: false },
    title: { type: String },
    lastUpdateTime: { type: Number },
    previewContent: { type: String, default: '' },
    tags: { type: Array },
    isShow: { type: Boolean },
  },
  data: vm => ({
    isShowArticle: vm.isShow,
  }),
  computed: {
    showText () {
      return this.isShowArticle ? '顯示中' : '未發佈'
    }
  },
  watch: {
    isShowArticle (value) {
      this.$store.dispatch('post/setPost', {
        postId: this.id,
        thePost: {
          isShow: value,
        },
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-preview
  width 100%
.is-show
  position absolute
  right 0
  top 0
  margin-right 16px
.admin-title
  width: calc(100% - 110px)
</style>