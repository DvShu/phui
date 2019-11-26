import 'highlight.js/styles/github-gist.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import Carousel from '../lib/carousel'
import Header from './components/Header.vue'
import DatePicker from '../lib/date-picker/DatePicker'
import LoadMore from '../lib/load-more/LoadMore'
import Message from '../lib/message'

Vue.config.productionTip = false

Message.customClass('message-tip')
Vue.prototype.$message = Message

Vue.component('date-picker', DatePicker)
Vue.component('load-more', LoadMore)
Vue.component('app-header', Header)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
