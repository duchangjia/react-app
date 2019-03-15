webpackJsonp([269],{1407:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(241),i=a(n),o=r(146),u=a(o),s=r(242),c=a(s),l=r(239);t.default={props:{storeCode:"",visible:!1,edit:!1},data:function(){return{dialogVisible:!1,total:0,apiGroup:this.$util.apiConfig.traderManage.orderManage,query:{queryItemName:"",queryItem69:"",queryItem79:"",page:1},dataSource:[],dataSourceSelected:[],dataColumns:function(){var e=this,t=[{type:this.edit?"html":"selection",width:this.edit?0:60,align:"center"},{title:"商品名称",align:"center",width:200,key:"itemName"},{title:"商品类型",align:"center",key:"itemType",render:function(e,t){var r="-";if(t.row.itemType)switch(parseInt(t.row.itemType)){case 1:r="常规装";break;case 2:r="促销装";break;case 3:r="赠品/非单卖品";break;case 4:r="广宣品";break;default:r="-"}return e("span",r)}},{title:"商品标识",align:"center",key:"promotionType",render:function(e,t){var r="商品";if(t.row.promotionType)switch(parseInt(t.row.promotionType)){case 1:r="赠品";break;case 2:r="返利";break;case 3:r="特价";break;case 4:r="组合";break;default:r="-"}return e("span",r)}},{title:"条形码",align:"center",key:"code69",width:120},{title:"销售编码",align:"center",key:"code79",width:120},{title:"转化系数",align:"center",key:"changeUnitRate"},{title:"原价",align:"center",key:"marketPrice"},{title:"实际价格CAR",align:"center",key:"realMarketPrice",width:80,render:function(t,r){return t("input",{domProps:{value:r.row.realMarketPrice},on:{input:function(t){var a=t.target.value;a=a.replace(/[^\d.]/g,""),a=a.replace(/^\./g,""),a=a.replace(/\.{2,}/g,"."),a=a.replace(".","$#$").replace(/\./g,"").replace("$#$","."),a=a.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),r.row.realMarketPrice=a,t.target.value=a,e.dataSource[r.index]=r.row}},class:{"ivu-input":!0}})}},{title:"库存",align:"center",key:"validNum"},{title:"CAR数量",align:"center",key:"carNum",width:80,render:function(t,r){return t("input",{domProps:{value:r.row.carNum},class:"ivu-input",on:{input:function(t){var a=t.target.value;a=a.replace(/[^\d]/g,""),""!==a&&(a=parseInt(a)),r.row.carNum=a,t.target.value=a,e.dataSource[r.index]=r.row}}})}},{title:"EA数量",align:"center",key:"eaNum",width:80,render:function(t,r){return t("input",{domProps:{value:r.row.eaNum},class:"ivu-input",on:{input:function(t){var a=t.target.value;a=a.replace(/[^\d]/g,""),""!==a&&(a=parseInt(a)),r.row.eaNum=a,t.target.value=a,e.dataSource[r.index]=r.row}}})}}];return this.edit&&t.splice(0,1),t},currentRow:null}},methods:{add:function(){this.returnSelectedGoods()},handleCancel:function(){this.$emit("update:visible",!1)},addAndClose:function(){this.returnSelectedGoods(),this.$emit("update:visible",!1)},returnSelectedGoods:function(){var e=this.$refs.goodsTable.getSelection();this.$emit("on-selected",e)},search:function(){this.query.page=1,this.queryList()},resetQuery:function(){this.query={queryItemName:"",queryItem69:"",queryItem79:"",page:1},this.queryList()},queryList:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(i.default.mark(function e(){var t,r,a,n,o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.dataSource=[],this.dataSourceSelected=[],t=[],r=[],e.prev=4,e.next=7,this.$ajax.post(this.apiGroup.orderItemssurUrl+"?number="+Math.random(),l.stringify((0,u.default)({},this.query,{storecode:this.storeCode})));case 7:a=e.sent,n=a.data,200==n.code?(o=n.result.pager,o.records instanceof Array&&(this.dataSource=o.records.map(function(e){r.push(e.code79);var t=parseFloat(e.marketPrice).toFixed(2),a=0;isNaN(t)&&(t="0.00");var n=e.inventory,i=e.changeUnitRate,o="0/0";if(0!=n&&0!=i&&null!=i){o=(parseInt(n/i)||0)+"/"+(n%i||0)}return a=t,(0,u.default)({},e,{validNum:o,marketPrice:t,realMarketPrice:a,carNum:0,eaNum:0,itemComments:"",promotionType:""})})),isNaN(Number(o.totalCount))||(this.total=parseInt(o.totalCount))):t.push("商品数据获取失败"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0),t.push("商品数据获取失败");case 16:t.length>0&&this.$Message.error(t.join(",")),this.setStock();case 18:case"end":return e.stop()}},e,this,[[4,12]])}));return e}(),handleInput:function(e,t,r){var a=t.target.value,n=e.column.key;a=a.replace(/[^\-?\d.]/g,""),e.row[n]=a,a.length>1&&"0"==a[0]&&"."!=a[1]&&(e.row[n]=a.substr(1)),""==t.target.value&&(e.row[n]=0),this.dataSource[e.index]=(0,u.default)({},this.dataSource[e.index],e.row),setTimeout(function(r){return t.target.value=e.row[n]})},setStock:function(){var e=this;this.dataSource.map(function(){var t=(0,c.default)(i.default.mark(function t(r){var a,n,o,u,s,c,l;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$ajax(e.apiGroup.warehouseStock+"?materialCode79="+r.code79);case 3:a=t.sent,n=a.data,200==n.code&&n.result.resultList instanceof Array&&n.result.resultList.length>0&&(o=0,u=n.result.resultList[0].validBoxNum,s=n.result.resultList[0].validNum,c=n.result.resultList[0].validSingleNum,isNaN(s)&&(s=0),isNaN(u)&&(u=0),isNaN(c)&&(c=0),o=s,l="0/0",0!=o&&(l=u+"/"+c),r.inventory=o,r.validNum=l),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}));return function(e){return t.apply(this,arguments)}}())},handleCurrentChange:function(e){this.currentRow=e},editGoods:function(){var e=this,t=[];this.dataSource.forEach(function(r){r.code79==e.currentRow.code79&&(t=[r])}),this.$emit("on-selected",t),this.$emit("update:visible",!1)}},watch:{visible:function(e,t){1==e?(this.dialogVisible=!0,this.resetQuery()):this.dialogVisible=!1}}}},1446:function(e,t,r){var a=r(1447);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("88aff544",a,!1,{})},1447:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.custom-row[data-v-b1c97b98] {\n  margin-bottom: 15px;\n}\n",""])},1448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{width:1200,title:"商品选择"},on:{"on-cancel":e.handleCancel},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[r("Row",{staticClass:"custom-row",attrs:{gutter:16}},[r("Col",{attrs:{span:"5"}},[r("div",[e._v("商品名称:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.queryItemName,callback:function(t){e.$set(e.query,"queryItemName",t)},expression:"query.queryItemName"}})],1)]),e._v(" "),r("Col",{attrs:{span:"5"}},[r("div",[e._v("条形码:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.queryItem69,callback:function(t){e.$set(e.query,"queryItem69",t)},expression:"query.queryItem69"}})],1)]),e._v(" "),r("Col",{attrs:{span:"5"}},[r("div",[e._v("销售编码:")]),e._v(" "),r("div",[r("Input",{model:{value:e.query.queryItem79,callback:function(t){e.$set(e.query,"queryItem79",t)},expression:"query.queryItem79"}})],1)]),e._v(" "),r("Col",{attrs:{span:"5"}},[r("div",[e._v("商品类型:")]),e._v(" "),r("div",[r("Select",{model:{value:e.query.itemType,callback:function(t){e.$set(e.query,"itemType",t)},expression:"query.itemType"}},[r("Option",{attrs:{value:""}},[e._v("请选择")]),e._v(" "),r("Option",{attrs:{value:"1"}},[e._v("常规装")]),e._v(" "),r("Option",{attrs:{value:"2"}},[e._v("促销装")]),e._v(" "),r("Option",{attrs:{value:"3"}},[e._v("赠品/非单卖品")]),e._v(" "),r("Option",{attrs:{value:"4"}},[e._v("广宣品")])],1)],1)]),e._v(" "),r("Col",{attrs:{span:"4"}},[r("div",[e._v(" ")]),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){e.search()}}},[e._v("查询")])],1)],1),e._v(" "),r("Row",[r("Table",{ref:"goodsTable",attrs:{columns:e.dataColumns(),data:e.dataSource,"highlight-row":e.edit},on:{"on-current-change":e.handleCurrentChange}})],1),e._v(" "),r("Row",[r("Page",{staticStyle:{float:"right","margin-top":"20px"},attrs:{"page-size":5,current:e.query.page,total:e.total},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.queryList}})],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[0==e.edit?r("Button",{attrs:{type:"primary"},on:{click:function(t){e.add()}}},[e._v("添加")]):e._e(),e._v(" "),0==e.edit?r("Button",{on:{click:function(t){e.addAndClose()}}},[e._v("添加并关闭")]):e._e(),e._v(" "),e.edit?r("Button",{on:{click:function(t){e.editGoods()}}},[e._v("确认")]):e._e()],1)],1)},n=[];a._withStripped=!0;var i={render:a,staticRenderFns:n};t.default=i},617:function(e,t,r){"use strict";function a(e){c||r(1446)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1407),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,function(){return n[e]})}(o);var u=r(1448),s=r.n(u),c=!1,l=r(13),d=a,p=l(i.a,s.a,!1,d,"data-v-b1c97b98",null);p.options.__file="src/views/my-components/modal-selector/goods-select-modal-new.vue",t.default=p.exports}});