<template>
  <div>
    <p class="title">phui</p>
    <div class="sub-title">
      <span>收集整理一些小巧的平时工作中的 <code>Vue</code> 组件，大部分都是移动端组件。对于一些比较大的组件，推荐使用其余组件库，比如：</span>
      <a
        href="http://element-cn.eleme.io/#/zh-CN"
        title="Element-ui"
        class="home-a"
      >
        Element-ui
      </a>
      <span>、</span>
      <a
        href="https://www.iviewui.com/"
        title="iView"
        class="home-a"
      >
        iView
      </a>
      <span>、</span>
      <a
        href="https://youzan.github.io/vant/#/zh-CN/intro"
        title="vant"
        class="home-a"
      >
        Vant
      </a>
      <span>、</span>
      <a
        href="https://didi.github.io/mand-mobile/#/zh-CN/home"
        title="mand-mobile"
        class="home-a"
      >
        mand-mobile
      </a>
    </div>
    <div class="note">
      备注说明：
      <ol>
        <li>&emsp;1.&nbsp;当前功能都只是平时需要的功能，没有做更多的扩展，后续需要会根据需求进行相应的扩展。</li>
        <li>&emsp;2.&nbsp;所有的代码都是没有经过 <code>babel</code> 编译的，需要在最终 <code>build</code> 的时候进行统一编译。</li>
        <li>&emsp;3.&nbsp;需要借助 <a href="https://github.com/ant-design/babel-plugin-import" class="home-a">babel-plugin-import</a> 实现按需引入。</li>
        <li>&emsp;4.&nbsp;整个模块的样式使用 `stylus` 作为样式开发，所以需要配置 `stylus` 使用</li>
        <li>&emsp;5.&nbsp;如果需要引入全局样式，则需要单独再 `App.vue` 中 `style` 的开始位置 `@import 'phui/lib/style/index.styl'`来单独引入 </li>
      </ol>
    </div>
    <h3>安装</h3>
    <pre><code class="lang-javascript">yarn add phui babel-plugin-import</code></pre>
    <h3>配置按需引入</h3>
    <p>修改 <code>babel.config.js</code> ，添加 <code>plugins</code> </p>
    <ph-code>[<br/>  'import',<br/>  {<br/>    'libraryName': 'phui',<br/>    'style': false<br/>  }<br/>]</ph-code>
    <p>修改后的 <code>babel.config.js</code> 的完整的代码是类似于下面这样的：</p>
    <ph-code>module.exports = {<br/>  presets: [<br/>    '@vue/app'<br/>  ],<br/>  plugins: [<br/>    [<br/>      'import',<br/>      {<br/>        'libraryName': 'phui',<br/>        'style': false<br/>      }<br/>    ]<br/>  ]<br/>}</ph-code>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  mounted () {
    this.$message.info('成功')
  }
}
</script>

<style lang="less">
  .home-a {
    color: #1E9FFF;
    &:hover {
      color: green;
    }
  }
  .title {
    font-size: 30px;
    text-align: center;
    line-height: 2;
  }
  .sub-title {
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
  }
  .note {
    background-color: #455a64;
    padding: 10px;
    color: white;
  }
</style>
