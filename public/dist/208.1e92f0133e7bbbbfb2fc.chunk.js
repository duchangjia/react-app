webpackJsonp([208],{1731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(239);!function(e){e&&e.__esModule}(a);t.default={data:function(){var e=this;return{totalCount:0,columns:[{title:"序号",key:"xuhao",align:"center",width:70,render:function(e,t){return"小计"==t.row.xuhao||"总计"==t.row.xuhao?e("div",t.row.xuhao):e("div",t.index+1)}},{title:"收货单号",key:"receiptOrderNo",align:"center"},{title:"门店名称",key:"storeName",align:"center"},{title:"收货时间",align:"center",key:"receiptTime",width:150,render:function(t,n){return t("div",n.row.receiptTime?e.timestampToTime(n.row.receiptTime):"")}},{title:"应收款",align:"center",key:"receivable",render:function(e,t){return e("div",t.row.receivable?Number(t.row.receivable).toFixed(2):0)}},{title:"订单编号",align:"center",key:"originalOrderNo"},{title:"状态",align:"center",key:"receiptStatus",render:function(e,t){return e("div",0==t.row.receiptStatus?"未核销":1==t.row.receiptStatus?"部分已核销":2==t.row.receiptStatus?"全部已核销":"")}},{title:"操作",align:"center",key:"handle",render:function(t,n){return"小计"==n.row.xuhao||"总计"==n.row.xuhao||1==n.row.receiptStatus?"":t("div",[t("Button",{props:{type:"primary",size:"small"},on:{click:function(){0==n.row.receiptStatus?e.$router.push({name:"case-edit",query:{id:n.row.receiptBillNo}}):e.$router.push({name:"case-detail",query:{id:n.row.receiptBillNo}})}}},2==n.row.receiptStatus?"查看":0==n.row.receiptStatus?"收款":"查看")])}}],data:[],value:{startTime:"",endTime:"",openTicketName:"",receiptBillNo:"",receiptOrderNo:"",receiptStatus:"",storeName:"",page:{page:1,rows:10}},res:"",typeList:[{value:"",label:"全部"},{value:"0",label:"未核销"},{value:"2",label:"全部已核销"}],listLoading:!1}},mounted:function(){this.query(1)},methods:{timestampToTime:function(e){var t=new Date(e),n=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=t.getDate()+" ";t.getHours(),t.getMinutes(),t.getSeconds();return n+a+r},query:function(e){var t=this;t.listLoading=!0,this.value.page.page=e,this.$util.ajax({method:"post",url:t.$util.apiConfig.traderManage.flowManage.caseMangage.listUrl,data:this.value}).then(function(e){if(t.listLoading=!1,200==e.data.code){if(t.data=[],t.totalCount=0,""==e.data.result.pager.records)return;t.data=e.data.result.pager.records;var n=0;for(var a in t.data)n+=t.data[a].receivable?Number(t.data[a].receivable):0;t.data.push({xuhao:"小计",receivable:n}),t.data.push({xuhao:"总计",receivable:e.data.result.sumLeftAmmount}),t.totalCount=e.data.result.pager.totalCount}else t.$Modal.error({title:"提示",content:e.data.message})}).catch(function(e){t.listLoading=!1,console.log("失败信息：",e)})},getEndTime:function(e){this.value.endTime=e},getStartTime:function(e){this.value.startTime=e}},components:{}}},2495:function(e,t,n){var a=n(2496);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(43)("c2c720e6",a,!1,{})},2496:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.should-receipt-account {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.should-receipt-account .head {\n  padding: 20px 0;\n}\n.should-receipt-account .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.should-receipt-account .head .head_left #OrderID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #store {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #OrderAccount {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #ReceiptID {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #StoresNumber {\n  width: 50%;\n}\n.should-receipt-account .head .head_left #billingName {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .date {\n  width: 50%;\n}\n.should-receipt-account .head .head_left .hl2 {\n  margin-top: 10px;\n}\n.should-receipt-account .head .head_right .query {\n  margin-bottom: 10px;\n}\n.should-receipt-account .table {\n  margin: 1%;\n}\n.should-receipt-account .page {\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"should-receipt-account"},[n("Row",{staticClass:"head"},[n("Col",{staticClass:"head_left",attrs:{span:"21"}},[n("Row",[n("Col",{attrs:{span:"6"}},[e._v("\n            开始时间 :\n            "),n("DatePicker",{staticClass:"date",attrs:{type:"date",value:e.value.startTime,clearabl:""},on:{"on-change":e.getStartTime}})],1),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("\n            截止时间 :\n            "),n("DatePicker",{staticClass:"date",attrs:{type:"date",value:e.value.endTime,clearabl:""},on:{"on-change":e.getEndTime}})],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"store"}},[e._v("      状态 :  ")]),e._v(" "),n("Select",{staticStyle:{width:"130px"},model:{value:e.value.receiptStatus,callback:function(t){e.$set(e.value,"receiptStatus",t)},expression:"value.receiptStatus"}},e._l(e.typeList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"OrderID"}},[e._v("开票名称 :  ")]),n("Input",{attrs:{clearabl:"",id:"OrderID"},model:{value:e.value.openTicketName,callback:function(t){e.$set(e.value,"openTicketName",t)},expression:"value.openTicketName"}})],1)],1),e._v(" "),n("Row",{staticClass:"hl2"},[n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"OrderAccount"}},[e._v("对账单号 :  ")]),n("Input",{attrs:{clearabl:"",id:"OrderAccount"},model:{value:e.value.receiptBillNo,callback:function(t){e.$set(e.value,"receiptBillNo",t)},expression:"value.receiptBillNo"}})],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"ReceiptID"}},[e._v("收货单号 :  ")]),n("Input",{attrs:{clearabl:"",id:"ReceiptID"},model:{value:e.value.receiptOrderNo,callback:function(t){e.$set(e.value,"receiptOrderNo",t)},expression:"value.receiptOrderNo"}})],1),e._v(" "),n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"StoresNumber"}},[e._v("门店名称 :  ")]),n("Input",{attrs:{clearabl:"",id:"StoresNumber"},model:{value:e.value.storeName,callback:function(t){e.$set(e.value,"storeName",t)},expression:"value.storeName"}})],1)],1)],1),e._v(" "),n("Col",{staticClass:"head_right",attrs:{span:"3"}},[n("br"),n("br"),e._v(" "),n("Button",{staticClass:"query",on:{click:function(t){e.query(1)}}},[e._v("查询 ")])],1)],1),e._v(" "),n("Table",{staticClass:"table",attrs:{columns:e.columns,data:e.data,loading:e.listLoading}}),e._v(" "),n("div",{staticClass:"page-bar",staticStyle:{overflow:"hidden"}},[n("Page",{staticStyle:{float:"right"},attrs:{total:e.totalCount,current:e.value.page.page,"show-total":"","show-elevator":""},on:{"on-change":e.query}})],1)],1)},r=[];a._withStripped=!0;var o={render:a,staticRenderFns:r};t.default=o},846:function(e,t,n){"use strict";function a(e){c||n(2495)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1731),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);var l=n(2497),d=n.n(l),c=!1,s=n(13),p=a,u=s(o.a,d.a,!1,p,null,null);u.options.__file="src/views/trader-manage/flow-manage/case-manage/case-list.vue",t.default=u.exports}});