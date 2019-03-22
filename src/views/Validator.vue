<template>
  <div>
    <h3>引入</h3>
    <ph-code>import { Validator } from 'phui'</ph-code>
    <p>进行简单的数据验证, 例如表单数据上传之前进行参数验证。如果需要进行一些复杂的数据验证，例如带有数组的，推荐其它的框架，例如：<a href="https://github.com/yiminghe/async-validator">async-validator</a>、<a
      href="https://github.com/ansman/validate.js">validate.js</a>、<a href="https://github.com/skaterdav85/validatorjs">validatorjs</a>……</p>
    <h4>代码示例</h4>
    <ph-code>/* 1. 定义规则 */<br/>var rules = [<br/>  {<br/>    key: 'name',<br/>    rule: 'required',<br/>    message: '请输入名称'<br/>  },<br/>  {<br/>    key: 'password',<br/>    rule: 'required',<br/>    message: '请输入密码'<br/>  },<br/>  {<br/>    key: 'password2',<br/>    rule: 'required|same:password',<br/>    message: '两次密码不一致'<br/>  },<br/>  {<br/>    key: 'tel',<br/>    rule: 'tel',<br/>    message: '请输入手机号'<br/>  },<br/>  {<br/>    key: 'code',<br/>    rule: /^\d{4}$/,<br/>    message: '请输入正确的验证码'<br/>  }<br/>]<br/><br/>/* 2. 构造验证器 */<br/>var validator = new Validator(rules)<br/><br/>/* 3. 进行验证 */<br/>var data = {<br/>  name: 'name'<br/>}<br/>validator.validate(data, function (errors) {<br/>  if (!errors) { /* 验证成功 */<br/>  ……<br/>  } else {<br/>    console.log(errors[0].key + ' &amp; ' + errors[0].message)<br/><br/>  }<br/>})</ph-code>
    <p>验证器会在验证到任何一个错误的时候，就结束验证</p>
    <p>默认的规则列表</p>
    <div class="table-panel">
      <ph-table class="date-table">
        <template v-slot:head>
          <th>规则</th>
          <th>说明</th>
          <th>错误信息</th>
          <th>备注</th>
        </template>
        <template>
          <tr>
            <td>required</td>
            <td>验证必填项, 非空</td>
            <td></td>
            <td>-</td>
          </tr>
          <tr>
            <td>tel</td>
            <td>验证手机号, 11位数字</td>
            <td>请输入手机号</td>
            <td>-</td>
          </tr>
          <tr>
            <td>same:key</td>
            <td>验证相等, 当前字段的值必须与 `:` 后对应的字段的值相等</td>
            <td></td>
            <td>-</td>
          </tr>
        </template>
      </ph-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Validator'
}
</script>

<style scoped>

</style>
