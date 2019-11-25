import 'highlight.js/styles/github-gist.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PhCode from './components/PhCode.vue'
import PhTable from './components/PhTable.vue'
import ShowCode from './components/ShowCode.vue'

// import Carousel from '../lib/carousel'
import DatePicker from '../lib/date-picker/DatePicker'
import LoadMore from '../lib/load-more/LoadMore'

import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

require('./media.styl')

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)

Vue.config.productionTip = false

// Vue.use(ProgressBar)
Vue.component('PhCode', PhCode)
Vue.component('PhTable', PhTable)
Vue.component('ShowCode', ShowCode)

Vue.component('date-picker', DatePicker)
Vue.component('load-more', LoadMore)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
