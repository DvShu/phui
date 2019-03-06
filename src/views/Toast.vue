<template>
  <div>
    <h3>引入</h3>
    <h4>1. <code>Vue</code> 是通过全局 <code>&lt;script&gt;</code> 的方式引入，例如：</h4>
    <ph-code>&lt;script src="https://cdn.staticfile.org/vue/2.6.7/vue.min.js"&gt;&lt;/script&gt;</ph-code>
    <p>在 <code>main.js</code>中添加以下代码：</p>
    <ph-code>import { Toast2 } from 'phui'<br/><br/>Vue.use(Toast2);</ph-code>
    <h4>2. <code>Vue</code> 是通过 ES Module 的方式引入，例如：</h4>
    <ph-code>import&nbsp;Vue&nbsp;from&nbsp;'vue'</ph-code>
    <p>在 <code>main.js</code>中添加以下代码：</p>
    <ph-code>import { Toast } from&nbsp;'phui'<br/><br/>Vue.use(Toast);</ph-code>
    <h3>代码演示</h3>
    <show-code>
      <template>
        <ph-toast :message="msg" :show="show"></ph-toast>
        <button @click="toast">Toast</button>
      </template>
      <template v-slot:code>
        <ph-code>&lt;template&gt;<br/>  &lt;div&gt;<br/>    &lt;button @click="toast"&gt;Toast&lt;/button&gt;<br/>  &lt;/div&gt;<br/>&lt;/template&gt;<br/>&lt;script&gt;<br/>export default {<br/>  name: 'TestProgress',<br/>  methods: {<br/>    toast () {<br/>      this.$toast('这是一条 Toast 轻提示')<br/>    }<br/>  }<br/>}<br/>&lt;/script&gt;</ph-code>
      </template>
    </show-code>
    <h3>API</h3>
    <h4>Methods</h4>
    <h5>this.$toast(options): Void</h5>
    <p>显示一条 Toast 轻提示信息，提示信息会在 3000ms 后自动关闭</p>
    <ph-table>
      <template>
        <th>参数</th>
        <th>类型</th>
        <th>说明</th>
        <th>默认值</th>
      </template>
      <template>
        <tr>
          <td>options</td>
          <td>String | Object</td>
          <td>如果 options 的类型为 String，则把 options 作为提示信息的内容，如果为 Object 则为包含下列参数的对象</td>
          <td>-</td>
        </tr>
        <tr>
          <td>options.message</td>
          <td>String</td>
          <td>提示信息内容</td>
          <td>-</td>
        </tr>
        <tr>
          <td>options.position</td>
          <td>String</td>
          <td>提示信息显示的垂直位置，可选值有：'top'、'middle', 'bottom'</td>
          <td>'middle'</td>
        </tr>
        <tr>
          <td>options.className</td>
          <td>String</td>
          <td>Toast 的类名。可以为其添加样式，多个样式之间用空格分隔</td>
          <td>-</td>
        </tr>
      </template>
    </ph-table>
  </div>
</template>

<script>
import PhToast from '../components/Toast.vue'
export default {
  name: 'Toast',
  components: {
    PhToast
  },
  data () {
    return {
      msg: '这是一条 Toast 轻提示',
      show: false
    }
  },
  methods: {
    toast () {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>
