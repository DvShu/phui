<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "../lib/style/index.less";

  #app {
    width: 400px;
    height: 100%;
    border: 1px solid gray;
    margin: auto;
    position: relative;
  }

  .sub-page {
    overflow-y: hidden;
  }

  .doc-container {
    height: calc(100% - 40px);
    overflow-y: auto;
  }

  .message-tip {
    background-color: white;
  }

  @media screen and (max-width: 400px) {
    #app {
      width: 100%;
      border-width: 0;
    }
  }
</style>
