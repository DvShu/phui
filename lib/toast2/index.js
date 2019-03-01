import VueToast from '../toast/PhToast.vue'

let Toast = Object.create(null)

const ToastConstructor = Vue.extend(VueToast)

let queue = []

function createInstance () {
  if (queue.length === 0) {
    const toast = new ToastConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(toast.$el)
    queue.push(toast)
  }
  return queue[queue.length - 1]
}

let ToastInstance = function (message) {
  let t = createInstance()
  clearTimeout(t.timer)
  t.message = message
  t.timer = setTimeout(function () {
    t.close()
  }, 3000)
  t.open()
  return t
}

Toast.install = function (Vue) {
  // 添加实例方法
  Vue.prototype.$toast = ToastInstance
}

export default Toast
