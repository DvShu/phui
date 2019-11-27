<template>
  <div class="sub-page date-picker">
    <app-header title="DatePicker"></app-header>
    <div class="doc-container">
      <p class="tips">注意：这个页面需要到移动端打开才能显示实际的效果，因为这个组件是移动端的日期选择组件。</p>
      <ph-date-picker></ph-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    return {}
  }
}
</script>

<style lang="less">
.date-picker {
  .tips {
    color: red;
    line-height: 1.2;
  }
}
</style>
