import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProgressBar from './views/ProgressBar.vue'
import Toast from './views/Toast.vue'
import Carousel from './views/Carousel.vue'
import DatePicker from './views/DatePicker.vue'
import Reset from './views/Reset'
import Common from './views/Common'
import Button from './views/Button'
import DateTool from './views/DateTool'
import Validator from './views/Validator'

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
    }, {
      path: '/reset',
      name: 'Reset',
      component: Reset
    }, {
      path: '/common',
      name: 'Common',
      component: Common
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/date_tool',
      name: 'DateTool',
      component: DateTool
    },
    {
      path: '/validator',
      name: 'Validator',
      component: Validator
    }
  ]
})
