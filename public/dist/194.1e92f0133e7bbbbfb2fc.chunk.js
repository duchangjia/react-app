webpackJsonp([194],{1662:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(r(898),r(239));!function(t){t&&t.__esModule}(o);e.default={data:function(){var t=this;return{query:{promoCode:"",promoName:"",status:"",startTime:"",endTime:""},columns1:[{title:"促销编码",key:"promoCode",minWidth:110},{title:"促销名称",key:"promoName",minWidth:110},{title:"促销类型",key:"promoType",minWidth:120},{title:"开始时间",key:"startTime",minWidth:120},{title:"结束时间",key:"endTime",minWidth:120},{title:"促销状态",key:"promoStatus",minWidth:80},{title:"操作",key:"ctrl",minWidth:140,render:function(e,r){var o=!0;return"已下架"!=r.row.promoStatus&&"未生效"!=r.row.promoStatus||(o=!1),e("div",[e("Button",{props:{type:"primary",size:"small",disabled:o},on:{click:function(){var e="#";"买赠"==r.row.promoType?e="promotion-array-fullPromo-edit":"特价"==r.row.promoType?e="promotion-array-discountPromo-edit":"组合"==r.row.promoType&&(e="promotion-array-groupPromo-edit"),t.$router.push({name:e,query:{id:r.row.id,edit:1}})}}},"编辑"),e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e="#";"买赠"==r.row.promoType?e="promotion-array-fullPromo-edit":"特价"==r.row.promoType?e="promotion-array-discountPromo-edit":"组合"==r.row.promoType&&(e="promotion-array-groupPromo-edit"),t.$router.push({name:e,query:{id:r.row.id,ctrlType:0}})}},style:{marginLeft:"10px"}},"查看")])}}],entity:[{id:3,promoCode:"20170901",promoName:"测试促销2",promoType:"买赠",startTime:"2018-05-01 00:00:00",endTime:"2018-05-01 00:00:00",promoStatus:"未生效"}],showOrderDetail:!1,pager:{},loading:!1,shippedDateOptions:{disabledDate:function(e){return e&&e.valueOf()<new Date(t.query.startTime)}}}},created:function(){this.jumpPageHandle(1)},methods:{closeOrderDetail:function(){this.showOrderDetail=!1},shipSTimeChangeHandle:function(t){this.query.startTime=t,this.query.startTime>this.query.endTime&&(this.query.endTime="")},shipETimeChangeHandle:function(t){this.query.endTime=t},jumpPageHandle:function(t){this.pager.page=t},lookup:function(){console.log("lookup"),this.jumpPageHandle(1)}}}},2251:function(t,e,r){var o=r(2252);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(43)("396c6a63",o,!1,{})},2252:function(t,e,r){e=t.exports=r(42)(!1),e.push([t.i,"\n.cmain[data-v-490401b5] {\r\n  background-color: white;\r\n  position: relative;\r\n  /* min-width: 1020px; */\n}\n.store_detail_list li[data-v-490401b5] {\r\n    display: inline-block;\r\n    margin-right: 45px;\r\n    margin-bottom: 10px;\n}\n#checkForm .ivu-col[data-v-490401b5]{\r\n  margin: 10px 0px;\n}\r\n",""])},2253:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cmain"},[t.loading?r("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),r("div",{staticStyle:{padding:"20px 50px"}},[r("Row",{attrs:{id:"checkForm"}},[r("Col",{attrs:{sm:12,md:8,lg:6}},[r("span",[t._v("促销编码:")]),t._v(" "),r("Input",{staticStyle:{width:"143px","margin-left":"15px"},attrs:{type:"text"},model:{value:t.query.promoCode,callback:function(e){t.$set(t.query,"promoCode","string"==typeof e?e.trim():e)},expression:"query.promoCode"}})],1),t._v(" "),r("Col",{attrs:{sm:12,md:8,lg:6}},[r("span",[t._v("促销名称:")]),t._v(" "),r("Input",{staticStyle:{width:"143px","margin-left":"15px"},attrs:{type:"text"},model:{value:t.query.promoName,callback:function(e){t.$set(t.query,"promoName","string"==typeof e?e.trim():e)},expression:"query.promoName"}})],1),t._v(" "),r("Col",{attrs:{sm:12,md:8,lg:6}},[r("span",[t._v("促销状态:")]),t._v(" "),r("i-select",{staticStyle:{width:"143px","margin-left":"15px"},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},[r("i-option",{attrs:{value:""}},[t._v("全部")]),t._v(" "),r("i-option",{attrs:{value:"0"}},[t._v("生效中")]),t._v(" "),r("i-option",{attrs:{value:"10"}},[t._v("已失效")]),t._v(" "),r("i-option",{attrs:{value:"20"}},[t._v("已下架")]),t._v(" "),r("i-option",{attrs:{value:"30"}},[t._v("未生效")])],1)],1)],1),t._v(" "),r("Row",{attrs:{id:"checkForm"}},[r("Col",{attrs:{sm:12,md:8,lg:6}},[r("span",[t._v("开始时间:")]),t._v(" "),r("date-picker",{staticStyle:{width:"180px","margin-left":"15px"},attrs:{value:t.query.startTime,format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"请选择时间"},on:{"on-change":t.shipSTimeChangeHandle}})],1),t._v(" "),r("Col",{attrs:{sm:12,md:8,lg:6}},[r("span",[t._v("结束时间:")]),t._v(" "),r("date-picker",{staticStyle:{width:"180px","margin-left":"15px"},attrs:{value:t.query.endTime,options:t.shippedDateOptions,format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"请选择时间"},on:{"on-change":t.shipETimeChangeHandle}})],1),t._v(" "),r("Col",{staticStyle:{float:"right"},attrs:{sm:12,md:8,lg:4}},[r("i-button",{staticStyle:{width:"115px","margin-left":"15px"},attrs:{type:"primary"},on:{click:t.lookup}},[t._v("查询")])],1)],1),t._v(" "),r("br"),t._v(" "),r("div",{staticStyle:{"border-bottom":"1px rgba(204, 204, 204, 1) solid"}}),t._v(" "),r("br"),t._v(" "),r("Table",{attrs:{stripe:"",columns:t.columns1,data:t.entity}}),t._v(" "),r("Row",{staticStyle:{margin:"10px"},attrs:{type:"flex",justify:"end"}},[r("page",{attrs:{current:t.pager.current,total:t.pager.totalCount,"page-size":t.pager.pageCode,"show-elevator":""},on:{"on-change":t.jumpPageHandle}})],1)],1)],1)},a=[];o._withStripped=!0;var i={render:o,staticRenderFns:a};e.default=i},779:function(t,e,r){"use strict";function o(t){l||r(2251)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1662),i=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var s=r(2253),p=r.n(s),l=!1,m=r(13),u=o,d=m(i.a,p.a,!1,u,"data-v-490401b5",null);d.options.__file="src/views/promotion-manage/war-programme/terminal-brand-managment/promotion-array/promotion-array.vue",e.default=d.exports},898:function(t,e,r){"use strict";function o(t,e){if(!e)var e="yyyy-MM-DD hh:mm:ss";var r={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return e}function a(t,e){if(!e)var e="yyyy-MM-dd";(t=Number(t))<1e10&&(t*=1e3);var r=new Date(t),o={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in o)new RegExp("("+a+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?o[a]:("00"+o[a]).substr((""+o[a]).length)));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=o,e.timestampToDay=a}});