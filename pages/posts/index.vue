<template lang="pug">
  v-container(fluid).ma-0
    v-layout.mb-4
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        h1.text-xs-center.display-1.font-ch 文章列表
    v-layout(v-for="post in posts" :key="post.id" justify-center)
      v-flex(xs11 sm8 md10 offset-md0 lg8 wrap)
        span.font-ch {{ post.lastUpdateTime | date }}&nbsp;
        nuxt-link.link.headline.font-ch(:to="'posts/' + post.id") {{ post.title }}
</template>

<script>
export default {
  head () {
    return {
      title: '文章列表',
    }
  },
  asyncData ({ store }) {
    return store.dispatch('post/getPosts')
      .then(posts => ({
        posts,
      }))
  }
}
</script>
