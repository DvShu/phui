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
  data () {
    return {
      scollTimer: -1
    }
  },
  mounted () {
    // 监听滑动事件
    this.$el.addEventListener('scroll', this.scroll)
    this.loadMore() // 初始的时候，触发一次加载更多
  },
  methods: {
    // 滑动事件
    scroll () {
      clearTimeout(this.scollTimer)
      if (this.finished || this.loading) return
      this.scollTimer = setTimeout(() => {
        this.loadMore() // 加载更多
      }, 100)
    },
    loadMore () {
      // 滚动所在容器的可视高度
      let height = this.$el.getBoundingClientRect().height
      // 滚动所在容器的实际高度
      let scrollHeight = this.$el.scrollHeight
      // 滚动距离
      let top = this.$el.scrollTop
      // 临界点
      if (scrollHeight - top - height <= 60) {
        this.$emit('update:loading', true)
        this.$emit('loadmore')
      }
    }
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.scroll)
    clearTimeout(this.scollTimer) // 清楚定时器
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
