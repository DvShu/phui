import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProgressBar from './views/ProgressBar.vue'
import Toast from './views/Toast.vue'
import Carousel from './views/Carousel.vue'
import DatePicker from './views/DatePicker.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/progress_bar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/date_picker',
      name: 'DatePicker',
      component: DatePicker
    }
  ]
})
