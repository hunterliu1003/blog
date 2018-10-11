<template lang="pug">
  v-container(fluid).ma-0
    v-layout
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        h1.text-xs-center.display-1 {{ $route.params.tagId }}
    v-layout(v-for="post in posts" :key="post.id")
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        ThePostPreview(
          :id="post.id"
          :title="post.title"
          :lastUpdateTime="post.lastUpdateTime"
          :previewContent="post.previewContent"
          :tags="post.tags"
        )
</template>

<script>
import ThePostPreview from '@/components/ThePostPreview'

export default {
  head () {
    return {
      title: this.$route.params.tagId,
    }
  },
  components: {
    ThePostPreview,
  },
  asyncData ({ store, params, redirect }) {
    return store.dispatch('post/getPostsTag', params.tagId)
      .then(posts => {
        if (posts.length === 0) redirect('/error')
        return { posts }
      })
  }
}
</script>
