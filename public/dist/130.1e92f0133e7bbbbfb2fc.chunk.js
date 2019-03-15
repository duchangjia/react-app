webpackJsonp([130,213],{1600:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(65),r=o(i),n=a(239),s=o(n),l=a(601),c=o(l);e.default={name:"groupBuy-list",components:{orderTable:c.default},data:function(){var t=this;return{GoodsType:[{value:"4",label:"在售"},{value:"5",label:"下架"}],itemCategoryArray:[],itemCategory21Array:[],loading:!1,queryArray:{page:1,rows:5,code69:"",spuCode:"",itemName:"",itemStatus:"4",marketPriceSearchMin:"",marketPriceSearchMax:"",itemCategory11Id:"",itemCategory21Id:""},columnsList:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:62,align:"center",type:"index"},{title:"销售编码",key:"code79",align:"center"},{title:"条形码",key:"barCode",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格(CAR)",key:"price",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cname",align:"center"},{title:"必送数量",key:"mustNum",align:"center",render:function(e,a){return e("Input",{props:{value:a.row.mustNum},on:{"on-blur":function(e){t.thisTableData[a.index].mustNum=e.target.value}}})}}],thisTableData:[],totalCount:0,tableRef1:"",columnsList1:[{title:"序号",width:62,align:"center",type:"index"},{title:"销售编码",key:"code79",align:"center"},{title:"条形码",key:"barCode",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格(CAR)",key:"price",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cname",align:"center"},{title:"补差标准(元/CAR)",key:"supplementCar",align:"center"},{title:"补差标准(元/EA)",key:"supplementEa",align:"center"},{title:"必送  数量",key:"mustNum",align:"center"},{title:"操作",key:"handel",align:"center",render:function(e,a){return e("div",[e("Button",{props:{size:"small"},on:{click:function(){a.row._checked&&t.promotionSendGoodsList.splice(a.index,1)}}},"删除")])}}],promotionSendGoodsList:[]}},methods:{next:function(){if(0==this.promotionSendGoodsList.length)return void this.$Modal.error({title:"提示",content:"未选中赠品"});var t=JSON.parse(sessionStorage.getItem("params")),e={promotionGoodsList:t.promotionGoodsList,promotionRuleDTO:t.promotionRuleDTO,promotionInfoDTO:t.promotionInfoDTO,promotionSendGoodsList:this.promotionSendGoodsList,promotionScopeDetailDTOList:t.promotionScopeDetailDTOList};sessionStorage.setItem("params",(0,r.default)(e)),this.$router.push({path:"groupBuy-editSubmit",query:{editPage:this.$route.query.editPage}})},prev:function(){var t=JSON.parse(sessionStorage.getItem("params")),e={promotionGoodsList:t.promotionGoodsList,promotionRuleDTO:t.promotionRuleDTO,promotionInfoDTO:t.promotionInfoDTO,promotionSendGoodsList:this.promotionSendGoodsList,promotionScopeDetailDTOList:t.promotionScopeDetailDTOList,floag:1};sessionStorage.setItem("params",(0,r.default)(e)),this.$router.push({path:"groupBuy-edit",query:{editPage:this.$route.query.editPage}})},selectGoods:function(t){var e=this;e.queryArray.page=t,this.$util.ajax({method:"post",url:e.$util.apiConfig.promotionManage.warProgramme.queryGoodsList,data:s.default.stringify(e.queryArray)}).then(function(t){if(e.thisTableData=[],0!=t.data.result.records.length){var a=t.data.result.records;for(var o in a){var i={barCode:a[o].code69,brandId:a[o].itemCategory11Id,brandName:a[o].itemCategory11Name,cid:a[o].itemCategory21Id,cname:a[o].itemCategory21Name,code79:a[o].code79,dealerId:a[o].dealerId,itemId:a[o].itemId,itemName:a[o].itemName,mustNum:"",price:a[o].marketPrice,type:2,_checked:!1};e.thisTableData.push(i)}e.totalCount=t.data.result.totalCount}}).catch(function(t){})},getOption:function(t){if(t){this.queryArray.itemCategory11Id=t.value,this.queryArray.itemCategory21Id="",this.categoryArray=[];for(var e in this.itemCategory21Array)t.value==this.itemCategory21Array[e].parentCid&&this.categoryArray.push(this.itemCategory21Array[e])}else this.queryArray.itemCategory11Id="",this.queryArray.itemCategory21Id=""},getOption1:function(t){this.queryArray.itemCategory21Id=t?t.value:""},itemCategoryList:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.category,data:""}).then(function(e){t.itemCategoryArray=e.data.itemCategory11List,t.itemCategory21Array=e.data.itemCategory21List}).catch(function(t){console.log("失败信息：",t)})},selectionClick:function(t){var e=t;for(var a in this.thisTableData){var o=!1;if(0==e.length)this.thisTableData[a]._checked=!1;else{for(var i in e)e[i].itemId==this.thisTableData[a].itemId&&(o=!0,a);this.thisTableData[a]._checked=!!o}}},addSelect:function(){var t=[];for(var e in this.thisTableData)this.thisTableData[e]._checked&&t.push(this.thisTableData[e]);if(0==t.length)return void this.$Modal.error({title:"提示",content:"未选中商品"});for(var a in t){var o=!1;for(var i in this.promotionSendGoodsList)t[a].itemId==this.promotionSendGoodsList[i].itemId&&(o=!0,this.promotionSendGoodsList[i].mustNum=t[a].mustNum);o||this.promotionSendGoodsList.push(t[a])}this.$Message.success("添加成功")},queryGoodsPrice:function(){var t=this,e="";for(var a in t.promotionSendGoodsList)e+=t.promotionSendGoodsList[a].code79+",";this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.queryGoodsList,data:s.default.stringify({itemStr:e})}).then(function(e){if(200==e.data.code){var a=e.data.result.records;if(a.length>0)for(var o in a)for(var i=0;i<t.promotionSendGoodsList.length;i++)a[o].code79==t.promotionSendGoodsList[i].code79&&(t.promotionSendGoodsList[i].price=a[o].marketPrice?a[o].marketPrice:"0")}}).catch(function(t){})}},mounted:function(){this.selectGoods(1),this.itemCategoryList();var t=JSON.parse(sessionStorage.getItem("params"));this.promotionInfoDTO=t.promotionInfoDTO,this.promotionGoodsList=t.promotionGoodsList,this.promotionRuleDTO=t.promotionRuleDTO,this.promotionSendGoodsList=t.promotionSendGoodsList,null==this.promotionSendGoodsList[0].price&&(this.promotionSendGoodsList[0].price=0),this.promotionScopeDetailDTOList=t.promotionScopeDetailDTOList,this.queryGoodsPrice()}}},2057:function(t,e,a){var o=a(2058);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(43)("d661a6e2",o,!1,{})},2058:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.ListName[data-v-69941402]{\n    text-align: right;\n    line-height: 42px;\n    color: #747474;\n    font-size: 12px;\n    margin-right: 16px;\n}\n.content[data-v-69941402]{\n    line-height: 42px;\n    color: #747474;\n}\n.but[data-v-69941402]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n",""])},2059:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"auto",background:"#fff",padding:"20px"}},[a("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n        活动赠品\n    ")]),t._v(" "),a("Row",{staticStyle:{padding:"20px 20px 0"}},[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("商品编码 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{clearable:""},model:{value:t.queryArray.spuCode,callback:function(e){t.$set(t.queryArray,"spuCode",e)},expression:"queryArray.spuCode"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("条形码")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{clearable:""},model:{value:t.queryArray.code69,callback:function(e){t.$set(t.queryArray,"code69",e)},expression:"queryArray.code69 "}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("商品名称 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{clearable:""},model:{value:t.queryArray.itemName,callback:function(e){t.$set(t.queryArray,"itemName",e)},expression:"queryArray.itemName"}})],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("商品状态 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.queryArray.itemStatus,callback:function(e){t.$set(t.queryArray,"itemStatus",e)},expression:"queryArray.itemStatus"}},t._l(t.GoodsType,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("商品价格 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{staticStyle:{width:"45%"},attrs:{placeholder:"",clearable:""},model:{value:t.queryArray.marketPriceSearchMin,callback:function(e){t.$set(t.queryArray,"marketPriceSearchMin",e)},expression:"queryArray.marketPriceSearchMin"}}),t._v(" ~\n            "),a("Input",{staticStyle:{width:"45%"},attrs:{placeholder:"",clearable:""},model:{value:t.queryArray.marketPriceSearchMax,callback:function(e){t.$set(t.queryArray,"marketPriceSearchMax",e)},expression:"queryArray.marketPriceSearchMax"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("品牌 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":t.getOption,"on-clear":t.getOption},model:{value:t.queryArray.itemCategory11Id,callback:function(e){t.$set(t.queryArray,"itemCategory11Id",e)},expression:"queryArray.itemCategory11Id"}},t._l(t.itemCategoryArray,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("品类 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.queryArray.itemCategory21Id,callback:function(e){t.$set(t.queryArray,"itemCategory21Id",e)},expression:"queryArray.itemCategory21Id"}},t._l(t.itemCategory21Array,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"12px 0"}},[a("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"large"},on:{click:function(e){t.selectGoods(1)}}},[t._v("查 询")]),t._v(" "),a("Button",{attrs:{size:"large"},on:{click:function(t){}}},[t._v("添 加")])],1)],1),t._v(" "),a("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n        选择赠品\n    ")]),t._v(" "),a("row",{staticStyle:{padding:"20px"}},[a("order-table",{attrs:{refs:t.tableRef1,columnsList:t.columnsList,thisTableData:t.thisTableData,loading:t.loading},on:{listenCheckbox:t.selectionClick}})],1),t._v(" "),a("div",{staticStyle:{padding:"10px 0",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:t.totalCount,"page-size":5,"show-total":"","show-elevator":""},on:{"on-change":t.selectGoods}})],1),t._v(" "),a("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n        已选中赠品\n    ")]),t._v(" "),a("row",{staticStyle:{padding:"20px"}},[a("order-table",{attrs:{refs:t.tableRef1,columnsList:t.columnsList1,thisTableData:t.promotionSendGoodsList,loading:t.loading}})],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{"margin-right":"20px"},attrs:{size:"large"},on:{click:t.prev}},[t._v("上一步")]),t._v(" "),a("Button",{attrs:{type:"primary",size:"large"},on:{click:t.next}},[t._v("下一步")])],1)],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r},601:function(t,e,a){"use strict";function o(t){c||a(900)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(891),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a(902),l=a.n(s),c=!1,u=a(13),d=o,p=u(r.a,l.a,!1,d,null,null);p.options.__file="src/views/tables/components/orderTable.vue",e.default=p.exports},718:function(t,e,a){"use strict";function o(t){c||a(2057)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(1600),r=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);var s=a(2059),l=a.n(s),c=!1,u=a(13),d=o,p=u(r.a,l.a,!1,d,"data-v-69941402",null);p.options.__file="src/views/promotion-manage/war-deploy/group-buy/groupBuy-editNext.vue",e.default=p.exports},891:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,a){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},a.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},900:function(t,e,a){var o=a(901);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(43)("296919d0",o,!1,{})},901:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r}});