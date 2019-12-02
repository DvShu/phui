<template>
  <div class="sub-page">
    <app-header title="Input"></app-header>
    <div class="doc-container">
      <p>只输入正整数</p>
      <ph-input type="positive_integer" placeholder="请输入正整数"></ph-input>
      <p>只能输入整数</p>
      <ph-input type="integer" placeholder="请输入整数"></ph-input>
      <p>只能输入正数</p>
      <ph-input type="positive_number" placeholder="请输入正数"></ph-input>
      <p>只能输入数字</p>
      <ph-input type="number" placeholder="请输入数字"></ph-input>
      <p style="margin-top: 30px;">验证手机号(11位数字)</p>
      <ph-input
        type="text"
        placeholder="请输入手机号"
        name="tel"
        :err-tip="errTips.telTip"
        v-model="param.tel"
        @input="input"
      ></ph-input>
    </div>
  </div>
</template>

<script>
import Validator from '../../lib/validator'

export default {
  name: 'Input',
  data () {
    return {
      param: {
        tel: ''
      },
      errTips: {
        telTip: ''
      }
    }
  },
  created () {
    this.$validator = new Validator([{
      key: 'tel',
      rule: 'tel',
      message: '请输入正确的手机号'
    }])
  },
  methods: {
    input (name, value) {
      this.$validator.validateKey(name, value, (err) => {
        if (err) {
          this.errTips[err.key + 'Tip'] = err.message
        } else {
          this.errTips[name + 'Tip'] = ''
        }
      })
    }
  }
}
</script>

<style lang="less">
</style>
