webpackJsonp([204],{1110:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(239),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={props:{visible:{default:!1,type:Boolean},orderId:{default:"2018092000007423",type:[String,Number]},orderDetail:{default:function(){return{}},type:Object}},data:function(){return{modalVisible:!1,orderMain:{},orderItems:[],warehouseList:[],outWarehouse:"",submiting:!1,toggleRender:!1}},mounted:function(){this.modalVisible=this.visible},methods:{outWarehouseChangeHandle:function(e){var t=this;if(""!=e){var a={};a.warehouseCode=e,a.materialCode79List=[],this.orderItems.forEach(function(e){a.materialCode79List.push(e.item79)}),this.$util.ajax.post("/omsCenter/logicStock/toWarehouseCode",a).then(function(e){if(console.log("仓库商品存量:",e),e.data.result){var a=e.data.result;t.orderItems.forEach(function(e){e.notEnoughStore=!0,e.sendCarNum=0,e.sendEaNum=0,a.forEach(function(t){e.item79==t.materialCode79&&(Number(e.needSendTotal)<=Number(t.totalNum)?(e.notEnoughStore=!1,e.sendCarNum=e.needSendCar,e.sendEaNum=e.needSendEa,t.totalNum-=e.needSendTotal):(e.sendCarNum=parseInt(Number(t.totalNum)/Number(e.packageNum)),e.sendCarNum<=0&&(e.sendCarNum=0),e.sendEaNum=Number(t.totalNum)%Number(e.packageNum),e.sendEaNum<=0&&(e.sendEaNum=0),t.totalNum=0))}),0==e.needSendTotal&&(e.notEnoughStore=!1)})}else t.orderItems.forEach(function(e){e.notEnoughStore=!0,e.sendCarNum=0,e.sendEaNum=0,0==e.needSendTotal&&(e.notEnoughStore=!1)});t.toggleRender=!t.toggleRender})}},cancel:function(){this.$emit("update:visible",!1)},submit:function(){var e=this,t=1;if(this.$store.state.app.statusInfo.promotionMode?t=this.$store.state.app.statusInfo.promotionMode:localStorage.promotionMode&&(t=localStorage.promotionMode),1==t){if(""==this.outWarehouse||void 0==this.outWarehouse||null==this.outWarehouse)return void this.$Modal.error({title:"请选择出库仓库",content:"出库仓库不存在"});var a={};a.orderId=this.orderId,a.warehouseCode=this.outWarehouse,a.orderState=this.orderMain.orderStatus,a.list=[];var o=!1,r=0;if(this.orderItems.forEach(function(e){var t=Number(e.sendCarNum)*Number(e.packageNum)+Number(e.sendEaNum);return t>Number(e.needSendTotal)?void(o=!0):(""===e.sendCarNum&&(e.sendCarNum=0),""===e.sendEaNum&&(e.sendEaNum=0),e.sendCarNum<=0&&e.sendEaNum<=0?void r++:void a.list.push({entryNo:e.id,code79:e.item79,carNum:e.needSendCar,eaNum:e.needSendEa,sendCarNum:e.sendCarNum,sendEaNum:e.sendEaNum,transformRule:e.packageNum,num:t}))}),o)return void this.$Modal.error({title:"出库数量填写错误",content:"填写的出库数量不能大于应发数"});if(r==this.orderItems.length)return void this.$Modal.error({title:"出库数量填写错误",content:"所有商品的出库数量不能全为0"});console.log("出库发送参数：",a),this.submiting=!0,this.$util.ajax.post("/trade/order/tcc/outToOrder",a).then(function(t){e.submiting=!1,console.log("出库返回结果",t),200==t.data.code?e.$Modal.success({title:"操作成功",content:t.data.message,onOk:function(){e.$emit("successCallback"),e.cancel()}}):e.$Modal.error({title:"操作失败",content:t.data.message})}).catch(function(t){console.error(t),e.$Modal.error({title:"http请求失败",content:"出库请求失败"})})}else 2==t&&(this.submiting=!0,this.$util.ajax.post("/trade/order/tcc/outToOrderV2",{orderId:this.orderId}).then(function(t){e.submiting=!1,console.log("出库返回结果",t),200==t.data.code?e.$Modal.success({title:"操作成功",content:t.data.message,onOk:function(){e.$emit("successCallback"),e.cancel()}}):e.$Modal.error({title:"操作失败",content:t.data.message})}).catch(function(t){e.$Modal.error({title:"http请求失败",content:"出库请求失败"})}))},formatNum:function(e){e.target.value=e.target.value.replace(/[^\d]/g,"")}},watch:{visible:function(e){var t=this;1==e?(this.outWarehouse="",this.warehouseList=this.$store.state.app.statusInfo.ware,this.$util.ajax.post("/trade/order/getDetail/json",r.default.stringify({orderId:this.orderId})).then(function(a){if(console.log("订单详情数据：",a),200==a.status){t.modalVisible=e,t.orderMain=a.data.result.tradeOrder.orderMain,t.orderItems=a.data.result.tradeOrder.orderItems;for(var o=0;o<t.orderItems.length;o++)t.orderItems[o].itemName+=" * "+t.orderItems[o].packageNum,t.orderItems[o].auditEaNum=t.orderItems[o].auditEaNum?Number(t.orderItems[o].auditEaNum):0,t.orderItems[o].outEaNum=t.orderItems[o].outEaNum?Number(t.orderItems[o].outEaNum):0,t.orderItems[o].auditEaNum>t.orderItems[o].outEaNum?(t.orderItems[o].needSendTotal=t.orderItems[o].auditEaNum-t.orderItems[o].outEaNum,t.orderItems[o].needSendCar=parseInt(t.orderItems[o].needSendTotal/t.orderItems[o].packageNum),t.orderItems[o].needSendEa=t.orderItems[o].needSendTotal%t.orderItems[o].packageNum,t.orderItems[o].sendCarNum=0,t.orderItems[o].sendEaNum=0,t.orderItems[o].notEnoughStore=!0):(t.orderItems[o].needSendTotal=0,t.orderItems[o].needSendCar=0,t.orderItems[o].needSendEa=0,t.orderItems[o].sendCarNum=0,t.orderItems[o].sendEaNum=0,t.orderItems[o].notEnoughStore=!1)}else t.$Modal.error({title:"HTTP请求错误",content:a.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})):this.modalVisible=e}}}},1424:function(e,t,a){var o=a(1425);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(43)("3ebb759f",o,!1,{})},1425:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.red[data-v-0b21ec50] {\n  color: red;\n}\n.custom-table[data-v-0b21ec50] {\n  width: 100%;\n  text-align: center;\n  line-height: 48px;\n  border: 1px solid #ddd;\n}\n.custom-table th[data-v-0b21ec50] {\n  color: #666;\n  background-color: #eee;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 30px;\n}\n.custom-table tr th[data-v-0b21ec50],\n.custom-table tr td[data-v-0b21ec50] {\n  border-right: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  padding: 5px;\n}\n.custom-table tr td[data-v-0b21ec50] {\n  line-height: 30px;\n  font-size: 12px;\n}\n.custom-table tbody tr[data-v-0b21ec50]:nth-of-type(2n) {\n  background: #f5f5f5;\n}\n.custom-table tbody tr:last-of-type td[data-v-0b21ec50] {\n  border-bottom: none;\n}\n.base[data-v-0b21ec50] {\n  border: 1px solid #aaa;\n  margin-bottom: 20px;\n}\n.base-row[data-v-0b21ec50] {\n  border-bottom: 1px solid #aaa;\n}\n.base-row[data-v-0b21ec50]:last-of-type {\n  border-bottom: 0;\n}\n.base-row > div[data-v-0b21ec50] {\n  line-height: 36px;\n}\n.base-row > div.label[data-v-0b21ec50] {\n  background: #eee;\n  text-align: right;\n  padding-right: 20px;\n}\n.base-row > div.content[data-v-0b21ec50] {\n  border-left: 1px solid #aaa;\n  padding: 0 20px;\n}\n.tipsFont[data-v-0b21ec50] {\n  font-family: 'Microsoft YaHei Bold', 'Microsoft YaHei';\n  font-weight: 700;\n  font-style: normal;\n  font-size: 18px;\n  color: #666666;\n  line-height: 200px;\n  text-align: center;\n  height: 200px;\n}\n",""])},1426:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{title:"订单出库",width:"550"},on:{"on-cancel":e.cancel},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[2!=e.$store.state.app.statusInfo.promotionMode?a("div",[a("div",{staticClass:"base"},[a("Row",{staticClass:"base-row"},[a("Col",{staticClass:"label",attrs:{span:"8"}},[e._v("出库仓库")]),e._v(" "),a("Col",{staticClass:"content",attrs:{span:"16"}},[a("Select",{on:{"on-change":e.outWarehouseChangeHandle},model:{value:e.outWarehouse,callback:function(t){e.outWarehouse=t},expression:"outWarehouse"}},e._l(e.warehouseList,function(t){return a("Option",{key:t.id,attrs:{value:t.warehouseCode}},[e._v(e._s(t.warehouseName))])}))],1)],1),e._v(" "),a("Row",{staticClass:"base-row"},[a("Col",{staticClass:"label",attrs:{span:"8"}},[e._v("门店名称")]),e._v(" "),a("Col",{staticClass:"content",attrs:{span:"16"}},[e._v(e._s(e.orderMain.storeName))])],1),e._v(" "),a("Row",{staticClass:"base-row"},[a("Col",{staticClass:"label",attrs:{span:"8"}},[e._v("所在区域")]),e._v(" "),a("Col",{staticClass:"content",attrs:{span:"16"}},[e._v(e._s(e.orderMain.provinceName)+e._s(e.orderMain.cityName)+e._s(e.orderMain.areaName))])],1),e._v(" "),a("Row",{staticClass:"base-row"},[a("Col",{staticClass:"label",attrs:{span:"8"}},[e._v("详细地址")]),e._v(" "),a("Col",{staticClass:"content",attrs:{span:"16"}},[a("p",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis",width:"320px"}},[e._v(e._s(e.orderMain.detailAddress))])])],1),e._v(" "),a("Row",{staticClass:"base-row"},[a("Col",{staticClass:"label",attrs:{span:"8"}},[e._v("联系电话")]),e._v(" "),a("Col",{staticClass:"content",attrs:{span:"16"}},[e._v(e._s(e.orderMain.receiverMobile))])],1)],1),e._v(" "),a("div",{staticClass:"table"},[a("table",{staticClass:"custom-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("colgroup",[a("col",{attrs:{width:"200"}})]),e._v(" "),a("thead",[a("tr",[a("th",{staticStyle:{width:"300px"}},[e._v("商品名称")]),e._v(" "),a("th",[a("span",[e._v("应发数")]),e._v(" "),a("span",[e._v("CAR/EA")])]),e._v(" "),a("th",[a("span",[e._v("实发数")]),e._v(" "),a("span",[e._v("CAR/EA")])])])]),e._v(" "),a("tbody",e._l(e.orderItems,function(t){return t.needSendTotal>0?a("tr",{key:t.id,class:e.toggleRender},[a("td",[e._v(e._s(t.itemName))]),e._v(" "),a("td",{class:{red:t.notEnoughStore}},[e._v(e._s(t.needSendCar||0)+"/"+e._s(t.needSendEa||0))]),e._v(" "),a("td",{staticStyle:{width:"150px"}},[a("Row",{attrs:{gutter:5}},[a("Col",{attrs:{span:"12"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendCarNum,expression:"item.sendCarNum"}],staticClass:"ivu-input",attrs:{disabled:t.auditEaNum<=t.outEaNum,placeholder:"CAR"},domProps:{value:t.sendCarNum},on:{input:[function(a){a.target.composing||e.$set(t,"sendCarNum",a.target.value)},e.formatNum]}})]),e._v(" "),a("Col",{attrs:{span:"12"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sendEaNum,expression:"item.sendEaNum"}],staticClass:"ivu-input",attrs:{disabled:t.auditEaNum<=t.outEaNum,placeholder:"EA"},domProps:{value:t.sendEaNum},on:{input:[function(a){a.target.composing||e.$set(t,"sendEaNum",a.target.value)},e.formatNum]}})])],1)],1)]):e._e()}))])])]):e._e(),e._v(" "),2==e.$store.state.app.statusInfo.promotionMode?a("div",{staticClass:"tipsFont"},[a("span",[e._v("此订单即将出库，确认吗？")])]):e._e(),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{loading:e.submiting,type:"primary"},on:{click:e.submit}},[e._v("确认")])],1)])},r=[];o._withStripped=!0;var n={render:o,staticRenderFns:r};t.default=n},615:function(e,t,a){"use strict";function o(e){u||a(1424)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1110),n=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);var d=a(1426),i=a.n(d),u=!1,l=a(13),c=o,m=l(n.a,i.a,!1,c,"data-v-0b21ec50",null);m.options.__file="src/views/trader-manage/order-manage/orderOutbound.vue",t.default=m.exports}});