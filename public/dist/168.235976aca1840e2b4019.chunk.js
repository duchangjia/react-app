webpackJsonp([168],{1730:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(65),i=n(r),o=a(38),d=(n(o),a(239)),u=n(d);e.default={data:function(){var t=this;return{advanceFeeArr:[],spinShow:!1,account:"",deleteModal:!1,delLoading:!1,delOrderNum:"",delBillType:"",KAChargeModal:!1,loadingModal:!1,totalCount:0,page:1,loading:!1,columns:[{title:"序号",align:"center",width:62,render:function(t,e){return e.row.addup?t("div","小计"):t("div",e.index+1)}},{title:"单据类型",key:"billType",align:"center",width:120},{title:"单号",key:"refundBillNo",align:"center",width:150},{title:"业务日期",align:"center",key:"refundTime",width:160,render:function(e,a){return"收款单"==a.row.billType?e("div",[e("DatePicker",{props:{value:t.paramsTime},on:{"on-change":function(e){t.paramsTime=e,a.row.refundTime=e,console.log(e)}}})]):e("div",a.row.refundTime?t.timestampToTime(a.row.refundTime):"")}},{title:"金额",align:"center",key:"refundAmount",width:100,render:function(t,e){return"收款单"==e.row.billType?t("div",""):t("div",e.row.refundAmount?Number(e.row.refundAmount).toFixed(2):"0.00")}},{title:"剩余金额",align:"center",key:"restAmount",width:100,render:function(t,e){return"收款单"==e.row.billType?t("div",""):t("div",e.row.restAmount?Number(e.row.restAmount).toFixed(2):"0.00")}},{title:"核销金额",align:"center",key:"KAthisSubtraction",width:110,render:function(e,a){return a.row.addup?e("div",Number(a.row.KAthisSubtraction).toFixed(2)):"收款单"==a.row.billType||"预收单"==a.row.billType?e("div",[e("Input",{props:{value:a.row.KAthisSubtraction},on:{"on-blur":function(e){parseFloat(e.target.value)>0?(t.data[a.index].KAthisSubtraction=parseFloat(e.target.value).toFixed(2),a.row.KAthisSubtraction=parseFloat(e.target.value).toFixed(2)):(e.target.value="0.00",a.row.KAthisSubtraction="0.00",t.data[a.index].KAthisSubtraction=0),"预收单"==a.row.billType&&parseFloat(e.target.value)>a.row.restAmount&&(e.target.value=a.row.restAmount,a.row.KAthisSubtraction=a.row.restAmount,t.data[a.index].KAthisSubtraction=a.row.restAmount),t.data_KAthisSubtraction=0;for(var n=0;n<t.data.length-1;n++)t.data_KAthisSubtraction+=Number(t.data[n].KAthisSubtraction);t.data[t.data.length-1].KAthisSubtraction=Number(t.data_KAthisSubtraction).toFixed(2),t.getAmount()}}})]):e("div",a.row.KAthisSubtraction?Number(a.row.KAthisSubtraction).toFixed(2):"0.00")}},{title:"尾差核销",align:"center",key:"diff",width:110,render:function(e,a){return a.row.addup?e("div",a.row.restAmoudifferencent):"收款单"==a.row.billType?e("div",[e("Input",{props:{value:a.row.restAmoudifferencent},on:{"on-blur":function(e){parseFloat(e.target.value)>0||parseFloat(e.target.value)<0?(t.data[a.index].restAmoudifferencent=parseFloat(e.target.value).toFixed(2),a.row.restAmoudifferencent=parseFloat(e.target.value).toFixed(2)):(e.target.value="0.00",a.row.restAmoudifferencent="0.00",t.data[a.index].restAmoudifferencent=0),t.data_difference=0;for(var n=0;n<t.data.length-1;n++)t.data_difference+=Number(t.data[n].restAmoudifferencent);t.data[t.data.length-1].restAmoudifferencent=Number(t.data_difference).toFixed(2)}}})]):e("div","")}},{title:"业务员",align:"center",key:"refundUser",width:100},{title:"摘要",align:"center",key:"refundReason",width:120,render:function(e,a){return"收款单"==a.row.billType?e("div",[e("Input",{props:{value:a.row.refundReason},on:{"on-blur":function(e){a.row.refundReason=e.target.value,t.data[a.index].refundReason=e.target.value}}})]):a.row.addup?e():e("Tooltip",{props:{placement:"top",offset:0,transfer:!0}},[a.row.refundReason,e("div",{slot:"content",style:{whiteSpace:"normal",wordBreak:"break-all"}},a.row.refundReason)])}},{title:"状态",align:"center",key:"status",width:100,render:function(t,e){return e.row.addup?"":t("div",2==e.row.chargeOffStatus?"全部核销":1==e.row.chargeOffStatus?"部分已核销":"未核销")}},{title:"操作",align:"center",key:"chargeOffStatus",width:100,render:function(e,a){return 0==a.row.chargeOffStatus?e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.delOrderNum=a.row.refundBillNo,t.delBillType=a.row.billType,t.deleteModal=!0}}},"删除")]):""}}],columns1:[{title:"序号",align:"center",width:62,render:function(t,e){return e.row.addup?t("div","小计"):t("div",e.index+1)}},{title:"收货单号",key:"receiptOrderNo",align:"center",width:200},{title:"门店名称",key:"storeName",align:"center",width:200},{title:"收货时间",key:"receiptTime",align:"center",width:150,render:function(e,a){return e("div",a.row.receiptTime?t.timestampToTime(a.row.receiptTime):"")}},{title:"应收款",align:"center",key:"receiptPrice",width:100,render:function(t,e){return t("div",e.row.receiptPrice?Number(e.row.receiptPrice).toFixed(2):"0.00")}},{title:"剩余应收款",align:"center",key:"restPrice",width:100,render:function(e,a){a.row.addup&&(t.UpRestPrice=Number(a.row.receiptPrice)-Number(a.row.chargeOffAmount));var n=Number(a.row.receiptPrice)-Number(a.row.chargeOffAmount);return e("div",n?n.toFixed(2):"0.00")}},{title:"订单编号",align:"center",key:"originalOrderNo",width:200},{title:"签收备注",align:"center",key:"note",ellipsis:!0,tooltip:!0,width:120,render:function(t,e){return e.row.addup?t():t("Tooltip",{props:{placement:"top",offset:0,transfer:!0}},[e.row.note,t("div",{slot:"content",style:{whiteSpace:"normal",wordBreak:"break-all"}},e.row.note)])}},{title:"本次核销金额",align:"center",key:"advanceFee",width:120,render:function(e,a){var n=t;if(a.row.addup){for(var r=0,i=0;i<a.index;i++)r+=Number(t.data1[i].advanceFee);return t.data1[a.index].advanceFee=r,e("div",r.toFixed(2))}var o=0,d=(Number(a.row.receiptPrice)-Number(a.row.chargeOffAmount)).toFixed(2);if(0==a.index)n.data_allInThis=n.data_difference+n.data_KAthisSubtraction,console.log(n.data_allInThis),n.surplusDifference=0,o=n.data_allInThis.toFixed(2)-Number(d)>=0?d:n.data_allInThis;else{for(var u=0,l=0;l<a.index;l++)u+=Number(n.data1_currentNumArr[l].currentNum);o=n.data_allInThis.toFixed(2)-u-Number(d)>=0?d:n.data_allInThis-u>0?n.data_allInThis-u:0}return t.advanceFeeArr[a.index]=o,t.data1[a.index].advanceFee=Number(o).toFixed(2),e("div",Number(o).toFixed(2))}},{title:"已核销金额",align:"center",key:"chargeOffAmount",width:100,render:function(t,e){return t("div",e.row.chargeOffAmount?Number(e.row.chargeOffAmount).toFixed(2):"0.00")}},{title:"状态",align:"center",key:"chargeOffStatus",width:100,render:function(t,e){return e.row.addup?"":t("div",2==e.row.chargeOffStatus?"全部核销":1==e.row.chargeOffStatus?"部分已核销":"未核销")}},{title:"操作",align:"center",key:"chargeOffStatus",width:100,render:function(e,a){return 0==a.row.chargeOffStatus?e("div",[e("Button",{props:{type:"primary",size:"small"},on:{click:function(){t.delOrderNum=a.row.receiptOrderNo,t.delBillType="",t.deleteModal=!0}}},"删除")]):"--"}}],data:[],data1:[],formItem:[{value:"",name:"请选择"},{value:1,name:"银行卡"},{value:2,name:"支付宝"},{value:3,name:"微信"},{value:4,name:"现金"},{value:5,name:"其他"}],status:["未核销","部分已核销","已核销"],result:{openTicketName:"",receiptBillNo:"",createTime:"",estimatedDate:"",status:0,type:0},UpRestPrice:0,data_price:0,data_availablePrice:0,data_KAthisSubtraction:0,data_difference:0,surplusDifference:0,advanceFeeAconumt:0,compensatingAmount:0,refundAmount:0,paymentPrice:0,totalStr:"",data_allInThis:0,data1_currentNumArr:[]}},mounted:function(){this.detail()},methods:{detail:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.traderManage.flowManage.caseMangage.detailUrl,data:u.default.stringify({receiptBillNo:this.$route.query.id})}).then(function(e){if("200"==e.data.code){if(t.result=e.data.result.vo,t.result.type||(t.result.type=4),t.result.createTime=t.timestampToTime(t.result.createTime),t.result.estimatedDate=t.timestampToTime(t.result.estimatedDate),t.data1=e.data.result.rrLists,e.data.result.rrLists.length>=1){var a=0,n=0,r=0,i=0,o=0,d=0,u=0;for(var l in t.data1){t.data1[l].advanceFeeAmount=0,a+=Number(t.data1[l].receiptPrice),n+=Number(t.data1[l].advanceFee),r+=Number(t.data1[l].tailChargeOffAmount),i+=Number(t.data1[l].compensatingAmount),o+=Number(t.data1[l].refundAmount),d+=Number(t.data1[l].paymentPrice),u+=Number(t.data1[l].chargeOffAmount);var c=Number(t.data1[l].receiptPrice)-Number(t.data1[l].chargeOffAmount);t.data1_currentNumArr.push({currentNum:c,compensatingAmount:i,refundAmount:o,paymentPrice:d,tailChargeOffAmount:r})}t.data1.push({addup:1,receiptPrice:a,advanceFee:n,tailChargeOffAmount:r,compensatingAmount:i,refundAmount:o,paymentPrice:d,chargeOffAmount:u})}if(t.data=e.data.result.reList,t.data.length>=1){for(var s in t.data)"收款单"==t.data[s].billType||"预收单"==t.data[s].billType?t.data[s].KAthisSubtraction=0:t.data[s].KAthisSubtraction=t.data[s].restAmount,t.data_price+=Number(t.data[s].refundAmount),t.data_availablePrice+=Number(t.data[s].restAmount),t.data_KAthisSubtraction+=Number(t.data[s].KAthisSubtraction),t.data[s].restAmoudifferencent=0,t.data_difference+=Number(t.data[s].restAmoudifferencent);t.refundAmount=t.data_price,t.data.push({addup:1,refundAmount:t.data_price,restAmount:t.data_availablePrice,KAthisSubtraction:t.data_KAthisSubtraction,restAmoudifferencent:t.data_difference})}t.getAmount(),t.advanceFeeAconumt=(Number(t.data[t.data.length-1].KAthisSubtraction)+Number(t.data[t.data.length-1].restAmoudifferencent)).toFixed(2)}}).catch(function(t){console.log("失败信息：",t)})},getTotalStr:function(){var t=this,e=t.data1[t.data1.length-1].receiptPrice?Number(t.data1[t.data1.length-1].receiptPrice).toFixed(2):"0.00",a=t.UpRestPrice?Number(t.UpRestPrice).toFixed(2):0,n=0,r=t.data[t.data.length-1].restAmoudifferencent?Number(t.data[t.data.length-1].restAmoudifferencent).toFixed(2):0,i=0,o=0,d=t.data[0].KAthisSubtraction?Number(t.data[0].KAthisSubtraction).toFixed(2):0,u=t.data1[t.data1.length-1].advanceFee?Number(t.data1[t.data1.length-1].advanceFee).toFixed(2):0;for(var l in t.data)switch(t.data[l].billType){case"退货单":o+=t.data[l].KAthisSubtraction?Number(t.data[l].KAthisSubtraction):0;break;case"费用单":i+=t.data[l].KAthisSubtraction?Number(t.data[l].KAthisSubtraction):0;break;case"预收单":n+=t.data[l].KAthisSubtraction?Number(t.data[l].KAthisSubtraction):0}t.totalStr=e+","+a+","+Number(n).toFixed(2)+","+r+","+Number(i).toFixed(2)+","+Number(o).toFixed(2)+","+d+","+u},KAChargeOffSuccess:function(){var t={advanceFeeAconumt:this.advanceFeeAconumt,compensatingAmount:this.compensatingAmount,refundAmount:this.refundAmount,paymentPrice:this.paymentPrice,difference:this.data_difference},e=this.computeList(this.advanceFeeArr,t),a=this,n=a.UpRestPrice.toFixed(2),r=(Number(a.data[a.data.length-1].KAthisSubtraction)+Number(a.data[a.data.length-1].restAmoudifferencent)).toFixed(2);if(Number(n)!=Number(r))return void this.$Message.info("现金单，核销金额之和与尾差核销之和等于剩余应收款之和！");var o=[];for(var d in a.data)a.data[d].addup||(0==d?o.push({billType:a.data[d].billType,refundBillNo:a.data[d].refundBillNo,businessTime:a.data[d].refundTime?a.data[d].refundTime:"",thissubtraction:a.data[d].KAthisSubtraction?a.data[d].KAthisSubtraction:0,difference:a.data[d].restAmoudifferencent?Number(a.data[d].restAmoudifferencent):0,note:a.data[d].refundReason?a.data[d].refundReason:"",availablePrice:a.data[d].restAmount?a.data[d].restAmount:0}):o.push({billType:a.data[d].billType,refundBillNo:a.data[d].refundBillNo,thissubtraction:a.data[d].KAthisSubtraction?a.data[d].KAthisSubtraction:0,availablePrice:a.data[d].restAmount?a.data[d].restAmount:0}));a.getTotalStr(),a.getAmount();var l=null,c={paymentPrice:a.paymentPrice.toFixed(2),advanceFeeAmount:a.advanceFeeAconumt.toFixed(2),compensatingAmount:a.compensatingAmount.toFixed(2),refundAmount:a.refundAmount.toFixed(2)},s=0;for(var p in a.data1)if(!a.data1[p].addup){s=Number(a.data1[p].advanceFee)-Number(a.data1[p].tailChargeOffAmount),l=c;for(var m in l){if(!(Number(s)-Number(l[m])>0)){a.data1[p][m]=s,l[m]=l[m]-s;break}s-=l[m],a.data1[p][m]=l[m],delete c[m]}}var f=[];for(var h in a.data1)a.data1[h].addup||f.push({receiptOrderNo:a.data1[h].receiptOrderNo,restPrice:(Number(a.data1[h].receiptPrice).toFixed(2)-Number(a.data1[h].chargeOffAmount).toFixed(2)).toFixed(2),advanceFeeAmount:e[h].advanceFeeAconumt?Number(e[h].advanceFeeAconumt).toFixed(2):0,compensatingNote:a.data1[h].compensatingNote,tailChargeOffAmount:e[h].difference?Number(e[h].difference).toFixed(2):0,compensatingAmount:e[h].compensatingAmount?Number(e[h].compensatingAmount).toFixed(2):0,refundAmount:e[h].refundAmount?Number(e[h].refundAmount).toFixed(2):0,paymentPrice:e[h].paymentPrice?Number(e[h].paymentPrice).toFixed(2):0,currentChargeOffPrice:Number(a.data1[h].advanceFee).toFixed(2),receiptPrice:a.data1[h].receiptPrice?a.data1[h].receiptPrice.toFixed(2):0});this.$util.ajax({method:"post",scriptCharset:"utf-8",url:a.$util.apiConfig.traderManage.flowManage.caseMangage.KAChargeOffSuccess,data:u.default.stringify({form:(0,i.default)({receiptBillNo:a.$route.query.id,type:a.result.type}),receipt:(0,i.default)(f),refund:(0,i.default)(o),totalStr:a.totalStr,openTicketName:a.result.openTicketName,estimatedDate:a.paramsTime,customizeClientId:a.result.customizeClientId,account:a.account})}).then(function(t){"success"==t.data.flag?a.$Modal.success({title:"提示",content:"此次核销成功",onOk:function(){a.$route.query.receiptType?a.$router.push({name:"receipt-manage"}):a.$router.push({name:"case-management"})}}):a.$Modal.error({title:"提示",content:"核销失败"})}).catch(function(t){console.log("失败信息：",t)})},handelDel:function(){var t=this,e=this;this.delLoading=!0,this.$util.ajax({dataType:"text",method:"post",url:e.$util.apiConfig.traderManage.flowManage.queryReceiptBill.delect,data:u.default.stringify({orderNum:this.delOrderNum,receiptBillNo:e.$route.query.id,billType:this.delBillType})}).then(function(a){"200"==a.data.code?"1"==a.data.result?e.$Modal.success({content:"明细删除成功,对账单已删除！",onOk:function(a){t.deleteModal=!1,e.$route.query.receiptType?e.$router.push({name:"receipt-manage"}):e.$router.push({name:"case-management"})}}):e.$Modal.success({content:"删除成功！",onOk:function(t){e.deleteModal=!1,e.detail()}}):e.$Message.info("删除失败！")}).catch(function(t){console.log("失败信息：",t)})},timestampToTime:function(t){var e=new Date(t),a=e.getFullYear()+"-",n=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",r=e.getDate()+" ";e.getHours(),e.getMinutes(),e.getSeconds();return a+n+r},getAmount:function(){this.advanceFeeAconumt=0,this.compensatingAmount=0,this.refundAmount=0,this.paymentPrice=0;for(var t in this.data)"收款单"==this.data[t].billType?this.paymentPrice+=Number(this.data[t].KAthisSubtraction):"退货单"==this.data[t].billType?this.refundAmount+=Number(this.data[t].KAthisSubtraction):"费用单"==this.data[t].billType?this.compensatingAmount+=Number(this.data[t].KAthisSubtraction):"预收单"==this.data[t].billType&&(this.advanceFeeAconumt+=Number(this.data[t].KAthisSubtraction))},computeList:function(t,e){var a={},n={};for(var r in e)0!=r&&(e[r]>=0?a[r]=e[r]:n[r]=e[r]);for(var i in n)t[0]=t[0]-Number(n[i]);for(var o=[],d=0;d<t.length;d++){var u={idx:d};for(var l in a)if("sum"!=l){if(a[l]-t[d]>0){a[l]=a[l]-t[d],u[l]=t[d];break}t[d]=t[d]-a[l],u[l]=a[l],a[l]=0}o.push(u)}for(var c in n)o[0][c]=n[c];return o}},created:function(){},components:{}}},2490:function(t,e,a){var n=a(2491);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(43)("375297c2",n,!1,{})},2491:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.should-receipt-account {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.should-receipt-account .head {\n  padding: 20px 0;\n}\n.should-receipt-account .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.should-receipt-account .head .head_left #OrderID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #store {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #OrderAccount {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #ReceiptID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #StoresNumber {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #billingName {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .date {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .hl2 {\n  margin-top: 10px;\n}\n.should-receipt-account .head .head_right .query {\n  margin-bottom: 10px;\n}\n.should-receipt-account .table {\n  margin: 1%;\n}\n.should-receipt-account .page {\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2492:function(t,e,a){var n=a(2493);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(43)("6becbb78",n,!1,{})},2493:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.head[data-v-15ca9a7a]{\n    padding: 20px;\n}\n.but[data-v-15ca9a7a]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\ndiv.audit-order-manage[data-v-15ca9a7a]{\n    text-align: left;\n}\n.textR[data-v-15ca9a7a]{\n    text-align: right;\n}\n.audit_title[data-v-15ca9a7a]{\n    margin: 40px 0 12px;\n    height: 45px;\n    line-height: 45px;\n    font-size: 20px;\n    color: #747474;\n    padding-left: 20px;\n    font-weight: bold;\n}\n",""])},2494:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"audit-order-manage",staticStyle:{background:"#fff",padding:"20px"}},[a("Row",{staticClass:"head"},[a("Col",{staticClass:"head_left",attrs:{span:"20"}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"6"}},[t._v("开票名称 :")]),t._v("\n            "+t._s(t.result.openTicketName)+"\n            ")],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"6"}},[t._v("收款类型 :")]),t._v(" "),a("Select",{staticStyle:{width:"100px"},model:{value:t.result.type,callback:function(e){t.$set(t.result,"type",e)},expression:"result.type"}},t._l(t.formItem,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"6"}},[t._v("账户信息 :")]),t._v(" "),a("Input",{staticStyle:{width:"120px"},attrs:{placeholder:"",clearable:"",name:"account"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)],1),t._v(" "),a("Row",{staticStyle:{"padding-top":"30px"}},[a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"6"}},[t._v("创建时间 :")]),t._v("\n            "+t._s(t.result.createTime)+"\n            ")],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"6"}},[t._v("对账单号 :")]),t._v("\n            "+t._s(t.result.receiptBillNo)+"\n            ")],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{attrs:{span:"7"}},[t._v("预计收款日期 :")]),t._v("\n            "+t._s(t.result.estimatedDate)+"\n            ")],1)],1)],1)],1),t._v(" "),a("p",{staticClass:"audit_title"},[t._v("抵减明细（退货单、预收单、费用单）")]),t._v(" "),a("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns,data:t.data}}),t._v(" "),a("p",{staticClass:"audit_title"},[t._v("应收款明细")]),t._v(" "),a("Table",{staticClass:"table",attrs:{loading:t.loading,columns:t.columns1,data:t.data1}}),t._v(" "),a("row",{staticClass:"but",attrs:{id:"noprint"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.KAChargeModal=!0}}},[t._v("应收款核销")])],1),t._v(" "),a("Modal",{attrs:{title:"提示",loading:t.loadingModal},on:{"on-ok":t.KAChargeOffSuccess},model:{value:t.KAChargeModal,callback:function(e){t.KAChargeModal=e},expression:"KAChargeModal"}},[a("p",{staticStyle:{"font-style":"16px"}},[t._v("确定要应收款核销吗？")])]),t._v(" "),a("Modal",{attrs:{title:"取消订单","mask-closable":!1,loading:t.delLoading},on:{"on-ok":t.handelDel},model:{value:t.deleteModal,callback:function(e){t.deleteModal=e},expression:"deleteModal"}},[a("p",{staticStyle:{"font-style":"16px"}},[t._v("确定要删除吗？")])])],1)},r=[];n._withStripped=!0;var i={render:n,staticRenderFns:r};e.default=i},845:function(t,e,a){"use strict";function n(t){l||(a(2490),a(2492))}Object.defineProperty(e,"__esModule",{value:!0});var r=a(1730),i=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);var d=a(2494),u=a.n(d),l=!1,c=a(13),s=n,p=c(i.a,u.a,!1,s,"data-v-15ca9a7a",null);p.options.__file="src/views/trader-manage/flow-manage/case-manage/case-edit.vue",e.default=p.exports}});