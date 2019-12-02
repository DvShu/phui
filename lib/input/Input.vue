<template>
  <div class="ph-input">
    <input
      :list="list"
      :type="type === 'password' ? 'password' : 'text'"
      class="ph-input_inner"
      :class="{ 'ph-input_error': errTip != null && errTip !== '' }"
      :placeholder="placeholder"
      @input="input"
      :value="value"
      :name="name"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
    />
    <div class="error-tip" v-show="errTip != null && errTip !== ''">
      <i class="ph-icon ph-icon-error error-tip-icon"></i>
      <span class="error-tip-content">{{ errTip }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhInput',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    placeholder: String,
    errTip: {
      type: String,
      default: ''
    },
    type: { // 输入框的类型，支持的有：text, password, integer(整数), positive_integer(正整数), positive_number(正数)
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    list: String, // input 输入框的候选数据
    autocomplete: {
      type: String,
      default: 'on'
    },
    maxlength: Number
  },
  data () {
    return {
      positiveNumReg: /^(\d+\.)?\d*$/,
      intReg: /^[-|+]?\d*$/
    }
  },
  methods: {
    // 输入框输入事件
    input (e) {
      let $target = e.target
      let value = $target.value
      if (this.type === 'integer') { // 整数
        if (!this.intReg.test(value)) {
          value = parseInt(value)
          if (isNaN(value)) {
            value = ''
          }
        }
        $target.value = value
      } else if (this.type === 'positive_integer') { // 正整数
        value = parseInt(value)
        if (!isNaN(value)) {
          value = Math.abs(value)
        }
        this.setNumber($target, value)
      } else if (this.type === 'positive_number') { // 正数
        if (!this.positiveNumReg.test(value)) {
          value = parseFloat(value)
        }
        this.setNumber($target, value)
      } else if (this.type === 'number') { // 数字
        value = parseFloat(value)
        this.setNumber($target, value)
      }
      this.$emit('update', value)
      this.$emit('input', $target.name, value)
    },
    setNumber ($target, value) {
      if (isNaN(value)) {
        value = ''
      }
      $target.value = value
    }
  },
  destroyed () {
    this.positiveNumReg = null
  }
}
</script>

<style lang="less">
// 自定义输入框
.ph-input {
  display: inline-block;
  position: relative;
  width: 100%;

  .ph-input_inner {
    outline: none;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding: 0 5px;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background-color: white;
    font-size: 16px;
    &:focus {
      border-color: #4998f4;
    }
  }

  .error-tip {
    position: absolute;
    padding-top: 5px;
    font-size: 14px;
    max-width: 100%;
    word-break: break-all;
    color: #f56c6c;
  }

  .error-tip-icon {
    vertical-align: middle;
    font-size: 12px;
  }
  .error-tip-content {
    vertical-align: middle;
    margin-left: 5px;
  }

  .ph-input_error {
    border: 1px solid #f56c6c;
  }
}
</style>
