<template>
  <div class="ph-carousel">
    <slot />
  </div>
</template>

<script>
import { addClass, removeClass, css } from './dom'

export default {
  name: 'PhCarousel',
  props: {
    defaultIndex: { // 初始轮播图显示的索引
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      pages: [],
      index: 0
    }
  },
  mounted () {
    let children = this.$children
    let pages = []
    let defaultIndex = (this.defaultIndex >= 0 && this.defaultIndex < children.length) ? this.defaultIndex : 0
    this.index = defaultIndex
    children.forEach((child, index) => {
      if (index === defaultIndex) {
        addClass(child.$el, 'ph-carousel-active')
        pages.push({
          el: child.$el,
          width: child.$el.offsetWidth
        })
      } else {
        pages.push({
          el: child.$el,
          width: -1
        })
      }
    })
    this.pages = pages
    setTimeout(() => {
      this.doAnim()
    }, 1000)
  },
  methods: {
    next () {
      let preIndex = this.index
      if (preIndex === this.pages.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
      let nextEl = this.pages[this.index].el
      let preEl = this.pages[preIndex].el
      css(nextEl, {
        transform: 'translateX(' + (this.pages[preIndex].width) + 'px)',
        webketTransform: '-webkit-translateX(' + (this.pages[preIndex].width) + 'px)',
        display: 'block'
      })
      // 计算宽度
      if (this.pages[this.index].width === -1) {
        this.pages[this.index].width = nextEl.offsetWidth
      }
      setTimeout(() => {
        // 当前页滑出
        css(preEl, {
          transition: 'transform .5s linear',
          webkitTransition: '-webkit-transform .5s linear',
          transform: 'translateX(-' + this.pages[preIndex].width + 'px)',
          webkitTransform: '-webkit-translateX(-' + this.pages[preIndex].width + 'px)'
        })
        // 首页滑入
        css(nextEl, {
          transition: 'transform .5s linear',
          webkitTransition: '-webkit-transform .5s linear',
          transform: 'translateX(0)',
          webkitTransform: '-webkit-translateX(0)'
        })
      }, 100)
      setTimeout(() => {
        addClass(nextEl, 'ph-carousel-active')
        nextEl.removeAttribute('style')
        preEl.removeAttribute('style')
        removeClass(this.pages[preIndex].el, 'ph-carousel-active')
      }, 600)
    },
    doAnim () {
      this.next()
      setInterval(() => {
        this.next()
      }, 3000)
    },
    n () {
      this.next()
    }
  }
}
</script>

<style lang="stylus">
  .ph-carousel
    overflow-x hidden
    position relative
  .ph-carousel-item
    position absolute
    width: 100%;
    height 100%
    transform translateX(0)
    display none
  .ph-carousel-active
    display block
    transform none
</style>
