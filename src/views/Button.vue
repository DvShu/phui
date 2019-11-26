<template>
  <div>
    <h3>引入</h3>
    <ph-code>require('phui/lib/theme-default/button.css') //  import 'phui/lib/theme-default/button.css'</ph-code>
    <h3>代码演示</h3>
    <show-code>
      <template>
        <br>
        <button class="phui-btn">默认按钮</button>&nbsp;
        <button class="phui-btn phui-btn-primary">Primary</button>
        <br><br>
        <button class="phui-btn phui-btn-block">块按钮</button>
        <br><br>
        <button class="phui-btn phui-btn-primary phui-btn-block">块按钮</button>
      </template>
      <template v-slot:code>
        <ph-code>&lt;br&gt;<br/>&lt;button class="phui-btn"&gt;默认按钮&lt;/button&gt;&amp;nbsp;<br/>&lt;button class="phui-btn phui-btn-primary"&gt;主要&lt;/button&gt;<br/>&lt;br&gt;&lt;br&gt;<br/>&lt;button class="phui-btn phui-btn-block"&gt;块按钮&lt;/button&gt;<br/>&lt;br&gt;&lt;br&gt;<br/>&lt;button class="phui-btn phui-btn-primary phui-btn-block"&gt;块按钮&lt;/button&gt;</ph-code>
      </template>
    </show-code>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>
