<template lang="pug">
  v-container(fluid).ma-0
    v-layout(v-for="post in posts" :key="post.id")
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        ThePostPreview(
          :id="post.id"
          :title="post.title"
          :lastUpdateTime="post.lastUpdateTime"
          :previewContent="post.previewContent"
          :tags="post.tags"
        )
    v-layout.mt-4
      v-flex.text-xs-center(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        v-pagination(
          v-model='page'
          :length='pageLength'
          circle
          :total-visible="7"
          @input="toPage"
        )
</template>

<script>
import ThePostPreview from '@/components/ThePostPreview'
export default {
  layout: 'default',
  components: {
    ThePostPreview,
  },
  asyncData ({ store }) {
    return store.dispatch('post/getPostsByPage', {
      pageNum: 1,
      perPage: 10,
    })
      .then(data => ({
        posts: data.posts,
        page: data.page,
        pageLength: data.pageLength
      }))
  },
  methods: {
    toPage (page) {
      this.$router.push('/pages/' + page)
    }
  }
}
</script>