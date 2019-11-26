import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Icon from './views/Icon.vue'
import Message from './views/Message.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
