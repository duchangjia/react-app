webpackJsonp([97,274],{1713:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(241),o=a(n),s=r(146),i=a(s),u=r(242),l=a(u),c=r(603),d=a(c),p=r(898),f=r(239);t.default={components:{DefaultHr:d.default},data:function(){var e=this;return{query:{referenceNo:"",orderNum:"",page:1,row:10},total:0,tableData:[],loading:!1,apiGroup:this.$util.apiConfig.stockManage.warehouseOut.countOutbound,tableColumns:[{title:"序号",width:75,align:"center",render:function(t,r){return t("span",(e.query.page-1)*e.query.row+r.index+1)}},{title:"盘点单号",align:"center",key:"referenceNo"},{title:"出库单号",align:"center",key:"orderNo"},{title:"出库类型",align:"center",key:"orderType",render:function(e,t){var r="";switch(parseInt(t.row.orderType)){case 10:r="销售出库";break;case 20:r="补发出库";break;case 30:r="调拨出库";break;case 40:r="盘亏出库"}return e("span",r)}},{title:"出库仓库",align:"center",key:"warehouseName"},{title:"状态",align:"center",key:"orderStatus",render:function(e,t){var r="";switch(parseInt(t.row.orderStatus)){case 10:r="待出库";break;case 20:r="已出库"}return e("span",r)}},{title:"生成时间",align:"center",key:"createTime",render:function(e,t){return e("span",(0,p.formatDate)(new Date(1e3*parseInt(t.row.createTime)),"yyyy-MM-DD"))}},{title:"操作",align:"center",width:75,render:function(t,r){var a=[];return a.push(t("Button",{props:{type:"primary",size:"small"},on:{click:function(t){return e.showDetail(r.row)}}},"查看")),t("div",a)}}],detailInfo:{},detailVisible:!1,detailGoodsCoulmns:[{title:"序号",width:75,align:"center",render:function(e,t){return e("span",t.index+1)}},{title:"商品名称",align:"center",key:"name"},{title:"条形码",align:"center",key:"materialCode69"},{title:"盘亏整件数",align:"center",key:"carNum"},{title:"盘亏散个数",align:"center",key:"eaNum"}],detailGoodsData:[]}},mounted:function(){this.queryData()},methods:{queryData:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(o.default.mark(function e(){var t,r,a,n,s;arguments.length>0&&void 0!==arguments[0]&&arguments[0];return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.default)({},this.query),r="",this.loading=!0,e.prev=3,e.next=6,this.$ajax.post(this.apiGroup.list,f.stringify(t));case 6:a=e.sent,n=a.data,200==n.code?(s=n.result.pager)&&(this.total=s.totalCount,s.records instanceof Array&&(this.tableData=s.records)):r="列表获取失败",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),r="列表获取失败";case 14:r&&this.$Message.error(r),this.loading=!1;case 16:case"end":return e.stop()}},e,this,[[3,11]])}));return e}(),handleQueryBtnClick:function(){this.query.page=1,this.queryData()},handleResetBtnClick:function(){this.query={referenceNo:"",orderNum:"",page:1,row:10},this.queryData()},showDetail:function(e){this.detailVisible=!0,this.getDetailData(e)},getDetailData:function(){function e(e){return t.apply(this,arguments)}var t=(0,l.default)(o.default.mark(function e(t){var r,a,n,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.prev=1,e.next=4,this.$ajax.post(this.apiGroup.detail,{orderNo:t.orderNo});case 4:a=e.sent,n=a.data,200==n.code?(s=n.result.result,this.detailInfo={referenceNo:s.referenceNo,orderNo:s.orderNo,warehouseName:s.warehouseName,orderStatus:10==s.orderStatus?"待出库":"已出库",orderType:40==s.orderType?"盘亏出库":""},s.outboundBillProductList instanceof Array&&(this.detailGoodsData=s.outboundBillProductList)):r="详情获取失败",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r="详情获取失败";case 12:r&&this.$Message.error(r);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return e}()}}},2429:function(e,t,r){var a=r(2430);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("5fc3f920",a,!1,{})},2430:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.query-btn[data-v-7f6e86bc] {\n  margin-left: 80px;\n  margin-right: 20px;\n}\n.custom-hr[data-v-7f6e86bc] {\n  margin-top: 15px;\n}\n.custom-page[data-v-7f6e86bc] {\n  margin-top: 15px;\n  float: right;\n}\n.custom-row[data-v-7f6e86bc] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.custom-h3[data-v-7f6e86bc] {\n  margin: 15px 0;\n}\n.custom-h3[data-v-7f6e86bc]:first-of-type {\n  margin-top: 0;\n}\n",""])},2431:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",[r("Form",{attrs:{"label-width":90}},[r("Row",[r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"盘点单号"}},[r("Input",{attrs:{clearable:""},model:{value:e.query.referenceNo,callback:function(t){e.$set(e.query,"referenceNo",t)},expression:"query.referenceNo"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"出库单号"}},[r("Input",{attrs:{clearable:""},model:{value:e.query.orderNo,callback:function(t){e.$set(e.query,"orderNo",t)},expression:"query.orderNo"}})],1)],1)],1),e._v(" "),r("Row",[r("Button",{staticClass:"query-btn",attrs:{type:"primary"},on:{click:e.handleQueryBtnClick}},[e._v("查询")]),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:e.handleResetBtnClick}},[e._v("重置")])],1)],1),e._v(" "),r("DefaultHr",{staticClass:"custom-hr"}),e._v(" "),r("div",[r("Table",{attrs:{data:e.tableData,columns:e.tableColumns,loading:e.loading}})],1),e._v(" "),r("Row",[r("Page",{staticClass:"custom-page",attrs:{"page-size":e.query.row,"show-elevator":"","show-total":"",current:e.query.page,total:e.total},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryData}})],1),e._v(" "),r("Modal",{attrs:{width:1e3,title:"盘亏查看"},model:{value:e.detailVisible,callback:function(t){e.detailVisible=t},expression:"detailVisible"}},[r("h3",{staticClass:"custom-h3"},[e._v("基本信息")]),e._v(" "),r("Row",{staticClass:"custom-row"},[r("Col",{attrs:{span:"8"}},[r("span",[e._v("盘点单号:")]),e._v(" "),r("span",[e._v(e._s(e.detailInfo.referenceNo))])]),e._v(" "),r("Col",{attrs:{span:"8"}},[r("span",[e._v("出库单号:")]),e._v(" "),r("span",[e._v(e._s(e.detailInfo.orderNo))])])],1),e._v(" "),r("Row",{staticClass:"custom-row"},[r("Col",{attrs:{span:"8"}},[r("span",[e._v("出库仓库:")]),e._v(" "),r("span",[e._v(e._s(e.detailInfo.warehouseName))])]),e._v(" "),r("Col",{attrs:{span:"8"}},[r("span",[e._v("出库单状态:")]),e._v(" "),r("span",[e._v(e._s(e.detailInfo.orderStatus))])]),e._v(" "),r("Col",{attrs:{span:"8"}},[r("span",[e._v("出入库类型:")]),e._v(" "),r("span",[e._v(e._s(e.detailInfo.orderType))])])],1),e._v(" "),r("h3",{staticClass:"custom-h3"},[e._v("商品信息")]),e._v(" "),r("Table",{attrs:{columns:e.detailGoodsCoulmns,data:e.detailGoodsData}}),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:function(t){return e.detailVisible=!1}}},[e._v("关闭")])],1)],1)],1)},n=[];a._withStripped=!0;var o={render:a,staticRenderFns:n};t.default=o},603:function(e,t,r){"use strict";function a(e){l||r(964)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(939),o=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);var i=r(966),u=r.n(i),l=!1,c=r(13),d=a,p=c(o.a,u.a,!1,d,"data-v-eb39e066",null);p.options.__file="src/views/my-components/default-hr/default-hr.vue",t.default=p.exports},828:function(e,t,r){"use strict";function a(e){l||r(2429)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1713),o=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);var i=r(2431),u=r.n(i),l=!1,c=r(13),d=a,p=c(o.a,u.a,!1,d,"data-v-7f6e86bc",null);p.options.__file="src/views/stock-manage/warehouse-out/count-outbound.vue",t.default=p.exports},898:function(e,t,r){"use strict";function a(e,t){if(!t)var t="yyyy-MM-DD hh:mm:ss";var r={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t}function n(e,t){if(!t)var t="yyyy-MM-dd";(e=Number(e))<1e10&&(e*=1e3);var r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in a)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=a,t.timestampToDay=n},939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},964:function(e,t,r){var a=r(965);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("63be8b28",a,!1,{})},965:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.default-hr[data-v-eb39e066] {\n  width: 100%;\n  height: 1px;\n  border: none;\n  border-top: 1px dashed #aaa;\n  margin-bottom: 20px;\n}\n",""])},966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("hr",{staticClass:"default-hr"})},n=[];a._withStripped=!0;var o={render:a,staticRenderFns:n};t.default=o}});