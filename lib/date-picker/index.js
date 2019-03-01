import DatePicker from './PhDatePicker.vue'

let DatePickerPlugin = Object.create(null)

DatePickerPlugin.install = function (Vue) {
  Vue.component('ph-date-picker', DatePicker)
}

export default DatePickerPlugin
