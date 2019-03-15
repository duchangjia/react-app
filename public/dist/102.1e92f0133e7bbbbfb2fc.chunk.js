webpackJsonp([102,213],{1747:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(239),i=(a(r),n(601)),o=a(i);e.default={name:"printTemplate",components:{orderTable:o.default},data:function(){var t=this,e=this;return{loading:!1,tableRef:"tableRef",totalCount:0,statusObject:{0:"未启用",1:"启用"},typeObject:{null:"未知",1:"订单打印",2:"订单汇总",3:"出库单打印",4:"出库单汇总打印",5:"调拨单打印"},modelUse:"",useList:[{value:"",label:"全部"},{value:"0",label:"未启用"},{value:"1",label:"启用"}],modelType:"",typeList:[{value:"",label:"全部"},{value:"1",label:"订单打印"},{value:"2",label:"订单汇总"},{value:"3",label:"出库单打印"},{value:"4",label:"出库单汇总打印"},{value:"5",label:"调拨单打印"}],moreThanStartDate:{disabledDate:function(t){return t&&t.valueOf()<e.queryParams.createStartTime}},queryParams:{name:"",createStartTime:"",createEndTime:"",status:"",page:1,rows:10,order:"status desc, create_date desc"},columnsList:[{title:"序号",key:"sortIndex",width:100},{title:"模版名称",key:"templateName",align:"center"},{title:"模版类型",key:"templateType",align:"center",width:200},{title:"创建时间",key:"templateDate",align:"center",width:160},{title:"是否启用",key:"templateState",align:"center",width:200},{title:"操作",key:"templateOperateState",align:"center",width:200,render:function(e,n){var a=t,r=n.row.templateOperateState,i=[];return i=r?[e("Button",{props:{size:"small"},style:{margin:"5px"},on:{click:function(){a.disableTemplate(n.row)}}},"停用"),e("Button",{props:{size:"small"},style:{margin:"5px"},on:{click:function(){a.openEdit(n.row.sortIndex)}}},"修改")]:[e("Button",{props:{size:"small"},style:{margin:"5px"},on:{click:function(){a.enableTemplate(n.row)}}},"启用"),e("Button",{props:{size:"small"},style:{margin:"5px"},on:{click:function(){a.openEdit(n.row.sortIndex)}}},"修改")],e("div",{props:{width:"100px"}},i)}}],tableData:[]}},methods:{formatDate:function(t,e){if(""===t)return"";var n=new Date;if(n.setTime(t),!e)var e="yyyy-MM-DD hh:mm:ss";var a={"M+":n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,"D+":n.getDate()<10?"0"+n.getDate():n.getDate(),"h+":n.getHours()<10?"0"+n.getHours():n.getHours(),"m+":n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),"s+":n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in a)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return e},renderTable:function(t){var e=this;e.tableData=[],t.forEach(function(t){var n={sortIndex:t.id,orderIndex:t.id,templateName:t.name,templateTypeOriginal:t.printType,templateType:e.typeObject[t.printType],templateDate:e.formatDate(t.createDate,"yyyy-MM-DD hh:mm"),templateState:e.statusObject[t.status],templateOperateState:t.status};e.tableData.push(n)})},switchTemplate:function(t,e){var n=this,a=this,r={id:t.orderIndex,status:e,printType:t.templateTypeOriginal};this.loading=!0,a.$util.ajax({method:"post",url:a.$util.apiConfig.traderManage.productManage.printTypeIsUseUrl,data:r}).then(function(r){n.loading=!1;var i=r.data;200===i.code?(console.log(i),a.$Message.info(i.message),a.tableData.forEach(function(n){n.orderIndex===t.orderIndex&&(n.templateOperateState=e,n.templateState=a.statusObject[e])})):(console.log(i),a.$Message.info(i.message),console.log("失败信息：",r))}).catch(function(t){n.loading=!1,console.log("失败信息：",t)})},loadList:function(t){var e=this,n=this;n.queryParams.page="number"==typeof t?t:1;var a={page:n.queryParams.page,rows:10,order:"status desc, create_date desc"};n.queryParams.typePrint=n.modelType,n.queryParams.status=n.modelUse,a.name=n.queryParams.name,a.startCreateTime=n.queryParams.createStartTime?n.formatDate(new Date(n.queryParams.createStartTime).getTime(),"yyyy-MM-DD"):"",a.endCreateTime=n.queryParams.createEndTime?n.formatDate(new Date(n.queryParams.createEndTime).getTime(),"yyyy-MM-DD"):"",a.status=n.queryParams.status,a.printType=n.queryParams.typePrint,""===a.name&&delete a.name,""===a.startCreateTime?delete a.startCreateTime:a.startCreateTime=a.startCreateTime+" 00:00",""===a.endCreateTime?delete a.endCreateTime:a.endCreateTime=a.endCreateTime+" 24:00",""===a.status&&delete a.status,""===a.printType&&delete a.printType,this.loading=!0,n.$util.ajax({method:"post",url:n.$util.apiConfig.traderManage.productManage.printTemplateListUrl,data:a}).then(function(t){e.loading=!1;var a=t.data;200===a.code?(n.totalCount=t.data.result.totalCount,n.renderTable(a.result.records)):console.log("失败信息：",t)}).catch(function(t){e.loading=!1,console.log("失败信息：",t)})},enableTemplate:function(t){this.switchTemplate(t,1),console.log("enableTemplate")},disableTemplate:function(t){this.switchTemplate(t,0),console.log("disableTemplate")},openEdit:function(t){this.$router.push({name:"print-template-operate",query:{id:t}})},openNew:function(){this.$router.push({name:"print-template-operate"})},selectRowTable:function(t){console.log(t)}},mounted:function(){this.loadList(1)}}},2559:function(t,e,n){var a=n(2560);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("560ea437",a,!1,{})},2560:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.print-template {\n  background: #fff;\n}\n.print-template .print-template-option {\n  min-height: 150px;\n  width: 100%;\n}\n.print-template .print-template-option .input-text {\n  width: 180px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.print-template .print-template-option .text-center {\n  text-align: center;\n}\n.print-template .print-template-option .input-select {\n  width: 178px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.print-template .print-template-option .input-date {\n  width: 178px;\n  padding-top: 10px;\n  float: left;\n  padding-bottom: 10px;\n}\n.print-template .print-template-option .middle-line {\n  width: 10px;\n  padding-top: 15px;\n  padding-bottom: 10px;\n  text-align: center;\n  float: left;\n}\n.print-template .page-bar {\n  padding: 10px 0;\n  overflow: hidden;\n}\n.print-template .fr {\n  float: right;\n}\n",""])},2561:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"print-template"},[n("div",{staticClass:"print-template-option"},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{attrs:{span:"2"}},[n("div",{staticClass:"text-center"},[t._v("\n                    模版名称：\n                ")])]),t._v(" "),n("Col",{attrs:{span:"4"}},[n("div",{staticClass:"input-text"},[n("Input",{attrs:{name:"name"},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1)]),t._v(" "),n("Col",{attrs:{span:"2"}},[n("div",{staticClass:"text-center"},[t._v("\n                    模版类型：\n                ")])]),t._v(" "),n("Col",{attrs:{span:"4"}},[n("div",{staticClass:"input-select"},[n("Select",{attrs:{name:"itemStatus"},model:{value:t.modelType,callback:function(e){t.modelType=e},expression:"modelType"}},t._l(t.typeList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)]),t._v(" "),n("Col",{attrs:{span:"2"}},[n("div",{staticClass:"text-center"},[t._v("\n                    是否启用：\n                ")])]),t._v(" "),n("Col",{attrs:{span:"4"}},[n("div",{staticClass:"input-select"},[n("Select",{attrs:{name:"itemStatus"},model:{value:t.modelUse,callback:function(e){t.modelUse=e},expression:"modelUse"}},t._l(t.useList,function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)]),t._v(" "),n("Col",{attrs:{span:"2"}}),t._v(" "),n("Col",{attrs:{span:"4"}})],1),t._v(" "),n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{attrs:{span:"2"}},[n("div",{staticClass:"text-center"},[t._v("\n                    创建时间：\n                ")])]),t._v(" "),n("Col",{attrs:{span:"12"}},[n("div",{staticClass:"input-date"},[n("DatePicker",{attrs:{type:"date",name:"createStartTime",placeholder:"开始时间"},model:{value:t.queryParams.createStartTime,callback:function(e){t.$set(t.queryParams,"createStartTime",e)},expression:"queryParams.createStartTime"}})],1),t._v(" "),n("div",{staticClass:"middle-line"},[n("i",{staticClass:"demo-icons"},[t._v("-")])]),t._v(" "),n("div",{staticClass:"input-date"},[n("DatePicker",{attrs:{type:"date",name:"createEndTime",placeholder:"截止时间",options:t.moreThanStartDate},model:{value:t.queryParams.createEndTime,callback:function(e){t.$set(t.queryParams,"createEndTime",e)},expression:"queryParams.createEndTime"}})],1)]),t._v(" "),n("Col",{attrs:{span:"4"}}),t._v(" "),n("Col",{attrs:{span:"2"}}),t._v(" "),n("Col",{attrs:{span:"2"}},[n("Button",{on:{click:t.openNew}},[t._v("新增")])],1),t._v(" "),n("Col",{attrs:{span:"2"}},[n("Button",{on:{click:t.loadList}},[t._v("查询")])],1)],1)],1),t._v(" "),n("Table",{attrs:{data:t.tableData,columns:t.columnsList,loading:t.loading},on:{"on-selection-change":t.selectRowTable}}),t._v(" "),n("div",{staticClass:"page-bar"},[n("Page",{staticClass:"fr",attrs:{total:t.totalCount,current:t.queryParams.page,"show-total":"","show-elevator":""},on:{"on-change":t.loadList}})],1)],1)},r=[];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.default=i},601:function(t,e,n){"use strict";function a(t){p||n(900)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(891),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var l=n(902),s=n.n(l),p=!1,d=n(13),c=a,m=d(i.a,s.a,!1,c,null,null);m.options.__file="src/views/tables/components/orderTable.vue",e.default=m.exports},859:function(t,e,n){"use strict";function a(t){p||n(2559)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1747),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var l=n(2561),s=n.n(l),p=!1,d=n(13),c=a,m=d(i.a,s.a,!1,c,null,null);m.options.__file="src/views/trader-manage/information-manage/print-template-manage.vue",e.default=m.exports},891:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,n){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},n.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},900:function(t,e,n){var a=n(901);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("296919d0",a,!1,{})},901:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},r=[];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.default=i}});