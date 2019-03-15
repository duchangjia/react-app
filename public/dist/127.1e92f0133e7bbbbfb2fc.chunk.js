webpackJsonp([127,213],{1604:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(65),o=r(s),i=a(239),l=r(i),n=a(601),c=r(n);e.default={name:"groupBuy-list",components:{orderTable:c.default},data:function(){var t=this;return{queryArray:{title:"",beginDate:"",endDate:"",budget:"",brandName:"",cname:"",description:"",costPromotionGoodsDTOList:[],costPromotionRequireDTOList:[],costPromotionScopeDTOList:[],platform:[],cid:"",code:"",brandId:""},selectItem:{page:1,spuCode:"",code69:"",itemName:"",itemStatus:"",marketPriceSearchMin:"",marketPriceSearchMax:"",itemCategory11Id:"",itemCategory21Id:""},itemCategoryArray:[],itemCategory21Array:[],categoryArray:[],categoryArray1:[],social:[],requireList:[{requireName:"陈列",detail:""},{requireName:"分销",detail:""},{requireName:"海报",detail:""},{requireName:"物料制作费",detail:""},{requireName:"人员激励",detail:""},{requireName:"其他",detail:""}],modal:!1,loading:!1,itemStatus:[{value:"3",label:"待上架"},{value:"4",label:"在售"},{value:"5",label:"已下架"},{value:"14",label:"在售(平台)"},{value:"15",label:"已下架((平台)"}],tableRefItem:"",columnsListItem:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:62,align:"center",type:"index"},{title:"商品编码",key:"spuCode",width:100,align:"center"},{title:"条形码",width:100,key:"code69",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格",key:"marketPrice",width:62,align:"center"},{title:"商品状态",key:"itemStatus",width:80,align:"center",render:function(t,e){var a="";switch(e.row.itemStatus){case 3:a="待上架";break;case 4:a="在售";break;case 5:a="已下架";break;case 14:a="在售(平台)";break;case 15:a="已下架(平台)"}return t("div",a)}}],thisTableDataItem:[],tableRefGetItem:"",columnsListGetItem:[{title:"序号",width:62,align:"center",type:"index"},{title:"销售编码",key:"code79",align:"center"},{title:"条形码",key:"barCode",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cname",align:"center"},{title:"操作",key:"handel",align:"center",render:function(e,a){return e("div",[e("Button",{props:{size:"small"},on:{click:function(){t.thisTableDataGetItem.splice(a.index,1)}}},"删除")])}}],thisTableDataGetItem:[],platform:[],modalStore:!1,storeGroupList:[],storeGroupListQuery:{page:1,storeCodeLike:"",storeNameLike:"",storeNature:"",userAccount:"",empName:"",openState:"1",customizeGroupId:"",rows:500},totalCountStore:0,tableRefStore:"",storeStatus:[{value:"A",label:"A"},{value:"B",label:"B"},{value:"C",label:"C"},{value:"D",label:"D"},{value:"E",label:"E"}],columnsListStore:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:70,align:"center",type:"index"},{title:"门店编号",width:120,key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"},{title:"门店类型",key:"storeNature",width:100,align:"center"},{title:"自定义组",width:100,key:"groupName",align:"center"}],thisTableDataStore:[],tableRefGetStore:"",columnsListGetStore:[{title:"序号",width:70,align:"center",type:"index"},{title:"门店编号",key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"},{title:"门店类型",key:"storeNature",align:"center"},{title:"自定义组",key:"groupName",align:"center"},{title:"操作",key:"handel",align:"center",render:function(e,a){return e("div",[e("Button",{props:{size:"small"},on:{click:function(){t.thisTableDataGetStore.splice(a.index,1)}}},"删除")])}}],thisTableDataGetStore:[],totalCount:0}},methods:{goback:function(){this.$router.push({path:"group-expenses"})},next:function(){this.$router.push({path:"rebatePromotion-editSubmit"})},getOption:function(t,e){if(t){this.queryArray.brandId=t.value,this.queryArray.brandName=t.label,"off"===e?(this.categoryArray=[],this.queryArray.cid="",this.queryArray.cname=""):"xuanzhe"===e&&(this.selectItem.itemCategory11Id="",this.categoryArray1=[]);for(var a in this.itemCategory21Array)t.value==this.itemCategory21Array[a].parentCid&&("xuanzhe"===e?this.categoryArray1.push(this.itemCategory21Array[a]):this.categoryArray.push(this.itemCategory21Array[a]))}else this.queryArray.brandId="",this.queryArray.brandName="",this.queryArray.cid="",this.queryArray.cname=""},getOption1:function(t){this.queryArray.cid=t.value,this.queryArray.cname=t.label},itemCategoryList:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.category,data:""}).then(function(e){t.itemCategoryArray=e.data.itemCategory11List,t.itemCategory21Array=e.data.itemCategory21List}).catch(function(t){console.log("失败信息：",t)})},selectionClick:function(t){console.log((0,o.default)(t));var e=t;for(var a in this.thisTableDataItem){var r=!1;if(0==e.length)this.thisTableDataItem[a]._checked=!1;else{for(var s in e)e[s].spuCode==this.thisTableDataItem[a].spuCode&&(r=!0,a);this.thisTableDataItem[a]._checked=!!r}}},addSelect:function(){for(var t in this.thisTableDataItem)if(this.thisTableDataItem[t]._checked){var e=!1,a={barCode:this.thisTableDataItem[t].code69,brandId:this.thisTableDataItem[t].itemCategory11Id,brandName:this.thisTableDataItem[t].itemCategory11Name,cid:this.thisTableDataItem[t].itemCategory21Id,cname:this.thisTableDataItem[t].itemCategory21Name,code79:this.thisTableDataItem[t].code79,itemId:this.thisTableDataItem[t].itemId,itemName:this.thisTableDataItem[t].itemName};for(var r in this.thisTableDataGetItem)this.thisTableDataItem[t].itemId==this.thisTableDataGetItem[r].itemId&&(e=!0);e||this.thisTableDataGetItem.push(a)}},selectItemAndSpu:function(t){var e=this;this.current=t,this.selectItem.page=t,this.$util.ajax({method:"post",url:e.$util.apiConfig.promotionManage.warProgramme.queryGoodsList,data:l.default.stringify(this.selectItem)}).then(function(t){e.thisTableDataItem=[],e.totalCount=t.data.result.totalCount;var a=t.data.result.records;if(""!=a){for(var r in a)a[r]._checked=!1;e.thisTableDataItem=a}}).catch(function(t){console.log(t)})},selectionStoreClick:function(t){console.log((0,o.default)(t));var e=t;for(var a in this.thisTableDataStore){var r=!1;if(0==e.length)this.thisTableDataStore[a]._checked=!1;else{for(var s in e)e[s].scopeId==this.thisTableDataStore[a].scopeId&&(r=!0,a);this.thisTableDataStore[a]._checked=!!r}}},addSelectStore:function(){for(var t in this.thisTableDataStore)if(this.thisTableDataStore[t]._checked){var e=!1;for(var a in this.thisTableDataGetStore)this.thisTableDataStore[t].scopeId==this.thisTableDataGetStore[a].scopeId&&(e=!0);e||this.thisTableDataGetStore.push(this.thisTableDataStore[t])}console.log((0,o.default)(this.thisTableDataGetStore))},storeGroup:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.storeGroup,data:""}).then(function(e){200==e.data.code&&(t.storeGroupList=e.data.result.storeGroupList,t.totalCount=e.data.result.totalCount)}).catch(function(t){console.log("失败信息：",t)})},storeGroupQuery:function(t){var e=this;e.storeGroupListQuery.page=t,e.storeGroupListQuery._=(new Date).getTime(),this.$util.ajax({method:"post",url:e.$util.apiConfig.promotionManage.warProgramme.selectStoreInfo+"?"+l.default.stringify(e.storeGroupListQuery),data:""}).then(function(t){e.thisTableDataStore=[],e.totalCountStore=0;var a=t.data.records;if(""!=t.data.records&&null!=t.data.records){for(var r in a){var s={groupName:a[r].groupName,scopeCode:a[r].storeCode,scopeId:a[r].id,scopeName:a[r].storeName,scopeType:1,_checked:!1,storeNature:a[r].storeNature};e.thisTableDataStore.push(s)}e.totalCountStore=t.data.totalCount}}).catch(function(t){console.log("失败信息：",t)})},newBuild:function(){var t=this,e=new Date,a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();if(Date.parse(this.queryArray.beginDate)<Date.parse(a))return void this.$Modal.error({title:"提示",content:"开始时间不能小于当前时间"});if(Date.parse(this.queryArray.beginDate)>Date.parse(this.queryArray.endDate))return void this.$Modal.error({title:"提示",content:"活动开始时间不能大于活动结束时间"});this.queryArray.costPromotionGoodsDTOList=this.thisTableDataGetItem,this.queryArray.costPromotionScopeDTOList=this.thisTableDataGetStore,this.queryArray.costPromotionRequireDTOList=[];for(var r in this.social)this.queryArray.costPromotionRequireDTOList.push(this.requireList[this.social[r]]);this.queryArray.platform=this.platform.join(",");var s={title:"活动名称",beginDate:"开始时间",endDate:"结束时间",budget:"活动预算",description:"活动描述",costPromotionGoodsDTOList:"指定商品",costPromotionRequireDTOList:"活动要求",costPromotionScopeDTOList:"门店",platform:"平台"};for(var i in s)if(""==t.queryArray[i]||null==t.queryArray[i]||void 0==t.queryArray[i])return void this.$Modal.error({title:"提示",content:s[i]+"不能为空！"});console.log((0,o.default)(this.queryArray)),this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warDeploy.groupExpenses.update,data:this.queryArray}).then(function(e){console.log((0,o.default)(e.data)),"200"==e.data.code&&(t.$Modal.success({title:"提示",content:"保存成功！"}),t.$router.push({path:"group-expenses"}))}).catch(function(t){console.log(t)})},queryDetail:function(){var t=this;console.log((0,o.default)(this.queryArray)),this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.expensesPromotion.getDetailUrl,data:l.default.stringify({id:this.$route.query.id})}).then(function(e){if(console.log((0,o.default)(e.data)),"200"==e.data.code){var a=e.data.result.costPromotionInfo;t.queryArray=e.data.result.costPromotionInfo;var r={value:t.queryArray.brandId,label:t.queryArray.brandName};t.getOption(r,1),t.queryArray.beginDate=t.formatDateTime(t.queryArray.beginDate),t.queryArray.endDate=t.formatDateTime(t.queryArray.endDate),t.thisTableDataGetItem=a.costPromotionGoodsDTOList;var s=e.data.result.storeScope;for(var i in s){var l={groupName:s[i].groupName,scopeCode:s[i].storeCode,scopeId:s[i].id,scopeName:s[i].storeName,scopeType:1,_checked:!1,storeNature:s[i].storeNature};t.thisTableDataGetStore.push(l)}null!=a.platform&&(t.platform=a.platform.split(","));for(var n in a.costPromotionRequireDTOMap)for(var c=0;c<t.requireList.length;c++)n==t.requireList[c].requireName&&(t.requireList[c].detail=a.costPromotionRequireDTOMap[t.requireList[c].requireName],t.social.push(c))}}).catch(function(t){console.log(t)})},formatDateTime:function(t,e){if(!t)return"";var a=new Date(t),r=a.getFullYear(),s=a.getMonth()+1;s=s<10?"0"+s:s;var o=a.getDate();o=o<10?"0"+o:o;var i=a.getHours();if(i=i<10?"0"+i:i,e){var l=a.getMinutes(),n=a.getSeconds();return l=l<10?""+l:l,n=n<10?"0"+n:n,r+"-"+s+"-"+o+" "+i+":"+l+":"+n}return r+"-"+s+"-"+o}},mounted:function(){if(this.itemCategoryList(),this.selectItemAndSpu(1),this.storeGroupQuery(1),""!=this.$route.query.id||null!=this.$route.query.id||void 0!=this.$route.query.id)return void this.queryDetail()}}},2069:function(t,e,a){var r=a(2070);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(43)("20b69b1e",r,!1,{})},2070:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.ListName[data-v-04ace116]{\n    text-align: right;\n    line-height: 42px;\n    color: #747474;\n    font-size: 12px;\n    margin-right: 10px;\n}\n.content[data-v-04ace116]{\n    line-height: 42px;\n    color: #747474;\n}\n.modalName[data-v-04ace116]{\n    line-height: 32px;\n    text-align: right;\n    margin-right:4px;\n}\n.but[data-v-04ace116]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n.activeDscIpt[data-v-04ace116]{\n    width: 300px;\n    overflow: hidden;\n    margin-bottom: 8px;\n}\n",""])},2071:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"auto",background:"#fff",padding:"20px"}},[a("Row",{staticStyle:{padding:"20px 20px 0"}},[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动编码 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{placeholder:"系统自动生成",disabled:""},model:{value:t.queryArray.code,callback:function(e){t.$set(t.queryArray,"code",e)},expression:"queryArray.code"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动名称 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{clearable:""},model:{value:t.queryArray.title,callback:function(e){t.$set(t.queryArray,"title",e)},expression:"queryArray.title"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("开始时间:")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy-MM-dd "},model:{value:t.queryArray.beginDate,callback:function(e){t.$set(t.queryArray,"beginDate",e)},expression:"queryArray.beginDate"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("结束时间:")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy-MM-dd "},model:{value:t.queryArray.endDate,callback:function(e){t.$set(t.queryArray,"endDate",e)},expression:"queryArray.endDate"}})],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动预算 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{clearable:""},model:{value:t.queryArray.budget,callback:function(e){t.$set(t.queryArray,"budget",e)},expression:"queryArray.budget"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定品牌 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":function(e){t.getOption(e,"off")},"on-clear":t.getOption},model:{value:t.queryArray.brandId,callback:function(e){t.$set(t.queryArray,"brandId",e)},expression:"queryArray.brandId"}},t._l(t.itemCategoryArray,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定品类 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":t.getOption1},model:{value:t.queryArray.cid,callback:function(e){t.$set(t.queryArray,"cid",e)},expression:"queryArray.cid"}},t._l(t.categoryArray,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定商品 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Button",{on:{click:function(e){t.modal=!0}}},[t._v("选 择")])],1)],1)],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动描述 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{staticStyle:{width:"430px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"thing..."},model:{value:t.queryArray.description,callback:function(e){t.$set(t.queryArray,"description",e)},expression:"queryArray.description"}})],1)],1)],1)],1),t._v(" "),a("row",{staticStyle:{padding:"0 20px"}},[a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定商品 :")])],1)],1),t._v(" "),a("order-table",{attrs:{refs:t.tableRefGetItem,columnsList:t.columnsListGetItem,thisTableData:t.thisTableDataGetItem,loading:t.loading}})],1),t._v(" "),a("div",{staticStyle:{padding:"20px",overflow:"hidden"}}),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动要求 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("CheckboxGroup",{model:{value:t.social,callback:function(e){t.social=e},expression:"social"}},t._l(t.requireList,function(e,r){return a("div",{staticClass:"activeDscIpt"},[a("Checkbox",{staticStyle:{float:"left",width:"100px"},attrs:{label:r}},[a("span",[t._v(t._s(e.requireName)+":")])]),t._v(" "),a("Input",{staticStyle:{width:"180px",float:"left","margin-top":"5px"},attrs:{clearable:""},model:{value:e.detail,callback:function(a){t.$set(e,"detail",a)},expression:"itme.detail"}})],1)}))],1)],1)],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定范围 :")])],1)],1),t._v(" "),a("row",{staticStyle:{padding:"0 20px"}},[a("p",{staticStyle:{"margin-bottom":"6px"}},[t._v("\n            选择门店  "),a("Button",{on:{click:function(e){t.modalStore=!0}}},[t._v("选 择")])],1),t._v(" "),a("order-table",{attrs:{refs:t.tableRefGetStore,columnsList:t.columnsListGetStore,thisTableData:t.thisTableDataGetStore,loading:t.loading}})],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定平台 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("CheckboxGroup",{staticStyle:{float:"left"},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}},[a("Checkbox",{attrs:{label:"SFA"}}),t._v(" "),a("Checkbox",{attrs:{label:"O2O"}})],1)],1)],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"large"},on:{click:t.newBuild}},[t._v("保 存")]),t._v(" "),a("Button",{attrs:{size:"large"},on:{click:function(e){t.goback()}}},[t._v("取 消")])],1),t._v(" "),a("Modal",{attrs:{title:"选择商品",styles:{top:"20px"},width:"800px",scrollable:!0,"mask-closable":!1},on:{"on-ok":t.addSelect},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("Row",{},[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品编码 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.spuCode,callback:function(e){t.$set(t.selectItem,"spuCode",e)},expression:"selectItem.spuCode"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("条形码")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.code69,callback:function(e){t.$set(t.selectItem,"code69",e)},expression:"selectItem.code69"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品名称 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.itemName,callback:function(e){t.$set(t.selectItem,"itemName",e)},expression:"selectItem.itemName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品状态 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.selectItem.itemStatus,callback:function(e){t.$set(t.selectItem,"itemStatus",e)},expression:"selectItem.itemStatus"}},t._l(t.itemStatus,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品价格 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{staticStyle:{width:"44%"},attrs:{clearable:""},model:{value:t.selectItem.marketPriceSearchMin,callback:function(e){t.$set(t.selectItem,"marketPriceSearchMin",e)},expression:"selectItem.marketPriceSearchMin"}}),t._v(" ~\n                "),a("Input",{staticStyle:{width:"44%"},attrs:{clearable:""},model:{value:t.selectItem.marketPriceSearchMax,callback:function(e){t.$set(t.selectItem,"marketPriceSearchMax",e)},expression:"selectItem.marketPriceSearchMax"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("品牌 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":function(e){t.getOption(e,"xuanzhe")},"on-clear":t.getOption},model:{value:t.selectItem.itemCategory11Id,callback:function(e){t.$set(t.selectItem,"itemCategory11Id",e)},expression:"selectItem.itemCategory11Id"}},t._l(t.itemCategoryArray,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("品类 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.selectItem.itemCategory21Id,callback:function(e){t.$set(t.selectItem,"itemCategory21Id",e)},expression:"selectItem.itemCategory21Id"}},t._l(t.categoryArray1,function(e){return a("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"5px 0 0","border-top":"1px dotted #e5e5e5"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.selectItemAndSpu(1)}}},[t._v("查 询")])],1),t._v(" "),a("row",{staticStyle:{padding:"10px 0 0"}},[a("order-table",{attrs:{refs:t.tableRefItem,columnsList:t.columnsListItem,thisTableData:t.thisTableDataItem,loading:t.loading,getHeight:250},on:{listenCheckbox:t.selectionClick}}),t._v(" "),a("div",{staticStyle:{padding:"10px 0 0",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:t.totalCount,"page-size":10,"show-total":"","show-elevator":""},on:{"on-change":t.selectItemAndSpu}})],1)],1)],1),t._v(" "),a("Row",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店编码 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.spuCode,callback:function(e){t.$set(t.selectItem,"spuCode",e)},expression:"selectItem.spuCode"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店名称 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.code69,callback:function(e){t.$set(t.selectItem,"code69",e)},expression:"selectItem.code69"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店类型 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.selectItem.itemStatus,callback:function(e){t.$set(t.selectItem,"itemStatus",e)},expression:"selectItem.itemStatus"}},t._l(t.itemStatus,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("业务账号 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.itemName,callback:function(e){t.$set(t.selectItem,"itemName",e)},expression:"selectItem.itemName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("业务员名称 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.selectItem.itemName,callback:function(e){t.$set(t.selectItem,"itemName",e)},expression:"selectItem.itemName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("自定义组 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.selectItem.itemCategory21Id,callback:function(e){t.$set(t.selectItem,"itemCategory21Id",e)},expression:"selectItem.itemCategory21Id"}})],1)],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"5px 0 0","border-top":"1px dotted #e5e5e5"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.selectItemAndSpu(1)}}},[t._v("查 询")])],1),t._v(" "),a("row",{staticStyle:{padding:"10px 0 0"}},[a("order-table",{attrs:{refs:t.tableRefStore,columnsList:t.columnsListStore,thisTableData:t.thisTableDataStore,loading:t.loading,getHeight:250},on:{listenCheckbox:t.selectionClick}}),t._v(" "),a("div",{staticStyle:{padding:"10px 0 0",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:t.totalCount,"page-size":10,"show-total":"","show-elevator":""},on:{"on-change":t.selectItemAndSpu}})],1)],1)],1)],1),t._v(" "),a("Modal",{attrs:{title:"选择门店",styles:{top:"20px"},width:"800px",scrollable:!0,"mask-closable":!1},on:{"on-ok":t.addSelectStore},model:{value:t.modalStore,callback:function(e){t.modalStore=e},expression:"modalStore"}},[a("Row",[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店编码 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.storeCodeLike,callback:function(e){t.$set(t.storeGroupListQuery,"storeCodeLike",e)},expression:"storeGroupListQuery.storeCodeLike"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店名称 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.storeNameLike,callback:function(e){t.$set(t.storeGroupListQuery,"storeNameLike",e)},expression:"storeGroupListQuery.storeNameLike"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("门店类型 : ")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},model:{value:t.storeGroupListQuery.storeNature,callback:function(e){t.$set(t.storeGroupListQuery,"storeNature",e)},expression:"storeGroupListQuery.storeNature"}},t._l(t.storeStatus,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("业务账号 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.userAccount,callback:function(e){t.$set(t.storeGroupListQuery,"userAccount",e)},expression:"storeGroupListQuery.userAccount"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("业务员名称 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.empName,callback:function(e){t.$set(t.storeGroupListQuery,"empName",e)},expression:"storeGroupListQuery.empName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("自定义组 :")]),t._v(" "),a("Col",{attrs:{span:"14"}},[a("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.storeGroupListQuery.customizeGroupId,callback:function(e){t.$set(t.storeGroupListQuery,"customizeGroupId",e)},expression:"storeGroupListQuery.customizeGroupId"}},t._l(t.storeGroupList,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.groupName))])}))],1)],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"5px 0 0","border-top":"1px dotted #e5e5e5"}},[a("Button",{attrs:{type:"primary"},on:{click:function(e){t.storeGroupQuery(1)}}},[t._v("查 询")])],1),t._v(" "),a("row",{staticStyle:{padding:"10px 0 0"}},[a("order-table",{attrs:{refs:t.tableRefStore,columnsList:t.columnsListStore,thisTableData:t.thisTableDataStore,loading:t.loading,getHeight:250},on:{listenCheckbox:t.selectionStoreClick}}),t._v(" "),a("div",{staticStyle:{padding:"10px 0 0",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:t.totalCountStore,"page-size":10,"show-total":"","show-elevator":""},on:{"on-change":t.storeGroupQuery}})],1)],1)],1)],1)],1)},s=[];r._withStripped=!0;var o={render:r,staticRenderFns:s};e.default=o},601:function(t,e,a){"use strict";function r(t){c||a(900)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(891),o=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var l=a(902),n=a.n(l),c=!1,u=a(13),d=r,p=u(o.a,n.a,!1,d,null,null);p.options.__file="src/views/tables/components/orderTable.vue",e.default=p.exports},722:function(t,e,a){"use strict";function r(t){c||a(2069)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(1604),o=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var l=a(2071),n=a.n(l),c=!1,u=a(13),d=r,p=u(o.a,n.a,!1,d,"data-v-04ace116",null);p.options.__file="src/views/promotion-manage/war-deploy/group-expenses/groupExpenses-edit.vue",e.default=p.exports},891:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,a){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},a.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},900:function(t,e,a){var r=a(901);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(43)("296919d0",r,!1,{})},901:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},s=[];r._withStripped=!0;var o={render:r,staticRenderFns:s};e.default=o}});