<template>
  <div>
    <h3>引入</h3>
    <h4>1. <code>Vue</code> 是通过全局 <code>&lt;script&gt;</code> 的方式引入，例如：</h4>
    <ph-code>&lt;script src="https://cdn.staticfile.org/vue/2.6.7/vue.min.js"&gt;&lt;/script&gt;</ph-code>
    <p>在 <code>main.js</code>中添加以下代码：</p>
    <ph-code>import { ProgressBar2 } from 'phui'<br/><br/>Vue.use(ProgressBar2);</ph-code>
    <h4>2. <code>Vue</code> 是通过 ES Module 的方式引入，例如：</h4>
    <ph-code>import Vue from 'vue'</ph-code>
    <p>在 <code>main.js</code>中添加以下代码：</p>
    <ph-code>import { ProgressBar } from 'phui'<br/><br/>Vue.use(ProgressBar);</ph-code>
    <h3>代码演示</h3>
    <show-code>
      <template>
        <progress-compt :status="show"></progress-compt>
        <button class="inline-btn" @click="showProgress">显示进度条</button>
      </template>
      <template v-slot:code>
        <ph-code>&lt;template&gt;<br/>  &lt;div&gt;<br/>    &lt;button class="inline-btn" @click="showProgress"&gt;显示进度条&lt;/button&gt;<br/>  &lt;/div&gt;<br/>&lt;/template&gt;<br/>&lt;script&gt;<br/>export default {<br/>  name: 'TestProgress',<br/>  methods: {<br/>    showProgress () {<br/>      this.$bar.start()<br/>      /* 开始执行异步操作, setTimeout 模拟异步 */<br/>      setTimeout(() =&gt; {<br/>        this.$bar.finish()<br/>      }, 1500)<br/>    }<br/>  }<br/>}<br/>&lt;/script&gt;<br/>&lt;style lang="stylus"&gt;<br/>.inline-btn<br/>  margin 15px<br/>&lt;/style&gt;</ph-code>
      </template>
    </show-code>
    <h3>API</h3>
    <h4>Methods</h4>
    <h5>1. setOptions(options): Void</h5>
    <p>设置配置信息</p>
    <ph-table>
      <template v-slot:head>
        <th>参数</th>
        <th>类型</th>
        <th>说明</th>
        <th>默认值</th>
      </template>
      <template>
        <tr>
          <td>options</td>
          <td>Object</td>
        </tr>
        <tr>
          <td><code>options.duration</code></td>
          <td>Number</td>
          <td>持续时间(单位：毫秒[ms])</td>
          <td>5000</td>
        </tr>
        <tr>
          <td><code>options.height</code></td>
          <td>String</td>
          <td>进度条的高度</td>
          <td>2px</td>
        </tr>
        <tr>
          <td><code>options.color</code></td>
          <td>String</td>
          <td>进度条的颜色</td>
          <td>#009688</td>
        </tr>
      </template>
    </ph-table>
    <h5>2. start()：Void</h5>
    <p>显示进度条, 进度条则会定时自增，直至增加到 100% 后会自动结束</p>
    <h5>3. finish(): Void</h5>
    <p>结束进度，隐藏并恢复初始状态</p>
    <h5>4. getPercent(): percent</h5>
    <p>获取当前进度</p>
    <p>返回</p>
    <ph-table>
      <template v-slot:head>
        <th>属性</th>
        <th>类型</th>
        <th>说明</th>
      </template>
      <template>
        <tr>
          <td>percent</td>
          <td>Number</td>
          <td>当前进度值[整数]</td>
        </tr>
      </template>
    </ph-table>
    <h5>5. setPercent(percent)：Void</h5>
    <p>设置进度</p>
    <ph-table>
      <template v-slot:head>
        <th>参数</th>
        <th>类型</th>
        <th>说明</th>
      </template>
      <template>
        <tr>
          <td>percent</td>
          <td>Number</td>
          <td>进度</td>
        </tr>
      </template>
    </ph-table>
    <h5>6. increase(percent): Void</h5>
    <p>在现有进度的基础上添加进度</p>
  </div>
</template>

<script>
import ProgressCompt from '../components/ProgressCompt.vue'

export default {
  name: 'ProgressBar',
  components: {
    ProgressCompt
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showProgress () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus">
.show-code
  display flex
.show-panel, .code-panel
  flex-grow 1
  border 1px solid #dedede
  width 50%
.code-panel
  margin-left 15px
.code-title
  padding 10px
  color #4998f4
  border-bottom 1px solid #dedede
.phone-panel
  margin 15px auto
  width 50%
  height 410px
  border 1px solid #dedede
  position relative
  text-align center
  overflow-x hidden
.inline-btn
  margin 15px
</style>
