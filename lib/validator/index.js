/**
 * 数据验证器
 * Created by DvShu on 2019/3/22 15:33.
 */

const defaultMessages = {
  tel: '请输入正确的手机号'
}

const RuleRegexs = {
  same: /^same:(.+)$/i,
  tel: /^\d{11}$/
}

const Rules = {
  required (val) {
    if (val == null) {
      return false
    }
    let str = String(val).trim()
    return str.length > 0
  },
  same (val1, val2) {
    return val1 === val2
  },
  pattern (regex, val) {
    if (val == null) {
      return false
    }
    if ((val + '').match(regex)) {
      return true
    }
    return false
  }
}

let Validator = function (schemas) {
  this.schemas = this._parseSchemas(schemas)
  this.errors = [] // 校验失败后的错误列表
}

Validator.prototype = {
  /**
   * 解析描述规则
   * @param schemas
   * @return {Array} [{ key: '', rule: [], message: '%s 是必填项' }]
   * @private
   */
  _parseSchemas (schemas) {
    let ss = []
    schemas.forEach((s) => {
      if (s.hasOwnProperty('key')) {
        ss.push({
          key: s.key,
          message: s.message,
          rule: typeof s.rule === 'string' ? s.rule.split('|') : [s.rule]
        })
      }
    })
    return ss
  },

  /**
   * 开启数据验证
   * @param data 需要进行校验的数据
   */
  validate (data, cb) {
    this.errors = []
    for (let i = 0, l = this.schemas.length; i < l; i++) {
      if (!this._validateRules(this.schemas[i], data)) {
        break // 验证失败, 跳过验证
      }
    }
    cb(this.errors.length > 0 ? this.errors : null)
  },

  /**
   * 只验证指定 key 的数据
   * @param key   指定需要验证的key
   * @param value 需要验证的值
   */
  validateKey (key, value, cb) {
    this.errors = []
    let kSchema = this.schemas.filter((s) => {
      return s.key === key
    })
    let isValid = this._validateRules(kSchema[0], { [key]: value })
    cb(!isValid ? this.errors[0] : null)
  },

  /**
   * 规则验证
   * @param schema { key: '', rule: ['required', 'same:xxx'], message: '' }
   * @private
   */
  _validateRules (schema, data) {
    let isValid = true // 表明验证成功
    for (let j = 0, len = schema.rule.length; j < len; j++) {
      isValid = this._validateRule(schema.rule[j], schema, data)
      if (isValid === false) {
        this.errors.push({
          key: schema.key,
          message: (schema.message || defaultMessages[schema.rule[j]] || '').replace('%s', schema.key)
        })
        break // 有一个规则验证失败, 则跳出循环
      }
    }
    return isValid
  },

  /**
   * 验证具体的规则
   * @param r required || smae:xxx
   * @param schema
   * @return {*} 验证是否成功
   * @private
   */
  _validateRule (r, schema, data) {
    if (r instanceof RegExp) { // 自定义的正则表达式
      return Rules.pattern(r, data[schema.key])
    }
    if (Rules.hasOwnProperty(r)) { // required
      return Rules[r](data[schema.key])
    }
    let same = r.match(RuleRegexs.same)
    if (same) { // 匹配的是 same
      return Rules.same(data[schema.key], data[same[1]])
    }
    if (RuleRegexs.hasOwnProperty(r)) { // 存在默认的正则
      return Rules.pattern(RuleRegexs[r], data[schema.key])
    }
    return false
  },

  clear () {
    this.errors = null
    this.schemas = null
  }
}

export default Validator
