<template lang="pug">
  v-container(fluid).ma-0
    v-layout
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        h1.pl-1.display-1 {{ post.title }}
        p.pl-1.pt-2.title.grey--text.text--lighten-2.mt-2 {{ post.postTime | date }}
        TheTags.pt-2(:tags="post.tags")
        TheMarkdown.pl-1.mt-3(:markdownText="post.articleContent")
</template>

<script>
import TheMarkdown from '@/components/TheMarkdown'
import TheTags from '@/components/TheTags'

export default {
  components: {
    TheMarkdown,
    TheTags,
  },
  asyncData ({ store, params, redirect }) {
    return store.dispatch('post/getPostByPostId', params.postId)
      .then(post => {
        if (!post) redirect('/error')
        return post
      })
  }
}
</script>
