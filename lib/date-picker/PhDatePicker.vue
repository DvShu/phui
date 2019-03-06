<template>
  <label
    class="ph-date-picker"
  >
    {{ showDate }}
    <input
      type="date"
      v-model="selectDate"
    >
  </label>
</template>

<script>
import utils from './utils'

/*
  移动端日期选择组件
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
      type: Date,
      default: ''
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
      selectDate: '', // 选择的日期字符串
      date: null // 根据选中的日期解析后的 Date 对象
    }
  },
  created () {
    // 初始化日期, 优先级 defaultValue > value > 默认：当前时间
    let d = this.defaultValue || this.value
    this.date = utils.parse(d === '' ? null : d)
    this.selectDate = utils.format(this.date, 'yyyy/mm/dd')
    this.showDate = utils.format(this.date, this.valueFormat)
    this.$emit('input', this.date)
  },
  watch: {
    selectDate (v) {
      this.date = utils.parse(v === '' ? null : v)
      this.showDate = utils.format(this.date, this.valueFormat)
      this.$emit('input', this.date)
    }
  }
}
</script>

<style>
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
  }
  .ph-date-picker input {
    position: absolute;
    left: -9999px;
  }
</style>
