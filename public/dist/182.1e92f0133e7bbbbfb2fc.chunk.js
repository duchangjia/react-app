webpackJsonp([182],{1742:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(146),n=a(i),o=r(241),s=a(o),l=r(242),c=a(l),u=r(898),d=r(239);t.default={data:function(){var e=this;return{loading:!1,query:{startTime:"",endTime:"",chargeOffStatus:3,receiptBillNo:"",receiptOrderNo:"",storeName:"",originalOrderNo:"",operateName:"",page:1,row:10},moreThanStartDate:{disabledDate:function(t){return t&&t.valueOf()<e.query.startTime}},tableColumns:[{title:"序号",width:75,align:"center",render:function(e,t){return"小计"==t.row.xuhao||"总计"==t.row.xuhao?e("div",t.row.xuhao):e("div",t.index+1)}},{title:"对账单创建日期",align:"center",key:"expectedPaybackTime",width:100},{title:"收货单号",key:"receiptOrderNo",align:"center",width:200,render:function(t,r){return t("span",{attrs:{style:"color:#38a8d9;cursor:pointer;"},on:{click:function(t){return e.showReceiptDetail(r.row.receiptOrderNo)}}},r.row.receiptOrderNo)}},{title:"收货时间",key:"receiptTime",align:"center",width:120,render:function(e,t){var r="",a=t.row.receiptTime;return a&&null!==a&&(r=(0,u.formatDate)(new Date(parseInt(a)),"yyyy-MM-DD")),e("span",r)}},{title:"对账单号",key:"receiptBillNo",align:"center",width:150},{title:"核销时间",align:"center",key:"chargeOffTime",width:120,render:function(e,t){var r="",a=t.row.chargeOffTime;return a&&null!==a&&(r=(0,u.formatDate)(new Date(parseInt(a)),"yyyy-MM-DD")),e("span",r)}},{title:"应收款",align:"center",key:"receiptPrice",width:120,render:function(t,r){return t("span",e.fixedNum(r.row.receiptPrice))}},{title:"订单编号",align:"center",key:"originalOrderNo",width:150,render:function(t,r){return t("span",{attrs:{style:"color:#38a8d9;cursor:pointer;",title:"查看订单详情"},on:{click:function(t){return e.$router.push({name:"order-detail-new",query:{orderId:r.row.originalOrderNo}})}}},r.row.originalOrderNo)}},{title:"门店编码",align:"center",key:"storeCode",width:120},{title:"门店名称",align:"center",key:"storeName",width:120},{title:"订单类型",align:"center",key:"orderSource",width:120,render:function(e,t){var r="非法订单",a=t.row.orderSource;if("总计"===t.row.orderSource)return e("span","");switch(parseInt(a)){case 1:r="手工订单";break;case 2:r="SFA订单";break;case 3:r="O2O订单";case 4:r="车销订单";break;case 5:r="代配送订单";break;default:r="非法订单"}return e("span",r)}},{title:"预收抵减",align:"center",key:"advanceFee",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.advanceFee))}},{title:"尾差核销",align:"center",key:"tailChargeOffAmount",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.tailChargeOffAmount))}},{title:"费用抵减",align:"center",key:"compensatingAmount",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.compensatingAmount))}},{title:"抵减说明",align:"center",key:"compensatingNote",width:120},{title:"退货抵减",align:"center",key:"refundAmount",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.refundAmount))}},{title:"实收金额",align:"center",key:"paymentPrice",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.paymentPrice))}},{title:"核销金额",align:"center",key:"chargeOffAmount",width:100,render:function(t,r){return t("span",e.fixedNum(r.row.chargeOffAmount))}},{title:"业务员",align:"center",key:"operateName",width:120},{title:"状态",align:"center",key:"chargeOffStatus",width:120,render:function(e,t){var r="",a=t.row.chargeOffStatus;switch(parseInt(a)){case 0:r="未核销";break;case 1:r="部分已核销";break;case 2:r="全部已核销"}return e("span",r)}}],tableData:[],total:0,backoutModal:{visible:!1,title:"撤销",text:"",params:{}},backoutModal2Visible:!1,exportLimit:!1,exportLimitText:"",exportLimitTimer:null,receiptDetailModalVisible:!1,receiptDetailData:[],receiptDetailColumns:[{title:"序号",align:"center",key:"xuhao",width:60,render:function(e,t){return e("span",t.index+1)}},{title:"销售编码",align:"center",key:"materialCode79",width:150},{title:"商品描述",align:"center",width:200,key:"materialName79"},{title:"计发货整件",align:"center",render:function(e,t){var r=t.row;return e("span",r.submitByEa?0==r.transformRule?0:parseInt(r.submitByEa/r.transformRule):"0")}},{title:"计发货散个",align:"center",render:function(e,t){var r=t.row;return e("span",r.submitByEa?0==r.transformRule?r.submitByEa:(r.submitByEa%r.transformRule).toFixed(0):"0")}},{title:"发货整件",align:"center",render:function(e,t){var r=t.row;return e("span",r.deliveryByEa?0==r.transformRule?0:parseInt(r.deliveryByEa/r.transformRule):"0")}},{title:"发货散个",align:"center",render:function(e,t){var r=t.row;return e("span",r.deliveryByEa?0==r.transformRule?0:parseInt(r.deliveryByEa%r.transformRule).toFixed(0):"0")}},{title:"签收整件",align:"center",render:function(e,t){var r=t.row;return e("span",r.receiptByEa?0==r.transformRule?0:parseInt(r.receiptByEa/r.transformRule):"0")}},{title:"签收散个",align:"center",render:function(e,t){var r=t.row;return e("span",r.receiptByEa?0==r.transformRule?0:parseInt(r.receiptByEa%r.transformRule).toFixed(0):"0")}},{title:"单价",align:"center",render:function(e,t){return e("span",t.row.eaBasePrice?t.row.eaBasePrice.toFixed(2):0)}},{title:"吨位",align:"center",render:function(e,t){return e("span",t.row.totalWeight?t.row.totalWeight.toFixed(2):0)}},{title:"体积",align:"center",render:function(e,t){return e("span",t.row.eaVolume?t.row.eaVolume:0)}},{title:"总金额",align:"center",render:function(e,t){var r=t.row;return e("span",r.receiptByEa?(r.receiptByEa*r.eaBasePrice).toFixed(2):"0")}}],receiptDetailInfo:{receiptTime:"",receiptUser:"",note:""}}},mounted:function(){this.query.endTime=new Date;var e=new Date;e.setMonth(e.getMonth()-1),this.query.startTime=e,this.refreshExportLimit(),this.queryData()},beforeDestroy:function(){clearTimeout(this.exportLimitTimer)},computed:{},methods:{refreshExportLimit:function(){var e=this;clearTimeout(this.exportLimitTimer);var t=localStorage["flow-manage-should-receipt-list-export-timeset-limit"],r=(new Date).getTime();r<=t?(this.exportLimit=!0,this.exportLimitText=Math.ceil((parseInt(t,10)-r)/1e3),this.exportLimitTimer=setTimeout(function(t){return e.refreshExportLimit()},1e3)):this.exportLimit=!1},exportData:function(){var e=this;this.$Modal.confirm({title:"导出",content:"<p>是否确认导出？</p>",onOk:function(){var t=localStorage["flow-manage-should-receipt-list-export-timeset-limit"];if(t&&(new Date).getTime()<=t)return void e.$Message.error("时间未解锁");localStorage["flow-manage-should-receipt-list-export-timeset-limit"]=(new Date).getTime()+6e4,document.getElementById("form-export").method="post",document.getElementById("form-export").action=e.$util.baseUrl+"/orderCenter/receiptOrderFacade/receiptOrderExport",document.getElementById("form-export").submit(),e.refreshExportLimit()}})},backout:function(e){this.backoutModal.visible=!0,this.backoutModal.text="你确定要回退销售订单【"+e.row.originalOrderNo+"】吗?",this.backoutModal.params=e.row},confrimOnce:function(){this.backoutModal2Visible=!0},confrimTwice:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(){var t,r,a,i,n,o,l,c,u;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,r=this.backoutModal.params,a=r.orderSource,i=r.receiptBillNo,n=r.originalOrderNo,o=r.id,l=void 0===o?receiptId:o,4==a){e.next=5;break}return this.$Modal.warning({title:"提示",content:"不是车销订单不能回退订单操作！"}),e.abrupt("return");case 5:if(null===i){e.next=9;break}if(""===i){e.next=9;break}return this.$Modal.warning({title:"提示",content:"已创建对账单号，不能回退车销订单!"}),e.abrupt("return");case 9:return e.prev=9,e.next=12,this.$ajax({url:t.$util.apiConfig.traderManage.flowManage.shouldReceiptList.undo,method:"POST",data:{originalOrderNo:n,id:l}});case 12:c=e.sent,u=c.data,200==u.code?(this.queryData(),this.$Message.success("销售单号撤销了!")):this.$Message.error("销售单号撤销失败!"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),this.$Message.error("销售单号撤销失败!");case 20:case"end":return e.stop()}},e,this,[[9,17]])}));return e}(),handleSearchBtnclick:function(){this.query.page=1,this.queryData()},queryData:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(){var t,r,a,i,o,l,c,p,m,f,h,g,y,v,b;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,r=(0,n.default)({},this.query,{endTime:this.query.endTime?(0,u.formatDate)(this.query.endTime,"yyyy-MM-DD"):"",startTime:this.query.startTime?(0,u.formatDate)(this.query.startTime,"yyyy-MM-DD"):""}),this.tableData=[],e.prev=3,a={},i=this,this.loading=!0,e.next=9,this.$ajax({url:t.$util.apiConfig.traderManage.flowManage.shouldReceiptList.list,method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded"},data:d.stringify(r)});case 9:o=e.sent,l=o.data,this.loading=!1,200==l.code?(c=l.result.pager,this.total=c.totalCount,c.records instanceof Array&&(this.tableData=c.records.concat(),p=l.result.vo,m=0,f=0,h=0,g=0,y=0,v=0,b=0,this.tableData.forEach(function(e){m+=e.receiptPrice?Number(Number(e.receiptPrice).toFixed(2)):0,f+=e.advanceFee?Number(Number(e.advanceFee).toFixed(2)):0,h+=e.tailChargeOffAmount?Number(Number(e.tailChargeOffAmount).toFixed(2)):0,g+=e.compensatingAmount?Number(Number(e.compensatingAmount).toFixed(2)):0,y+=e.refundAmount?Number(Number(e.refundAmount).toFixed(2)):0,v+=e.paymentPrice?Number(Number(e.paymentPrice).toFixed(2)):0,b+=e.chargeOffAmount?Number(Number(e.chargeOffAmount).toFixed(2)):0}),this.tableData.push({xuhao:"小计",orderSource:"总计",receiptPrice:m,advanceFee:f,tailChargeOffAmount:h,compensatingAmount:g,refundAmount:y,paymentPrice:v,chargeOffAmount:b}),this.tableData.push({xuhao:"总计",orderSource:"总计",receiptPrice:p.receiptPrice,advanceFee:p.advanceFee,tailChargeOffAmount:p.tailChargeOffAmount,compensatingAmount:p.compensatingAmount,refundAmount:p.refundAmount,paymentPrice:p.paymentPrice,chargeOffAmount:p.chargeOffAmount}))):this.$Message.error("应收款明细列表获取失败"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),this.loading=!1,this.$Message.error("应收款明细列表获取失败");case 19:case"end":return e.stop()}},e,this,[[3,15]])}));return e}(),showReceiptDetail:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(s.default.mark(function e(t){var r,a,i,n,o,l,c,d;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={orderNumber:t,_:(new Date).getTime()},a=this,this.receiptDetailData=[],e.prev=3,i=void 0,e.next=7,this.$ajax(a.$util.apiConfig.traderManage.flowManage.shouldReceiptList.receiptOrderProduct,{params:r});case 7:n=e.sent,i=n.data,200==i.errCode?(this.receiptDetailData=i.data,o=i.receiptOrder,l=o.receiptTime,c=o.receiptUser,d=o.note,l=l?(0,u.formatDate)(new Date(l),"yyyy-MM-DD"):"",this.receiptDetailInfo={receiptTime:l,receiptUser:c||"",note:d||""},this.receiptDetailModalVisible=!0):this.$Message.error("收货单详情获取失败"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),this.$Message.error("收货单详情获取失败");case 16:case"end":return e.stop()}},e,this,[[3,12]])}));return e}(),fixedNum:function(e){return isNaN(Number(e))||(e=Number(e).toFixed(2)),e}}}},2544:function(e,t,r){var a=r(2545);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("5de31ac2",a,!1,{})},2545:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.flr[data-v-4130cd2a] {\n  float: right;\n}\n.custom-btn[data-v-4130cd2a] {\n  width: 120px;\n}\n.mt20[data-v-4130cd2a] {\n  margin-top: 20px;\n}\n",""])},2546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",[r("Form",{attrs:{"label-width":80,id:"form-export"}},[r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"text",name:"page"},domProps:{value:e.query.page}}),e._v(" "),r("Row",[r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"开始时间"}},[r("DatePicker",{attrs:{type:"date",name:"startTime",placeholder:"开始时间"},model:{value:e.query.startTime,callback:function(t){e.$set(e.query,"startTime",t)},expression:"query.startTime"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"截止时间"}},[r("DatePicker",{attrs:{type:"date",placeholder:"截止时间",options:e.moreThanStartDate,name:"endTime"},model:{value:e.query.endTime,callback:function(t){e.$set(e.query,"endTime",t)},expression:"query.endTime"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"状态"}},[r("Select",{attrs:{name:"chargeOffStatus",placement:"top"},model:{value:e.query.chargeOffStatus,callback:function(t){e.$set(e.query,"chargeOffStatus",t)},expression:"query.chargeOffStatus"}},[r("Option",{attrs:{value:3}},[e._v("全部")]),e._v(" "),r("Option",{attrs:{value:0}},[e._v("未核销")]),e._v(" "),r("Option",{attrs:{value:1}},[e._v("部分已核销")]),e._v(" "),r("Option",{attrs:{value:2}},[e._v("全部已核销")])],1)],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("Button",{staticClass:"flr custom-btn",attrs:{type:"primary",disabled:e.exportLimit},on:{click:function(t){e.exportData()}}},[r("span",[e._v("导  出")]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.exportLimit,expression:"exportLimit"}]},[e._v("(禁用 "+e._s(e.exportLimitText)+" s)")])])],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"对账单号"}},[r("Input",{attrs:{placeholder:"对账单号",name:"receiptBillNo",clearable:""},model:{value:e.query.receiptBillNo,callback:function(t){e.$set(e.query,"receiptBillNo",t)},expression:"query.receiptBillNo"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"收货单号"}},[r("Input",{attrs:{placeholder:"收货单号",clearable:"",name:"receiptOrderNo"},model:{value:e.query.receiptOrderNo,callback:function(t){e.$set(e.query,"receiptOrderNo",t)},expression:"query.receiptOrderNo"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"门店名称"}},[r("Input",{attrs:{placeholder:"门店名称",clearable:"",name:"storeName"},model:{value:e.query.storeName,callback:function(t){e.$set(e.query,"storeName",t)},expression:"query.storeName"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("Button",{staticClass:"flr custom-btn",attrs:{type:"primary"},on:{click:function(t){e.handleSearchBtnclick()}}},[e._v("查  询")])],1)],1),e._v(" "),r("Row",[r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"订单编号"}},[r("Input",{attrs:{placeholder:"订单编号",clearable:"",name:"originalOrderNo"},model:{value:e.query.originalOrderNo,callback:function(t){e.$set(e.query,"originalOrderNo",t)},expression:"query.originalOrderNo"}})],1)],1),e._v(" "),r("Col",{attrs:{span:"6"}},[r("FormItem",{attrs:{label:"业务员"}},[r("Input",{attrs:{placeholder:"业务员",clearable:"",name:"operateName"},model:{value:e.query.operateName,callback:function(t){e.$set(e.query,"operateName",t)},expression:"query.operateName"}})],1)],1)],1),e._v(" "),r("Row",[r("Table",{attrs:{columns:e.tableColumns,data:e.tableData,loading:e.loading}})],1),e._v(" "),r("Row",{staticClass:"mt20"},[r("Page",{staticClass:"flr",attrs:{current:e.query.page,total:e.total,"show-elevator":""},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryData}})],1)],1),e._v(" "),r("Modal",{attrs:{title:e.backoutModal.title},on:{"on-ok":e.confrimOnce},model:{value:e.backoutModal.visible,callback:function(t){e.$set(e.backoutModal,"visible",t)},expression:"backoutModal.visible"}},[r("p",[e._v(e._s(e.backoutModal.text))])]),e._v(" "),r("Modal",{attrs:{title:"提示"},on:{"on-ok":e.confrimTwice},model:{value:e.backoutModal2Visible,callback:function(t){e.backoutModal2Visible=t},expression:"backoutModal2Visible"}},[r("p",[e._v("撤单将删除此单相关的出库单、签收单、回滚库存，请再次确认是否撤单！！")])]),e._v(" "),r("Modal",{attrs:{title:"收货单详情",width:"1200"},model:{value:e.receiptDetailModalVisible,callback:function(t){e.receiptDetailModalVisible=t},expression:"receiptDetailModalVisible"}},[r("div",[r("Table",{attrs:{data:e.receiptDetailData,columns:e.receiptDetailColumns}}),e._v(" "),r("Row",{staticStyle:{"margin-top":"10px","font-size":"14px"}},[r("Col",{attrs:{span:"6"}},[r("span",[e._v("签收时间: ")]),e._v(" "),r("span",[e._v(e._s(e.receiptDetailInfo.receiptTime))])]),e._v(" "),r("Col",{attrs:{span:"6"}},[r("span",[e._v("签收人: ")]),e._v(" "),r("span",[e._v(e._s(e.receiptDetailInfo.receiptUser))])]),e._v(" "),r("Col",{attrs:{span:"12"}},[e._v("\n              签收备注:"+e._s(e.receiptDetailInfo.note)+"\n          ")])],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:function(t){e.receiptDetailModalVisible=!1}}},[e._v("关闭")])],1)])],1)},i=[];a._withStripped=!0;var n={render:a,staticRenderFns:i};t.default=n},855:function(e,t,r){"use strict";function a(e){c||r(2544)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1742),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,function(){return i[e]})}(o);var s=r(2546),l=r.n(s),c=!1,u=r(13),d=a,p=u(n.a,l.a,!1,d,"data-v-4130cd2a",null);p.options.__file="src/views/trader-manage/flow-manage/should-receipt-list/should-receipt-list.vue",t.default=p.exports},898:function(e,t,r){"use strict";function a(e,t){if(!t)var t="yyyy-MM-DD hh:mm:ss";var r={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t}function i(e,t){if(!t)var t="yyyy-MM-dd";(e=Number(e))<1e10&&(e*=1e3);var r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in a)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=a,t.timestampToDay=i}});