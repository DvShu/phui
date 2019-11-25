<template>
  <div>
    <h3>描述</h3>
    <p>全局样式需要单独引入，整个全局样式包含的模块分别为：<a href="#" @click.prevent="$router.push('/reset')" class="home-a">样式重置</a>、<a class="home-a" href="#" @click.prevent="$router.push('/button')">Button 按钮</a>；如果不想引入全局模块，只需要引入个别模块，则请参照对应模块的引入说明进行引入。</p>
    <h3>引入</h3>
    <p>全局样式需要在 <code>App.vue</code> 文件中的 <code>style</code> 模块<span class="stress">开始位置</span>单独引入。</p>
    <ph-code>@import "phui/lib/style/index.styl"</ph-code>
  </div>
</template>

<script>
export default {
  name: 'GlobalStyle'
}
</script>

<style lang="stylus">

</style>
