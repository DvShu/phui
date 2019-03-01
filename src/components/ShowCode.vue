<template>
  <div class="show-code">
    <div class="show-panel">
      <div class="code-title">
        效果演示
      </div>
      <div class="phone-panel">
        <slot></slot>
      </div>
    </div>
    <div class="code-panel">
      <div class="code-title">
        代码展示
      </div>
      <div class="source-code-panel">
        <slot name="code"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowCode'
}
</script>

<style lang="stylus">
  .source-code-panel
    max-height 440px
    overflow-y auto
</style>
