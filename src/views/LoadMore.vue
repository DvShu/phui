<template>
  <div>
    <h3>引入</h3>
    <ph-code>import { LoadMore } from 'phui'<br/><br/>Vue.use(LoadMore)</ph-code>
    <p>滑动到容器底部后加载更多。</p>
    <h3>代码演示</h3>
    <show-code>
      <template>
        <load-more
          :loading.sync="loading"
          :finished="finished"
          @loadmore="loadmore"
          class="list-panel"
        >
          <div
            v-for="(item, index) in list"
            :key="index"
            class="list-item"
          >
            {{ item.id }} + ' - ' + {{ item.value }}
          </div>
        </load-more>
      </template>
      <template v-slot:code>
        <ph-code>&lt;template&gt;<br/>  &lt;load-more<br/>    :loading.sync="loading"<br/>    :finished="finished"<br/>    @loadmore="loadmore"<br/>    class="list-panel"<br/>  &gt;<br/>    &lt;div<br/>      v-for="(item, index) in list"<br/>      :key="index"<br/>      class="list-item"<br/>    &gt;<br/>      Item<br/>    &lt;/div&gt;<br/>  &lt;/load-more&gt;<br/>&lt;/template&gt;<br/><br/>&lt;script&gt;<br/>export default {<br/>  name: 'LoadMorePage',<br/>  data () {<br/>    return {<br/>      loading: false,<br/>      finished: false,<br/>      list: []<br/>    }<br/>  },<br/>  created () {<br/>    let l = []<br/>    for (let i = 0; i &lt; 10; i++) {<br/>      l.push({ id: i + 1, value: i })<br/>    }<br/>    this.list = l<br/>  },<br/>  methods: {<br/>    loadmore () {<br/>      this.loading = true<br/>      setTimeout(() =&gt; {<br/>        let l = []<br/>        for (let i = 0; i &lt; 5; i++) {<br/>          l.push({ id: i + 1, value: 'add_' + i })<br/>        }<br/>        this.list = this.list.concat(l)<br/>        this.loading = false<br/>        if (this.list.length &gt;= 30) {<br/>          this.finished = true<br/>        }<br/>      }, 3000)<br/>    }<br/>  }<br/>}<br/>&lt;/script&gt;<br/><br/>&lt;style lang="stylus"&gt;<br/>.list-panel<br/>  height 300px<br/>.list-item<br/>  border-bottom 1px solid blueviolet<br/>  padding 15px 0<br/>&lt;/style&gt;<br/><br/></ph-code>
      </template>
    </show-code>
    <h3>API</h3>
    <h4>LoadMore Props</h4>
    <div class="table-panel">
      <ph-table class="date-table">
        <template v-slot:head>
          <th>属性</th>
          <th>类型</th>
          <th>说明</th>
          <th>默认值</th>
          <th>备注</th>
        </template>
        <template>
          <tr>
            <td>loading</td>
            <td>boolean</td>
            <td>是否正在加载数据</td>
            <td>false</td>
            <td>-</td>
          </tr>
          <tr>
            <td>finished</td>
            <td>boolean</td>
            <td>数据是否全部加载完成</td>
            <td>false</td>
            <td>如果数据已经全部加载完成，则滑动到底部时不会触发 `loadmore` 事件，同时也不会显示 *加载中……* 的字样</td>
          </tr>
        </template>
      </ph-table>
    </div>
    <h4>Events</h4>
    <div class="table-panel">
      <ph-table class="date-table">
        <template v-slot:head>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </template>
        <template>
          <tr>
            <td>loadmore</td>
            <td>滑动到底部时触发的加载更多回调</td>
            <td>-</td>
          </tr>
        </template>
      </ph-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadMorePage',
  data () {
    return {
      loading: false,
      finished: false,
      list: []
    }
  },
  created () {
    let l = []
    for (let i = 0; i < 10; i++) {
      l.push({ id: i + 1, value: i })
    }
    this.list = l
  },
  methods: {
    loadmore () {
      this.loading = true
      setTimeout(() => {
        let l = []
        for (let i = 0; i < 5; i++) {
          l.push({ id: i + 1, value: 'add_' + i })
        }
        this.list = this.list.concat(l)
        this.loading = false
        if (this.list.length >= 30) {
          this.finished = true
        }
      }, 3000)
    }
  }
}
</script>

<style lang="stylus">
.list-panel
  height 300px
.list-item
  border-bottom 1px solid blueviolet
  padding 15px 0
</style>
