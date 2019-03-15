webpackJsonp([80,274],{1711:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(241),s=r(a),o=n(242),i=r(o),u=n(146),l=r(u),d=n(603),c=r(d),p=n(898),h=n(239);t.default={components:{DefaultHr:c.default},data:function(){var e=this;return{query:{purchaseOrderNo:"",dnCode:"",purchaseOrderStatus:"",page:1,row:10},apiGroup:this.$util.apiConfig.stockManage.warehouseIn.refundInBound,total:0,tableData:[],loading:!1,tableColumns:[{title:"序号",minWidth:75,align:"center",render:function(t,n){return t("span",(e.query.page-1)*e.query.row+n.index+1)}},{title:"退货入库单号",align:"center",key:"purchaseOrderNo",minWidth:180},{title:"退货单号",align:"center",key:"dnCode",minWidth:170},{title:"订单状态",minWidth:85,key:"purchaseOrderStatus",align:"center",render:function(e,t){switch(parseInt(t.row.purchaseOrderStatus)){case 0:return e("span","待入库");case 10:return e("span","已入库");default:return e("span","异常状态")}}},{title:"入库仓库",minWidth:240,key:"warehouseName",align:"center"},{title:"经销商名称",key:"distributorName",align:"center",minWidth:100},{title:"创建时间",key:"createTime",align:"center",minWidth:100,render:function(e,t){var n="",r=t.row.createTime;return r&&null!==r&&(n=(0,p.formatDate)(new Date(parseInt(1e3*r)),"yyyy-MM-DD")),e("span",n)}},{title:"操作",minWidth:150,render:function(t,n){var r=[];return r.push(t("Button",{props:{type:"primary",size:"small"},on:{click:function(t){return e.showDetail(n.row)}}},"查看")),0==parseInt(n.row.purchaseOrderStatus)?r.push(t("Button",{props:{type:"primary",size:"small"},class:"ml-5",on:{click:function(t){return e.toOnshelf(n.row)}}},"入库")):10==n.row.purchaseOrderStatus&&r.push(t("Button",{props:{type:"primary",size:"small"},class:"ml-5",on:{click:function(t){return e.showInbundResult(n.row)}}},"入库结果")),t("div",r)}}],detailInfo:{inboundOrderNo:"",createTime:"",wareHouseName:"",distributorName:""},detailVisible:!1,detailGoodsCoulmns:[{title:"序号",width:75,align:"center",render:function(e,t){return e("span",t.index+1)}},{title:"条形码",align:"center",key:"materialCode69"},{title:"商品名称",align:"center",key:"name"},{title:"退货整件数(CAR)",align:"center",key:"carNum"},{title:"退货散个数(EA)",align:"center",key:"eaNum"}],detailGoodsData:[],inbundVisible:!1,inboundGoods:[],inbundGoodsColumns:[{title:"序号",width:75,align:"center",render:function(e,t){return e("span",t.index+1)}},{title:"商品名称",align:"center",width:350,key:"name"},{title:"商品行号",align:"center",key:"purchaseEntryNo"},{title:"退货整件数(CAR)",align:"center",key:"carNum"},{title:"退货散个数(EA)",align:"center",key:"eaNum"},{title:"入库整件数(CAR)",align:"center",key:"inboundCarNum",render:function(t,n){return t("Input",{props:{value:n.row.inboundCarNum},on:{"on-blur":function(t){return e.checkInboundNum(n,t)}}})}},{title:"入库散个数(EA)",align:"center",key:"inboundEaNum",render:function(t,n){return t("Input",{props:{value:n.row.inboundEaNum},on:{"on-blur":function(t){return e.checkInboundNum(n,t)}}})}}],inboundResultVisible:!1,inbundResultInfo:{dnCode:"",distributorName:"",warehouseName:"",inboundUser:"",inboundTime:""},inboundResultGoods:[],inboundResultGoodsColumns:[{title:"序号",width:75,align:"center",render:function(t,n){return n.index===e.inboundResultGoods.length?t("span","合计"):t("span",n.index+1)}},{title:"入库单号",align:"center",width:160,key:"purchaseOrderNo"},{title:"条形码",align:"center",width:110,key:"materialCode69"},{title:"商品名称",align:"center",width:160,key:"name"},{title:"库区",align:"center",key:"warehouseName"},{title:"入库整件数(CAR)",align:"center",key:"carNum"},{title:"入库散个数(EA)",align:"center",key:"eaNum"},{title:"入库人",align:"center",key:"inboundUser"},{title:"入库时间",align:"center",key:"inboundTime"}]}},mounted:function(){this.queryData()},computed:{inboundResultGoodsView:function(){var e=this.inbundResultInfo,t=e.purchaseOrderNo,n=e.warehouseName,r=e.inboundUser,a=e.inboundTime,s=0,o=0;console.log(this.inboundResultGoods);var i=this.inboundResultGoods.map(function(e){return s+=parseInt(e.carNum),o+=parseInt(e.eaNum),(0,l.default)({},e,{purchaseOrderNo:t,warehouseName:n,inboundUser:r,inboundTime:a})});return i.push({eaNum:o,carNum:s}),i}},methods:{queryData:function(){function e(){return t.apply(this,arguments)}var t=(0,i.default)(s.default.mark(function e(){var t,n,r,a,o;arguments.length>0&&void 0!==arguments[0]&&arguments[0];return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.default)({},this.query),n="",console.log(t),e.prev=3,this.tableData=[],this.loading=!0,e.next=8,this.$ajax.post(this.apiGroup.list,h.stringify(t));case 8:r=e.sent,a=r.data,200==a.code?(o=a.result.pager,o?(this.total=o.totalCount||0,o.records instanceof Array&&(this.tableData=o.records.concat())):this.total=0):n="退货入库列表获取失败",e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0),n="退货入库列表获取失败";case 17:this.loading=!1,n&&this.$Message.error(n);case 19:case"end":return e.stop()}},e,this,[[3,13]])}));return e}(),handleQueryBtnClick:function(){this.query.page=1,this.queryData()},handleResetBtnClick:function(){this.query={purchaseOrderNo:"",dnCode:"",purchaseOrderStatus:"",page:1,row:10},this.queryData()},showDetail:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(s.default.mark(function e(t){var n,r,a,o=t.purchaseOrderNo,i=t.createTime,u=t.warehouseName,l=t.distributorName;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.detailVisible=!0,this.detailInfo={inboundOrderNo:o,wareHouseName:u,distributorName:l,createTime:(0,p.formatDate)(new Date(parseInt(1e3*i)),"yyyy-MM-DD")},n="",e.prev=3,this.detailGoodsData=[],e.next=7,this.$ajax.post(this.apiGroup.detail,h.stringify({purchaseOrderNo:o}));case 7:r=e.sent,a=r.data.inboundBillProduct,a instanceof Array&&(this.detailGoodsData=a.concat()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),n="订单详情获取失败";case 16:n&&this.$Message.error(n);case 17:case"end":return e.stop()}},e,this,[[3,12]])}));return e}(),toOnshelf:function(e){this.inbundVisible=!0,this.inbundInfo=e,this.getOnShelfData(e.purchaseOrderNo)},getOnShelfData:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(s.default.mark(function e(t){var n,r,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.prev=1,this.inboundGoods=[],e.next=5,this.$ajax.post(this.apiGroup.detail,h.stringify({purchaseOrderNo:t,isView:!1}));case 5:r=e.sent,a=r.data.inboundBillProduct,a instanceof Array&&(this.inboundGoods=a.map(function(e){return(0,l.default)({},e,{inboundEaNum:e.eaNum,inboundCarNum:e.carNum})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),n="入库信息获取失败";case 14:n&&this.$Message.error(n);case 15:case"end":return e.stop()}},e,this,[[1,10]])}));return e}(),onShelf:function(){function e(){return t.apply(this,arguments)}var t=(0,i.default)(s.default.mark(function e(){var t,n,r,a,o=this;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.inbundInfo.id,n=this.inboundGoods.map(function(e){return{carNum:e.carNum,eaNum:e.eaNum,id:e.id,countBillId:t,inboundCarNum:e.inboundCarNum,inboundEaNum:e.inboundEaNum}}),r=this.inboundGoods.some(function(e){return e.eaNum+e.carNum*e.transformRule<e.inboundEaNum+e.inboundCarNum*e.transformRule}),console.log(r),!r){e.next=7;break}return this.$Modal.error({content:"实际入库数量不能大于退货数量",onOk:function(e){return!1}}),e.abrupt("return",!1);case 7:return e.prev=7,e.next=10,this.$ajax.post(this.apiGroup.submitInbound,n);case 10:if(a=e.sent,!a.data.success){e.next=14;break}return this.$Modal.success({content:"入库成功",onOk:function(e){o.inbundVisible=!1,o.queryData()}}),e.abrupt("return");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.log(e.t0);case 19:this.$Modal.error({content:"入库失败"});case 20:case"end":return e.stop()}},e,this,[[7,16]])}));return e}(),checkInboundNum:function(e,t){var n=e.column.key,r=e.index,a=parseInt(t.target.value),s=!0,o="";if(isNaN(a)&&(s=!1,o="请输入数字"),a<0&&s&&(s=!1,o="不能小于0"),!s)return setTimeout(function(r){return t.target.value=e.row[n]}),void this.$Message.error(o);e.row[n]=a,this.inboundGoods[r]=e.row},showInbundResult:function(e){this.inboundResultVisible=!0,this.inbundResultInfo={dnCode:e.dnCode,purchaseOrderNo:e.purchaseOrderNo,distributorName:e.distributorName,warehouseName:e.warehouseName,inboundUser:e.inboundUser,inboundTime:(0,p.formatDate)(new Date(parseInt(1e3*e.inboundTime)),"yyyy-MM-DD")},this.getInbundResultGoods(e.purchaseOrderNo)},getInbundResultGoods:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(s.default.mark(function e(t){var n,r,a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.prev=1,this.inboundResultGoods=[],e.next=5,this.$ajax.post(this.apiGroup.detail,h.stringify({purchaseOrderNo:t,isView:!0}));case 5:r=e.sent,a=r.data.inboundBillProduct,a instanceof Array&&(this.inboundResultGoods=a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),n="入库信息获取失败";case 14:n&&this.$Message.error(n);case 15:case"end":return e.stop()}},e,this,[[1,10]])}));return e}()}}},2421:function(e,t,n){var r=n(2422);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(43)("590cd855",r,!1,{})},2422:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\n.query-btn[data-v-441245cb] {\n  margin-left: 80px;\n  margin-right: 20px;\n}\n.custom-hr[data-v-441245cb] {\n  margin-top: 15px;\n}\n.custom-page[data-v-441245cb] {\n  margin-top: 15px;\n  float: right;\n}\n.ml-5[data-v-441245cb] {\n  margin-left: 5px;\n}\n.custom-h3[data-v-441245cb] {\n  margin: 15px 0;\n}\n.custom-h3[data-v-441245cb]:first-of-type {\n  margin-top: 0;\n}\n.custom-row[data-v-441245cb] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n",""])},2423:function(e,t,n){var r=n(2424);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(43)("3c6f3d31",r,!1,{})},2424:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\n#stock-manage-refund-inbound .ml-5 {\n  margin-left: 5px;\n}\n",""])},2425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{attrs:{id:"stock-manage-refund-inbound"}},[n("Form",{attrs:{"label-width":90}},[n("Row",[n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"退货入库单号"}},[n("Input",{attrs:{clearable:""},model:{value:e.query.purchaseOrderNo,callback:function(t){e.$set(e.query,"purchaseOrderNo",t)},expression:"query.purchaseOrderNo"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"退货单号"}},[n("Input",{attrs:{clearable:""},model:{value:e.query.dnCode,callback:function(t){e.$set(e.query,"dnCode",t)},expression:"query.dnCode"}})],1)],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("FormItem",{attrs:{label:"入库状态"}},[n("Select",{model:{value:e.query.purchaseOrderStatus,callback:function(t){e.$set(e.query,"purchaseOrderStatus",t)},expression:"query.purchaseOrderStatus"}},[n("Option",{attrs:{value:""}},[e._v("全部")]),e._v(" "),n("Option",{attrs:{value:0}},[e._v("待入库")]),e._v(" "),n("Option",{attrs:{value:10}},[e._v("已入库")])],1)],1)],1)],1),e._v(" "),n("Row",[n("Button",{staticClass:"query-btn",attrs:{type:"primary"},on:{click:e.handleQueryBtnClick}},[e._v("查询")]),e._v(" "),n("Button",{attrs:{type:"primary"},on:{click:e.handleResetBtnClick}},[e._v("重置")])],1)],1),e._v(" "),n("DefaultHr",{staticClass:"custom-hr"}),e._v(" "),n("div",[n("Table",{attrs:{data:e.tableData,columns:e.tableColumns,loading:e.loading}})],1),e._v(" "),n("Row",[n("Page",{staticClass:"custom-page",attrs:{"page-size":e.query.row,current:e.query.page,"show-elevator":"","show-total":"",total:e.total},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryData}})],1),e._v(" "),n("Modal",{attrs:{title:"退货入库详情",width:1e3},model:{value:e.detailVisible,callback:function(t){e.detailVisible=t},expression:"detailVisible"}},[n("h3",{staticClass:"custom-h3"},[e._v("基本信息")]),e._v(" "),n("Row",{staticClass:"custom-row"},[n("Col",{attrs:{span:"8"}},[n("span",[e._v("单据编号:")]),e._v(" "),n("span",[e._v(e._s(e.detailInfo.inboundOrderNo))])]),e._v(" "),n("Col",{attrs:{span:"8"}},[n("span",[e._v("单据日期:")]),e._v(" "),n("span",[e._v(e._s(e.detailInfo.createTime))])]),e._v(" "),n("Col",{attrs:{span:"8"}},[n("span",[e._v("单据类型:")]),e._v(" "),n("span",[e._v("销退入库")])])],1),e._v(" "),n("Row",{staticClass:"custom-row"},[n("Col",{attrs:{span:"12"}},[n("span",[e._v("入库仓库:")]),e._v(" "),n("span",[e._v(e._s(e.detailInfo.wareHouseName))])]),e._v(" "),n("Col",{attrs:{span:"12"}},[n("span",[e._v("货主:")]),e._v(" "),n("span",[e._v(e._s(e.detailInfo.distributorName))])])],1),e._v(" "),n("h3",{staticClass:"custom-h3"},[e._v("商品信息")]),e._v(" "),n("Table",{attrs:{columns:e.detailGoodsCoulmns,data:e.detailGoodsData}}),e._v(" "),n("div",{staticClass:"detail-modal-btn-group",attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{disabled:!0}},[e._v("打印")]),e._v(" "),n("Button",{on:{click:function(t){return e.detailVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),n("Modal",{attrs:{title:"入库",width:1e3},model:{value:e.inbundVisible,callback:function(t){e.inbundVisible=t},expression:"inbundVisible"}},[n("div",[n("Table",{attrs:{columns:e.inbundGoodsColumns,data:e.inboundGoods}})],1),e._v(" "),n("div",{staticClass:"detail-modal-btn-group",attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:function(t){e.onShelf()}}},[e._v("入库")]),e._v(" "),n("Button",{on:{click:function(t){return e.inbundVisible=!1}}},[e._v("关闭")])],1)]),e._v(" "),n("Modal",{attrs:{width:1200,title:"入库结果"},model:{value:e.inboundResultVisible,callback:function(t){e.inboundResultVisible=t},expression:"inboundResultVisible"}},[n("h3",{staticClass:"custom-h3"},[e._v("基本信息")]),e._v(" "),n("Row",{staticClass:"custom-row"},[n("Col",{attrs:{span:"12"}},[n("span",[e._v("退货单号:")]),e._v(" "),n("span",[e._v(e._s(e.inbundResultInfo.dnCode))])]),e._v(" "),n("Col",{attrs:{span:"12"}},[n("span",[e._v("货主:")]),e._v(" "),n("span",[e._v(e._s(e.inbundResultInfo.distributorName))])])],1),e._v(" "),n("h3",{staticClass:"custom-h3"},[e._v("商品信息")]),e._v(" "),n("Table",{attrs:{columns:e.inboundResultGoodsColumns,data:e.inboundResultGoodsView}}),e._v(" "),n("div",{staticClass:"detail-modal-btn-group",attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(t){return e.inboundResultVisible=!1}}},[e._v("关闭")])],1)],1)],1)},a=[];r._withStripped=!0;var s={render:r,staticRenderFns:a};t.default=s},603:function(e,t,n){"use strict";function r(e){l||n(964)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(939),s=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var i=n(966),u=n.n(i),l=!1,d=n(13),c=r,p=d(s.a,u.a,!1,c,"data-v-eb39e066",null);p.options.__file="src/views/my-components/default-hr/default-hr.vue",t.default=p.exports},826:function(e,t,n){"use strict";function r(e){l||(n(2421),n(2423))}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1711),s=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var i=n(2425),u=n.n(i),l=!1,d=n(13),c=r,p=d(s.a,u.a,!1,c,"data-v-441245cb",null);p.options.__file="src/views/stock-manage/warehouse-in/refund-inbound.vue",t.default=p.exports},898:function(e,t,n){"use strict";function r(e,t){if(!t)var t="yyyy-MM-DD hh:mm:ss";var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}function a(e,t){if(!t)var t="yyyy-MM-dd";(e=Number(e))<1e10&&(e*=1e3);var n=new Date(e),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=r,t.timestampToDay=a},939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},964:function(e,t,n){var r=n(965);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(43)("63be8b28",r,!1,{})},965:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\n.default-hr[data-v-eb39e066] {\n  width: 100%;\n  height: 1px;\n  border: none;\n  border-top: 1px dashed #aaa;\n  margin-bottom: 20px;\n}\n",""])},966:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("hr",{staticClass:"default-hr"})},a=[];r._withStripped=!0;var s={render:r,staticRenderFns:a};t.default=s}});