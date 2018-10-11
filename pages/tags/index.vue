<template lang="pug">
  v-container(fluid).ma-0
    v-layout.mb-4
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        h1.text-xs-center.display-1.font-ch 標籤列表
    v-layout(v-for="tag in tags" :key="tag.name")
      v-flex.text-xs-center.pt-2(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        nuxt-link.link.headline.font-ch(:to="'tags/' + tag.name") {{ tag.name }} ({{tag.size}})
</template>

<script>
export default {
  head () {
    return {
      title: '標籤列表',
    }
  },
  asyncData ({ store }) {
    return store.dispatch('tags/getAllTags')
      .then(tags => ({
        tags,
      }))
  }
}
</script>
