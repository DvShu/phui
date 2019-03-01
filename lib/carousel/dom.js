/**
 * DOM 节点操作的工具
 * Created by haoran.shu on 2019/2/22 14:46.
 */
export function addClass (el, cla) {
  el.classList.add(cla)
}

export function removeClass (el, cla) {
  el.classList.remove(cla)
}

/**
 * 设置或者获取
 * @param cssObj
 * @param value
 */
export function css (el, cssObj, value) {
  if (typeof cssObj === 'object') {
    for (var key in cssObj) {
      el.style[key] = cssObj[key]
    }
  } else if (typeof cssObj === 'string') {
    if (value != null) {
      el.style[cssObj] = value
    }
  }
}
