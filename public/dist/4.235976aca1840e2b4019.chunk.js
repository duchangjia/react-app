webpackJsonp([4],{1741:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(38),r=(a(i),e(239)),o=a(r);n.default={data:function(){var t=this;return{showBtn:!0,deleteModal:!1,totalCount:0,page:1,loading:!1,columns1:[{title:"序号",align:"center",render:function(t,n){return n.row.addup?t("div","小计"):t("div",n.index+1)}},{title:"收货单号",key:"receiptOrderNo",align:"center"},{title:"门店名称",key:"storeName",align:"center"},{title:"收货时间",key:"receiptTime",align:"center",render:function(n,e){return n("div",e.row.receiptTime?t.timestampToTime(e.row.receiptTime):"")}},{title:"应收款",align:"center",key:"receiptPrice",render:function(t,n){return t("div",n.row.receiptPrice?Number(n.row.receiptPrice).toFixed(2):"0.00")}},{title:"订单编号",align:"center",key:"originalOrderNo"},{title:"签收备注",align:"center",ellipsis:!0,key:"note",render:function(t,n){return n.row.addup?t():t("Tooltip",{props:{placement:"top",offset:0}},[n.row.note,t("div",{slot:"content",style:{whiteSpace:"normal",wordBreak:"break-all"}},n.row.note)])}}],columns:[{title:"序号",align:"center",render:function(t,n){return n.row.addup?t("div","小计"):t("div",n.index+1)}},{title:"单号",key:"refundBillNo",align:"center"},{title:"单据类型",key:"billType",align:"center"},{title:"门店名称",key:"storeName",align:"center"},{title:"业务日期",align:"center",key:"refundTime",render:function(n,e){return n("div",e.row.refundTime?t.timestampToTime(e.row.refundTime):"")}},{title:"金额",align:"center",key:"refundAmount",render:function(t,n){return t("div",n.row.refundAmount?Number(n.row.refundAmount).toFixed(2):"0.00")}},{title:"剩余金额",align:"center",key:"restAmount",render:function(t,n){return t("div",n.row.restAmount?Number(n.row.restAmount).toFixed(2):"0.00")}},{title:"业务员",align:"center",key:"refundUser"},{title:"备注",align:"center",key:"refundReason",ellipsis:!0,render:function(t,n){return n.row.addup?t():t("Tooltip",{props:{placement:"top",offset:0}},[n.row.refundReason,t("div",{slot:"content",style:{whiteSpace:"normal",wordBreak:"break-all"}},n.row.refundReason)])}},{title:"状态",align:"center",key:"status",render:function(t,n){return n.row.addup?"":t("div",2==n.row.chargeOffStatus?"全部核销":1==n.row.chargeOffStatus?"部分已核销":"未核销")}}],data:[],data1:[],formItem:[{id:"",name:"请选择"},{id:1,name:"银行卡"},{id:2,name:"支付宝"},{id:3,name:"微信"},{id:4,name:"现金"},{id:5,name:"其他"}],status:["未核销","部分已核销","已核销"],result:{openTicketName:"",receiptBillNo:"",createTime:"",estimatedDate:"",status:0,type:0},receiptUser:""}},mounted:function(){this.detail()},methods:{detail:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.traderManage.flowManage.shouldReceiptAccount.printQuery,data:o.default.stringify({receiptBillNo:this.$route.query.id})}).then(function(n){if("200"==n.data.code){if(t.result=n.data.result.vo,t.result.createTime=t.timestampToTime(t.result.createTime),t.result.estimatedDate=t.timestampToTime(t.result.estimatedDate),t.data1=n.data.result.rrLists,n.data.result.rrLists.length>=1){var e=0,a=0,i=0,r=0,o=0,d=0,l=0;for(var s in t.data1)e+=Number(Number(t.data1[s].receiptPrice).toFixed(2)),a+=Number(Number(t.data1[s].advanceFee).toFixed(2)),i+=Number(Number(t.data1[s].tailChargeOffAmount).toFixed(2)),r+=Number(Number(t.data1[s].compensatingAmount).toFixed(2)),o+=Number(Number(t.data1[s].refundAmount).toFixed(2)),d+=Number(Number(t.data1[s].paymentPrice).toFixed(2)),l+=Number(Number(t.data1[s].chargeOffAmount).toFixed(2));t.data1.push({addup:1,receiptPrice:e,advanceFee:a,tailChargeOffAmount:i,compensatingAmount:r,refundAmount:o,paymentPrice:d,chargeOffAmount:l})}if(t.data=n.data.result.reList,t.data.length>=1){var p=0,c=0;for(var u in t.data)p+=Number(Number(t.data[u].refundAmount).toFixed(2)),c+=Number(Number(t.data[u].restAmount).toFixed(2));t.refundAmount=p,t.data.push({addup:1,refundAmount:p,restAmount:c})}n.data.result.vo.receiptUser?t.receiptUser=n.data.result.vo.receiptUser:t.receiptUser=""}else t.$Modal.error({title:"提示",content:response.data.message})}).catch(function(t){console.log("失败信息：",t)})},goBack:function(){"receivable"==this.$route.query.name?this.$router.push({name:"receipt-manage"}):this.$router.push({name:"should-receipt-account"})},timestampToTime:function(t){var n=new Date(t),e=n.getFullYear()+"-",a=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",i=n.getDate()+" ";n.getHours(),n.getMinutes(),n.getSeconds();return e+a+i},print:function(){document.getElementById("noprint").style.display="none",window.print(),setTimeout(function(){document.getElementById("noprint").style.display=""})}},created:function(){},components:{}}},2537:function(t,n,e){var a=e(2538);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(43)("d2a75ca8",a,!1,{})},2538:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\nhtml,\nbody {\n  overflow: inherit;\n}\n.but {\n  text-align: center;\n  padding-bottom: 30px;\n  padding-top: 20px;\n}\n.row-state {\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n}\n.row-title {\n  height: 40px;\n  line-height: 40px;\n  font-weight: bold;\n}\n.should-receipt-account {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.should-receipt-account .head {\n  padding: 20px 0;\n}\n.should-receipt-account .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.should-receipt-account .head .head_left #OrderID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #store {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #OrderAccount {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #ReceiptID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #StoresNumber {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #billingName {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .date {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .hl2 {\n  margin-top: 10px;\n}\n.should-receipt-account .head .head_right .query {\n  margin-bottom: 10px;\n}\n.should-receipt-account .table {\n  margin: 1%;\n}\n.should-receipt-account .page {\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2539:function(t,n,e){var a=e(2540);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(43)("c436a12c",a,!1,{})},2540:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.head[data-v-4ad9dccf]{\n    padding: 20px;\n}\ndiv.audit-order-manage[data-v-4ad9dccf]{\n    text-align: left;\n}\n.textR[data-v-4ad9dccf]{\n    text-align: right;\n}\n.audit_title[data-v-4ad9dccf]{\n    margin: 40px 0 12px;\n    height: 45px;\n    line-height: 45px;\n    font-size: 20px;\n    color: #747474;\n    padding-left: 20px;\n    font-weight: bold;\n}\n",""])},2541:function(t,n,e){var a=e(2542);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(43)("28da5eea",a,!1,{})},2542:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.ivu-table-cell.ivu-table-cell-ellipsis .ivu-tooltip {\n  width: 100%;\n}\n.ivu-table-cell.ivu-table-cell-ellipsis .ivu-tooltip .ivu-tooltip-rel {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n",""])},2543:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"audit-order-manage",staticStyle:{background:"#fff",padding:"20px"}},[e("Row",{staticClass:"head"},[e("Col",{staticClass:"head_left",attrs:{span:"24"}},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("开票名称 :")]),t._v("\n            "+t._s(t.result.openTicketName)+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("收款类型 :")]),t._v("\n            "+t._s(t.result.type?t.formItem[t.result.type].name+"结算":"")+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("对账单号 :")]),t._v("\n            "+t._s(t.result.receiptBillNo)+"\n            ")],1)],1),t._v(" "),e("Row",{staticStyle:{"padding-top":"30px"}},[e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("状态 :")]),t._v("\n            "+t._s(t.status[t.result.status])+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("创建时间 :")]),t._v("\n            "+t._s(t.result.createTime)+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"9"}},[t._v("预计收款日期 :")]),t._v("\n            "+t._s(t.result.estimatedDate)+"\n            ")],1)],1)],1)],1),t._v(" "),e("p",{staticClass:"audit_title"},[t._v("收货单明细")]),t._v(" "),e("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns1,data:t.data1}}),t._v(" "),e("p",{staticClass:"audit_title"},[t._v("抵减明细（退货单，预收单，费用单）")]),t._v(" "),e("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns,data:t.data}}),t._v(" "),e("div",{staticStyle:{overflow:"hidden","margin-top":"20px"}},[e("Col",{staticStyle:{float:"right",height:"40px","line-height":"40px"},attrs:{span:"4"}},[t._v("收款人:"+t._s(t.receiptUser))])],1),t._v(" "),e("row",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"but",attrs:{id:"noprint"}},[e("Button",{attrs:{type:"primary"},on:{click:function(n){t.print()}}},[t._v("打 印")]),t._v(" "),e("Button",{staticStyle:{"margin-left":"30px"},on:{click:function(n){t.goBack()}}},[t._v("关闭")])],1)],1)},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};n.default=r},263:function(t,n,e){"use strict";function a(t){s||(e(2537),e(2539),e(2541))}Object.defineProperty(n,"__esModule",{value:!0});var i=e(1741),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var d=e(2543),l=e.n(d),s=!1,p=e(13),c=a,u=p(r.a,l.a,!1,c,"data-v-4ad9dccf",null);u.options.__file="src/views/trader-manage/flow-manage/should-receipt-account/should-receipt-print.vue",n.default=u.exports}});