webpackJsonp([207],{1737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(239),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={data:function(){var e=this;return{columns:[{align:"center",title:"序号",width:60,key:"index"},{title:"退货单号",key:"refundBillNo",align:"center",render:function(t,n){return t("a",{props:{size:"small"},style:{margin:"5px"},on:{click:function(){e.getProduct(n.row.refundBillNo)}}},n.row.refundBillNo)}},{title:"门店编码",key:"storeCode",align:"center"},{title:"门店名称",align:"center",key:"storeName"},{title:"退货时间",align:"center",key:"refundTime",width:160,render:function(t,n){return n.row.refundTime?t("div",e.timestampToTime(n.row.refundTime)):t("div",n.row.refundTime)}},{title:"退货金额",align:"center",key:"refundAmount",render:function(e,t){return e("div",t.row.refundAmount?Number(t.row.refundAmount).toFixed(2):0)}},{title:"退货人",align:"center",key:"refundUser"},{title:"退货理由",align:"center",key:"refundReason"},{title:"状态",align:"center",key:"chargeOffStatus",render:function(e,t){var n="未核销";return 2==t.row.chargeOffStatus?n="全部已核销":void 0==t.row.chargeOffStatus&&(n=""),e("div",n)}}],columnsListProduct:[{title:"序号",width:80,type:"index"},{title:"商品名称",key:"goodsName"},{title:"条形码",key:"code69"},{title:"销售编码",key:"code79"},{title:"物料编码",key:"code80"},{title:"最小单位单价",key:"itemPrice"},{title:"交易金额",key:"payPrice"},{title:"每箱的数量",key:"packageNum"},{title:"退款金额",key:"returnAmount"}],data:[],thisTableDataProduct:[],totalCount:0,value:{startTime:"",endTime:"",refundBillNo:"",storeName:"",operateAccount:"",storeCode:"",page:1},res:"",showOrderDetail:!1,loading:!1}},mounted:function(){this.query(1)},methods:{timestampToTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},getProduct:function(e){var t=this,n=this;this.thisTableDataProduct=[],this.$util.ajax({method:"post",url:n.$util.apiConfig.traderManage.flowManage.RefundOrder.getProduct+"?code="+e}).then(function(e){200==e.data.code?(t.showOrderDetail=!0,e.data.result.forEach(function(e,n){var a={goodsName:e.goodsName,code69:e.code69,code79:e.code79,code80:e.code80,itemPrice:e.itemPrice?parseFloat(e.itemPrice).toFixed(2):0,payPrice:e.payPrice?parseFloat(e.payPrice).toFixed(2):0,packageNum:e.packageNum?parseFloat(e.packageNum).toFixed(2):0,returnAmount:e.returnAmount?parseFloat(e.returnAmount).toFixed(2):0};t.thisTableDataProduct.push(a)})):n.$Modal.error({title:"提示",content:e.data.message})}).catch(function(e){console.log("失败信息：",e)})},query:function(e){var t=this;t.loading=!0;var n=new Date(this.value.endTime),a=new Date(this.value.startTime);this.value.endTime=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds(),this.value.startTime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),this.value.page=e,this.$util.ajax({method:"post",url:t.$util.apiConfig.traderManage.flowManage.RefundOrder.listUrl,data:r.default.stringify(this.value)}).then(function(e){if(console.log("response"),console.log(e),t.loading=!1,200==e.data.code){var n=e.data.result.refundSum,a=0;if(t.data=[],t.totalCount=0,""==e.data.result.pager.records)return;t.data=e.data.result.pager.records,t.data=t.data.map(function(e,t){return a+=e.refundAmount,e.index=t+1,e});var r=[{index:"小计",refundAmount:a},{index:"总计",refundAmount:n}];t.data=t.data.concat(r),t.totalCount=e.data.result.pager.totalCount}else t.$Modal.error({title:"提示",content:e.data.message})}).catch(function(e){t.loading=!1,console.log("失败信息：",e)})}},components:{}}},2521:function(e,t,n){var a=n(2522);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(43)("10121795",a,!1,{})},2522:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.returns-management {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.returns-management .head {\n  padding: 20px 0;\n}\n.returns-management .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.returns-management .head .head_left #returnsNumber {\n  width: 50%;\n}\n.returns-management .head .head_left #storesName {\n  width: 50%;\n}\n.returns-management .head .head_left #orderAccount {\n  width: 50%;\n}\n.returns-management .head .head_left #StoresNumber {\n  width: 50%;\n}\n.returns-management .head .head_left .date {\n  width: 50%;\n}\n.returns-management .head .head_left .hl2 {\n  margin-top: 10px;\n}\n.returns-management .head .head_right .query {\n  margin-bottom: 10px;\n}\n.returns-management .table {\n  margin: 1%;\n}\n.returns-management .page {\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"returns-management"},[n("Row",{staticClass:"head"},[n("Col",{staticClass:"head_left",attrs:{span:"18"}},[n("Row",[n("Col",{attrs:{span:"8"}},[e._v("\n                    开始时间 : \n                    "),n("DatePicker",{staticClass:"date",attrs:{type:"date",clearable:""},model:{value:e.value.startTime,callback:function(t){e.$set(e.value,"startTime",t)},expression:"value.startTime"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[e._v("\n                    截止时间 : \n                    "),n("DatePicker",{staticClass:"date",attrs:{type:"date",clearable:""},model:{value:e.value.endTime,callback:function(t){e.$set(e.value,"endTime",t)},expression:"value.endTime"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("label",{attrs:{for:"returnsNumber"}},[e._v("退货单号 :  ")]),n("Input",{attrs:{id:"returnsNumber",clearable:""},model:{value:e.value.refundBillNo,callback:function(t){e.$set(e.value,"refundBillNo",t)},expression:"value.refundBillNo"}})],1)],1),e._v(" "),n("Row",{staticClass:"hl2"},[n("Col",{attrs:{span:"8"}},[n("label",{attrs:{for:"storesName"}},[e._v("门店名称 :  ")]),n("Input",{attrs:{id:"storesName",clearable:""},model:{value:e.value.storeName,callback:function(t){e.$set(e.value,"storeName",t)},expression:"value.storeName"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("label",{attrs:{for:"orderAccount"}},[e._v("下单账号 :  ")]),n("Input",{attrs:{id:"orderAccount",clearable:""},model:{value:e.value.operateAccount,callback:function(t){e.$set(e.value,"operateAccount",t)},expression:"value.operateAccount"}})],1),e._v(" "),n("Col",{attrs:{span:"8"}},[n("label",{attrs:{for:"StoresNumber"}},[e._v("门店编码 :  ")]),n("Input",{attrs:{id:"StoresNumber",clearable:""},model:{value:e.value.storeCode,callback:function(t){e.$set(e.value,"storeCode",t)},expression:"value.storeCode"}})],1)],1)],1),e._v(" "),n("Col",{staticClass:"head_right",attrs:{span:"6"}},[n("br"),n("br"),e._v(" "),n("Button",{staticClass:"query",on:{click:function(t){e.query(1)}}},[e._v("查询 ")])],1)],1),e._v(" "),n("Table",{staticClass:"table",attrs:{columns:e.columns,data:e.data,loading:e.loading}}),e._v(" "),n("div",{staticStyle:{padding:"10px 0",overflow:"hidden"}},[n("Page",{staticStyle:{float:"right"},attrs:{total:e.totalCount,current:e.value.page,"page-size":10,"show-total":"","show-elevator":""},on:{"on-change":e.query}})],1),e._v(" "),n("modal",{attrs:{width:"1200"},model:{value:e.showOrderDetail,callback:function(t){e.showOrderDetail=t},expression:"showOrderDetail"}},[n("span",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("退货单商品")])]),e._v(" "),n("div",[n("div",{staticClass:"tableStandard",staticStyle:{"overflow-y":"auto",height:"300px"}},[n("Table",{attrs:{stripe:"",columns:e.columnsListProduct,data:e.thisTableDataProduct}})],1)])])],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},851:function(e,t,n){"use strict";function a(e){s||n(2521)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1737),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(2523),d=n.n(l),s=!1,u=n(13),c=a,g=u(o.a,d.a,!1,c,null,null);g.options.__file="src/views/trader-manage/flow-manage/returns-management/returns-management.vue",t.default=g.exports}});