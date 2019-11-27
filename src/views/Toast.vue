<template>
  <div class="sub-page">
    <app-header title="Toast"></app-header>
    <div class="doc-container">
      <p>基础使用</p>
      <button class="phui-btn" @click="toast('Toast提示', 'middle')">Toast提示</button>
      <p>不同状态</p>
      <button class="phui-btn phui-btn-primary" @click="typeToast('成功提示', 'success')">成功</button>
      <span>&nbsp;</span>
      <button class="phui-btn" @click="typeToast('失败提示', 'fail')">失败</button>
      <p>位置</p>
      <button class="phui-btn" @click="toast('顶部弹出', 'top')">顶部弹出</button>
      <span>&nbsp;</span>
      <button class="phui-btn phui-btn-primary" @click="toast('中间弹出', 'middle')">中间弹出</button>
      <span>&nbsp;</span>
      <button class="phui-btn" @click="toast('底部弹出', 'bottom')">底部弹出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  methods: {
    toast (msg, pos) {
      this.$toast({
        message: msg,
        position: pos
      })
    },
    typeToast (msg, type) {
      this.$toast[type](msg)
    }
  }
}
</script>

<style>

</style>
