import Vue from 'vue'
import VueToast from './PhToast'

const ToastConstructor = Vue.extend(VueToast)

let queue = []

ToastConstructor.prototype.close = function () {
  let parent = this.$el.parentNode
  if (parent) {
    parent.removeChild(this.$el)
  }
  queue.shift()
}

function createInstance () {
  if (queue.length === 0) {
    const toast = new ToastConstructor({
      el: document.createElement('div')
    })
    toast.id = Date.now() + parseInt(Math.random() * 100)
    document.body.appendChild(toast.$el)
    queue.push(toast)
  }
  return queue[queue.length - 1]
}

function showToast (option) {
  let t = createInstance()
  if (t.timer) {
    clearTimeout(t.timer)
  }
  if (typeof option === 'string') {
    t.message = option
  } else {
    option = option || {}
    t.className = option.className || ''
    t.position = option.position || 'bottom'
  }
  Vue.nextTick(function () {
    t.visible = true
    t.timer = setTimeout(function () {
      t.visible = false
    }, 3000)
  })
  return t
}

let ToastInstance = function (option) {
  return showToast(option)
}

ToastInstance.success = function (message, position) {
  return showToast({
    message: message || '',
    className: 'ph-toast_success',
    position: position || 'bottom'
  })
}

ToastInstance.fail = function (message, position) {
  return showToast({
    message: message || '',
    className: 'ph-toast_fail',
    position: position || 'bottom'
  })
}

export default ToastInstance
