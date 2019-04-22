import '../lib/theme-default/base.css'
import 'highlight.js/styles/github-gist.css'
import '../lib/theme-default/common.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PhCode from './components/PhCode.vue'
import PhTable from './components/PhTable.vue'
import ShowCode from './components/ShowCode.vue'

import Carousel from '../lib/carousel'
import DatePicker from '../lib/date-picker'
import LoadMore from '../lib/load-more'

import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

require('./media.styl')
require('../lib/theme-default/button.css')

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)

Vue.config.productionTip = false

// Vue.use(ProgressBar)
Vue.component('PhCode', PhCode)
Vue.component('PhTable', PhTable)
Vue.component('ShowCode', ShowCode)

Vue.use(Carousel)
Vue.use(DatePicker)
Vue.use(LoadMore)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
