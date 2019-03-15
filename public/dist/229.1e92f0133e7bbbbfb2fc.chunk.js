webpackJsonp([229],{1681:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(67),r=s(n),i=a(241),o=s(i),d=a(242),l=s(d),u=a(146),c=s(u),p=a(106),m=a(239);e.default={data:function(){var t=this;return{apiGroup:this.$util.apiConfig.purchaseDelivery.purchaseManage.helpSellerOrder.helpSellerOrderAdd,params:{warehouseCode:"",warehouseName:"",suplierName:"",custName:"",procurementCreateDate:"",note:""},submitLoading:!1,warehoseList:[],goodsList:[],goodsColumns:[{title:"商品名称",align:"center",width:200,key:"itemName"},{title:"销售编码",align:"center",key:"code79"},{title:"条形码",align:"center",key:"code69"},{title:"CAR数量",align:"center",key:"quantityByCar"},{title:"EA数量",align:"center",key:"quantityByEa"},{title:"采购单价(元/CAR)",align:"center",key:"marketPrice"},{title:"小计(元)",align:"center",key:"totalPrice"},{title:"操作",align:"center",render:function(e,a){return e("Button",{props:{size:"small"},on:{click:function(e){return t.goodsList.splice(a.index,1)}}},"删除")}}],addGoodsQuery:{spuCode:"",code69:"",itemName:"",page:1},addGoodsTotal:0,addGoodsModalVisible:!1,addGoodsList:[],addGoodsColumns:[{type:"selection",width:60,align:"center"},{title:"商品名称",align:"center",width:200,key:"itemName"},{title:"销售分类",align:"center",key:"itemCategory"},{title:"销售编码",align:"center",key:"code79"},{title:"条形码",align:"center",key:"code69"},{title:"采购单价(元/CAR)",align:"center",key:"marketPrice"},{title:"采购数量CAR",align:"center",key:"editCarNum",render:function(e,a){return e("Input",{props:{value:a.row.editCarNum},on:{"on-change":function(e){return t.handleIntNumChange(e,a)}}})}},{title:"采购数量EA",align:"center",key:"editEaNum",render:function(e,a){return e("Input",{props:{value:a.row.editEaNum},on:{"on-change":function(e){return t.handleIntNumChange(e,a)}}})}}]}},created:function(){this.getDefaultWarehouse()},computed:(0,c.default)({totalCar:function(){var t=0;return this.goodsList.forEach(function(e){t+=parseInt(e.quantityByCar)}),t},totalEa:function(){var t=0;return this.goodsList.forEach(function(e){t+=parseInt(e.quantityByEa)}),t},totalPrice:function(){var t=0;return this.goodsList.forEach(function(e){t+=parseInt(e.totalPrice)}),t.toFixed(2)}},(0,p.mapState)(["app"])),mounted:function(){},methods:{getWarehouse:function(){function t(){return e.apply(this,arguments)}var e=(0,l.default)(o.default.mark(function t(){var e,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$ajax(this.apiGroup.warehouse,{params:{_:(new Date).getTime()}});case 3:e=t.sent,a=e.data,a.ware instanceof Array&&(this.warehoseList=a.ware,a.ware.length>0&&(this.params.warehouseCode=a.ware[0].warehouseCode,this.params.warehouseName=a.ware[0].warehouseName)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),this.$Message.error("入库仓库获取失败");case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return t}(),getDefaultWarehouse:function(){function t(){return e.apply(this,arguments)}var e=(0,l.default)(o.default.mark(function t(){var e;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$ajax(this.apiGroup.getDefaultWarehouse);case 3:e=t.sent,e.data.result instanceof Array&&(this.warehoseList=e.data.result,e.data.result.length>0&&(this.params.warehouseCode=e.data.result[0].warehouseCode,this.params.warehouseName=e.data.result[0].warehouseName)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),this.$Message.error("入库仓库获取失败");case 11:case"end":return t.stop()}},t,this,[[0,7]])}));return t}(),setWarehouse:function(t){var e=t.label,a=t.value;this.params.warehouseCode=a,this.params.warehouseName=e},setProcurementCreateDate:function(t){this.params.procurementCreateDate=t},showAddGoodsModal:function(){this.addGoodsModalVisible=!0,this.addGoodsQuery={spuCode:"",code69:"",itemName:"",page:1},this.getAddGoodsList()},getAddGoodsList:function(){function t(){return e.apply(this,arguments)}var e=(0,l.default)(o.default.mark(function t(){var e,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.addGoodsList=[],this.addGoodsTotal=0,t.prev=2,t.next=5,this.$ajax.post(this.apiGroup.sellingGoods,m.stringify(this.addGoodsQuery),{headers:{Accept:"text/plain, */*; q=0.01"}});case 5:e=t.sent,a=e.data,a.success&&(a.result.records instanceof Array&&(this.addGoodsList=a.result.records.map(function(t){var e="";return t.itemCategory11Name&&null!==t.itemCategory11Name&&t.itemCategory21Name&&null!==t.itemCategory21Name&&(e=[t.itemCategory11Name,t.itemCategory21Name].join("/")),(0,c.default)({},t,{_checked:!1,itemCategory:e,editCarNum:0,editEaNum:0})})),a.result.totalCount&&(this.addGoodsTotal=a.result.totalCount)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0),this.$Message.error("助销品列表获取失败");case 14:case"end":return t.stop()}},t,this,[[2,10]])}));return t}(),handleAddGoodSelect:function(t){this.addGoodsList.forEach(function(e){e._checked=!1,t.forEach(function(t){t.itemId==e.itemId&&(e._checked=!0)})})},searchAddList:function(){this.addGoodsQuery.page=1,this.getAddGoodsList()},handleIntNumChange:function(t,e){var a=t.target.value,s=e.column.key;if(isNaN(parseInt(a))||parseInt(a)<0)return setTimeout(function(e){return t.target.value=0});a.length!==parseInt(a).toString().length&&setTimeout(function(e){return t.target.value=parseInt(a)}),e.row[s]=parseInt(a),this.addGoodsList[e.index]=e.row},appendGoodsList:function(){var t=this,e=this.addGoodsList.filter(function(t){return t._checked});if(e.length<=0)return this.$Modal.warning({content:"未勾选商品"}),!1;for(var a=0;a<e.length;a++){var s=function(a){var s=e[a];if(parseInt(s.editCarNum)<=0&&parseInt(s.editEaNum)<=0)return t.$Modal.warning({content:"数量不能小于等于0"}),{v:!1};var n=!1;t.goodsList.forEach(function(t){t.itemId==s.itemId&&(t.quantityByCar=s.editCarNum,t.quantityByEa=s.editEaNum,t.totalPrice=t.quantityByCar*t.marketPrice+t.quantityByEa*t.marketPrice/t.changeUnitRate,n=!0)}),n||t.goodsList.push((0,c.default)({},s,{quantityByCar:s.editCarNum,quantityByEa:s.editEaNum,totalPrice:s.editCarNum*s.marketPrice+s.editEaNum*s.marketPrice/s.changeUnitRate}))}(a);if("object"===(void 0===s?"undefined":(0,r.default)(s)))return s.v}return this.goodsList=this.goodsList.concat(),this.$Modal.success({content:"添加成功"}),!0},closeAndAppendGoodsList:function(){this.appendGoodsList()&&(this.addGoodsModalVisible=!1)},checkParams:function(){var t=(0,c.default)({},this.params);if(!t.warehouseCode||!t.warehouseName)return this.$Modal.warning({content:"请选择仓库"});if(!t.suplierName.replace(/ /g,""))return this.$Modal.warning({content:"请填写供应商"});if(t.suplierName.length>100)return this.$Modal.warning({content:"供应商长度不能超过100个字符"});if(!t.custName.replace(/ /g,""))return this.$Modal.warning({content:"请填写采购员"});if(t.custName.length>10)return this.$Modal.warning({content:"采购员长度不能超过10个字符"});if(!t.procurementCreateDate)return this.$Modal.warning({content:"请填写采购日期"});if(t.note.length>250)return this.$Modal.warning({content:"备注长度不能超过250个字符"});var e=0,a=0,s=0,n=0,r=0,i=this.goodsList.map(function(t,i){var o=t.changeUnitRate,d=parseFloat(t.totalPrice);e+=d;var l=t.quantityByCar*o+t.quantityByEa;n+=Math.floor(l/o),r+=l%o;var u=t.quantityByCar*t.volume+t.quantityByEa*t.volume/o;isNaN(u)||(a+=u);var c=t.quantityByCar*t.grossWeight+t.quantityByEa*t.grossWeight/o;return isNaN(c)||(s+=c),{materialCode69:t.code69,materialCode79:t.code79,materialName79:t.itemName,carBasePrice:t.marketPrice,eaBasePrice:t.marketPrice/o,num:l,unit:"CAR",transformRule:o,totalPrice:d,sapEntryNo:10*(i+1)}});if(i.length<=0)return this.$Modal.warning({content:"请选择助销品"});t=(0,c.default)({},t,{itemList:i,totalPrice:e.toFixed(2),totalVolume:a.toFixed(2),totalWeight:s.toFixed(2),countByCar:n,countByEa:r}),this.addOrder(t)},addOrder:function(){function t(t){return e.apply(this,arguments)}var e=(0,l.default)(o.default.mark(function t(e){var a,s,n=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.submitLoading=!0,t.next=4,this.$ajax.post(this.apiGroup.add,e,{headers:{Accept:"text/plain, */*; q=0.01"}});case 4:a=t.sent,s=a.data,200==s.code?this.$Modal.success({content:"订单创建成功",onOk:function(t){return setTimeout(function(t){return n.$router.replace({name:"help-seller-order-list"})},500)}}):(this.$Modal.error({content:"订单创建失败"}),this.submitLoading=!1),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),this.$Modal.error({content:"订单创建失败"}),this.submitLoading=!1;case 14:case"end":return t.stop()}},t,this,[[0,9]])}));return t}()}}},2314:function(t,e,a){var s=a(2315);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(43)("0c6a1289",s,!1,{})},2315:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.main-title[data-v-01f96e5a] {\n  color: #0099ff;\n  margin-bottom: 20px;\n}\n.main-title .icon[data-v-01f96e5a] {\n  margin-right: 5px;\n}\n.wd-150[data-v-01f96e5a] {\n  width: 150px;\n}\n.item[data-v-01f96e5a] {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.itemspan[data-v-01f96e5a] {\n  width: 265px;\n}\n.item span.label[data-v-01f96e5a] {\n  display: inline-block;\n  text-align: right;\n  width: 90px;\n}\n.item span.label .required[data-v-01f96e5a] {\n  color: red;\n}\n.query-item[data-v-01f96e5a] {\n  text-align: center;\n  padding: 20px;\n}\n.sum-up[data-v-01f96e5a] {\n  overflow: hidden;\n  margin: 10px 0;\n}\n.sum-up .sum-up-col[data-v-01f96e5a] {\n  text-align: center;\n  float: left;\n  width: 180px;\n  height: 44px;\n  line-height: 22px;\n  border: 1px solid #aaa;\n  border-right: 0;\n}\n.sum-up .sum-up-col[data-v-01f96e5a]:first-of-type {\n  width: 100px;\n  line-height: 44px;\n}\n.sum-up .sum-up-col[data-v-01f96e5a]:last-of-type {\n  border-right: 1px solid #aaa;\n}\n.btn-group[data-v-01f96e5a] {\n  margin-top: 20px;\n  padding-left: 150px;\n}\n.btn-group .btn[data-v-01f96e5a] {\n  width: 120px;\n  margin-right: 25px;\n}\n",""])},2316:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Card",[a("div",{staticClass:"main-title"},[a("Icon",{staticClass:"icon",attrs:{type:"android-warning"}}),t._v(" "),a("span",[t._v("助销品采购")])],1),t._v(" "),a("div",{staticClass:"params"},[a("Row",[a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("订单来源:")])]),t._v(" "),a("span",{staticClass:"content"},[a("Select",{staticClass:"wd-150",attrs:{disabled:!0,value:0}},[a("Option",{attrs:{value:0}},[t._v("助销品采购")])],1)],1)]),t._v(" "),a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("入库仓库:")])]),t._v(" "),a("span",{staticClass:"content"},[a("Select",{staticClass:"wd-150",attrs:{"label-in-value":!0},on:{"on-change":t.setWarehouse},model:{value:t.params.warehouseCode,callback:function(e){t.$set(t.params,"warehouseCode",e)},expression:"params.warehouseCode"}},t._l(t.warehoseList,function(e,s){return a("Option",{key:s,attrs:{value:e.warehouseCode}},[t._v(t._s(e.warehouseName))])}))],1)])]),t._v(" "),a("Row",[a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("供应商:")])]),t._v(" "),a("span",{staticClass:"content"},[a("Input",{staticClass:"wd-150",model:{value:t.params.suplierName,callback:function(e){t.$set(t.params,"suplierName",e)},expression:"params.suplierName"}})],1)])]),t._v(" "),a("Row",[a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("采购员:")])]),t._v(" "),a("span",{staticClass:"content"},[a("Input",{staticClass:"wd-150",model:{value:t.params.custName,callback:function(e){t.$set(t.params,"custName",e)},expression:"params.custName"}})],1)])]),t._v(" "),a("Row",[a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("采购日期:")])]),t._v(" "),a("span",{staticClass:"content"},[a("DatePicker",{staticClass:"wd-150",on:{"on-change":t.setProcurementCreateDate}})],1)])]),t._v(" "),a("Row",[a("span",{staticClass:"item"},[a("span",{staticClass:"label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v(" "),a("span",[t._v("采购商品:")])]),t._v(" "),a("span",{staticClass:"content"},[a("Button",{staticClass:"wd-150",attrs:{type:"primary"},on:{click:t.showAddGoodsModal}},[t._v("添加采购商品")])],1)])])],1),t._v(" "),a("div",{staticClass:"goods",staticStyle:{padding:"10px 20px"}},[a("Table",{attrs:{data:t.goodsList,columns:t.goodsColumns}}),t._v(" "),a("div",{staticClass:"sum-up"},[a("div",{staticClass:"sum-up-col"},[t._v("总计:")]),t._v(" "),a("div",{staticClass:"sum-up-col"},[a("span",[t._v("CAR数量:")]),t._v(" "),a("br"),t._v(" "),a("span",[t._v(t._s(t.totalCar))])]),t._v(" "),a("div",{staticClass:"sum-up-col"},[a("span",[t._v("EA数量:")]),t._v(" "),a("br"),t._v(" "),a("span",[t._v(t._s(t.totalEa))])]),t._v(" "),a("div",{staticClass:"sum-up-col"},[a("span",[t._v("采购单总额:")]),t._v(" "),a("br"),t._v(" "),a("span",[t._v(t._s(t.totalPrice))])])])],1),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"label",staticStyle:{"vertical-align":"top"}},[t._v("备注:")]),t._v(" "),a("Input",{staticStyle:{width:"400px"},attrs:{type:"textarea"},model:{value:t.params.note,callback:function(e){t.$set(t.params,"note",e)},expression:"params.note"}})],1),t._v(" "),a("div",{staticClass:"btn-group"},[a("Button",{staticClass:"btn",attrs:{type:"primary",disabled:t.submitLoading},on:{click:t.checkParams}},[t._v("确认")]),t._v(" "),a("Button",{staticClass:"btn",attrs:{type:"primary",disabled:t.submitLoading},on:{click:function(e){t.$router.replace({name:"help-seller-order-list"})}}},[t._v("取消")])],1),t._v(" "),a("Modal",{attrs:{title:"添加助销品",width:"1000"},model:{value:t.addGoodsModalVisible,callback:function(e){t.addGoodsModalVisible=e},expression:"addGoodsModalVisible"}},[a("div",[a("Row",{staticClass:"query"},[a("Col",{staticClass:"query-item",attrs:{span:"6"}},[a("span",{staticClass:"label"},[t._v("商品编码:")]),t._v(" "),a("Input",{model:{value:t.addGoodsQuery.spuCode,callback:function(e){t.$set(t.addGoodsQuery,"spuCode",e)},expression:"addGoodsQuery.spuCode"}})],1),t._v(" "),a("Col",{staticClass:"query-item",attrs:{span:"6"}},[a("span",{staticClass:"label"},[t._v("条形码:")]),t._v(" "),a("Input",{model:{value:t.addGoodsQuery.code69,callback:function(e){t.$set(t.addGoodsQuery,"code69",e)},expression:"addGoodsQuery.code69"}})],1),t._v(" "),a("Col",{staticClass:"query-item",attrs:{span:"6"}},[a("span",{staticClass:"label"},[t._v("商品名称:")]),t._v(" "),a("Input",{model:{value:t.addGoodsQuery.itemName,callback:function(e){t.$set(t.addGoodsQuery,"itemName",e)},expression:"addGoodsQuery.itemName"}})],1),t._v(" "),a("Col",{staticClass:"query-item",attrs:{span:"6"}},[a("span",{staticClass:"label"}),t._v(" "),a("br"),t._v(" "),a("Button",{attrs:{type:"primary",long:""},on:{click:function(e){t.searchAddList()}}},[t._v("搜索")])],1)],1),t._v(" "),a("Table",{attrs:{data:t.addGoodsList,columns:t.addGoodsColumns},on:{"on-selection-change":t.handleAddGoodSelect}}),t._v(" "),a("Page",{staticStyle:{"text-align":"right","margin-top":"10px"},attrs:{current:t.addGoodsQuery.page,total:t.addGoodsTotal},on:{"update:current":function(e){t.$set(t.addGoodsQuery,"page",e)},"on-change":t.getAddGoodsList}})],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.appendGoodsList}},[t._v("添加")]),t._v(" "),a("Button",{on:{click:t.closeAndAppendGoodsList}},[t._v("添加并关闭")])],1)])],1)},n=[];s._withStripped=!0;var r={render:s,staticRenderFns:n};e.default=r},798:function(t,e,a){"use strict";function s(t){l||a(2314)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1681),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var o=a(2316),d=a.n(o),l=!1,u=a(13),c=s,p=u(r.a,d.a,!1,c,"data-v-01f96e5a",null);p.options.__file="src/views/purchase-send/purchase-manage/help-seller-order/help-seller-order-add.vue",e.default=p.exports}});