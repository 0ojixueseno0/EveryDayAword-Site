(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae23c5e"],{"337b":function(t,e,s){},8276:function(t,e,s){"use strict";var o=s("337b"),n=s.n(o);n.a},a78e:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{attrs:{align:"center"}},[s("el-main",[s("el-scrollbar",{staticClass:"inscroll",staticStyle:{height:"100%"}},[s("ul",{staticClass:"infinite-list",staticStyle:{overflow:"hidden"}},[s("el-card",[s("div",{staticClass:"contcard"},[s("div",{staticClass:"avaterimg"},[s("el-avatar",{attrs:{shape:"square",size:70,src:"https://gitee.com/im0o/photobed/raw/master/img/20200727163358.png"}})],1),s("div",{staticClass:"textss"},[t._v(" 本站语录大部分收录于 MCBBS论坛中 每日一水心灵鸡汤 有效语录"),s("br"),t._v(" 原帖地址：https://www.mcbbs.net/thread-1105827-1-1.html"),s("br"),t._v(" 如需投稿，请联系站长 0ojixueseno0 投稿前请保证使用 WTFPL 开源协议 ")])])]),s("br"),t._l(this.productinfos.word,(function(e){return s("div",{key:e},[s("el-card",[s("i",{staticClass:"el-icon-coffee-cup",staticStyle:{float:"left","font-size":"23px"}}),t._v(t._s(e))]),s("br")],1)}))],2)])],1)],1)},n=[],c=s("b705"),i={data:function(){return{count:0,productinfos:[],loadingInstance:!0}},methods:{initWebpack:function(){this.loadingInstance=c["Loading"].service({text:"正在努力熬煮鸡汤..."});var t="ws://abc.im0o.top:14771/";this.websock=new WebSocket(t),this.websock.onopen=this.websocketopen,this.websock.onmessage=this.websocketonmessage,this.websock.onclose=this.websocketclose,this.websock.onerror=this.websocketerror},websocketopen:function(){console.log("WebSocket连接成功"),this.websock.send("getword")},websocketonmessage:function(t){var e=this;this.productinfos=JSON.parse(t.data),this.$nextTick((function(){e.loadingInstance.close()}))},websocketclose:function(){console.log("WebSocket关闭")},websocketerror:function(){console.log("WebSocket连接失败")}},created:function(){this.initWebpack()}},a=i,r=(s("8276"),s("9ca4")),l=Object(r["a"])(a,o,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5ae23c5e.ab99031b.js.map