(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],v=0,_=[];v<o.length;v++)i=o[v],s[i]&&_.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(_.length)_.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/phui/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"218f":function(t,e,r){"use strict";var n=r("7950"),s=r.n(n);s.a},"480e":function(t,e,r){"use strict";var n=r("f5f4"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d"),r("cb0b"),r("b11d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.asideOpen,expression:"asideOpen"}],staticClass:"site-mobile-shade",on:{click:function(e){return t.toggoleAside(!1)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.asideOpen,expression:"asideOpen"}],staticClass:"doc-aside"},[r("ul",{staticClass:"aside-ul"},[r("li",[r("router-link",{staticClass:"aside-link",attrs:{to:"/",exact:""}},[t._v("介绍")])],1),r("li",[r("router-link",{staticClass:"aside-link",attrs:{to:"/progress_bar",exact:""}},[t._v("ProgressBar 页面加载进度条")])],1),r("li",[r("router-link",{staticClass:"aside-link",attrs:{to:"/toast",exact:""}},[t._v("Toast 轻提示")])],1),r("li",[r("router-link",{staticClass:"aside-link",attrs:{to:"/carousel",exact:""}},[t._v("Carousel 轮播图")])],1),r("li",[r("router-link",{staticClass:"aside-link",attrs:{to:"/date_picker",exact:""}},[t._v("DatePicker 日期选择")])],1)])]),t.mobile?r("div",{staticClass:"btn-phone-aside",on:{click:function(e){return t.toggoleAside(!0)}}},[t._v("\n    >\n  ")]):t._e(),r("div",{staticClass:"doc-content"},[r("router-view")],1)])},a=[],i={name:"App",data:function(){return{mobile:!1,asideOpen:!0}},created:function(){this.mobile=/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent),this.asideOpen=!this.mobile},methods:{toggoleAside:function(t){this.asideOpen=t}}},o=i,c=(r("7faf"),r("2877")),l=Object(c["a"])(o,s,a,!1,null,null,null),u=l.exports,v=r("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"title"},[t._v("phui")]),t._m(0),t._m(1),r("h3",[t._v("安装")]),t._m(2),r("h3",[t._v("配置按需引入")]),t._m(3),r("ph-code",[t._v("["),r("br"),t._v("  'component',"),r("br"),t._v("  {"),r("br"),t._v("    'libraryName': 'phui',"),r("br"),t._v("    'styleLibraryName': 'theme-default'"),r("br"),t._v("  }"),r("br"),t._v("]")]),t._m(4),r("ph-code",[t._v("module.exports = {"),r("br"),t._v("  presets: ["),r("br"),t._v("    '@vue/app'"),r("br"),t._v("  ],"),r("br"),t._v("  plugins: ["),r("br"),t._v("    ["),r("br"),t._v("      'component',"),r("br"),t._v("      {"),r("br"),t._v("        'libraryName': 'phui',"),r("br"),t._v("        'styleLibraryName': 'theme-default'"),r("br"),t._v("      }"),r("br"),t._v("    ]"),r("br"),t._v("  ]"),r("br"),t._v("}")])],1)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sub-title"},[r("span",[t._v("收集整理一些小巧的平时工作中的 "),r("code",[t._v("Vue")]),t._v(" 组件，大部分都是移动端组件。对于一些比较大的组件，推荐使用其余组件库，比如：")]),r("a",{staticClass:"home-a",attrs:{href:"http://element-cn.eleme.io/#/zh-CN",title:"Element-ui"}},[t._v("\n      Element-ui\n    ")]),r("span",[t._v("、")]),r("a",{staticClass:"home-a",attrs:{href:"https://www.iviewui.com/",title:"iView"}},[t._v("\n      iView\n    ")]),r("span",[t._v("、")]),r("a",{staticClass:"home-a",attrs:{href:"https://youzan.github.io/vant/#/zh-CN/intro",title:"vant"}},[t._v("\n      Vant\n    ")]),r("span",[t._v("、")]),r("a",{staticClass:"home-a",attrs:{href:"https://didi.github.io/mand-mobile/#/zh-CN/home",title:"mand-mobile"}},[t._v("\n      mand-mobile\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"note"},[t._v("\n    备注说明：\n    "),r("ol",[r("li",[t._v(" 1. 当前功能都只是平时需要的功能，没有做更多的扩展，后续需要会根据需求进行相应的扩展。")]),r("li",[t._v(" 2. 所有的代码都是没有经过 "),r("code",[t._v("babel")]),t._v(" 编译的，需要在最终 "),r("code",[t._v("build")]),t._v(" 的时候进行统一编译。")]),r("li",[t._v(" 3. 需要借助 "),r("code",[t._v("babel-plugin-component")]),t._v(" 实现按需引入。")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",[r("code",{staticClass:"lang-javascript"},[t._v("yarn add phui babel-plugin-component")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("修改 "),r("code",[t._v("babel.config.js")]),t._v(" ，添加 "),r("code",[t._v("plugins")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("修改后的 "),r("code",[t._v("babel.config.js")]),t._v(" 的完整的代码是类似于下面这样的：")])}],h={name:"Home"},p=h,f=(r("c219"),Object(c["a"])(p,_,d,!1,null,null,null)),m=f.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("引入")]),t._m(0),r("ph-code",[t._v('<script src="https://cdn.staticfile.org/vue/2.6.7/vue.min.js"><\/script>')]),t._m(1),r("ph-code",[t._v("import { ProgressBar2 } from 'phui'"),r("br"),r("br"),t._v("Vue.use(ProgressBar2);")]),t._m(2),r("ph-code",[t._v("import Vue from 'vue'")]),t._m(3),r("ph-code",[t._v("import { ProgressBar } from 'phui'"),r("br"),r("br"),t._v("Vue.use(ProgressBar);")]),r("h3",[t._v("代码演示")]),r("show-code",{scopedSlots:t._u([{key:"code",fn:function(){return[r("ph-code",[t._v("<template>"),r("br"),t._v("  <div>"),r("br"),t._v('    <button class="inline-btn" @click="showProgress">显示进度条</button>'),r("br"),t._v("  </div>"),r("br"),t._v("</template>"),r("br"),t._v("<script>"),r("br"),t._v("export default {"),r("br"),t._v("  name: 'TestProgress',"),r("br"),t._v("  methods: {"),r("br"),t._v("    showProgress () {"),r("br"),t._v("      this.$bar.start()"),r("br"),t._v("      /* 开始执行异步操作, setTimeout 模拟异步 */"),r("br"),t._v("      setTimeout(() => {"),r("br"),t._v("        this.$bar.finish()"),r("br"),t._v("      }, 1500)"),r("br"),t._v("    }"),r("br"),t._v("  }"),r("br"),t._v("}"),r("br"),t._v("<\/script>"),r("br"),t._v('<style lang="stylus">'),r("br"),t._v(".inline-btn"),r("br"),t._v("  margin 15px"),r("br"),t._v("</style>")])]},proxy:!0}])},[[r("progress-compt",{attrs:{status:t.show}}),r("button",{staticClass:"inline-btn",on:{click:t.showProgress}},[t._v("显示进度条")])]],2),r("h3",[t._v("API")]),r("h4",[t._v("Methods")]),r("h5",[t._v("1. setOptions(options): Void")]),r("p",[t._v("设置配置信息")]),r("ph-table",{scopedSlots:t._u([{key:"head",fn:function(){return[r("th",[t._v("参数")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")])]},proxy:!0}])},[[r("tr",[r("td",[t._v("options")]),r("td",[t._v("Object")])]),r("tr",[r("td",[r("code",[t._v("options.duration")])]),r("td",[t._v("Number")]),r("td",[t._v("持续时间(单位：毫秒[ms])")]),r("td",[t._v("5000")])]),r("tr",[r("td",[r("code",[t._v("options.height")])]),r("td",[t._v("String")]),r("td",[t._v("进度条的高度")]),r("td",[t._v("2px")])]),r("tr",[r("td",[r("code",[t._v("options.color")])]),r("td",[t._v("String")]),r("td",[t._v("进度条的颜色")]),r("td",[t._v("#009688")])])]],2),r("h5",[t._v("2. start()：Void")]),r("p",[t._v("显示进度条, 进度条则会定时自增，直至增加到 100% 后会自动结束")]),r("h5",[t._v("3. finish(): Void")]),r("p",[t._v("结束进度，隐藏并恢复初始状态")]),r("h5",[t._v("4. getPercent(): percent")]),r("p",[t._v("获取当前进度")]),r("p",[t._v("返回")]),r("ph-table",{scopedSlots:t._u([{key:"head",fn:function(){return[r("th",[t._v("属性")]),r("th",[t._v("类型")]),r("th",[t._v("说明")])]},proxy:!0}])},[[r("tr",[r("td",[t._v("percent")]),r("td",[t._v("Number")]),r("td",[t._v("当前进度值[整数]")])])]],2),r("h5",[t._v("5. setPercent(percent)：Void")]),r("p",[t._v("设置进度")]),r("ph-table",{scopedSlots:t._u([{key:"head",fn:function(){return[r("th",[t._v("参数")]),r("th",[t._v("类型")]),r("th",[t._v("说明")])]},proxy:!0}])},[[r("tr",[r("td",[t._v("percent")]),r("td",[t._v("Number")]),r("td",[t._v("进度")])])]],2),r("h5",[t._v("6. increase(percent): Void")]),r("p",[t._v("在现有进度的基础上添加进度")])],1)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("1. "),r("code",[t._v("Vue")]),t._v(" 是通过全局 "),r("code",[t._v("<script>")]),t._v(" 的方式引入，例如：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在 "),r("code",[t._v("main.js")]),t._v("中添加以下代码：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("2. "),r("code",[t._v("Vue")]),t._v(" 是通过 ES Module 的方式引入，例如：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在 "),r("code",[t._v("main.js")]),t._v("中添加以下代码：")])}],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.color,opacity:t.show?1:0}})},w=[],x=(r("ac6a"),{name:"ProgressCompt",props:{status:{type:Boolean,default:!1}},watch:{status:function(t){this.start()}},data:function(){return{percent:0,show:!1,duration:3e3,height:"2px",color:"#009688"}},methods:{setOptions:function(t){["duration","height","color"].forEach(function(e){t.hasOwnProperty(e)&&(this[e]=t[e])}.bind(this))},start:function(){var t=this;return this.show=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>100&&t.finish()},100),this},set:function(t){return this.show=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},finish:function(){return this.percent=100,this._hide(),this},_hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,this.show=!1,setTimeout(function(){t.percent=0},200),this}}}),k=x,C=(r("8955"),Object(c["a"])(k,y,w,!1,null,null,null)),P=C.exports,$={name:"ProgressBar",components:{ProgressCompt:P},data:function(){return{show:!1}},methods:{showProgress:function(){this.show=!this.show}}},O=$,j=(r("c2e1"),Object(c["a"])(O,b,g,!1,null,null,null)),E=j.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("引入")]),t._m(0),r("ph-code",[t._v('<script src="https://cdn.staticfile.org/vue/2.6.7/vue.min.js"><\/script>')]),t._m(1),r("ph-code",[t._v("import { Toast2 } from 'phui'"),r("br"),r("br"),t._v("Vue.use(Toast2);")]),t._m(2),r("ph-code",[t._v("import Vue from 'vue'")]),t._m(3),r("ph-code",[t._v("import { Toast } from 'phui'"),r("br"),r("br"),t._v("Vue.use(Toast);")]),r("h3",[t._v("代码演示")]),r("show-code",{scopedSlots:t._u([{key:"code",fn:function(){return[r("ph-code",[t._v("<template>"),r("br"),t._v("  <div>"),r("br"),t._v('    <button @click="toast">Toast</button>'),r("br"),t._v("  </div>"),r("br"),t._v("</template>"),r("br"),t._v("<script>"),r("br"),t._v("export default {"),r("br"),t._v("  name: 'TestProgress',"),r("br"),t._v("  methods: {"),r("br"),t._v("    toast () {"),r("br"),t._v("      this.$toast('这是一条 Toast 轻提示')"),r("br"),t._v("    }"),r("br"),t._v("  }"),r("br"),t._v("}"),r("br"),t._v("<\/script>")])]},proxy:!0}])},[[r("ph-toast",{attrs:{message:t.msg,show:t.show}}),r("button",{on:{click:t.toast}},[t._v("Toast")])]],2),r("h3",[t._v("API")]),r("h4",[t._v("Methods")]),r("h5",[t._v("this.$toast(options): Void")]),r("p",[t._v("显示一条 Toast 轻提示信息，提示信息会在 3000ms 后自动关闭")]),r("ph-table",[[r("th",[t._v("参数")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")])],[r("tr",[r("td",[t._v("options")]),r("td",[t._v("String | Object")]),r("td",[t._v("如果 options 的类型为 String，则把 options 作为提示信息的内容，如果为 Object 则为包含下列参数的对象")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("options.message")]),r("td",[t._v("String")]),r("td",[t._v("提示信息内容")]),r("td",[t._v("-")])]),r("tr",[r("td",[t._v("options.position")]),r("td",[t._v("String")]),r("td",[t._v("提示信息显示的垂直位置，可选值有：'top'、'middle', 'bottom'")]),r("td",[t._v("'middle'")])]),r("tr",[r("td",[t._v("options.className")]),r("td",[t._v("String")]),r("td",[t._v("Toast 的类名。可以为其添加样式，多个样式之间用空格分隔")]),r("td",[t._v("-")])])]],2)],1)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("1. "),r("code",[t._v("Vue")]),t._v(" 是通过全局 "),r("code",[t._v("<script>")]),t._v(" 的方式引入，例如：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在 "),r("code",[t._v("main.js")]),t._v("中添加以下代码：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h4",[t._v("2. "),r("code",[t._v("Vue")]),t._v(" 是通过 ES Module 的方式引入，例如：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("在 "),r("code",[t._v("main.js")]),t._v("中添加以下代码：")])}],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ph-toast ph-toast-middle",class:{"ph-toast-hide":!t.show}},[r("span",[t._v(t._s(t.message))])])},V=[],M={name:"PhToast",props:{message:{type:String,default:""},show:{type:Boolean,default:!1}}},N=M,A=(r("218f"),Object(c["a"])(N,S,V,!1,null,null,null)),B=A.exports,I={name:"Toast",components:{PhToast:B},data:function(){return{msg:"这是一条 Toast 轻提示",show:!1}},methods:{toast:function(){var t=this;this.show=!0,setTimeout(function(){t.show=!1},3e3)}}},H=I,F=Object(c["a"])(H,T,D,!1,null,null,null),L=F.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("引入")]),r("ph-code",[t._v("import { Carousel } from 'phui'"),r("br"),r("br"),t._v("Vue.use(Carousel)")]),r("p",[t._v("这个组件只是作了一个简单的基本实现。")]),r("h3",[t._v("代码演示")]),r("show-code",{scopedSlots:t._u([{key:"code",fn:function(){return[r("ph-code",[t._v("<template>"),r("br"),t._v('  <ph-carousel class="carousel">'),r("br"),t._v('    <ph-carousel-item class="carousel-item1">1</ph-carousel-item>'),r("br"),t._v('    <ph-carousel-item class="carousel-item2">2</ph-carousel-item>'),r("br"),t._v('    <ph-carousel-item class="carousel-item3">3</ph-carousel-item>'),r("br"),t._v("  </ph-carousel>"),r("br"),t._v("</template>"),r("br"),r("br"),t._v("<script>"),r("br"),t._v("export default {"),r("br"),t._v("  name: 'Carousel'"),r("br"),t._v("}"),r("br"),t._v("<\/script>"),r("br"),r("br"),t._v('<style lang="stylus">'),r("br"),t._v("  .carousel"),r("br"),t._v("    height 150px"),r("br"),t._v("  .carousel-item1, .carousel-item2, .carousel-item3"),r("br"),t._v("    color white"),r("br"),t._v("    font-size 16px"),r("br"),t._v("    text-align center"),r("br"),t._v("  .carousel-item1"),r("br"),t._v("    background-color #1E9FFF"),r("br"),t._v("  .carousel-item2"),r("br"),t._v("    background-color #009688"),r("br"),t._v("  .carousel-item3"),r("br"),t._v("    background-color rebeccapurple"),r("br"),t._v("</style>")])]},proxy:!0}])},[[r("ph-carousel",{staticClass:"carousel"},[r("ph-carousel-item",{staticClass:"carousel-item1"},[t._v("1")]),r("ph-carousel-item",{staticClass:"carousel-item2"},[t._v("2")]),r("ph-carousel-item",{staticClass:"carousel-item3"},[t._v("3")])],1)]],2)],1)},z=[],J={name:"Carousel"},W=J,q=(r("7650"),Object(c["a"])(W,X,z,!1,null,null,null)),Y=q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("引入")]),r("ph-code",[t._v("import { DatePicker } from 'phui'"),r("br"),r("br"),t._v("Vue.use(DatePicker)")]),t._m(0),r("h3",[t._v("代码演示")]),t._m(1),r("show-code",{scopedSlots:t._u([{key:"code",fn:function(){return[r("ph-code",[t._v("<template>"),r("br"),t._v("  <ph-date-picker"),r("br"),t._v('    v-model="date"'),r("br"),t._v('    value-format="yyyy/mm/dd"'),r("br"),t._v('    default-value="2022/2/22"'),r("br"),t._v("  ></ph-date-picker>"),r("br"),t._v("</template>"),r("br"),r("br"),t._v("<script>"),r("br"),t._v("export default {"),r("br"),t._v("  name: 'DatePickerDemo',"),r("br"),t._v("  data: function () {"),r("br"),t._v("    return {"),r("br"),t._v("      date: new Date()"),r("br"),t._v("    }"),r("br"),t._v("  }"),r("br"),t._v("}"),r("br"),t._v("<\/script>")])]},proxy:!0}])},[[r("ph-date-picker",{attrs:{"value-format":"yyyy/mm/dd","default-value":"2022/2/22"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})]],2),r("br"),t._m(2),r("h3",[t._v("API")]),r("h4",[t._v("DatePicker Props")]),r("div",{staticClass:"table-panel"},[r("ph-table",{staticClass:"date-table",scopedSlots:t._u([{key:"head",fn:function(){return[r("th",[t._v("属性")]),r("th",[t._v("类型")]),r("th",[t._v("说明")]),r("th",[t._v("默认值")]),r("th",[t._v("备注")])]},proxy:!0}])},[[r("tr",[r("td",[t._v("value-format")]),r("td",[t._v("String")]),r("td",[t._v("日期显示的格式")]),r("td",[t._v("yyyy-mm-dd")]),r("td",[t._v("\n            yyyy - 年、yy - 年份的后两位、mm - 月, 如果不足两位数, 前置补0、m - 月、dd | d - 日期、H | HH - 小时[24小时制]、M | MM - 分钟、s | ss - 秒\n          ")])]),r("tr",[r("td",[t._v("default-value")]),r("td",[t._v("String|Date|Number")]),r("td",[t._v("默认时间")]),r("td",[t._v("-")]),r("td",[t._v("如果没有传该属性，则组件将会以 "),r("code",[t._v("v-model")]),t._v(" 绑定的组件值作为初始值；如果两个同时设置，则默认值的优先级以这个属性为准。组件的实际默认值顺序优先级："),r("code",[t._v("default-value")]),t._v(" > "),r("code",[t._v("v-model")]),t._v(" > "),r("code",[t._v("new Date()")])])])]],2)],1)],1)},G=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("移动端的日期选择组件，基于 "),r("code",[t._v("input-type")]),t._v(" 属性实现的。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("v-model")]),t._v(" 为组件的绑定值，允许的值类型为一个 "),r("code",[t._v("Date")]),t._v(" 对象，同时如果没有为组件传递 "),r("code",[t._v("default-value")]),t._v(" 属性，将会以此绑定值作为初始值。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"note"},[t._v("\n    备注说明：\n    "),r("ol",[r("li",[t._v("1. 这个组件是基于 "),r("code",[t._v("input-type")]),t._v(" 属性实现的，这个属性在移动端的浏览器上效果最佳，所以建议用手机打开这个页面查看具体的效果")]),r("li",[t._v("2. 每个手机、每个浏览器对于 "),r("code",[t._v("input-type")]),t._v(" 的实现不一样，所以在不同的浏览器上表现形式不一样")]),r("li",[t._v("3. 有的浏览器有实现清楚功能，点击清楚后，组件的日期将会重置为当前日期")])])])}],K={name:"DatePickerView",data:function(){return{date:new Date}}},Q=K,R=(r("971a"),Object(c["a"])(Q,Z,G,!1,null,null,null)),U=R.exports;n["a"].use(v["a"]);var tt=new v["a"]({routes:[{path:"/",name:"Home",component:m},{path:"/progress_bar",name:"ProgressBar",component:E},{path:"/toast",name:"Toast",component:L},{path:"/carousel",name:"Carousel",component:Y},{path:"/date_picker",name:"DatePicker",component:U}]}),et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("pre",[r("code",{pre:!0},[t._t("default")],2)])},rt=[],nt=r("a70e"),st=r.n(nt),at={name:"PhCode",mounted:function(){st.a.highlightBlock(this.$el.querySelector("code"))}},it=at,ot=Object(c["a"])(it,et,rt,!1,null,null,null),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[t._t("head")],2)]),r("tbody",[t._t("default")],2)])},ut=[],vt={name:"PhTable"},_t=vt,dt=Object(c["a"])(_t,lt,ut,!1,null,null,null),ht=dt.exports,pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"show-code"},[r("div",{staticClass:"show-panel"},[r("div",{staticClass:"code-title"},[t._v("\n      效果演示\n    ")]),r("div",{staticClass:"phone-panel"},[t._t("default")],2)]),r("div",{staticClass:"code-panel"},[r("div",{staticClass:"code-title"},[t._v("\n      代码展示\n    ")]),r("div",{staticClass:"source-code-panel"},[t._t("code")],2)])])},ft=[],mt={name:"ShowCode"},bt=mt,gt=(r("480e"),Object(c["a"])(bt,pt,ft,!1,null,null,null)),yt=gt.exports,wt=r("4aa6"),xt=r.n(wt),kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ph-carousel"},[t._t("default")],2)},Ct=[],Pt=(r("c5f6"),r("7618"));function $t(t,e){t.classList.add(e)}function Ot(t,e){t.classList.remove(e)}function jt(t,e,r){if("object"===Object(Pt["a"])(e))for(var n in e)t.style[n]=e[n];else"string"===typeof e&&null!=r&&(t.style[e]=r)}var Et={name:"PhCarousel",props:{defaultIndex:{type:Number,default:0}},data:function(){return{pages:[],index:0}},mounted:function(){var t=this,e=this.$children,r=[],n=this.defaultIndex>=0&&this.defaultIndex<e.length?this.defaultIndex:0;this.index=n,e.forEach(function(t,e){e===n?($t(t.$el,"ph-carousel-active"),r.push({el:t.$el,width:t.$el.offsetWidth})):r.push({el:t.$el,width:-1})}),this.pages=r,setTimeout(function(){t.doAnim()},1e3)},methods:{next:function(){var t=this,e=this.index;e===this.pages.length-1?this.index=0:this.index++;var r=this.pages[this.index].el,n=this.pages[e].el;jt(r,{transform:"translateX("+this.pages[e].width+"px)",webketTransform:"-webkit-translateX("+this.pages[e].width+"px)",display:"block"}),-1===this.pages[this.index].width&&(this.pages[this.index].width=r.offsetWidth),setTimeout(function(){jt(n,{transition:"transform .5s linear",webkitTransition:"-webkit-transform .5s linear",transform:"translateX(-"+t.pages[e].width+"px)",webkitTransform:"-webkit-translateX(-"+t.pages[e].width+"px)"}),jt(r,{transition:"transform .5s linear",webkitTransition:"-webkit-transform .5s linear",transform:"translateX(0)",webkitTransform:"-webkit-translateX(0)"})},100),setTimeout(function(){$t(r,"ph-carousel-active"),r.removeAttribute("style"),n.removeAttribute("style"),Ot(t.pages[e].el,"ph-carousel-active")},600)},doAnim:function(){var t=this;this.next(),setInterval(function(){t.next()},3e3)}}},Tt=Et,Dt=(r("84b7"),Object(c["a"])(Tt,kt,Ct,!1,null,null,null)),St=Dt.exports,Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ph-carousel-item"},[t._t("default")],2)},Mt=[],Nt={name:"PhCarouselItem"},At=Nt,Bt=Object(c["a"])(At,Vt,Mt,!1,null,null,null),It=Bt.exports,Ht=xt()(null);Ht.install=function(t){t.component("ph-carousel",St),t.component("ph-carousel-item",It)};var Ft=Ht,Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"ph-date-picker"},[t._v("\n  "+t._s(t.showDate)+"\n  "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectDate,expression:"selectDate"}],attrs:{type:"date"},domProps:{value:t.selectDate},on:{input:function(e){e.target.composing||(t.selectDate=e.target.value)}}})])},Xt=[],zt=(r("4917"),r("a481"),/yy(?:yy)?|([HMmds])\1?/g),Jt=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/;function Wt(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return("000"+t).slice(-2|r)}var qt=function(t,e){var r=t.getDate(),n=t.getFullYear(),s=t.getMonth(),a=t.getHours(),i=t.getMinutes(),o=t.getSeconds(),c={yy:Wt(n),yyyy:n,m:s+1,mm:Wt(s+1),d:r,dd:Wt(r),H:a,HH:Wt(a),M:i,MM:Wt(i),s:o,ss:Wt(o)};return null!=e?e.replace(zt,function(t){return t in c?c[t]:t}):t.getTime()};function Yt(t){if(null==t)return new Date;if(t instanceof Date)return t;if("string"===typeof t&&!/Z$/i.test(t)){var e=t.match(Jt);if(e)return new Date(e[1],e[2]-1,e[3]||1,e[4]||0,e[5]||0,e[6]||0,e[7]||0)}return new Date(t)}var Zt={format:qt,parse:Yt},Gt={name:"PhDatePicker",props:{value:{type:Date,default:""},valueFormat:{type:String,default:"yyyy-mm-dd"},defaultValue:{type:[Date,String,Number],default:void 0}},data:function(){return{showDate:"",selectDate:"",date:null}},created:function(){var t=this.defaultValue||this.value;this.date=Zt.parse(""===t?null:t),this.selectDate=Zt.format(this.date,"yyyy/mm/dd"),this.showDate=Zt.format(this.date,this.valueFormat),this.$emit("input",this.date)},watch:{selectDate:function(t){this.date=Zt.parse(""===t?null:t),this.showDate=Zt.format(this.date,this.valueFormat),this.$emit("input",this.date)}}},Kt=Gt,Qt=(r("86ab"),Object(c["a"])(Kt,Lt,Xt,!1,null,null,null)),Rt=Qt.exports,Ut=xt()(null);Ut.install=function(t){t.component("ph-date-picker",Rt)};var te=Ut,ee=r("4dd1"),re=r.n(ee),ne=r("8dcb"),se=r.n(ne),ae=r("ee8c"),ie=r.n(ae);r("fa3b"),st.a.registerLanguage("javascript",re.a),st.a.registerLanguage("html",se.a),st.a.registerLanguage("css",ie.a),n["a"].config.productionTip=!1,n["a"].component("PhCode",ct),n["a"].component("PhTable",ht),n["a"].component("ShowCode",yt),n["a"].use(Ft),n["a"].use(te),new n["a"]({router:tt,render:function(t){return t(u)}}).$mount("#app")},5765:function(t,e,r){},7650:function(t,e,r){"use strict";var n=r("fa68"),s=r.n(n);s.a},7950:function(t,e,r){},"7faf":function(t,e,r){"use strict";var n=r("8fba"),s=r.n(n);s.a},"84b7":function(t,e,r){"use strict";var n=r("ecd9"),s=r.n(n);s.a},"86ab":function(t,e,r){"use strict";var n=r("f2b3"),s=r.n(n);s.a},8955:function(t,e,r){"use strict";var n=r("8adb"),s=r.n(n);s.a},"8adb":function(t,e,r){},"8fba":function(t,e,r){},"971a":function(t,e,r){"use strict";var n=r("5765"),s=r.n(n);s.a},c219:function(t,e,r){"use strict";var n=r("e9bb"),s=r.n(n);s.a},c2e1:function(t,e,r){"use strict";var n=r("e46d"),s=r.n(n);s.a},cb0b:function(t,e,r){},e46d:function(t,e,r){},e9bb:function(t,e,r){},ecd9:function(t,e,r){},f2b3:function(t,e,r){},f5f4:function(t,e,r){},fa3b:function(t,e,r){},fa68:function(t,e,r){}});
//# sourceMappingURL=app.71dfc112.js.map