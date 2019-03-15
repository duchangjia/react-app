webpackJsonp([241],{1410:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(241),n=r(i),o=a(242),s=r(o),c=a(102),l=r(c),u=a(239),d=r(u);t.default={name:"productSearchCondition",props:{disabled:(0,l.default)({type:Boolean},"type",!1)},data:function(){var e=this;return{loading:!1,tableData:[],brandList:[],categoryList:[],itemCategory21List:[],seriesList:[],modelCategoryData:"",modelBrandData:"",modelSeriesData:"",code69Data:"",itemNameData:"",columns1:[{type:"selection",width:58,align:"center"},{type:"index",title:"序号",width:65,align:"center"},{title:"条形码",align:"center",key:"barCode"},{title:"商品名称",align:"center",key:"itemName"},{title:"价格CAR",align:"center",key:"price"},{title:"价格EA",align:"center",key:"eaPrice"},{title:"品牌",align:"center",key:"brandName"},{title:"品类",align:"center",key:"cname"},{title:"系列",align:"center"},{title:"操作",align:"center",render:function(t,a){return t("Button",{props:{size:"small",disabled:e.disabled},on:{click:function(){e.$emit("on-addItem",a.row)}}},"添加")}}],selected:[],selection:[],totalCount:0,queryArray:{page:1,rows:5,code69:"",code79:"",itemName:"",itemStatus:"4",itemCategory11Id:"",itemCategory21Id:""}}},mounted:function(){this.getProduct(1),this.getSelectType(1)},methods:{isNumber:function(e){return e===+e},handleSectionChange:function(e){this.selection=e},handleAddClick:function(){this.$emit("on-add")},getSelection:function(){return this.$refs.queryTable.getSelection()},getProduct:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(n.default.mark(function e(t){var a,r,i,o,s=this;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.queryArray.page=t,e.prev=2,e.next=5,this.$util.ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.queryGoodsList,data:d.default.stringify(this.queryArray)});case 5:if(a=e.sent,r=a.data,this.loading=!1,200!=r.code){e.next=18;break}if(i=r.result,this.tableData=[],this.totalCount=i.totalCount,o=i.records,0!=o.length){e.next=15;break}return e.abrupt("return");case 15:o.forEach(function(e){var t={code79:e.code79,barCode:e.code69,code80:e.code80,brandId:e.itemCategory11Id,brandName:e.itemCategory11Name,cid:e.itemCategory21Id,cname:e.itemCategory21Name,mustFullMoney:"0",price:s.isNumber(e.marketPrice)?e.marketPrice.toFixed(2):"",eaPrice:s.isNumber(e.marketPrice/e.changeUnitRate)?(e.marketPrice/e.changeUnitRate).toFixed(2):"",guidePrice:e.guidePrice||"",type:1,changeUnitRate:e.changeUnitRate,marketPrice:e.marketPrice,unit:0,dealerId:e.dealerId,itemName:e.itemName,itemId:e.itemId};s.tableData.push(t)}),e.next=19;break;case 18:this.$Message.error(r.message);case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(2),this.loading=!1,console.log(e.t0);case 25:case"end":return e.stop()}},e,this,[[2,21]])}));return e}(),getSelectType:function(){function e(){return t.apply(this,arguments)}var t=(0,s.default)(n.default.mark(function e(){var t,a;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$util.ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.category});case 3:t=e.sent,a=t.data,a?(this.brandList=a.itemCategory11List,this.itemCategory21List=a.itemCategory21List):this.$Message.error(a.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return e}(),getOption:function(e){this.categoryList=[],e?(this.queryArray.itemCategory11Id=e.value,this.queryArray.itemCategory11Name=e.label,this.queryArray.itemCategory21Id="",this.categoryList=this.itemCategory21List.filter(function(t){return t.parentCid==e.value})):(this.queryArray.itemCategory11Id="",this.queryArray.itemCategory21Id="")},getOption1:function(){}}}},1457:function(e,t,a){var r=a(1458);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(43)("3ce6ffaa",r,!1,{})},1458:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.search-form .ivu-form-item {\n  width: 16%;\n  float: left;\n}\n.search-form .section .ivu-input-wrapper {\n  width: 40%;\n}\n.search-form .section .ivu-form-item-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n",""])},1459:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form",{staticClass:"search-form clearfix",attrs:{"label-width":63}},[a("FormItem",{attrs:{label:"条形码"}},[a("Input",{attrs:{clearable:""},model:{value:e.queryArray.code69,callback:function(t){e.$set(e.queryArray,"code69",t)},expression:"queryArray.code69"}})],1),e._v(" "),a("FormItem",{attrs:{label:"商品名称"}},[a("Input",{attrs:{clearable:""},model:{value:e.queryArray.itemName,callback:function(t){e.$set(e.queryArray,"itemName",t)},expression:"queryArray.itemName"}})],1),e._v(" "),a("FormItem",{attrs:{label:"品牌"}},[a("Select",{attrs:{clearable:"","label-in-value":!0},on:{"on-change":e.getOption,"on-clear":e.getOption},model:{value:e.queryArray.itemCategory11Id,callback:function(t){e.$set(e.queryArray,"itemCategory11Id",t)},expression:"queryArray.itemCategory11Id"}},e._l(e.brandList,function(t){return a("Option",{key:t.cid,attrs:{value:t.cid}},[e._v(e._s(t.cName))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"品类"}},[a("Select",{attrs:{clearable:"","label-in-value":!0},on:{"on-change":e.getOption1,"on-clear":e.getOption1},model:{value:e.queryArray.itemCategory21Id,callback:function(t){e.$set(e.queryArray,"itemCategory21Id",t)},expression:"queryArray.itemCategory21Id"}},e._l(e.categoryList,function(t){return a("Option",{key:t.cid,attrs:{value:t.cid}},[e._v(e._s(t.cName))])}))],1),e._v(" "),a("FormItem",{attrs:{label:"系列"}},[a("Select",{attrs:{clearable:"","label-in-value":!0},on:{"on-change":e.getOption1,"on-clear":e.getOption1},model:{value:e.modelSeriesData,callback:function(t){e.modelSeriesData=t},expression:"modelSeriesData"}},e._l(e.seriesList,function(t){return a("Option",{key:t.cid,attrs:{value:t.cid}},[e._v(e._s(t.cName))])}))],1),e._v(" "),a("FormItem",{staticStyle:{width:"220px"}},[a("Button",{on:{click:function(t){e.getProduct(1)}}},[e._v("搜索")]),e._v(" "),a("Button",{attrs:{disabled:e.disabled},on:{click:e.handleAddClick}},[e._v("添加")])],1)],1),e._v(" "),a("Table",{ref:"queryTable",staticClass:"mb--12",attrs:{columns:e.columns1,data:e.tableData,loading:e.loading},on:{"on-selection-change":e.handleSectionChange}}),e._v(" "),a("Row",[a("Page",{staticClass:"fr",attrs:{total:e.totalCount,"page-size":5,"show-total":"","show-elevator":""},on:{"on-change":e.getProduct}})],1)],1)},i=[];r._withStripped=!0;var n={render:r,staticRenderFns:i};t.default=n},620:function(e,t,a){"use strict";function r(e){l||a(1457)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1410),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var s=a(1459),c=a.n(s),l=!1,u=a(13),d=r,m=u(n.a,c.a,!1,d,null,null);m.options.__file="src/views/promotion-manage/war-programme/new-buy-promotion/components/product-search-condition.vue",t.default=m.exports}});