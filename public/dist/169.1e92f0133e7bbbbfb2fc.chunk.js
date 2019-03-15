webpackJsonp([169],{1729:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(38),i=(r(a),e(239)),o=r(i);n.default={data:function(){var t=this;return{deleteModal:!1,totalCount:0,page:1,loading:!1,columns1:[{title:"序号",align:"center",width:62,render:function(t,n){return n.row.addup?t("div","小计"):t("div",n.index+1)}},{title:"收货单号",key:"receiptOrderNo",align:"center",width:200},{title:"收货时间",key:"receiptTime",align:"center",width:150,render:function(n,e){return n("div",e.row.receiptTime?t.timestampToTime(e.row.receiptTime):"")}},{title:"应收款",align:"center",key:"receiptPrice",width:100,render:function(t,n){return t("div",n.row.receiptPrice?Number(n.row.receiptPrice).toFixed(2):"0.00")}},{title:"剩余应收款",align:"center",key:"restPrice",width:100,render:function(t,n){return t("div","0.00")}},{title:"订单编号",align:"center",key:"originalOrderNo",width:200},{title:"预收抵减",align:"center",key:"advanceFee",width:100,render:function(t,n){return t("div",n.row.advanceFee?Number(n.row.advanceFee).toFixed(2):"0.00")}},{title:"尾差核销",align:"center",key:"tailChargeOffAmount",width:100,render:function(t,n){return t("div",n.row.tailChargeOffAmount?Number(n.row.tailChargeOffAmount).toFixed(2):"0.00")}},{title:"费用抵减",align:"center",key:"compensatingAmount",width:100,render:function(t,n){return t("div",n.row.compensatingAmount?Number(n.row.compensatingAmount).toFixed(2):"0.00")}},{title:"抵减说明",align:"center",key:"compensatingNote",width:100},{title:"退货抵减",align:"center",key:"refundAmount",width:100,render:function(t,n){return t("div",n.row.refundAmount?Number(n.row.refundAmount).toFixed(2):"0.00")}},{title:"实收金额",align:"center",key:"paymentPrice",width:100,render:function(t,n){return t("div",n.row.paymentPrice?Number(n.row.paymentPrice).toFixed(2):"0.00")}},{title:"已核销金额",align:"center",key:"chargeOffAmount",width:100,render:function(t,n){return t("div",n.row.chargeOffAmount?Number(n.row.chargeOffAmount).toFixed(2):"0.00")}},{title:"状态",align:"center",key:"chargeOffStatus",width:100,render:function(t,n){return n.row.addup?"":t("div",2==n.row.chargeOffStatus?"全部核销":1==n.row.chargeOffStatus?"部分已核销":"未核销")}}],columns:[{title:"序号",align:"center",width:62,render:function(t,n){return n.row.addup?t("div","小计"):t("div",n.index+1)}},{title:"单据类型",key:"billType",align:"center",width:120},{title:"单号",key:"refundBillNo",align:"center",width:150},{title:"业务日期",align:"center",key:"refundTime",width:100,render:function(n,e){return n("div",e.row.refundTime?t.timestampToTime(e.row.refundTime):"")}},{title:"金额",align:"center",key:"refundAmount",width:100,render:function(t,n){return t("div",n.row.refundAmount?Number(n.row.refundAmount).toFixed(2):"0.00")}},{title:"可抵减金额",align:"center",key:"restAmount",width:100,render:function(t,n){return t("div",n.row.restAmount?Number(n.row.restAmount).toFixed(2):"0.00")}},{title:"本次抵减金额",align:"center",key:"diff",width:160,render:function(t,n){return t("div",n.row.diff?Number(n.row.diff).toFixed(2):"0.00")}},{title:"业务员",align:"center",key:"refundUser",width:100},{title:"备注",align:"center",key:"refundReason"},{title:"状态",align:"center",key:"status",width:100,render:function(t,n){return n.row.addup?"":t("div",2==n.row.chargeOffStatus?"全部核销":1==n.row.chargeOffStatus?"部分已核销":"未核销")}}],data:[],data1:[],formItem:[{id:"",name:"请选择"},{id:1,name:"银行卡"},{id:2,name:"支付宝"},{id:3,name:"微信"},{id:4,name:"现金"},{id:5,name:"其他"}],status:["未核销","部分已核销","已核销"],result:{openTicketName:"",receiptBillNo:"",createTime:"",estimatedDate:"",status:0,type:0}}},mounted:function(){this.detail()},methods:{detail:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.traderManage.flowManage.caseMangage.detailUrl,data:o.default.stringify({receiptBillNo:this.$route.query.id})}).then(function(n){if("200"==n.data.code){if(t.result=n.data.result.vo,t.result.createTime=t.timestampToTime(t.result.createTime),t.result.estimatedDate=t.timestampToTime(t.result.estimatedDate),t.data1=n.data.result.rrLists,n.data.result.rrLists.length>=1){var e=0,r=0,a=0,i=0,o=0,d=0,l=0;for(var u in t.data1)e+=Number(t.data1[u].receiptPrice),r+=Number(t.data1[u].advanceFee),a+=Number(t.data1[u].tailChargeOffAmount),i+=Number(t.data1[u].compensatingAmount),o+=Number(t.data1[u].refundAmount),d+=Number(t.data1[u].paymentPrice),l+=Number(t.data1[u].chargeOffAmount);t.data1.push({addup:1,receiptPrice:e,advanceFee:r,tailChargeOffAmount:a,compensatingAmount:i,refundAmount:o,paymentPrice:d,chargeOffAmount:l})}t.data=[];for(var c in n.data.result.reList)"收款单"!=n.data.result.reList[c].billType&&t.data.push(n.data.result.reList[c]);if(t.data.length>=1){var s=0,p=0;for(var g in t.data)s+=Number(t.data[g].refundAmount),p+=Number(t.data[g].restAmount);t.refundAmount=s,t.data.push({addup:1,refundAmount:s,restAmount:p})}}else t.$Modal.error({title:"提示",content:response.data.message})}).catch(function(t){console.log("失败信息：",t)})},timestampToTime:function(t){var n=new Date(t),e=n.getFullYear()+"-",r=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",a=n.getDate()+" ";n.getHours(),n.getMinutes(),n.getSeconds();return e+r+a}},created:function(){},components:{}}},2485:function(t,n,e){var r=e(2486);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(43)("41bb9100",r,!1,{})},2486:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.should-receipt-account {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.should-receipt-account .head {\n  padding: 20px 0;\n}\n.should-receipt-account .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.should-receipt-account .head .head_left #OrderID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #store {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #OrderAccount {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #ReceiptID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #StoresNumber {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #billingName {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .date {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .hl2 {\n  margin-top: 10px;\n}\n.should-receipt-account .head .head_right .query {\n  margin-bottom: 10px;\n}\n.should-receipt-account .table {\n  margin: 1%;\n}\n.should-receipt-account .page {\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2487:function(t,n,e){var r=e(2488);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(43)("32263dfc",r,!1,{})},2488:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.head[data-v-5b207341]{\n    padding: 20px;\n}\ndiv.audit-order-manage[data-v-5b207341]{\n    text-align: left;\n}\n.textR[data-v-5b207341]{\n    text-align: right;\n}\n.audit_title[data-v-5b207341]{\n    margin: 40px 0 12px;\n    height: 45px;\n    line-height: 45px;\n    font-size: 20px;\n    color: #747474;\n    padding-left: 20px;\n    font-weight: bold;\n}\n",""])},2489:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"audit-order-manage",staticStyle:{background:"#fff"}},[e("Row",{staticClass:"head"},[e("Col",{staticClass:"head_left",attrs:{span:"18"}},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"6"}},[t._v("开票名称 :")]),t._v("\n            "+t._s(t.result.openTicketName)+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"6"}},[t._v("收款类型 :")]),t._v("\n            "+t._s(t.formItem[t.result.type].name+"结算")+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"6"}},[t._v("对账单号 :")]),t._v("\n            "+t._s(t.result.receiptBillNo)+"\n            ")],1)],1),t._v(" "),e("Row",{staticStyle:{"padding-top":"30px"}},[e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"6"}},[t._v("状态 :")]),t._v("\n            "+t._s(t.status[t.result.status])+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"6"}},[t._v("创建时间 :")]),t._v("\n            "+t._s(t.result.createTime)+"\n            ")],1),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Col",{attrs:{span:"7"}},[t._v("预计收款日期 :")]),t._v("\n            "+t._s(t.result.estimatedDate)+"\n            ")],1)],1)],1)],1),t._v(" "),e("p",{staticClass:"audit_title"},[t._v("应收款明细")]),t._v(" "),e("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns1,data:t.data1}}),t._v(" "),e("p",{staticClass:"audit_title"},[t._v("抵减明细（退货单、预收单、费用单）")]),t._v(" "),e("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns,data:t.data}})],1)},a=[];r._withStripped=!0;var i={render:r,staticRenderFns:a};n.default=i},844:function(t,n,e){"use strict";function r(t){u||(e(2485),e(2487))}Object.defineProperty(n,"__esModule",{value:!0});var a=e(1729),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);var d=e(2489),l=e.n(d),u=!1,c=e(13),s=r,p=c(i.a,l.a,!1,s,"data-v-5b207341",null);p.options.__file="src/views/trader-manage/flow-manage/case-manage/case-detail.vue",n.default=p.exports}});