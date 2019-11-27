import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Header from './components/Header.vue'
import DatePicker from '../lib/date-picker'
import LoadMore from '../lib/load-more/LoadMore'
import Message from '../lib/message'
import Toast from '../lib/toast'

Vue.config.productionTip = false

Message.customClass('message-tip')
Vue.prototype.$message = Message
Vue.prototype.$toast = Toast

Vue.component('ph-date-picker', DatePicker)
Vue.component('load-more', LoadMore)
Vue.component('app-header', Header)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
