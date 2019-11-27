<template>
  <label
    class="ph-date-picker"
  >
    <span>{{ showDate }}</span>
    <input
      type="date"
      v-model="selectDate"
    >
  </label>
</template>

<script>
import utils from '../date-tool'

/*
  移动端日期选择组件 date datetime-local
  <date-picker
      v-model="date"
      value-format="yyyy/mm/dd" // 日期显示格式
      default-value="2022/2/22" // 初始化的日期, 优先级：default-value > model > 默认: 当前时间
    />
 */
export default {
  name: 'PhDatePicker',
  props: {
    value: { // 实际显示的日期字符串
      type: [Date, String, Number],
      default: function () {
        return new Date()
      }
    },
    valueFormat: { // 日期显示的格式
      type: String,
      default: 'yyyy-mm-dd'
    },
    defaultValue: { // 初始化的日期, 能够被 parse 的日期, 可以是 String, Date
      type: [Date, String, Number],
      default: undefined
    }
  },
  data () {
    return {
      showDate: '',
      selectDate: '' // 选择的日期字符串
    }
  },
  created () {
    // 初始化日期, 优先级 defaultValue > value > 默认：当前时间
    let d = this.defaultValue || this.value
    let date = utils.parse(d === '' ? null : d)
    this.selectDate = utils.format(date, 'yyyy/mm/dd')
    this.showDate = utils.format(date, this.valueFormat)
    this.$emit('input', date)
  },
  watch: {
    selectDate (v) {
      let date = utils.parse(v === '' ? null : v)
      this.showDate = utils.format(date, this.valueFormat)
      this.$emit('input', date)
    }
  }
}
</script>

<style lang="less">
  .ph-date-picker {
    display: inline-block;
    box-sizing: border-box;
    width: 150px;
    height: 35px;
    line-height: 35px;
    border: 1px solid grey;
    border-radius: 3px;
    position: relative;
    vertical-align: middle;
    padding: 0 5px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    input {
      position: absolute;
      left: -9999px;
    }
  }
</style>
