import VueToast from './PhToast.vue'

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
  t.message = typeof message === 'string' ? message : message.message
  t.className = message.className || ''
  t.position = message.position || 'middle'
  t.timer = setTimeout(function () {
    t.toggle()
  }, 3000)
  t.toggle()
  return t
}

ToastInstance.destroy = () => {
  document.body.removeChild(createInstance().$el)
}

export default ToastInstance
