import ProgressBar from '../progress-bar/PhProgressbar.vue'

let Plugin = Object.create(null)

const ProgressBarConstructor = Vue.extend(ProgressBar)
const progressBar = new ProgressBarConstructor({
  el: document.createElement('div')
})
document.body.appendChild(progressBar.$el)

Plugin.install = function (Vue) {
  Vue.prototype.$bar = progressBar
}

export default Plugin
