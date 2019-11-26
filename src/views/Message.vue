<template>
  <div class="sub-page message">
    <app-header title="Message"></app-header>
    <div class="doc-container">
      <button class="phui-btn" @click="showTips('这是一条消息提交', 'info')">显示消息提示</button>
      <hr>
      <button class="phui-btn phui-btn-primary" @click="showTips('成功', 'success')">成功</button>
      <span>&nbsp;</span>
      <button class="phui-btn" @click="showTips('错误', 'error')">错误</button>
      <span>&nbsp;</span>
      <button class="phui-btn phui-btn-primary" @click="showTips('警告', 'warn')">警告</button>
      <span>&nbsp;</span>
      <button class="phui-btn" @click="showTips('消息', 'info')">信息</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  methods: {
    showTips (msg, type) {
      this.$message({
        message: msg,
        type
      })
    }
  }
}
</script>

<style>

</style>
