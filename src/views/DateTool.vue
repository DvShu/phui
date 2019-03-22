<template>
  <div>
    <h3>引入</h3>
    <ph-code>import { DateTool } from 'phui'</ph-code>
    <h4>1. parse(d) </h4>
    <p>将参数解析为 `Date` 对象</p>
    <h5>代码示例</h5>
    <ph-code>DateTool.parse('2018-02-01 12:12:12')<br/>DateTool.parse('2018/02/01 12:12:12')</ph-code>
    <h4>2. format(date, pattern)</h4>
    <p>将日期格式化为指定的形式</p>
    <p>参数说明：</p>
    <ph-table>
      <template v-slot:head>
        <th>参数</th>
        <th>类型</th>
        <th>说明</th>
        <th>必填</th>
      </template>
      <template>
        <tr>
          <td>date</td>
          <td>Date</td>
          <td>需要进行格式化输出的日期对象</td>
          <td>是</td>
        </tr>
        <tr>
          <td>pattern</td>
          <td>String</td>
          <td>需要格式化输出的形式; yyyy - 完整的年份, yy -- 年份的后两位, mm - 月份, 不足两位前置补0, m - 月份, HH - 小时(24小时制), MM - 分钟, SS - 秒</td>
          <td>是</td>
        </tr>
      </template>
    </ph-table>
    <h5>代码示例：</h5>
    <ph-code>DateTool.format(new Date(), 'yyyy-mm-dd HH:MM:ss')</ph-code>
  </div>
</template>

<script>
export default {
  name: 'DateTool'
}
</script>

<style scoped>

</style>
