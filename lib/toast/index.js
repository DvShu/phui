import './toast.less'

let $toast = null
let $toastTimer = -1
const types = ['success', 'fail']
const pos = ['top', 'middle', 'bottom']

function Toast (opts) {
  clearTimeout($toastTimer)
  if ($toast == null) {
    $toast = document.createElement('div')
  }
  let customClass = ''
  if (opts.customClass != null) {
    customClass = opts.customClass
    if (customClass !== '') {
      customClass = ' ' + customClass
    }
  }
  // 类型
  if (opts.type && types.indexOf(opts.type) !== -1) {
    customClass += ' ph-toast_' + opts.type
  }
  // 位置
  let position = 'middle'
  if (opts.position && pos.indexOf(opts.position) !== -1) {
    position = opts.position
  }
  customClass += ' ph-toast-' + position
  $toast.className = 'ph-toast' + customClass
  $toast.textContent = opts.message
  if ($toastTimer === -1) {
    document.body.appendChild($toast)
  }

  $toastTimer = setTimeout(function () {
    document.body.removeChild($toast)
    $toastTimer = -1
  }, 3000) // 3秒后消失
}

types.forEach(type => {
  Toast[type] = function (msg, pos) {
    this({
      message: msg || '',
      type: type,
      position: pos || 'bottom'
    })
  }
})

// 手动结束 Toast
Toast.close = function () {
  document.body.removeChild($toast)
  $toastTimer = -1
}

export default Toast
