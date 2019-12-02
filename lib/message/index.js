// 全局消息提示
import './index.less'

let instances = [] // 保存所有的提示消息实例
let seed = 0 // 提示消息提示增长数目
let $messageGroup // 消息提示容器
let _messageClearTimer = -1
const types = ['success', 'warn', 'info', 'error']
let clazz = '' // 自定义样式

// 生成消息提示盒子
function createMessageBox () {
  $messageGroup = document.createElement('div')
  $messageGroup.className = 'phui-message-group'
  document.body.appendChild($messageGroup)
}

createMessageBox() // 生成消息提示容器

// 新增消息
function addMessage (msg, type, cclazz) {
  let id = 'message_id_' + Date.now() + (++seed)

  // 消息类型
  let _type = 'info'
  if (type && types.indexOf(type) !== -1) {
    _type = type
  }

  // 自定义样式
  let curClazzz = clazz
  if (cclazz != null && cclazz !== '') {
    curClazzz = cclazz
  }

  let $msg = document.createElement('div')
  $msg.id = id
  $msg.className = 'phui-message phui-message_' + _type + (curClazzz !== '' ? (' ' + curClazzz) : '')
  $msg.innerHTML = '<i class="ph-icon ph-icon-' + _type + '"></i><span class="phui-message_content">' + msg + '</span>'
  $messageGroup.appendChild($msg)
  instances.push(id)

  if (instances.length === 1) { // 开启定时清楚数据
    _messageClearTimer = setInterval(() => {
      removeMessage()
      if (instances.length === 0) {
        clearInterval(_messageClearTimer)
      }
    }, 1500)
  }
}

// 移除消息
function removeMessage () {
  let _id = instances.shift()
  let $dom = document.getElementById(_id)
  $dom.className = $dom.className + ' phui-message_leave_anim'
  setTimeout(() => {
    $messageGroup.removeChild($dom)
  }, 500)
}

// 构造消息
let Message = function (options) {
  if (options) {
    if (typeof options === 'string') { // 显示默认的消息提示
      addMessage(options)
    } else { // Object
      addMessage(options.message, options.type, options.customClass)
    }
  }
}

types.forEach(type => {
  Message[type] = (msg, customClass) => {
    addMessage(msg, type, customClass)
  }
})

// 自定义全局的样式表
Message.customClass = function (name) {
  clazz = name
}

export default Message
