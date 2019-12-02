<template>
  <div class="ph-list">
    <slot />
    <div class="ph-list-bottom" >
      <i class="ph-icon ph-icon-loading" v-if="finished === false"></i>
      <span class="ph-list-more">{{ finished ? '没有更多了' : '加载中……' }}</span>
    </div>
  </div>
</template>

<script>
/**
 * :loading.sync=true|false 加载状态,true正在加载
 * :finished=true|false 是否加载完所有的数据
 * @loadmore='fn' 如果需要加载更多数据时的调用函数
 * 例：
 *  <load-more :loading.sync="loading" :finished="finished" @load="loadmore"></load-more>
 */
export default {
  name: 'PhList',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    finished: {
      type: Boolean,
      default: false
    },
    isLazyimg: { // 是否开启图片懒加载。默认false。如果设为true，则只会对在可视区域的图片进行按需加载。但与此同时，在拼接列表字符的时候，你不能给列表中的img元素赋值src，必须要用lay-src取代
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scollTimer: -1
    }
  },
  watch: {
    loading (v) {
      if (v === false) {
        this.$nextTick(() => {
          if (this.isLazyimg === true) {
            this.lazyimg() // 图片懒加载
          }
        }) // 节点更新完成后
      }
    }
  },
  mounted () {
    // 监听滑动事件
    this.$el.addEventListener('scroll', this.scroll)
    this.scroll() // 触发一次加载更多
  },
  methods: {
    // 滑动事件
    scroll () {
      clearTimeout(this.scollTimer)
      this.scollTimer = setTimeout(() => {
        let height = this.$el.getBoundingClientRect().height // 滚动所在容器的可视高度
        let top = this.$el.scrollTop // 滚动距离
        // 滚动所在容器的实际高度
        let scrollHeight = this.$el.scrollHeight
        if (this.isLazyimg === true) {
          this.lazyimg() // 图片懒加载
        }
        if (scrollHeight - height - top <= 60) { // 加载更多
          if (this.finished || this.loading) return
          this.$emit('update:loading', true)
          this.$emit('load')
        }
      }, 100)
    },
    // 图片懒加载
    lazyimg () {
      let height = this.$el.getBoundingClientRect().height
      let top = this.$el.scrollTop
      let end = height + top
      let $lazyimgElem = this.$el.querySelectorAll('img[lazy-src]')
      for (let i = 0, len = $lazyimgElem.length; i < len; i++) {
        let $item = $lazyimgElem[i]
        let elemTop = $item.offsetTop - this.$el.offsetTop
        if (elemTop >= top) {
          if (elemTop <= end) { // 始终只加载在当前屏范围内的图片
            $item.src = $item.getAttribute('lazy-src')
            $item.removeAttribute('lazy-src')
          } else { // 如果图片的top坐标，超出了当前屏，则终止后续图片的遍历
            break
          }
        }
      }
    }
  },
  destroyed () {
    this.$el.removeEventListener('scroll', this.scroll)
    clearTimeout(this.scollTimer) // 清楚定时器
  }
}
</script>

<style lang="less">
@keyframes phui-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.ph-list {
  height: 100%;
  overflow-y: auto;
  .ph-list-bottom {
    padding: 15px 0;
    text-align: center;
  }
  .ph-list-more {
    font-size: 12px;
    vertical-align: middle;
    margin-left: 10px;
  }
  .ph-icon-loading {
    font-size: 20px;
    display: inline-block;
    vertical-align: middle;
    animation: phui-rotate 1s linear infinite;
  }
}

</style>
