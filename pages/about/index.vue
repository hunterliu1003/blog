<template lang="pug">
  v-container(fluid).ma-0
    v-layout.mb-4
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        h1.text-xs-center.display-1.font-ch 關於我
    v-layout(column)
      v-flex.subheading(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        p 我是 Hunter，是個前端工程師，不是獵頭， 
        p 熱愛研究和分享前端技術，並朝年薪百萬︎的路邁進。
        p Github 連結請點擊右上角。
        p 歡迎大家互相交流，若文章中有錯誤或不清楚的地方，歡迎提出與補充。
        p.headline 以下是我的學習歷程：
      v-flex(xs12 sm10 offset-sm1 md12 offset-md0 lg9)
        v-timeline(:dense="$vuetify.breakpoint.smAndDown")
          v-timeline-item(v-for="(event, i) in events" :color="colors[i % colors.length]" :key="i" small)
            .py-3
              h2(:class="`headline font-weight-bold mb-1 ${colors[i % colors.length]}--text`") {{ event.title }}
              div(:class="`font-weight-bold mb-1 ${colors[i % colors.length]}--text`" ) {{ event.date | date }}
              div.subheading {{ event.content }}
</template>

<script>
export default {
  data: () => ({
    colors: ['cyan', 'green', 'pink', 'amber', 'orange', 'light-green', 'red', 'blue', 'yellow', 'teal'],
    events: [
      {
        title: '參加 JSDC 2018',
        date: '2018/11/17'
      },
      {
        title: '鐵人賽 2019 完賽',
        date: '2018/11/06',
        content: '題目：用 Nuxt.js 2.0, Vuetify, Storybook, Firebase 建一個 Blog'
      },
      {
        title: '參加 Vue Fes Japan 2018',
        date: '2018/11/03'
      },
      {
        title: '鐵人賽 2019 開賽',
        date: '2018/10/08',
        content: '題目：用 Nuxt.js 2.0, Vuetify, Storybook, Firebase 建一個 Blog'
      },
      {
        title: '參加 ModernWeb 2018',
        date: '2018/07/18'
      },
      {
        title: '參加 FEDC 2018',
        date: '2018/07/14'
      },
      {
        title: '參加 Agile Summit 2018',
        date: '2018/06/28'
      },
    ]
  })
}
</script>
