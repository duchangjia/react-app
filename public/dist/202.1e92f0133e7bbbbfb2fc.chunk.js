webpackJsonp([202],{1520:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(241),s=n(i),r=a(242),o=n(r),l=a(239),c=n(l),d=a(898);e.default={data:function(){return{apiGroup:this.$util.apiConfig.purchaseDelivery.baseData.storekeeper,pager:{},loading:!1,noListWarn:!1,noticeList:[]}},created:function(){this.fristIn()},methods:{fristIn:function(){function t(){return e.apply(this,arguments)}var e=(0,o.default)(s.default.mark(function t(){var e,a,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={page:1},this.loading=!0,t.next=5,this.$util.ajax.post("/messageCenter/delinquentReceivable/querymessageList",c.default.stringify(e));case 5:return a=t.sent,this.loading=!1,200==a.data.code?(this.pager=a.data.result.pager,null==a.data.result.list||void 0==a.data.result.list||0==a.data.result.list.lenght?this.noListWarn=!0:(this.noticeList=a.data.result.list,this.noticeList.forEach(function(t){t.createTime=(0,d.timestampToDay)(t.createTime,"yyyy-MM-dd hh:mm:ss"),t.extAttr04=Number(t.extAttr04).toFixed(2)}))):this.$Modal.error({title:"HTTP请求错误",content:a.data.message}),t.next=10,this.$util.ajax.post("messageCenter/delinquentReceivable/messageCount");case 10:n=t.sent,200==n.status&&null!=n.data&&void 0!=n.data&&this.$store.commit("updateNotice",n.data),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),this.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"});case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return t}(),openBill:function(t){this.$router.push({name:"receipt-edit",query:{id:t}})},changeRowsHandle:function(t){this.pager.rows=t,this.jumpPageHandle(1)},jumpPageHandle:function(t){var e=this;this.pager.currentPage=t,this.loading=!0;var a={page:this.pager.currentPage,rows:this.pager.rows};this.$util.ajax.post("/messageCenter/delinquentReceivable/querymessageList",c.default.stringify(a)).then(function(t){console.log("应收超期请求返回数据：",t),e.loading=!1,200==t.data.code?(e.pager=t.data.result.pager,null==t.data.result.list||void 0==t.data.result.list||0==t.data.result.list.lenght?e.noListWarn=!0:(e.noticeList=t.data.result.list,e.noticeList.forEach(function(t){t.createTime=(0,d.timestampToDay)(t.createTime,"yyyy-MM-dd hh:mm:ss"),t.extAttr04=Number(t.extAttr04).toFixed(2)}))):e.$Modal.error({title:"HTTP请求错误",content:t.data.message})}).catch(function(t){console.log(t),e.loading=!1,e.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})}}}},1800:function(t,e,a){var n=a(1801);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(43)("0ad5f471",n,!1,{})},1801:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.cmain[data-v-4c7ddaab] {\n  background-color: white;\n  position: relative;\n  /* min-width: 1020px; */\n}\n.line[data-v-4c7ddaab] {\n  border-bottom: 1px solid #dddee1;\n}\n#noListWarn[data-v-4c7ddaab] {\n  color: #e9686b;\n  text-align: center;\n  font-style: italic;\n}\n.red[data-v-4c7ddaab] {\n  color: #ff0000;\n}\n.blue[data-v-4c7ddaab] {\n  color: #0000ff;\n  cursor: pointer;\n}\n.notice-items[data-v-4c7ddaab] {\n  height: 80px;\n  background-color: #f2f2f2;\n  margin: 10px;\n  padding: 0 10px;\n}\n.notice-date[data-v-4c7ddaab] {\n  height: 30px;\n  line-height: 30px;\n  width: 200px;\n  border-bottom: 1px black solid;\n}\n.notice-content[data-v-4c7ddaab] {\n  height: 50px;\n  line-height: 50px;\n}\n",""])},1802:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cmain"},[a("div",{staticStyle:{padding:"20px 50px"}},[a("h3",{staticStyle:{"margin-left":"10px"}},[t._v("应收超期")]),t._v(" "),t.noListWarn?t._e():a("div",{attrs:{id:"notice"}},t._l(t.noticeList,function(e){return a("div",{key:e.id,staticClass:"notice-items"},[a("div",{staticClass:"notice-date"},[a("span",[t._v(t._s(e.createTime))])]),t._v(" "),a("div",{staticClass:"notice-content"},[a("span",[t._v("有一笔欠款已经超期 ")]),t._v(" "),a("span",{staticClass:"red"},[t._v(t._s(e.extAttr01))]),t._v(" "),a("span",[t._v(" 天，开票名称: ")]),t._v(" "),a("span",{staticClass:"red"},[t._v(t._s(e.extAttr02))]),t._v(" "),a("span",[t._v(" ，对账单号")]),t._v(" "),a("span",{staticClass:"blue",on:{click:function(a){t.openBill(e.extAttr03)}}},[t._v(t._s(e.extAttr03))]),t._v(" "),a("span",[t._v("，应收余额")]),t._v(" "),a("span",{staticClass:"red"},[t._v("￥"+t._s(e.extAttr04))]),t._v(" "),a("span",[t._v("，请尽快催收！")])])])})),t._v(" "),t.noListWarn?a("p",[t._v("*没有通知")]):t._e(),t._v(" "),a("Row",{staticStyle:{margin:"10px"},attrs:{type:"flex",justify:"end"}},[a("page",{attrs:{current:t.pager.page,total:t.pager.totalCount,"page-size":t.pager.rows,"show-elevator":"","show-sizer":""},on:{"on-change":t.jumpPageHandle,"on-page-size-change":t.changeRowsHandle}})],1)],1),t._v(" "),t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},i=[];n._withStripped=!0;var s={render:n,staticRenderFns:i};e.default=s},645:function(t,e,a){"use strict";function n(t){c||a(1800)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(1520),s=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var o=a(1802),l=a.n(o),c=!1,d=a(13),u=n,p=d(s.a,l.a,!1,u,"data-v-4c7ddaab",null);p.options.__file="src/views/delinquent-receivable/delinquent-receivable.vue",e.default=p.exports},898:function(t,e,a){"use strict";function n(t,e){if(!e)var e="yyyy-MM-DD hh:mm:ss";var a={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}function i(t,e){if(!e)var e="yyyy-MM-dd";(t=Number(t))<1e10&&(t*=1e3);var a=new Date(t),n={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in n)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=n,e.timestampToDay=i}});