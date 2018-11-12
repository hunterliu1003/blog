<template lang="pug">
  v-content
    v-container
      v-layout
        v-flex(xs12 sm10 offset-sm1 lg8 offset-lg2)
          h1.text-xs-center.display-1 New Post
          FormAddPost(@submit="addPost")
</template>

<script>
import FormAddPost from '@/components/FormAddPost'
export default {
  layout: 'admin',
  middleware: 'authenticated',
  components: {
    FormAddPost
  },
  methods: {
    addPost (thePost) {
      this.$store.dispatch('post/addPost', thePost)
        .then(data => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>