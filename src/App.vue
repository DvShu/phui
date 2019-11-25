<template>
  <div id="app">
    <div class="site-mobile-shade" v-show="asideOpen" @click="toggoleAside(false)"></div>
    <div class="doc-aside" v-show="asideOpen">
      <ul class="aside-ul">
        <li>
          <router-link to="/" class="aside-link" exact>介绍</router-link>
        </li>
        <li>
          <router-link to="/global_style" class="aside-link" exact>全局样式</router-link>
        </li>
        <li>
          <router-link to="/reset" class="aside-link" exact>重置样式</router-link>
        </li>
        <li>
          <router-link to="/button" class="aside-link" exact>Button&nbsp;按钮</router-link>
        </li>
        <li>
          <router-link to="/progress_bar" class="aside-link" exact>ProgressBar&nbsp;页面加载进度条</router-link>
        </li>
        <li>
          <router-link to="/toast" class="aside-link" exact>Toast&nbsp;轻提示</router-link>
        </li>
        <li>
          <router-link to="/carousel" class="aside-link" exact>Carousel 轮播图</router-link>
        </li>
        <li>
          <router-link to="/date_tool" class="aside-link" exact>DateTool 日期处理工具类</router-link>
        </li>
        <li>
          <router-link to="/date_picker" class="aside-link" exact>DatePicker 日期选择</router-link>
        </li>
        <li>
          <router-link to="/validator" class="aside-link" exact>Validator 数据验证</router-link>
        </li>
        <li>
          <router-link to="/load_more" class="aside-link" exact>LoadMore 加载更多</router-link>
        </li>
      </ul>
    </div>
    <div class="btn-phone-aside" v-if="mobile" @click="toggoleAside(true)">
      &gt;
    </div>
    <div class="doc-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      mobile: false,
      asideOpen: true
    }
  },
  created () {
    this.mobile = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)
    this.asideOpen = !this.mobile
  },
  methods: {
    // 切换菜单栏的显示与隐藏
    toggoleAside (flag) {
      this.asideOpen = flag
    }
  }
}
</script>

<style lang="stylus">
  @import "../lib/style/index.styl"
  table
    background-color: #fafafa;
    th
      text-align left
      font-weight 400
      background-color #f0f0f0
      color #666
    th, td
      padding 15px
    td
      font-size 13px
      color #333
  .stress
    font-weight bold
    color blue
  #app
    height 100%
    overflow-y hidden
    display flex
  .doc-aside
    width 300px
    border-right 1px solid #dedede
    height 100%
    background-color #f9fafb;
    color #4c555a;
  .aside-link
    display inline-block
    width 100%
    padding 5px 10px
    font-size 16px
  .router-link-active
    color #1E9FFF
  .doc-content
    flex-grow 1
    height 100%
    padding 10px
    overflow-y auto
  .btn-phone-aside
    position fixed
    bottom: 15px;
    left: 15px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 2px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    z-index 100
  pre
    padding: 10px;
    box-sizing: border-box;
    background-color: #f2f4f5;
    code
      border: 0;
      display: block;
      max-width: none;
      padding: 0;
      margin: 0;
      overflow: auto;
      font-size: 13px;
      white-space: pre;
      background: 0 0;
      line-height 1.5
</style>
