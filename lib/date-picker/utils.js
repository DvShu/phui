/**
 * 日期格式化工具类
 * Created by haoran.shu on 2019/2/21 14:45.
 */

// 配置日期格式的正则表达式
const REGEX_FORMAT = /yy(?:yy)?|([HMmds])\1?/g
// 由于 Date.parse() 不能正确解析 yyyy-dd-mm 格式的日期, 所以匹配手动解析
const REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/

/**
 * 不足位数, 前位补 0
 * @param s 日期数字
 * @param l 截取位数
 * @returns {string}  补0后的日期数字
 */
function p (s, ...l) {
  /*
   * 由于年份最多为4为，所以前面先添3个0
   * slice() 从后开始提前字符串
   */
  return ('000' + s).slice(l | 2 * -1)
}

let format = function (date, pattern) {
  let d = date.getDate()
  let y = date.getFullYear()
  let m = date.getMonth()
  let H = date.getHours()
  let M = date.getMinutes()
  let s = date.getSeconds()
  let flags = {
    yy: p(y),
    yyyy: y,
    m: m + 1,
    mm: p(m + 1),
    d: d,
    dd: p(d),
    H: H,
    HH: p(H),
    M: M,
    MM: p(M),
    s: s,
    ss: p(s)
  }
  if (pattern != null) {
    return pattern.replace(REGEX_FORMAT, function (flag) {
      if (flag in flags) {
        return flags[flag]
      } else {
        return flag
      }
    })
  } else {
    return date.getTime()
  }
}

/* 参考 dayjs 实现, 也可以参考 https://github.com/nomiddlename/date-format */
function parse (date) {
  if (date == null) return new Date()
  if (date instanceof Date) return date
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE)
    if (d) {
      return new Date(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0)
    }
  }
  return new Date(date)
}

export default {
  format,
  parse
}
