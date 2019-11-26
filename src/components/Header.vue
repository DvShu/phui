<template>
  <div class="header">
    <div class="header-back" @click="$router.back()">&lt;</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
.header {
  height: 40px;
  border-bottom: 1px solid #dedede;

  .header-back {
    display: inline-flex;
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .title {
    display: inline-flex;
    width: calc(100% - 80px);
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
}
</style>
