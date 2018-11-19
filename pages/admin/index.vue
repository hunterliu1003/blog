<template lang="pug">
  v-content
    v-container
      v-layout
        v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
          h1.text-xs-center.display-1 文章列表
      v-layout(wrap)
        v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2 v-for="post in posts" :key="post.id")
          ThePostPreview(
            :id="post.id"
            isAdmin
            :title="post.title"
            :lastUpdateTime="post.lastUpdateTime"
            :previewContent="post.previewContent"
            :tags="post.tags"
            :isShow="post.isShow"
          )
      v-btn(right bottom fixed fab title="新增文章" to="/admin/addPost")
        v-icon(size="20") fas fa-plus
</template>

<script>
import ThePostPreview from '@/components/ThePostPreview'

export default {
  layout: 'admin',
  middleware: 'authenticated',
  components: {
    ThePostPreview,
  },
  asyncData ({ store }) {
    return store.dispatch('post/getPostsAdmin')
      .then(posts => ({
          posts,
      }))
  }
}
</script>