<template>
  <div class="home">
    <a href="#" class="menu-item" @click.prevent="$router.push('/button')">Button 按钮</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/icon')">Icon 图标</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/message')">Message 消息提示</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/datepicker')">DatePicker 日期选择</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/toast')">Toast 轻提示</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/list')">List 列表</a>
    <a href="#" class="menu-item" @click.prevent="$router.push('/input')">Input 输入框</a>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less">

.home {
  .menu-item {
    display: inline-block;
    width: 100%;
    padding: 15px 10px;
    border-bottom: 1px solid #dedede;
    color: #333;
    box-sizing: border-box;
  }
}
</style>
