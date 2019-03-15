webpackJsonp([267],{1449:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(241),n=a(i),o=r(146),u=a(o),s=r(242),c=a(s),l=r(239);t.default={props:{storeCode:"",visible:!1,edit:!1},data:function(){var e=this;return{dialogVisible:!1,total:0,apiGroup:e.$util.apiConfig.traderManage.orderManage,query:{itemName:"",code69:"",code79:"",page:1},dataSource:[],dataSourceSelected:[],dataColumns:function(){var t=this,r=[{type:this.edit?"html":"selection",width:this.edit?0:60,align:"center"},{title:"商品名称",align:"center",width:200,key:"itemName"},{title:"商品标识",align:"center",key:"promotionType",render:function(e,t){var r="商品";if(t.row.promotionType){switch(parseInt(t.row.promotionType)){case 1:r="赠品";break;case 2:r="返利";break;case 3:r="特价";break;case 4:r="组合";break;default:r="-"}}return e("span",r)}},{title:"促销标题",align:"center",key:"promotionTitle"},{title:"促销编码",align:"center",key:"promotionCode"},{title:"条形码",align:"center",key:"code69",width:120},{title:"销售编码",align:"center",key:"code79",width:120},{title:"转化系数",align:"center",key:"changeUnitRate"},{title:"原价",align:"center",key:"marketPrice"},{title:"实际价格CAR",align:"center",key:"realMarketPrice",width:80,render:function(t,r){return t("input",{domProps:{value:r.row.realMarketPrice},class:"ivu-input",on:{input:function(t){var a=t.target.value;a=a.replace(/[^\d.]/g,""),a=a.replace(/^\./g,""),a=a.replace(/\.{2,}/g,"."),a=a.replace(".","$#$").replace(/\./g,"").replace("$#$","."),a=a.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),r.row.realMarketPrice=a,t.target.value=a,e.dataSource[r.index]=r.row}}})}},{title:"CAR数量",align:"center",key:"carNum",width:80,render:function(e,r){return e("input",{domProps:{value:r.row.carNum},class:"ivu-input",on:{input:function(e){var a=e.target.value;a=a.replace(/[^\d]/g,""),""!==a&&(a=parseInt(a)),r.row.carNum=a,e.target.value=a,t.dataSource[r.index]=r.row}}})}},{title:"EA数量",align:"center",key:"eaNum",width:80,render:function(e,r){return e("input",{domProps:{value:r.row.eaNum},class:"ivu-input",on:{input:function(e){var a=e.target.value;a=a.replace(/[^\d]/g,""),""!==a&&(a=parseInt(a)),r.row.eaNum=a,e.target.value=a,t.dataSource[r.index]=r.row}}})}}];return this.edit&&r.splice(0,1),r},currentRow:null}},methods:{add:function(){this.returnSelectedGoods()},handleCancel:function(){this.$emit("update:visible",!1)},addAndClose:function(){this.returnSelectedGoods(),this.$emit("update:visible",!1)},returnSelectedGoods:function(){var e=this.$refs.giftTable.getSelection();this.$emit("on-selected",e)},search:function(){this.query.page=1,this.queryList()},resetQuery:function(){this.query={itemName:"",code69:"",code79:"",page:1},this.queryList()},queryList:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(n.default.mark(function e(){var t,r,a,i,o;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataSource=[],this.dataSourceSelected=[],t=[],r=[],e.prev=4,e.next=7,this.$ajax.post(this.apiGroup.ordergiftJson+"?number="+Math.random(),l.stringify((0,u.default)({},this.query,{itemStatus:5})));case 7:a=e.sent,i=a.data,200==i.code?(o=i.result.pager,o.records instanceof Array&&(this.dataSource=o.records.map(function(e){r.push(e.code79);var t=parseFloat(e.marketPrice).toFixed(2);isNaN(t)&&(t="0.00"),e.inventory=0;return(0,u.default)({},e,{validNum:"0/0",marketPrice:t,realMarketPrice:0,carNum:0,eaNum:0,itemComments:"",promotionType:1})})),isNaN(Number(o.totalCount))||(this.total=parseInt(o.totalCount))):t.push("赠品数据获取失败"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0),t.push("赠品数据获取失败");case 16:t.length>0&&this.$Message.error(t.join(","));case 17:case"end":return e.stop()}},e,this,[[4,12]])}));return e}(),setStock:function(){var e=this;this.dataSource.map(function(){var t=(0,c.default)(n.default.mark(function t(r){var a,i,o,u,s,c,l;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$ajax(e.apiGroup.warehouseStock+"?materialCode79="+r.code79);case 3:a=t.sent,i=a.data,200==i.code&&i.result.resultList instanceof Array&&i.result.resultList.length>0&&(o=0,u=i.result.resultList[0].validBoxNum,s=i.result.resultList[0].validNum,c=i.result.resultList[0].validSingleNum,isNaN(s)&&(s=0),isNaN(u)&&(u=0),isNaN(c)&&(c=0),o=s,l="0/0",0!=o&&(l=u+"/"+c),r.inventory=o,r.validNum=l),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}));return function(e){return t.apply(this,arguments)}}())},handleCurrentChange:function(e){this.currentRow=e},editGoods:function(){var e=this,t=[];this.dataSource.forEach(function(r){r.code79==e.currentRow.code79&&(t=[r])}),this.$emit("on-selected",t),this.$emit("update:visible",!1)}},watch:{visible:function(e,t){1==e?(this.dialogVisible=!0,this.resetQuery()):this.dialogVisible=!1}}}},1497:function(e,t,r){var a=r(1498);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("452930e0",a,!1,{})},1498:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.custom-row[data-v-2726e42c] {\n  margin-bottom: 15px;\n}\n",""])},1499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{width:1200,title:"赠品选择"},on:{"on-cancel":e.handleCancel},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[r("Row",{staticClass:"custom-row",attrs:{gutter:16}},[r("Col",{attrs:{span:"5"}},[r("div",[e._v("商品名称:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.itemName,callback:function(t){e.$set(e.query,"itemName",t)},expression:"query.itemName"}})],1)]),e._v(" "),r("Col",{attrs:{span:"5"}},[r("div",[e._v("条形码:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.code69,callback:function(t){e.$set(e.query,"code69",t)},expression:"query.code69"}})],1)]),e._v(" "),r("Col",{attrs:{span:"5"}},[r("div",[e._v("销售编码:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.code79,callback:function(t){e.$set(e.query,"code79",t)},expression:"query.code79"}})],1)]),e._v(" "),r("Col",{attrs:{span:"4"}},[r("div",[e._v(" ")]),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){e.search()}}},[e._v("查询")])],1)],1),e._v(" "),r("Row",[r("Table",{ref:"giftTable",attrs:{columns:e.dataColumns(),data:e.dataSource,"highlight-row":e.edit},on:{"on-current-change":e.handleCurrentChange}})],1),e._v(" "),r("Row",[r("Page",{staticStyle:{float:"right","margin-top":"20px"},attrs:{"page-size":5,current:e.query.page,total:e.total},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryList}})],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[0==e.edit?r("Button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("添加")]):e._e(),e._v(" "),0==e.edit?r("Button",{on:{click:function(t){e.addAndClose()}}},[e._v("添加并关闭")]):e._e(),e._v(" "),e.edit?r("Button",{on:{click:function(t){e.editGoods()}}},[e._v("确认")]):e._e()],1)],1)},i=[];a._withStripped=!0;var n={render:a,staticRenderFns:i};t.default=n},633:function(e,t,r){"use strict";function a(e){c||r(1497)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1449),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,function(){return i[e]})}(o);var u=r(1499),s=r.n(u),c=!1,l=r(13),d=a,p=l(n.a,s.a,!1,d,"data-v-2726e42c",null);p.options.__file="src/views/my-components/modal-selector/return-gift-select-modal.vue",t.default=p.exports}});