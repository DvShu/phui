<template>
  <div>
    <h3>引入</h3>
    <ph-code>require('phui/lib/theme-default/common.css') //  import 'phui/lib/theme-default/common.css'</ph-code>
    <p>抽取了一些比较常用的小组件样式。</p>
    <h3>人名币单位(￥)</h3>
    <show-code class="rmb-show-code">
      <template>
        <span class="phui-rmb">&yen;</span>
      </template>
      <template v-slot:code>
        <ph-code>&lt;span class="phui-rmb"&gt;&amp;yen;&lt;/span&gt; // &lt;span class="phui-yuan"&gt;&amp;yen;&lt;/span&gt;</ph-code>
      </template>
    </show-code>
  </div>
</template>

<script>
export default {
  name: 'Common'
}
</script>

<style lang="stylus">
.rmb-show-code
  .phone-panel
    height 40px
</style>
