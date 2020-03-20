import Vue from 'vue'
import NoticeTpl from './Notice.vue'
const NoticeConstructor = Vue.extend(NoticeTpl)

let nId = 1
const tagClass = 'dialog-notice'

const Message = options => {
  if (JSON.stringify(options) === undefined) { return false }
  const id = 'notice-' + nId++
  options = options || {}
  if (typeof options === 'string') {
    options = {
      msg: options
    }
  }
  const NoticeInstance = new NoticeConstructor({
    data: options
  })
  NoticeInstance.id = id
  NoticeInstance.vm = NoticeInstance.$mount()
  NoticeInstance.vm.visible = true
  NoticeInstance.dom = NoticeInstance.vm.$el
  if (!document.querySelector(`body > .${tagClass}`)) {
    const div = document.createElement('div')
    div.classList.add(tagClass)
    div.style.position = 'fixed'
    div.style.top = '85px'
    div.style.display = 'inline-block'
    div.style.minWidth = '1200px'
    div.style.left = '0'
    div.style.right = '0'
    div.style.margin = '0'
    div.style.right = '0 auto 10px auto'
    div.style.backgroundColor = 'transparent!important'
    div.style.textAlign = 'center'
    div.style.zIndex = '9999'
    document.body.appendChild(div)
    document.querySelector(`body > .${tagClass}`).appendChild(NoticeInstance.dom)
  }
  document.querySelector(`body > .${tagClass}`).appendChild(NoticeInstance.dom)
  // NoticeInstance.dom.style.zIndex = nId + 1001
  return NoticeInstance.vm
}
['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default {
  install (Vue, options = {}) {
    Vue.prototype.$notice = Message
  }
}
