webpackJsonp([103,215],{1010:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=function(t,e,n,a){return e("Button",{props:{type:n.editting?"success":"primary",loading:n.saving,size:"small"},on:{click:function(){if(n.editting){t.edittingStore[a].saving=!0,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore));var e=t.edittingStore[a];e.editting=!1,e.saving=!1,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore)),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-change",t.handleBackdata(t.thisTableData),a)}else{if(n.edittingCell)for(var o in n.edittingCell)n.edittingCell[o]=!1,t.edittingStore[a].edittingCell[o]=!1;t.edittingStore[a].editting=!0,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore))}}}},n.editting?"保存":"编辑")},r=function(t,e,n,a){return e("Poptip",{props:{confirm:!0,title:"您确定要删除这条数据吗?",transfer:!0},style:{marginBottom:"5px"},on:{"on-ok":function(){t.thisTableData.splice(a,1),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-delete",t.handleBackdata(t.thisTableData),a)}}},[e("Button",{style:{margin:"0 5px"},props:{type:"error",placement:"top",size:"small"}},"删除")])},l=function(t,e,n){return t.hoverShow?e("div",{class:{"show-edit-btn":t.hoverShow}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!0,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore))}}})]):e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!0,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore))}}})},s=function(t,e,n){return e("Button",{props:{type:"text",icon:"checkmark"},on:{click:function(e){t.edittingStore[n.index].edittingCell[n.column.key]=!1,t.thisTableData=JSON.parse((0,i.default)(t.edittingStore)),t.$emit("input",t.handleBackdata(t.thisTableData)),t.$emit("on-cell-change",t.handleBackdata(t.thisTableData),n.index,n.column.key)}}})},d=function(t,e,n,a){return e("Input",{props:{type:"text",value:t.edittingStore[n.index][a.key]},on:{"on-change":function(e){var i=a.key;t.edittingStore[n.index][i]=e.target.value}}})};e.default={name:"canEditTable",props:{refs:String,columnsList:Array,value:Array,url:String,editIncell:{type:Boolean,default:!1},hoverShow:{type:Boolean,default:!1}},data:function(){return{columns:[],thisTableData:[],edittingStore:[]}},created:function(){this.init()},methods:{init:function(){var t=this,e=this,n=this.columnsList.filter(function(t){if(t.editable&&!0===t.editable)return t}),a=JSON.parse((0,i.default)(this.value)),u=[];u=a.map(function(e,a){var i=!1;if(t.thisTableData[a])if(t.thisTableData[a].editting)i=!0;else for(var o in t.thisTableData[a].edittingCell)!0===t.thisTableData[a].edittingCell[o]&&(i=!0);if(i)return t.thisTableData[a];t.$set(e,"editting",!1);var r={};return n.forEach(function(t){r[t.key]=!1}),t.$set(e,"edittingCell",r),e}),this.thisTableData=u,this.edittingStore=JSON.parse((0,i.default)(this.thisTableData)),this.columnsList.forEach(function(n){n.editable&&(n.render=function(a,i){var o=t.thisTableData[i.index];return o.editting?a("Input",{props:{type:"text",value:o[n.key]},on:{"on-change":function(t){var n=i.column.key;e.edittingStore[i.index][n]=t.target.value}}}):t.editIncell?a("Row",{props:{type:"flex",align:"middle",justify:"center"}},[a("Col",{props:{span:"22"}},[o.edittingCell[i.column.key]?d(t,a,i,n):a("span",o[n.key])]),a("Col",{props:{span:"2"}},[o.edittingCell[i.column.key]?s(t,a,i):l(t,a,i)])]):a("span",o[n.key])}),n.handle&&(n.render=function(e,a){var i=t.thisTableData[a.index],l=[];return n.handle.forEach(function(n){"edit"===n?l.push(o(t,e,i,a.index)):"delete"===n&&l.push(r(t,e,0,a.index))}),e("div",l)})})},handleBackdata:function(t){var e=JSON.parse((0,i.default)(t));return e.forEach(function(t){delete t.editting,delete t.edittingCell,delete t.saving}),e}},watch:{value:function(t){this.init()}}}},1104:function(t,e,n){var a=n(1105);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("9fdc95ae",a,!1,{})},1105:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},1106:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Table",{ref:t.refs,attrs:{columns:t.columnsList,data:t.thisTableData}})],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},1670:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),o=(a(i),n(606)),r=a(o),l=n(239),s=a(l);e.default={data:function(){var t=this;return{totalCount:1,columns:[{title:"任务编号",align:"center",key:"jobNumber"},{title:"业务员",align:"center",key:"saleman"},{title:"门店数量",align:"center",key:"storeCount"},{title:"预打造数量",align:"center",key:"prefabrication",editable:!0},{title:"精耕打造数量",align:"center",key:"fineBuilding",editable:!0},{title:"开始时间",align:"center",key:"startDate",editable:!0,render:function(e,n){return e("DatePicker",{props:{value:n.row.startDate,type:"date",placeholder:"选择日期",style:"width: 200px",editable:!1},on:{"on-change":function(e){t.data[n.index].startDate=e}}})}},{title:"结束时间",align:"center",key:"endDate",editable:!0,render:function(e,n){return e("DatePicker",{props:{value:n.row.endDate,type:"date",placeholder:"选择日期",style:"width: 200px",editable:!1},on:{"on-change":function(e){t.data[n.index].endDate=e}}})}},{title:"操作",align:"center",key:"handle",handle:["edit","delete"]}],data:[{jobNumber:"201806",saleman:"luban",storeCount:"5",prefabrication:"4",fineBuilding:"4",startDate:"2018.4.6",endDate:"2018.5.6"},{jobNumber:"201806",saleman:"luban",storeCount:"5",prefabrication:"4",fineBuilding:"4",startDate:"2018.4.6",endDate:"2018.5.6"}],oldData:[],saveData:[],value:{jobNumber:"",saleman:"",startDate:"",endDate:""},params:{beginTime:"",endTime:"",id:"",empName:"",page:1}}},mounted:function(){},methods:{getData:function(){var t=this;this.data=[];var e={};e=this.params,this.loading=!0,this.$ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.terminalManagement.list,data:s.default.stringify(e)}).then(function(e){t.loading=!1,t.totalCount=e.data.result.pager.totalCount,e.data.result.pager.records.map(function(e){var n={jobNumber:e.id,saleman:e.empName,storeCount:e.storeCount,prefabrication:1*e.prebuildCount,fineBuilding:1*e.geoponicsCount,startDate:t.formatDate(e.beginTime,"yyyy-MM-DD"),endDate:t.formatDate(e.endTime,"yyyy-MM-DD"),empCode:e.empCode,empId:e.empId};t.data.push(n),t.oldData.push(n),t.saveData.push(n)})}).catch(function(t){console.log("失败信息：",t)})},query:function(){this.params.page=1,this.params.beginTime=this.formatDate(this.value.startDate,"yyyy-MM-DD"),this.params.endTime=this.formatDate(this.value.endDate,"yyyy-MM-DD"),this.params.id=this.value.jobNumber,this.params.empName=this.value.saleman,this.getData()},changePage:function(t){this.params.page=t,this.getData()},changeRow:function(t,e){var n=this,a=this;console.log(this.data),console.log(t),console.log(e);var i=t[e];if(!/^[0-9]*$/.test(i.prefabrication)||i.prefabrication<0||i.prefabrication>200)return this.$Modal.confirm({title:"提示",content:"<p>请输入0-200的整数！</p>"}),a.data[e].prefabrication=a.saveData[e].prefabrication,!1;if(!/^[0-9]*$/.test(i.fineBuilding)||i.fineBuilding<0||i.fineBuilding>200)return this.$Modal.confirm({title:"提示",content:"<p>请输入0-200的整数！</p>"}),a.data[e].fineBuilding=a.saveData[e].fineBuilding,!1;if(isNaN(Date.parse(i.startDate))||isNaN(Date.parse(i.endDate)))return this.$Modal.confirm({title:"提示",content:"<p>时间修改有误，请重新输入</p>"}),a.data[e].startDate=a.saveData[e].startDate,a.data[e].endDate=a.saveData[e].endDate,!1;var o=i.startDate.replace("-","").replace("-",""),r=i.endDate.replace("-","").replace("-","");if(o<19700101||r<19700101)return this.$Modal.confirm({title:"提示",content:"<p>时间不能小于1970-01-01！</p>"}),a.data[e].startDate=a.saveData[e].startDate,a.data[e].endDate=a.saveData[e].endDate,!1;if(r<o)return this.$Modal.confirm({title:"提示",content:"<p>结束时间不能小于开始时间！</p>"}),a.data[e].startDate=a.saveData[e].startDate,a.data[e].endDate=a.saveData[e].endDate,!1;var l={};l.storeStandardTargetId=i.jobNumber,l.prebuildCount=i.prefabrication,l.geoponicsCount=i.fineBuilding,l.beginTime=i.startDate,l.endTime=i.endDate,this.$ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.terminalManagement.updateStore,data:s.default.stringify(l)}).then(function(t){n.$Message.info("保存成功！")}).catch(function(t){console.log("失败信息：",t)})},removes:function(t,e){var n=this,a={};a.id=this.saveData[e].jobNumber,this.$ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.terminalManagement.deleteById,data:s.default.stringify(a)}).then(function(t){n.$Message.info("删除成功！")}).catch(function(t){console.log("失败信息：",t)})},formatDate:function(t,e){if(""===t)return"";var n=new Date;if(n.setTime(t),!e)var e="yyyy-MM-DD hh:mm:ss";var a={"M+":n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,"D+":n.getDate()<10?"0"+n.getDate():n.getDate(),"h+":n.getHours()<10?"0"+n.getHours():n.getHours(),"m+":n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes(),"s+":n.getSeconds()<10?"0"+n.getSeconds():n.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in a)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[i]:("00"+a[i]).substr((""+a[i]).length)));return e},news:function(){this.$router.push({name:"standardization-task-new"})}},components:{canEditTable:r.default},created:function(){this.getData()}}},2275:function(t,e,n){var a=n(2276);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("225cf5b8",a,!1,{})},2276:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.standardization-task {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  text-align: center;\n  padding: 10px 0;\n}\n.standardization-task .head {\n  padding: 20px 0;\n}\n.standardization-task .head .head_left {\n  padding: 10px 0;\n  border-right: 1px dashed #E8E8E8;\n}\n.standardization-task .head .head_left #jobNumber {\n  width: 50%;\n}\n.standardization-task .head .head_left #saleman {\n  width: 50%;\n}\n.standardization-task .head .head_left .date {\n  width: 50%;\n}\n.standardization-task .head .head_right .query {\n  margin-bottom: 10px;\n}\n.standardization-task .tables {\n  margin: 1%;\n}\n.standardization-task .page {\n  margin-top: 10px;\n  text-align: right;\n  margin-right: 1%;\n}\n.ivu-table-row-highlight td,\ntr.ivu-table-row-highlight.ivu-table-row-hover td {\n  background: red;\n  color: #fff;\n}\n",""])},2277:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"standardization-task"},[n("Row",{staticClass:"head"},[n("Row",{staticClass:"task"},[n("Col",{staticStyle:{"font-weight":"600"},attrs:{span:"2"}},[t._v("指定执行人")])],1),t._v(" "),n("Col",{staticClass:"head_left",attrs:{span:"21"}},[n("Row",[n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"jobNumber"}},[t._v("任务编号 :  ")]),n("Input",{attrs:{id:"jobNumber"},model:{value:t.value.jobNumber,callback:function(e){t.$set(t.value,"jobNumber",e)},expression:"value.jobNumber"}})],1),t._v(" "),n("Col",{attrs:{span:"6"}},[n("label",{attrs:{for:"saleman"}},[t._v("业务员 :  ")]),n("Input",{attrs:{id:"saleman"},model:{value:t.value.saleman,callback:function(e){t.$set(t.value,"saleman",e)},expression:"value.saleman"}})],1),t._v(" "),n("Col",{attrs:{span:"6"}},[t._v("\n                    开始时间 : \n                    "),n("DatePicker",{staticClass:"date",attrs:{type:"date"},model:{value:t.value.startDate,callback:function(e){t.$set(t.value,"startDate",e)},expression:"value.startDate"}})],1),t._v(" "),n("Col",{attrs:{span:"6"}},[t._v("\n                    结束时间 : \n                    "),n("DatePicker",{staticClass:"date",attrs:{type:"date"},model:{value:t.value.endDate,callback:function(e){t.$set(t.value,"endDate",e)},expression:"value.endDate"}})],1)],1)],1),t._v(" "),n("Col",{staticClass:"head_right",attrs:{span:"3"}},[n("Button",{staticClass:"query",on:{click:t.query}},[t._v("查询 ")]),n("br"),t._v(" "),n("Button",{staticClass:"new",on:{click:t.news}},[t._v("新建")])],1)],1),t._v(" "),n("can-edit-table",{staticClass:"tables",attrs:{"columns-list":t.columns},on:{"on-change":t.changeRow,"on-delete":t.removes},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),t._v(" "),n("Page",{attrs:{total:t.totalCount,"show-total":"","show-elevator":"","class-name":"page"},on:{"on-change":t.changePage}})],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},606:function(t,e,n){"use strict";function a(t){d||n(1104)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1010),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var l=n(1106),s=n.n(l),d=!1,u=n(13),p=a,c=u(o.a,s.a,!1,p,null,null);c.options.__file="src/views/tables/components/canEditTable.vue",e.default=c.exports},787:function(t,e,n){"use strict";function a(t){d||n(2275)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1670),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var l=n(2277),s=n.n(l),d=!1,u=n(13),p=a,c=u(o.a,s.a,!1,p,null,null);c.options.__file="src/views/promotion-manage/war-programme/terminal-management/configuration-task/standardization-task/standardization-task.vue",e.default=c.exports}});