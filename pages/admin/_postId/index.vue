<template lang="pug">
  v-content
    v-container
      v-layout
        v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
          h1.text-xs-center.display-1 Edit Post
          FormAddPost(:post="post" @submit="setPost")
</template>

<script>
import FormAddPost from '@/components/FormAddPost'

export default {
  layout: 'admin',
  components: {
    FormAddPost
  },
  asyncData ({ store, params, redirect }) {
    return store.dispatch('post/getPostByPostId', params.postId)
      .then(post => {
        if (!post) redirect('/error')
        return { post }
      })
  },
  methods: {
    setPost (thePost) {
      this.$store.dispatch('post/setPost', {
        postId: this.$route.params.postId,
        thePost
      })
        .then(data => {
          data && this.$router.push('/admin')
        })
    }
  }
}
</script>
