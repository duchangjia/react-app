webpackJsonp([268],{1553:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(241),o=r(n),i=a(252),u=r(i),c=a(242),s=r(c),l=a(146),d=r(l),p=a(239);t.default={props:{storeCode:"",visible:!1},data:function(){var e=this;return{dialogVisible:!1,total:0,apiGroup:e.$util.apiConfig.traderManage.orderManage,query:{queryItemName:"",queryItem69:"",queryItem79:"",page:1},dataSource:[],dataSourceSelected:[],dataColumns:[{type:"selection",width:60,align:"center"},{title:"商品名称",align:"center",key:"spuName"},{title:"促销标识",align:"center",key:"promotionType",render:function(e,t){var a="商品";if(t.row.promotionType){switch(parseInt(t.row.promotionType)){case 1:a="买赠";break;case 2:a="返利";break;case 3:a="特价";break;case 4:a="组合";break;default:a="-"}}return e("span",a)}},{title:"促销标题",align:"center",key:"promotionTitle"},{title:"条形码",align:"center",key:"code69"},{title:"销售编码",align:"center",key:"code79"},{title:"转化系数",align:"center",key:"changeUnitRate"},{title:"原价",align:"center",key:"marketPrice"},{title:"库存",align:"center",key:"validNum"},{title:"CAR数量",align:"center",key:"carNum",render:function(t,a){return t("Input",{props:{value:a.row.carNum},class:"carNumColumnModal",on:{"on-keyup":function(t){return e.handleInput(a,t,"carNumColumnModal")}}})}},{title:"EA数量",align:"center",key:"eaNum",render:function(t,a){return t("Input",{props:{value:a.row.eaNum},class:"eaNumColumnModal",on:{"on-keyup":function(t){return e.handleInput(a,t,"eaNumColumnModal")}}})}}]}},methods:{add:function(){this.returnSelectedGoods()},handleCancel:function(){this.$emit("update:visible",!1)},addAndClose:function(){this.returnSelectedGoods(),this.$emit("update:visible",!1)},returnSelectedGoods:function(){var e=[];this.dataSource.forEach(function(t){if(t._checked){var a=(0,d.default)({},t);delete a._checked,e.push(a)}}),this.$emit("on-selected",e)},search:function(){this.query.page=1,this.queryList()},resetQuery:function(){this.query={queryItemName:"",queryItem69:"",queryItem79:"",page:1},this.queryList()},queryList:function(){function e(){return t.apply(this,arguments)}var t=(0,s.default)(o.default.mark(function e(){var t,a,r,n,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataSource=[],this.dataSourceSelected=[],t=[],a=p.stringify.apply(p,(0,u.default)(this.query)),e.prev=4,e.next=7,this.$ajax.post(this.apiGroup.orderGiftssur+"?number="+Math.random(),a);case 7:r=e.sent,n=r.data,200==n.code?(i=n.result.pager,i.records instanceof Array&&(this.dataSource=i.records.map(function(e){var t=e.inventory,a=e.changeUnitRate,r="0/0";return 0!=t&&0!=a&&(r=Math.floor(t/a)+"/"+t%a),(0,d.default)({},e,{validNum:r,realMarketPrice:"0.00",carNum:0,eaNum:0})})),i.totalCount&&(this.total=parseInt(i.totalCount))):t.push("商品数据获取失败"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0),t.push("商品数据获取失败");case 16:t.length>0&&this.$Message.error(t.join(","));case 17:case"end":return e.stop()}},e,this,[[4,12]])}));return e}(),handleSelectionChange:function(e){this.dataSourceSelected=e;for(var t=0;t<this.dataSource.length;t++)if(this.dataSource[t]._checked=!1,e.length>0)for(var a=0;a<e.length;a++)if(e[a].code79==this.dataSource[t].code79&&e[a].promotionTitle==this.dataSource[t].promotionTitle){this.dataSource[t]._checked=!0;break}},handleInput:function(e,t,a){var r=t.target.value,n=e.column.key;r=r.replace(/[^\-?\d.]/g,""),this.dataSource[e.index][n]=r,r.length>1&&"0"==r[0]&&"."!=r[1]&&(this.dataSource[e.index][n]=r.substr(1)),""==t.target.value&&(this.dataSource[e.index][n]=0),this.dataSource=this.dataSource.concat(),setTimeout(function(t){document.querySelectorAll("."+a)[e.index].querySelector("input").focus()})}},watch:{visible:function(e,t){1==e?(this.dialogVisible=!0,this.resetQuery()):this.dialogVisible=!1}}}},1905:function(e,t,a){var r=a(1906);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(43)("abe5ff6a",r,!1,{})},1906:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.custom-row[data-v-62ae519c] {\n  margin-bottom: 15px;\n}\n",""])},1907:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{width:1200,title:"商品选择"},on:{"on-cancel":e.handleCancel},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[a("Row",{staticClass:"custom-row",attrs:{gutter:16}},[a("Col",{attrs:{span:"5"}},[a("div",[e._v("商品名称:")]),e._v(" "),a("div",[a("Input",{model:{value:e.query.queryItemName,callback:function(t){e.$set(e.query,"queryItemName",t)},expression:"query.queryItemName"}})],1)]),e._v(" "),a("Col",{attrs:{span:"5"}},[a("div",[e._v("条形码:")]),e._v(" "),a("div",[a("Input",{model:{value:e.query.queryItem69,callback:function(t){e.$set(e.query,"queryItem69",t)},expression:"query.queryItem69"}})],1)]),e._v(" "),a("Col",{attrs:{span:"5"}},[a("div",[e._v("销售编码:")]),e._v(" "),a("div",[a("Input",{model:{value:e.query.queryItem69,callback:function(t){e.$set(e.query,"queryItem69",t)},expression:"query.queryItem69"}})],1)]),e._v(" "),a("Col",{attrs:{span:"5"}},[a("div",[e._v("商品类型:")]),e._v(" "),a("div",[a("Select",{model:{value:e.query.itemType,callback:function(t){e.$set(e.query,"itemType",t)},expression:"query.itemType"}},[a("Option",{attrs:{value:""}},[e._v("请选择")]),e._v(" "),a("Option",{attrs:{value:"2"}},[e._v("赠品")])],1)],1)]),e._v(" "),a("Col",{attrs:{span:"4"}},[a("div",[e._v(" ")]),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(t){e.search()}}},[e._v("查询")])],1)],1),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.dataColumns,data:e.dataSource},on:{"on-selection-change":e.handleSelectionChange}})],1),e._v(" "),a("Row",[a("Page",{staticStyle:{float:"right","margin-top":"20px"},attrs:{"page-size":5,current:e.query.page,total:e.total},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryList}})],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("添加")]),e._v(" "),a("Button",{on:{click:function(t){e.addAndClose()}}},[e._v("添加并关闭")])],1)],1)},n=[];r._withStripped=!0;var o={render:r,staticRenderFns:n};t.default=o},671:function(e,t,a){"use strict";function r(e){s||a(1905)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1553),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var u=a(1907),c=a.n(u),s=!1,l=a(13),d=r,p=l(o.a,c.a,!1,d,"data-v-62ae519c",null);p.options.__file="src/views/my-components/modal-selector/order-gift-select-modal.vue",t.default=p.exports}});