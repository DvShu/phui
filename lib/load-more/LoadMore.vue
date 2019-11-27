<template>
  <div class="load-more">
    <slot />
    <div
      v-show="!finished"
      class="loadmore-bottom"
    >
      <span class="loadmore-text">
        加载中……
      </span>
    </div>
  </div>
</template>

<script>
/**
 * :loading.sync=true|false 加载状态,true正在加载
 * :finished=true|false 是否加载完所有的数据
 * @loadmore='fn' 如果需要加载更多数据时的调用函数
 * 例：
 *  <load-more :loading.sync="loading" :finished="finished" @loadmore="loadmore"></load-more>
 */
export default {
  name: 'PhLoadMore',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.height = this.$el.getBoundingClientRect().height
    this.$el.addEventListener('scroll', this.scroll)
    this.loadMore()
  },
  methods: {
    // 滑动事件
    scroll () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = undefined
      }
      if (this.finished || this.loading) return
      this.timer = setTimeout(() => {
        this.loadMore()
      }, 100)
    },
    offset () {
      return {
        sHeight: this.$el.scrollHeight,
        top: this.$el.scrollTop
      }
    },
    loadMore () {
      let scrollHeight = this.$el.scrollHeight
      let top = this.$el.scrollTop
      if (scrollHeight - top - this.height <= 60) {
        this.$emit('update:title', true)
        this.$emit('loadmore')
      }
    }
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.scroll)
    clearTimeout(this.timer) // 清楚定时器
  }
}
</script>

<style>
.load-more {
  height: 100%;
  overflow-y: auto;
}
.loadmore-bottom {
  padding: 15px 0;
  text-align: center;
}
.loadmore-text {
  font-size: 12px;
}
</style>
