import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import { withReadme }  from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import StoryCentered from '../StoryCentered'
import TheMarkdown from './'

Vue.component('StoryCentered', StoryCentered)
Vue.component('TheMarkdown', TheMarkdown)

storiesOf('TheMarkdown', module)
.add('TheMarkdown', withReadme(README, () => ({
  data: vm => ({
    md: `
      \n# 以下都是 markdown:
      \n<div class="red--text" style="font-size:3em;">HTML div</div>
      \n# \`用範例理解\`  Vue.js 目錄222
      \n## 用範例理解  Vue.js 目錄ddddd
      \n### 用範例理解  Vue.js 目錄
      \n#### 用範例理解  Vue.js 目錄d
      \n##### 用範例理解  Vuedddddddjs 目錄
      \n###### 用範例理解  Vue.js 目錄{.red--text}
      \n# Image
      \n![](https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1505775431709){width=100}
      \n# Highlightjs
      \n## Bash
      \n\`\`\`bash\n# dasfasd\n\`\`\`
      \n## HTML
      \n\`\`\`html\n<div id="app">\n<p>{{ message }}</p>\n</div>\n\`\`\`
      \n## Javascript
      \n\`\`\`javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Hello Vue.js!'\n  }\n})\n\`\`\`\n
      \n# Iframe
      \n## Storybook
      \n<iframe frameborder='no'  scrolling='no' src="http://hunterliu1003.github.io/nuxt-blog-storybook/iframe.html?selectedKind=TheInputTags&selectedStory=TheInputTags&full=0&addons=1&stories=1&panelRight=1&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel"></iframe>
      \n@[codepen](https://codepen.io/hunterliu1003/embed/zjBBpK/?height=265&amp;theme-id=0&amp;default-tab=js,result&amp;embed-version=2)
      \n@[jsfiddle](https://jsfiddle.net/rykeller/y4848ak7/8/embedded/html,css,result/)
      \n<iframe height='300' scrolling='no' title='Vuetify Example Pen' src='https://codepen.io/hunterliu1003/embed/zjBBpK/?height=300&theme-id=33425&default-tab=html&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/hunterliu1003/pen/zjBBpK/'>Vuetify Example Pen</a> by Hunter (<a href='https://codepen.io/hunterliu1003'>@hunterliu1003</a>) on <a href='https://codepen.io'>CodePen</a>.
      \n</iframe>
    `
  }),
  template: (
    pug
    `StoryCentered
      TheMarkdown(:markdown-text='md') `
  )
})))