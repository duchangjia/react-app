webpackJsonp([192],{1674:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(898),i=a(239),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={data:function(){return{apiGroup:this.$util.apiConfig.purchaseDelivery.baseData.carManage,exportBtnText:"导出到excel",isExportDataLimit:!0,timer:null,query:{carPNo:""},driverSelList:[{driverCode:"6666666",contact:"啊啊啊啊啊啊啊啊啊啊啊",driverName:"孙悟空"},{driverCode:"6666666",contact:"啊啊啊啊啊啊啊啊啊啊啊",driverName:"小白马"}],addData:{carPlateNo:"粤A77777",carLoad:4.5,carCapacity:4.5,status:"禁用",driverName:"",driverContact:"",driverCode:"",note:"客官，这只马跑得很快"},reviseData:{id:"",carPlateNo:"",carLoad:"",carCapacity:"",status:"",driverName:"",driverContact:"",driverCode:"",note:"客官，这只马跑得更快"},columns1:[{type:"selection",minWidth:60,align:"center",fixed:"left"},{title:"序号",type:"index",minWidth:60,fixed:"left"},{title:"车牌号",key:"carPlateNo",minWidth:110},{title:"载重",key:"carLoad",minWidth:80},{title:"容积",key:"carCapacity",minWidth:80},{title:"状态",key:"status",minWidth:80},{title:"默认司机",key:"driverName",minWidth:110},{title:"备注",key:"note",minWidth:150},{title:"创建人",key:"creator",minWidth:100},{title:"创建时间",key:"createTime",minWidth:100},{title:"修改人",key:"updateUser",minWidth:100},{title:"修改时间",key:"updateTime",minWidth:100}],entity:[{id:1,carPlateNo:"粤A88888",carLoad:56,carCapacity:45.5,status:"启用",driverName:"老司机",note:"fdafdafaf",creator:"fdfafdsf",createTime:"2018-08-08",updateUser:"liby0068",updateTime:"2018-08-08"}],showAddForm:!1,showReviseForm:!1,detail_list:{},pager:{},loading:!1}},created:function(){var t=this;this.timer=setInterval(function(){if(localStorage.carManageExportDataTimestamp){var e=(new Date).getTime(),a=e-localStorage.carManageExportDataTimestamp;a<6e4?(t.isExportDataLimit=!0,t.exportBtnText="导出"+Math.ceil((6e4-a)/1e3)+"s"):(t.isExportDataLimit=!1,t.exportBtnText="导出到excel")}else t.isExportDataLimit=!1,t.exportBtnText="导出到excel"},500),this.jumpPageHandle(1)},beforeDestroy:function(){clearInterval(this.timer)},methods:{closeAddForm:function(){this.showAddForm=!1},add:function(){var t=this;console.log("增加选择框异步请求"),this.loading=!0,this.$util.ajax.post(this.apiGroup.driverSelUrl).then(function(e){if(t.loading=!1,console.log("增加选择框异步请求返回数据：",e),200==e.status){t.driverSelList=e.data.result;var a=t.addData;t.showAddForm=!0,a.carPlateNo="",a.carLoad="",a.carCapacity="",a.status="1",a.driverName="",a.note=""}else t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})},submitAddForm:function(){var t=this,e=this.addData;if(!/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[\-]?[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(e.carPlateNo))return console.log("验证失败"),this.$Modal.error({title:"填写错误",content:"请填写正确的车牌号码!"}),!1;if(console.log("验证成功"),null==e.carPlateNo||void 0==e.carPlateNo||""==e.carPlateNo)return this.$Modal.error({title:"填写错误",content:"车牌号不能为空!"}),!1;if(null==e.carLoad||void 0==e.carLoad||""==e.carLoad)return this.$Modal.error({title:"填写错误",content:"车辆载重不能为空!"}),!1;if(null==e.carCapacity||void 0==e.carCapacity||""==e.carCapacity)return this.$Modal.error({title:"填写错误",content:"车辆容积不能为空!"}),!1;if(null==e.driverName||void 0==e.driverName||""==e.driverName)return this.$Modal.error({title:"填写错误",content:"默认司机不能为空!"}),!1;var a=Number(e.carLoad);if(isNaN(a)||a<=0)return this.$Modal.error({title:"填写错误",content:"载重必须为数字且大于0"}),!1;var r=Number(e.carCapacity);if(isNaN(r)||r<=0)return this.$Modal.error({title:"填写错误",content:"容积必须为数字且大于0"}),!1;var i={};i.opt="add",i.carPlateNo=e.carPlateNo,i.carLoad=e.carLoad,i.carCapacity=e.carCapacity,i.note=e.note,i.driverCode=e.driverCode,i.driverContact=e.driverContact,i.driverName=e.driverName,i.status=e.status,this.loading=!0,this.$util.ajax.post(this.apiGroup.getCarNoUrl,o.default.stringify({carNo:i.carPlateNo})).then(function(e){t.loading=!1,console.log("查询车牌号是否存在请求返回数据：",e),200==e.status?e.data.result.length>0?t.$Modal.error({title:"新增失败",content:"车牌号已经存在"}):(t.loading=!0,t.$util.ajax.post(t.apiGroup.saveUrl,o.default.stringify(i)).then(function(e){t.loading=!1,console.log("新增车辆请求返回数据：",e),e.data.success?t.$Modal.success({title:"新增车辆返回信息",content:e.data.result,onOk:function(){t.showAddForm=!1,t.jumpPageHandle(1)}}):t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})):t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})},revise:function(){var t=this,e=this.$refs.selection.getSelection();if(1!=e.length)return this.$Modal.error({title:"数据校验错误",content:"请选择一条要修改的记录！"}),!1;this.loading=!0,this.$util.ajax.post(this.apiGroup.driverSelUrl).then(function(a){if(t.loading=!1,console.log("修改选择框异步请求返回数据：",a),200==a.status){t.driverSelList=a.data.result;var r={};r.id=e[0].id,console.log("获取修改数据发送参数：",r),t.loading=!0,t.$util.ajax.post(t.apiGroup.revDetailUrl,o.default.stringify(r)).then(function(e){t.loading=!1,console.log("修改请求返回数据：",e),200==e.status?(t.reviseData=e.data.result,t.showReviseForm=!0):t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})}else t.$Modal.error({title:"HTTP请求错误",content:a.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})},submitReviseForm:function(){var t=this,e=this.reviseData;if(null==e.carPlateNo||void 0==e.carPlateNo||""==e.carPlateNo)return this.$Modal.error({title:"填写错误",content:"车牌号不能为空!"}),!1;if(null==e.carLoad||void 0==e.carLoad||""==e.carLoad)return this.$Modal.error({title:"填写错误",content:"车辆载重不能为空!"}),!1;if(null==e.carCapacity||void 0==e.carCapacity||""==e.carCapacity)return this.$Modal.error({title:"填写错误",content:"车辆容积不能为空!"}),!1;if(null==e.driverName||void 0==e.driverName||""==e.driverName)return this.$Modal.error({title:"填写错误",content:"默认司机不能为空!"}),!1;var a=Number(e.carLoad);if(isNaN(a)||a<=0)return this.$Modal.error({title:"填写错误",content:"载重必须为数字且大于0"}),!1;var r=Number(e.carCapacity);if(isNaN(r)||r<=0)return this.$Modal.error({title:"填写错误",content:"容积必须为数字且大于0"}),!1;var i={};i.opt="update",i.id=e.id,i.carPlateNo=e.carPlateNo,i.carLoad=e.carLoad,i.carCapacity=e.carCapacity,i.note=e.note,i.driverCode=e.driverCode,i.driverContact=e.driverContact,i.driverName=e.driverName,i.status=e.status,this.loading=!0,this.$util.ajax.post(this.apiGroup.saveUrl,o.default.stringify(i)).then(function(e){t.loading=!1,console.log("修改车辆请求返回数据：",e),e.data.success?t.$Modal.success({title:"修改车辆返回信息",content:e.data.result,onOk:function(){t.showReviseForm=!1,t.jumpPageHandle(1)}}):t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})},closeReviseForm:function(){this.showReviseForm=!1},exportExcel:function(){var t=this;this.$Modal.confirm({title:"确认导出",content:"是否确认导出？",onOk:function(){localStorage.carManageExportDataTimestamp=(new Date).getTime(),t.isExportDataLimit=!0;var e={};e.carPlateNo=t.query.carPNo,console.log("导出excel请求发送数据",e),t.$util.ajax.post(t.apiGroup.exportExcelUrl,o.default.stringify(e),{responseType:"blob"}).then(function(e){if(200==e.status){t.loading=!1;var a=new Blob([e.data],{type:"application/x-xls"}),r=new Date,i="车辆信息"+r.getFullYear().toString(),o=(r.getMonth()+1).toString();r.getMonth()+1<10&&(o="0"+(r.getMonth()+1).toString()),i+=o;var n=r.getDate().toString();r.getDate()<10&&(n="0"+r.getDate().toString()),i+=n;var s=r.getHours().toString();r.getHours()<10&&(n="0"+r.getHours().toString()),i+=s;var l=r.getMinutes().toString();r.getMinutes()<10&&(l="0"+r.getMinutes().toString()),i+=l;var c=r.getSeconds().toString();if(r.getSeconds()<10&&(c="0"+r.getSeconds().toString()),i+=c,i+=".xlsx",window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,i);else{var d=document.createElement("a");d.href=window.URL.createObjectURL(a),d.download=i,d.click(),window.URL.revokeObjectURL(d.href)}}else t.$Modal.error({title:"HTTP请求错误",content:e.statusText})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})}})},jumpPageHandle:function(t){var e=this;this.pager.page=t;var a={page:this.pager.page,carPNo:this.query.carPNo};console.log("查询参数：",a),this.loading=!0,this.$util.ajax.post(this.apiGroup.listUrl,o.default.stringify(a)).then(function(t){e.loading=!1,console.log("车辆管理列表请求返回数据：",t),200==t.status?(e.pager=t.data.result.cars,e.entity=t.data.result.cars.records,e.entity.forEach(function(t){0==t.status?t.status="禁用":1==t.status&&(t.status="启用"),null==t.createTime?t.createTime="-----":t.createTime=(0,r.timestampToDay)(t.createTime),null==t.updateTime?t.updateTime="-----":t.updateTime=(0,r.timestampToDay)(t.updateTime)})):e.$Modal.error({title:"HTTP请求错误",content:t.statusText})}).catch(function(t){console.log(t),e.$Modal.error({title:"HTTP请求错误",content:"HTTP请求错误"})})},lookup:function(){console.log("lookup"),this.jumpPageHandle(1)}}}},2289:function(t,e,a){var r=a(2290);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(43)("13f82296",r,!1,{})},2290:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.cmain[data-v-214cc021] {\n  background-color: white;\n  position: relative;\n  /* min-width: 1020px; */\n}\n.checkForm .ivu-col[data-v-214cc021] {\n  margin: 10px 0px;\n}\n.qianshouCol .ivu-col[data-v-214cc021] {\n  margin: 5px 0px;\n}\n.line[data-v-214cc021] {\n  border-bottom: 1px solid #dddee1;\n}\nbutton + button[data-v-214cc021] {\n  margin-left: 10px;\n}\n.addform-laber[data-v-214cc021] {\n  width: 90px;\n  display: inline-block;\n  text-align: right;\n}\n",""])},2291:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cmain"},[a("div",{staticStyle:{padding:"20px 50px"}},[a("Row",[a("Col",{attrs:{span:"12"}},[a("span",[t._v("车牌号:")]),t._v(" "),a("Input",{staticStyle:{width:"160px","margin-left":"15px"},model:{value:t.query.carPNo,callback:function(e){t.$set(t.query,"carPNo","string"==typeof e?e.trim():e)},expression:"query.carPNo"}})],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("i-button",{staticStyle:{width:"115px",float:"right"},attrs:{type:"primary",icon:"search"},on:{click:t.lookup}},[t._v("查询")])],1)],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("br"),t._v(" "),a("Row",{attrs:{type:"flex",justify:"end"}},[a("i-button",{staticStyle:{width:"115px"},attrs:{type:"primary",icon:"plus"},on:{click:t.add}},[t._v("新增")]),t._v(" "),a("i-button",{staticStyle:{width:"115px"},attrs:{type:"warning",icon:"edit"},on:{click:t.revise}},[t._v("修改")]),t._v(" "),a("i-button",{staticStyle:{width:"115px"},attrs:{type:"success",icon:"android-download",disabled:t.isExportDataLimit},on:{click:t.exportExcel}},[t._v(t._s(t.exportBtnText))])],1),t._v(" "),a("br"),t._v(" "),a("Table",{ref:"selection",attrs:{stripe:"",columns:t.columns1,data:t.entity}}),t._v(" "),a("Row",{staticStyle:{margin:"10px"},attrs:{type:"flex",justify:"end"}},[a("page",{attrs:{current:t.pager.page,total:t.pager.totalCount,"page-size":t.pager.pageCode,"show-elevator":"","show-total":""},on:{"on-change":t.jumpPageHandle}})],1)],1),t._v(" "),a("modal",{attrs:{width:"800",title:"新增车辆"},model:{value:t.showAddForm,callback:function(e){t.showAddForm=e},expression:"showAddForm"}},[a("div",{staticClass:"addform"},[a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("车牌号:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.addData.carPlateNo,callback:function(e){t.$set(t.addData,"carPlateNo",e)},expression:"addData.carPlateNo"}})],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("载重:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.addData.carLoad,callback:function(e){t.$set(t.addData,"carLoad",e)},expression:"addData.carLoad"}}),t._v(" "),a("span",[t._v("吨")])],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("容积:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.addData.carCapacity,callback:function(e){t.$set(t.addData,"carCapacity","string"==typeof e?e.trim():e)},expression:"addData.carCapacity"}}),t._v(" "),a("span",[t._v("立方米")])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("状态:")]),t._v(" "),a("i-select",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.addData.status,callback:function(e){t.$set(t.addData,"status",e)},expression:"addData.status"}},[a("i-option",{attrs:{value:"1"}},[t._v("启用")]),t._v(" "),a("i-option",{attrs:{value:"0"}},[t._v("禁用")])],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("默认司机:")]),t._v(" "),a("i-select",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.addData.driverName,callback:function(e){t.$set(t.addData,"driverName",e)},expression:"addData.driverName"}},t._l(t.driverSelList,function(e,r){return a("i-option",{key:r,attrs:{value:e.driverName}},[t._v(t._s(e.driverName))])}))],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("span",{staticClass:"addform-laber"},[t._v("备注:")]),t._v(" "),a("Input",{staticStyle:{width:"320px","margin-left":"15px"},attrs:{type:"textarea"},model:{value:t.addData.note,callback:function(e){t.$set(t.addData,"note","string"==typeof e?e.trim():e)},expression:"addData.note"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("i-button",{staticStyle:{width:"92px"},attrs:{type:"primary"},on:{click:t.submitAddForm}},[t._v("保存")]),t._v(" "),a("i-button",{staticStyle:{width:"92px"},on:{click:t.closeAddForm}},[t._v("取消")])],1)]),t._v(" "),a("modal",{attrs:{width:"900",title:"修改车辆"},model:{value:t.showReviseForm,callback:function(e){t.showReviseForm=e},expression:"showReviseForm"}},[a("div",{staticClass:"addform"},[a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("车牌号:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.reviseData.carPlateNo,callback:function(e){t.$set(t.reviseData,"carPlateNo","string"==typeof e?e.trim():e)},expression:"reviseData.carPlateNo"}})],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("载重:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.reviseData.carLoad,callback:function(e){t.$set(t.reviseData,"carLoad","string"==typeof e?e.trim():e)},expression:"reviseData.carLoad"}}),t._v(" "),a("span",[t._v("吨")])],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("容积:")]),t._v(" "),a("Input",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.reviseData.carCapacity,callback:function(e){t.$set(t.reviseData,"carCapacity","string"==typeof e?e.trim():e)},expression:"reviseData.carCapacity"}}),t._v(" "),a("span",[t._v("立方米")])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("状态:")]),t._v(" "),a("i-select",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.reviseData.status,callback:function(e){t.$set(t.reviseData,"status",e)},expression:"reviseData.status"}},[a("i-option",{attrs:{value:1}},[t._v("启用")]),t._v(" "),a("i-option",{attrs:{value:0}},[t._v("禁用")])],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"12"}},[a("span",{staticClass:"addform-laber"},[t._v("默认司机:")]),t._v(" "),a("i-select",{staticStyle:{width:"220px","margin-left":"15px"},model:{value:t.reviseData.driverName,callback:function(e){t.$set(t.reviseData,"driverName",e)},expression:"reviseData.driverName"}},t._l(t.driverSelList,function(e,r){return a("i-option",{key:r,attrs:{value:e.driverName}},[t._v(t._s(e.driverName))])}))],1)],1),t._v(" "),a("br"),t._v(" "),a("Row",[a("Col",{attrs:{span:"24"}},[a("span",{staticClass:"addform-laber"},[t._v("备注:")]),t._v(" "),a("Input",{staticStyle:{width:"320px","margin-left":"15px"},attrs:{type:"textarea"},model:{value:t.reviseData.note,callback:function(e){t.$set(t.reviseData,"note","string"==typeof e?e.trim():e)},expression:"reviseData.note"}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("i-button",{staticStyle:{width:"92px"},attrs:{type:"primary"},on:{click:t.submitReviseForm}},[t._v("保存")]),t._v(" "),a("i-button",{staticStyle:{width:"92px"},on:{click:t.closeReviseForm}},[t._v("取消")])],1)]),t._v(" "),t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};e.default=o},791:function(t,e,a){"use strict";function r(t){c||a(2289)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(1674),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a(2291),l=a.n(s),c=!1,d=a(13),u=r,p=d(o.a,l.a,!1,u,"data-v-214cc021",null);p.options.__file="src/views/purchase-send/base-data/car-manage/car-manage.vue",e.default=p.exports},898:function(t,e,a){"use strict";function r(t,e){if(!e)var e="yyyy-MM-DD hh:mm:ss";var a={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in a)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[r]:("00"+a[r]).substr((""+a[r]).length)));return e}function i(t,e){if(!e)var e="yyyy-MM-dd";(t=Number(t))<1e10&&(t*=1e3);var a=new Date(t),r={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in r)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?r[i]:("00"+r[i]).substr((""+r[i]).length)));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=r,e.timestampToDay=i}});