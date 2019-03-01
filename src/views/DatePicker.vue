<template>
  <div>
    <h3>引入</h3>
    <ph-code>import { DatePicker } from 'phui'<br/><br/>Vue.use(DatePicker)</ph-code>
    <p>移动端的日期选择组件，基于 <code>input-type</code> 属性实现的。</p>
    <h3>代码演示</h3>
    <p><code>v-model</code> 为组件的绑定值，允许的值类型为一个 <code>Date</code> 对象，同时如果没有为组件传递 <code>default-value</code> 属性，将会以此绑定值作为初始值。</p>
    <show-code>
      <template>
        <ph-date-picker
          v-model="date"
          value-format="yyyy/mm/dd"
          default-value="2022/2/22"
        ></ph-date-picker>
      </template>
      <template v-slot:code>
        <ph-code>&lt;template&gt;<br/>  &lt;ph-date-picker<br/>    v-model="date"<br/>    value-format="yyyy/mm/dd"<br/>    default-value="2022/2/22"<br/>  &gt;&lt;/ph-date-picker&gt;<br/>&lt;/template&gt;<br/><br/>&lt;script&gt;<br/>export default {<br/>  name: 'DatePickerDemo',<br/>  data: function () {<br/>    return {<br/>      date: new Date()<br/>    }<br/>  }<br/>}<br/>&lt;/script&gt;</ph-code>
      </template>
    </show-code>
    <br />
    <div class="note">
      备注说明：
      <ol>
        <li>1. 这个组件是基于 <code>input-type</code> 属性实现的，这个属性在移动端的浏览器上效果最佳，所以建议用手机打开这个页面查看具体的效果</li>
        <li>2. 每个手机、每个浏览器对于 <code>input-type</code> 的实现不一样，所以在不同的浏览器上表现形式不一样</li>
        <li>3. 有的浏览器有实现清楚功能，点击清楚后，组件的日期将会重置为当前日期</li>
      </ol>
    </div>
    <h3>API</h3>
    <h4>DatePicker Props</h4>
    <div class="table-panel">
      <ph-table class="date-table">
        <template v-slot:head>
          <th>属性</th>
          <th>类型</th>
          <th>说明</th>
          <th>默认值</th>
          <th>备注</th>
        </template>
        <template>
          <tr>
            <td>value-format</td>
            <td>String</td>
            <td>日期显示的格式</td>
            <td>yyyy-mm-dd</td>
            <td>
              yyyy - 年、yy - 年份的后两位、mm - 月, 如果不足两位数, 前置补0、m - 月、dd&nbsp;|&nbsp;d - 日期、H&nbsp;|&nbsp;HH - 小时[24小时制]、M&nbsp;|&nbsp;MM - 分钟、s&nbsp;|&nbsp;ss - 秒
            </td>
          </tr>
          <tr>
            <td>default-value</td>
            <td>String|Date|Number</td>
            <td>默认时间</td>
            <td>-</td>
            <td>如果没有传该属性，则组件将会以 <code>v-model</code> 绑定的组件值作为初始值；如果两个同时设置，则默认值的优先级以这个属性为准。组件的实际默认值顺序优先级：<code>default-value</code>&nbsp;&gt;&nbsp;<code>v-model</code>&nbsp;&gt;&nbsp;<code>new Date()</code></td>
          </tr>
        </template>
      </ph-table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DatePickerView',
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="stylus">
code
  background-color: #eee;
  padding: 2px;
  color: #26a2ff;
</style>
