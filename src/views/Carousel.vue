<template>
  <div>
    <h3>引入</h3>
    <ph-code>import { Carousel } from 'phui'<br/><br/>Vue.use(Carousel)</ph-code>
    <p>这个组件只是作了一个简单的基本实现。</p>
    <h3>代码演示</h3>
    <show-code>
      <template>
      </template>
      <template v-slot:code>
        <ph-code>&lt;template&gt;<br/>  &lt;ph-carousel class="carousel"&gt;<br/>    &lt;ph-carousel-item class="carousel-item1"&gt;1&lt;/ph-carousel-item&gt;<br/>    &lt;ph-carousel-item class="carousel-item2"&gt;2&lt;/ph-carousel-item&gt;<br/>    &lt;ph-carousel-item class="carousel-item3"&gt;3&lt;/ph-carousel-item&gt;<br/>  &lt;/ph-carousel&gt;<br/>&lt;/template&gt;<br/><br/>&lt;script&gt;<br/>export default {<br/>  name: 'Carousel'<br/>}<br/>&lt;/script&gt;<br/><br/>&lt;style lang="stylus"&gt;<br/>  .carousel<br/>    height 150px<br/>  .carousel-item1, .carousel-item2, .carousel-item3<br/>    color white<br/>    font-size 16px<br/>    text-align center<br/>  .carousel-item1<br/>    background-color #1E9FFF<br/>  .carousel-item2<br/>    background-color #009688<br/>  .carousel-item3<br/>    background-color rebeccapurple<br/>&lt;/style&gt;</ph-code>
      </template>
    </show-code>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style lang="stylus">
  .carousel
    height 150px
  .carousel-item1, .carousel-item2, .carousel-item3
    color white
    font-size 16px
    text-align center
    line-height 150px
  .carousel-item1
    background-color #1E9FFF
  .carousel-item2
    background-color #009688
  .carousel-item3
    background-color rebeccapurple
</style>
