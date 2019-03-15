webpackJsonp([37,213],{1622:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(241),i=a(o),n=r(242),s=a(n),l=r(65),c=a(l),u=r(909),p=a(u),d=r(152),h=a(d),m=r(239),g=a(m),f=r(601),v=a(f);e.default={name:"groupBuy-list",components:{orderTable:v.default},data:function(){var t=this;return{pageSize:5,currentPage:1,pageArr:[5,10,15,20,50,100,200,500],isDisable:!1,queryArray:{groupName:"",beginTime:"",endTime:"",marketPrice:"",groupItems:[],groupScopes:[],scopeType:"",channel:""},itemStatus:[{value:"3",label:"待上架"},{value:"4",label:"在售"},{value:"5",label:"已下架"},{value:"14",label:"在售(平台)"},{value:"15",label:"已下架((平台)"}],selectItem:{page:1,spuCode:"",code69:"",itemName:"",itemStatus:"4",marketPriceSearchMin:"",marketPriceSearchMax:"",itemCategory11Id:"",itemCategory21Id:"",_:""},tableRef:"",modal:!1,endDate:"",beginDate:"",loading:!1,startTimeOptions:{disabledDate:function(t){return t&&t.valueOf()<Date.now()-864e5}},endTimeOptions:{disabledDate:function(t){return 15===t.getDate()}},columnsList:[{title:"序号",type:"index",width:62,align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cName",align:"center"},{title:"销售编码",key:"spuCode",align:"center"},{title:"条形码",key:"code69",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"销售价(EA)",key:"marketPrice",align:"center"},{title:"优惠价(EA)",key:"discountPrice",align:"center",render:function(e,r){return e("div",[e("Input",{props:{value:r.row.discountPrice},on:{"on-blur":function(e){parseFloat(e.target.value)>0?(e.target.value=parseFloat(e.target.value).toFixed(2),t.thisTableData[r.index].discountPrice=e.target.value,r.row.discountPrice=parseFloat(e.target.value).toFixed(2)):(e.target.value="0.00",r.row.discountPrice="0.00",t.thisTableData[r.index].discountPrice=0)}}})])}},{title:"数量(EA)",key:"num",align:"center",render:function(e,r){return e("Input",{props:{value:r.row.num},on:{"on-blur":function(e){parseFloat(e.target.value)>0?(isNaN(e.target.value)?e.target.value=0:e.target.value=parseInt(e.target.value),t.thisTableData[r.index].num=parseInt(e.target.value),r.row.num=parseInt(e.target.value)):(e.target.value="0",r.row.num="0",t.thisTableData[r.index].num=0)}}})}},{title:"备注",align:"center",render:function(e,r){return e("Input",{props:{value:r.row.remarks},on:{"on-blur":function(e){e.target.value.length>15&&t.$Message.warning({content:"字数过多，订单打印可能显示不友好，建议备注少于15个字",duration:3}),t.thisTableData[r.index].remarks=e.target.value.slice(0,15),r.row.remarks=e.target.value.slice(0,15)}}})}},{title:"操作",key:"handel",align:"center",render:function(e,r){return e("div",[e("Button",{props:{size:"small"},on:{click:function(){t.$Message.destroy(),t.$Message.success("删除成功！"),t.thisTableData.splice(r.index,1)}}},"删除")])}}],thisTableData:[],tableRef2:"",columnsListItem:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:62,align:"center",type:"index"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cName",align:"center"},{title:"销售编码",key:"spuCode",width:100,align:"center"},{title:"条形码",width:100,key:"code69",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格(EA/CAR)",key:"price",width:115,align:"center",render:function(t,e){return t("div",Number(e.row.marketPrice).toFixed(2)+"/"+Number(e.row.marketPriceCAR).toFixed(2))}},{title:"商品状态",key:"itemStatus",width:80,align:"center",render:function(t,e){var r="";switch(e.row.itemStatus){case 3:r="待上架";break;case 4:r="在售";break;case 5:r="已下架";break;case 14:r="在售(平台)";break;case 15:r="已下架(平台)"}return t("div",r)}}],thisTableDataItem:[],totalCount:0,scope:"",platform:[],storeGroupList:[],storeType:[{value:"",label:"请选择"},{value:"A",label:"A"},{value:"B",label:"B"},{value:"C",label:"C"},{value:"D",label:"D"},{value:"E",label:"E"},{value:"KA",label:"KA"}],storeGroupListQuery:{page:1,rows:5,storeCodeLike:"",storeNameLike:"",storeNature:"",customizeGroupId:""},tableRefStore:"",columnsListStore:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",type:"index",width:62,align:"center"},{title:"门店编号",key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"},{title:"门店类型",key:"storeNature",align:"center"},{title:"自定义分组",key:"groupName",align:"center"}],allThisTableDataStore:[],thisTableDataStore:[],tableRefList:"",columnsList2:[{title:"序号",type:"index",width:62,align:"center"},{title:"门店编号",key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"},{title:"门店类型",key:"storeNature",align:"center"},{title:"自定义分组",key:"groupName",align:"center"},{title:"操作",key:"handel",align:"center",render:function(e,r){return e("div",[e("Button",{props:{size:"small"},on:{click:function(){t.$Message.destroy(),t.$Message.success("删除成功！"),t.promotionScopeDetailDTOList.splice(r.index,1)}}},"删除")])}}],promotionScopeDetailDTOList:[],selectionData:[],totalCountStore:0,scope3:[],itemCategoryArray:[],itemCategory21Array:[],categoryArray:[],createDateOptions:{disabledDate:function(e){return e&&e.valueOf()-1<new Date(t.queryArray.beginTime)}},static:{storeProp:["A","B","C","D","E"],groupArr:[]},checkAllGroup:[],checkAll1:!1,checkAllStoreProp:[],checkAll:!1,indeterminateStoreProp:!1,indeterminateGroupProp:!1}},methods:{initNumber:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"selectItem",a=t.target.value;/^[A-Z|a-z|_|0-9]*$/.test(a)&&"NaN"!=a?(this[r][e]=a,setTimeout(function(e){return t.target.value=a})):(this[r][e]="",setTimeout(function(e){return t.target.value=""}))},initNumberMoney:function(t,e){var r=t.target.value;/^\d+(\.\d{0,2})?$|^\.\d{1,2}$/.test(r)&&"NaN"!=r?(this.selectItem[e]=r,setTimeout(function(e){return t.target.value=r})):(this.selectItem[e]="",setTimeout(function(e){return t.target.value=""}))},initNumberMoneyFocus:function(t,e){var r=t.target.value;""==r||"NaN"==r?(r="",this.selectItem[e]="",setTimeout(function(e){return t.target.value=""})):(r=parseFloat(r).toFixed(2),this.selectItem[e]=r,setTimeout(function(e){return t.target.value=r}))},getOption:function(t){if(this.categoryArray=[],this.selectItem.itemCategory21Id="",t){this.selectItem.itemCategory11Id=t.value,this.selectItem.itemCategory11Name=t.label;for(var e in this.itemCategory21Array)t.value==this.itemCategory21Array[e].parentCid&&this.categoryArray.push(this.itemCategory21Array[e])}else this.clearGetOption(),this.clearGetOption1()},clearGetOption:function(){this.selectItem.itemCategory11Id="",this.selectItem.itemCategory11Name="",this.categoryArray=[]},clearGetOption1:function(){this.selectItem.itemCategory21Id="",this.selectItem.itemCategory21Name=""},getOption1:function(t){t?(this.selectItem.itemCategory21Id=t.value,this.selectItem.itemCategory21Name=t.label):(this.selectItem.itemCategory21Id="",this.selectItem.itemCategory21Name="")},itemCategoryList:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.category,data:""}).then(function(e){t.itemCategoryArray=e.data.itemCategory11List,t.itemCategory21Array=e.data.itemCategory21List}).catch(function(t){console.log("失败信息：",t)})},selectionClick:function(t){var e=t;for(var r in this.thisTableDataItem){var a=!1;if(0==e.length)this.thisTableDataItem[r]._checked=!1;else{for(var o in e)e[o].code69==this.thisTableDataItem[r].code69&&e[o].spuCode==this.thisTableDataItem[r].spuCode&&(a=!0,r);this.thisTableDataItem[r]._checked=!!a}}},addSelect:function(){var t=this,e=!1;for(var r in this.thisTableDataItem)if(this.thisTableDataItem[r]._checked&&(e=!0,!this.thisTableDataItem[r].code69))return void this.$Modal.error({title:"提示",content:"不能选择条形码为空的商品!"});if(!e)return void this.$Modal.error({title:"提示",content:"未选中商品!"});var a=!1;for(var o in this.thisTableDataItem)if(this.thisTableDataItem[o]._checked){var i=!1;for(var n in this.thisTableData)this.thisTableDataItem[o].code69==this.thisTableData[n].code69&&(i=!0,this.thisTableData[n]=this.thisTableDataItem[o]);i||(a=!0,this.thisTableData.push(this.thisTableDataItem[o]))}t.$Message.destroy(),a?t.$Message.success("添加成功！"):t.$Message.warning("商品已添加！")},selectItemAndSpu:function(t){var e=this;if(this.current=t,this.selectItem.marketPriceSearchMin&&this.selectItem.marketPriceSearchMax&&parseFloat(this.selectItem.marketPriceSearchMin)>parseFloat(this.selectItem.marketPriceSearchMax))return this.$Message.warning("请填写正确价格区间"),this.selectItem.marketPriceSearchMin="",void(this.selectItem.marketPriceSearchMax="");this.selectItem.page=t,this.selectItem._=(new Date).getTime(),this.$util.ajax({method:"get",url:e.$util.apiConfig.promotionManage.warProgramme.groupGoods.selectItemAndSpu+g.default.stringify(this.selectItem),data:""}).then(function(t){if(e.thisTableDataItem=[],e.totalCount=t.data.totalCount,""!=t.data.records)for(var r in t.data.records){var a=0,o=void 0;t.data.records[r].changeUnitRate&&null!==t.data.records[r].changeUnitRate&&(o=t.data.records[r].changeUnitRate),(t.data.records[r].marketPrice||null!==t.data.records[r].marketPrice)&&(a=t.data.records[r].marketPrice),o&&a&&(a=(a/o).toFixed(2));var i={spuCode:t.data.records[r].code79||"",code69:t.data.records[r].code69,itemName:t.data.records[r].itemName,marketPriceCAR:t.data.records[r].marketPrice||0,marketPrice:a,itemStatus:t.data.records[r].itemStatus,guidePrice:t.data.records[r].guidePrice||"",brandName:t.data.records[r].itemCategory11Name||"",cName:t.data.records[r].itemCategory21Name||"",discountPrice:0,num:0,supplyPrice:0,promotionalPrice:0,_checked:!1};e.thisTableDataItem.push(i)}}).catch(function(t){console.log(t)})},checkGoodsList:function(){var t=this,e=this,r=0;for(var a in this.thisTableData)r+=this.thisTableData[a].discountPrice*this.thisTableData[a].num;e.queryArray.marketPrice=r.toFixed(2),e.queryArray.marketPrice=r,e.queryArray.groupItems=this.thisTableData;var o=void 0;3==this.scope&&(o=[],e.checkAllGroup=(0,h.default)(new p.default(e.checkAllGroup)),e.checkAllStoreProp=(0,h.default)(new p.default(e.checkAllStoreProp)),this.checkAllGroup.length>0&&this.checkAllGroup.forEach(function(e){t.static.groupArr.forEach(function(t){e==t.id&&o.push({scopeName:"",scopeCode:"",storeType:"",scopeType:3,storeGroupId:t.id,storeGroupName:t.groupName})})}),this.checkAllStoreProp.length>0&&this.checkAllStoreProp.forEach(function(t){o.push({scopeName:t,scopeCode:t,storeType:t,scopeType:3,storeGroupId:"",storeGroupName:""})}),e.promotionScopeDetailDTOList=o),e.queryArray.groupScopes=this.promotionScopeDetailDTOList,e.queryArray.channel=this.platform.join(",");var i={groupName:"组合商品名称",beginTime:"开始时间",endTime:"结束时间",groupItems:"指定商品",groupScopes:"门店",channel:"平台"};for(var a in i)if(""==e.queryArray[a]||null==e.queryArray[a]||void 0==e.queryArray[a])return void this.$Modal.error({title:"提示",content:i[a]+"不能为空！"});var n=this.queryArray.beginTime,s=this.queryArray.endTime;if(new Date(n).getTime()>=new Date(s).getTime())return void this.$Modal.error({title:"提示",content:"开始时间不能大于结束时间"});if(Date.parse(this.beginDate)>Date.parse(this.endDate))return void this.$Modal.error({title:"提示",content:"活动开始时间不能大于活动结束时间"});for(var l in e.queryArray.groupItems){if(""==e.queryArray.groupItems[l].num||null==e.queryArray.groupItems[l].num)return void e.$Modal.error({title:"提示",content:"注意：请填写销售编码为"+e.queryArray.groupItems[l].spuCode+"的优惠价(单个)与数量(EA)"});if(e.queryArray.groupItems[l].promotionalPrice>e.queryArray.groupItems[l].marketPrice)return void e.$Modal.error({title:"提示",content:"注意：销售编码为"+e.queryArray.groupItems[l].spuCode+"的优惠价不可大于销售价"})}this.isDisable=!0,e.submit()},submit:function(){window.sessionStorage.groupPromotionEditParams=(0,c.default)(this.queryArray),this.$router.push({path:"groupGoods-detail"})},goBack:function(){this.$router.go(-1)},storeGroup:function(){function t(){return e.apply(this,arguments)}var e=(0,s.default)(i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$util.ajax({method:"post",url:this.$util.apiConfig.promotionManage.warProgramme.storeGroup});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return t}(),storeGroupQuery:function(t){var e=this,r=this;r.storeGroupListQuery.page=t,r.storeGroupListQuery.rows=r.pageSize,r.storeGroupListQuery.t_i_m_e=(new Date).getTime(),this.$util.ajax({method:"post",url:r.$util.apiConfig.promotionManage.warProgramme.getStoreList,data:g.default.stringify(r.storeGroupListQuery)}).then(function(a){if(200==a.data.code){r.thisTableDataStore=[],r.currentPage=t,r.allThisTableDataStore=[];var o=a.data.result.records;for(var i in o){var n={groupName:o[i].groupName,scopeCode:o[i].storeCode,scopeId:o[i].id,scopeName:o[i].storeName,scopeType:2,storeNature:o[i].storeNature};r.allThisTableDataStore.push(n)}r.thisTableDataStore=r.allThisTableDataStore,r.totalCountStore=a.data.result.totalCount}else e.$Modal.error({title:"提示",content:a.data.message})}).catch(function(t){console.log("失败信息：",t)})},handelStore:function(t){this.storeGroupQuery(t)},selectionClickStore:function(t){this.selectionData=[],this.selectionData=t},addSelectStore:function(){var t=(0,c.default)(this.selectionData),e=JSON.parse(t),r=this;if(0==e.length)return void this.$Message.error("未选中门店！");var a=!1;if(0==this.promotionScopeDetailDTOList.length)this.promotionScopeDetailDTOList=e,a=!0;else for(var o in e){var i=!1;for(var n in this.promotionScopeDetailDTOList)e[o].scopeId==this.promotionScopeDetailDTOList[n].scopeId&&(i=!0);i||(a=!0,this.promotionScopeDetailDTOList.push(e[o]))}this.$Message.destroy(),a?r.$Message.success("添加成功！"):r.$Message.warning("门店已添加！")},changeScope:function(t){this.promotionScopeDetailDTOList=[],this.checkAllGroup=[],this.checkAll1=!1,this.checkAllStoreProp=[],this.checkAll=!1,this.indeterminateStoreProp=!1,this.indeterminateGroupProp=!1,this.queryArray.scopeType=t,1==t&&(this.promotionScopeDetailDTOList=[{scopeType:"1",scopeName:"全部门店"}])},pageSizeChange:function(t){this.pageSize=t,this.storeGroupQuery(1)},createSTimeChangeHandle:function(t){var e=new Date,r=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",a=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();new Date(t)<e?this.queryArray.beginTime=t.split(" ")[0]+" "+r+a+o:this.queryArray.beginTime=t,this.queryArray.beginTime>this.queryArray.endTime&&(this.queryArray.endTime="")},createETimeChangeHandle:function(t){this.queryArray.endTime=t},queryData:function(){var t=this;t.isDisable=!0,this.$util.ajax({method:"get",url:t.$util.apiConfig.promotionManage.warProgramme.groupGoods.getDetailUrl+"?id="+t.$route.query.id,data:""}).then(function(e){setTimeout(function(){t.isDisable=!1},500),200==e.data.code?(t.queryArray=e.data.result.detail,t.queryArray.beginTime=t.timestampToTime(t.queryArray.beginTime),t.queryArray.endTime=t.timestampToTime(t.queryArray.endTime),t.thisTableData=e.data.result.detail.groupItems,t.queryArray.channel&&(t.platform=t.queryArray.channel.split(",")),t.scope=String(t.queryArray.scopeType),t.promotionScopeDetailDTOList=e.data.result.detail.groupScopes,3==t.queryArray.scopeType&&(t.promotionScopeDetailDTOList.forEach(function(e){e.scopeCode&&t.checkAllStoreProp.push(e.scopeCode),e.storeGroupId&&t.checkAllGroup.push(Number(e.storeGroupId))}),t.checkAllStoreProp&&(t.checkAllStoreProp.length==t.static.storeProp.length?(t.checkAll=!0,t.indeterminateStoreProp=!1):0!=t.checkAllStoreProp.length?t.indeterminateStoreProp=!0:t.indeterminateStoreProp=!1),t.checkAllGroup&&(t.checkAllGroup.length==t.static.groupArr.length?(t.checkAll1=!0,t.indeterminateGroupProp=!1):0!=t.checkAllGroup.length?t.indeterminateGroupProp=!0:t.indeterminateGroupProp=!1))):t.$Modal.error({title:"提示",content:e.data.message})}).catch(function(e){t.isDisable=!1,console.log("失败信息：",e)})},timestampToTime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},checkAllStorePropChange:function(t){t.length===this.static.storeProp.length?(this.indeterminateStoreProp=!1,this.checkAll=!0):t.length>0?(this.indeterminateStoreProp=!0,this.checkAll=!1):(this.indeterminateStoreProp=!1,this.checkAll=!1)},handleCheckAllStoreProp:function(){this.indeterminateStoreProp?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminateStoreProp=!1,this.checkAll?this.checkAllStoreProp=this.static.storeProp:this.checkAllStoreProp=[]},checkAllGroupChange:function(t){t.length===this.static.groupArr.length?(this.indeterminateGroupProp=!1,this.checkAll1=!0):t.length>0?(this.indeterminateGroupProp=!0,this.checkAll1=!1):(this.indeterminateGroupProp=!1,this.checkAll1=!1)},handleCheckAllGroup:function(){this.checkAll1=!this.checkAll1,this.checkAll1?this.checkAllGroup=this.static.groupArr.map(function(t){return t.id}):this.checkAllGroup=[],this.indeterminateGroupProp=!1}},created:function(){function t(){return e.apply(this,arguments)}var e=(0,s.default)(i.default.mark(function t(){var e,r,a,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storeGroup();case 2:e=t.sent,r=this;try{200==e.data.code&&(a=(0,c.default)(e.data.result.storeGroupList),this.static.groupArr=JSON.parse(a),this.storeGroupList=e.data.result.storeGroupList,(o=window.sessionStorage.groupPromotionEditParams)&&(o=JSON.parse(o),3==o.scopeType&&(r.checkAllGroup=[],o.groupScopes.forEach(function(t){t.storeGroupId&&r.checkAllGroup.push(Number(t.storeGroupId))}),r.checkAllGroup=(0,h.default)(new p.default(r.checkAllGroup)),r.checkAllGroup&&(r.checkAllGroup.length==r.static.groupArr.length?(r.checkAll1=!0,r.indeterminateGroupProp=!1):0!=r.checkAllGroup.length?r.indeterminateGroupProp=!0:r.indeterminateGroupProp=!1))))}catch(t){console.error(t),this.$Message.error("网络异常")}case 5:case"end":return t.stop()}},t,this)}));return t}(),mounted:function(){var t=this,e=this;this.selectItemAndSpu(1),this.storeGroupQuery(1),this.itemCategoryList(),this.$route.query.id&&this.queryData();var r=window.sessionStorage.groupPromotionEditParams;r&&(r=JSON.parse(r),this.queryArray=r,this.thisTableData=r.groupItems,this.queryArray.channel&&(this.platform=this.queryArray.channel.split(",")),this.scope=String(this.queryArray.scopeType),this.promotionScopeDetailDTOList=r.groupScopes,3==this.scope&&(this.checkAllStoreProp=[],this.promotionScopeDetailDTOList.forEach(function(e){e.scopeCode&&t.checkAllStoreProp.push(e.scopeCode)}),e.checkAllStoreProp=(0,h.default)(new p.default(e.checkAllStoreProp)),e.checkAllStoreProp&&(e.checkAllStoreProp.length==e.static.storeProp.length?(e.checkAll=!0,e.indeterminateStoreProp=!1):0!=e.checkAllStoreProp.length?e.indeterminateStoreProp=!0:e.indeterminateStoreProp=!1)))}}},2123:function(t,e,r){var a=r(2124);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(43)("0d49e19b",a,!1,{})},2124:function(t,e,r){e=t.exports=r(42)(!1),e.push([t.i,"\n.ListName[data-v-feab948a]{\n    text-align: right;\n    line-height: 42px;\n    color: #747474;\n    font-size: 12px;\n    margin-right: 16px;\n}\n.modalName[data-v-feab948a]{\n    line-height: 32px;\n    text-align: right;\n    margin-right:4px;\n}\n.content[data-v-feab948a]{\n    line-height: 42px;\n    color: #747474;\n}\n.but[data-v-feab948a]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n\n",""])},2125:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"auto",background:"#fff",padding:"20px"}},[r("Row",{staticStyle:{padding:"20px 20px 0"}},[r("row",{staticStyle:{"margin-bottom":"14px"}},[r("Col",{attrs:{span:"7"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("组合商品名称 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Input",{attrs:{placeholder:"",clearable:""},model:{value:t.queryArray.groupName,callback:function(e){t.$set(t.queryArray,"groupName",e)},expression:"queryArray.groupName"}})],1)],1),t._v(" "),r("Col",{attrs:{span:"7"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("开始时间 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("DatePicker",{attrs:{type:"datetime",value:t.queryArray.beginTime,options:t.startTimeOptions,placeholder:"请选择时间"},on:{"on-change":t.createSTimeChangeHandle}})],1)],1),t._v(" "),r("Col",{attrs:{span:"7"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("结束时间 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("DatePicker",{attrs:{type:"datetime",value:t.queryArray.endTime,options:t.createDateOptions,placeholder:"请选择时间"},on:{"on-change":t.createETimeChangeHandle}})],1)],1)],1),t._v(" "),r("row",{staticStyle:{"margin-bottom":"14px"}},[r("Col",{attrs:{span:"7"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("指定商品 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Button",{on:{click:function(e){t.modal=!0}}},[t._v("选择")])],1)],1)],1)],1),t._v(" "),r("row",{staticStyle:{padding:"0 20px"}},[r("p",{staticStyle:{"padding-bottom":"6px"}},[t._v("指定的商品:")]),t._v(" "),r("order-table",{attrs:{refs:t.tableRef,columnsList:t.columnsList,thisTableData:t.thisTableData,loading:t.loading}})],1),t._v(" "),r("div",{staticStyle:{padding:"20px",overflow:"hidden"}}),t._v(" "),r("div",[r("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n            活动范围\n        ")]),t._v(" "),r("row",{staticStyle:{"padding-left":"20px","padding-top":"8px"}},[r("span",{staticStyle:{float:"left"}},[t._v("\n        执行范围:  \n        ")]),t._v(" "),r("span",{staticStyle:{float:"left"}},[r("RadioGroup",{on:{"on-change":t.changeScope},model:{value:t.scope,callback:function(e){t.scope=e},expression:"scope"}},[r("Radio",{attrs:{label:"1"}},[t._v("全部门店")]),t._v(" "),r("Radio",{attrs:{label:"2"}},[t._v("指定门店")]),t._v(" "),r("Radio",{attrs:{label:"3"}},[t._v("指定门店类型")])],1)],1)]),t._v(" "),3==t.scope?r("div",{staticStyle:{"margin-left":"60px"}},[r("Form",{staticClass:"clearfix",attrs:{"label-width":80}},[r("Row",[r("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"门店性质"}},[r("Checkbox",{staticStyle:{float:"left"},attrs:{value:t.checkAll,indeterminate:t.indeterminateStoreProp},nativeOn:{click:function(e){return e.preventDefault(),t.handleCheckAllStoreProp(e)}}},[t._v("全选")]),t._v(" "),r("CheckboxGroup",{staticStyle:{float:"left"},on:{"on-change":t.checkAllStorePropChange},model:{value:t.checkAllStoreProp,callback:function(e){t.checkAllStoreProp=e},expression:"checkAllStoreProp"}},t._l(t.static.storeProp,function(e){return r("Checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}))],1)],1),t._v(" "),r("Row",[r("FormItem",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"自定义组"}},[r("Checkbox",{staticStyle:{float:"left"},attrs:{value:t.checkAll1,indeterminate:t.indeterminateGroupProp},nativeOn:{click:function(e){return e.preventDefault(),t.handleCheckAllGroup(e)}}},[t._v("全选")]),t._v(" "),r("CheckboxGroup",{staticStyle:{float:"left"},on:{"on-change":t.checkAllGroupChange},model:{value:t.checkAllGroup,callback:function(e){t.checkAllGroup=e},expression:"checkAllGroup"}},t._l(t.static.groupArr,function(e){return r("Checkbox",{key:e.id,attrs:{label:e.id}},[t._v(t._s(e.groupName))])}))],1)],1)],1)],1):t._e(),t._v(" "),r("row",{staticStyle:{"padding-left":"20px","padding-top":"8px"}},[r("span",{staticStyle:{float:"left"}},[t._v("\n        发布平台:   \n        ")]),t._v(" "),r("span",[r("CheckboxGroup",{staticStyle:{float:"left"},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}},[r("Checkbox",{attrs:{label:"SFA"}}),t._v(" "),r("Checkbox",{attrs:{label:"O2O"}})],1)],1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==t.scope,expression:"scope ==2"}],staticStyle:{"margin-top":"20px","padding-top":"20px","border-top":"1px dashed #e5e5e5"}},[r("row",{staticStyle:{"margin-bottom":"14px"}},[r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("门店编码 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.storeCodeLike,callback:function(e){t.$set(t.storeGroupListQuery,"storeCodeLike",e)},expression:"storeGroupListQuery.storeCodeLike"}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("门店名称 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Input",{attrs:{clearable:""},model:{value:t.storeGroupListQuery.storeNameLike,callback:function(e){t.$set(t.storeGroupListQuery,"storeNameLike",e)},expression:"storeGroupListQuery.storeNameLike "}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("门店类型 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.storeGroupListQuery.storeNature,callback:function(e){t.$set(t.storeGroupListQuery,"storeNature",e)},expression:"storeGroupListQuery.storeNature"}},t._l(t.storeType,function(e){return r("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"ListName",attrs:{span:"7"}},[t._v("分组 :")]),t._v(" "),r("Col",{staticClass:"content",attrs:{span:"15"}},[r("Select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.storeGroupListQuery.customizeGroupId,callback:function(e){t.$set(t.storeGroupListQuery,"customizeGroupId",e)},expression:"storeGroupListQuery.customizeGroupId"}},[r("Option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.storeGroupList,function(e){return r("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.groupName))])})],2)],1)],1)],1),t._v(" "),r("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"0"}},[r("Page",{staticStyle:{display:"inline-block",float:"left","margin-left":"20px"},attrs:{total:t.totalCountStore,current:t.currentPage,"page-size":5,"show-total":"","show-sizer":"","page-size-opts":t.pageArr,"show-elevator":""},on:{"on-change":t.handelStore,"on-page-size-change":t.pageSizeChange}}),t._v(" "),r("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"large"},on:{click:function(e){t.storeGroupQuery(1)}}},[t._v("查 询")]),t._v(" "),r("Button",{attrs:{size:"large"},on:{click:function(e){t.addSelectStore()}}},[t._v("添 加")])],1),t._v(" "),r("row",{staticStyle:{padding:"20px"}},[r("order-table",{attrs:{refs:t.tableRefStore,columnsList:t.columnsListStore,thisTableData:t.thisTableDataStore,loading:t.loading},on:{listenCheckbox:t.selectionClickStore}})],1),t._v(" "),r("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n                已选中门店\n            ")]),t._v(" "),r("row",{staticStyle:{padding:"20px"}},[r("order-table",{attrs:{refs:t.tableRefList,columnsList:t.columnsList2,thisTableData:t.promotionScopeDetailDTOList,loading:t.loading}})],1)],1),t._v(" "),r("row",{staticClass:"but",staticStyle:{"text-align":"center"}},[r("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"large",disabled:t.isDisable},on:{click:function(e){t.checkGoodsList()}}},[t._v("保 存")]),t._v(" "),r("Button",{attrs:{size:"large"},on:{click:t.goBack}},[t._v("取 消")])],1)],1),t._v(" "),r("Modal",{attrs:{title:"选择商品",styles:{top:"20px"},width:"900px",scrollable:!0,"mask-closable":!1},on:{"on-ok":t.addSelect},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("Row",{},[r("row",{staticStyle:{"margin-bottom":"14px"}},[r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("销售编码 : ")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Input",{attrs:{value:t.selectItem.spuCode,clearable:""},on:{"on-change":function(e){return t.initNumber(e,"spuCode")}}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("条形码 :")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Input",{attrs:{value:t.selectItem.code69,clearable:""},on:{"on-change":function(e){return t.initNumber(e,"code69")}}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品名称 :")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Input",{attrs:{clearable:""},model:{value:t.selectItem.itemName,callback:function(e){t.$set(t.selectItem,"itemName",e)},expression:"selectItem.itemName"}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("商品状态 : ")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Select",{staticStyle:{width:"100%"},model:{value:t.selectItem.itemStatus,callback:function(e){t.$set(t.selectItem,"itemStatus",e)},expression:"selectItem.itemStatus"}},t._l(t.itemStatus,function(e){return r("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),r("row",{staticStyle:{"margin-bottom":"14px"}},[r("Col",{attrs:{span:"12"}},[r("Col",{staticClass:"modalName",staticStyle:{width:"72px"},attrs:{span:"4"}},[t._v("商品价格 :")]),t._v(" "),r("Col",{attrs:{span:"19"}},[r("Input",{staticStyle:{width:"44%"},attrs:{value:t.selectItem.marketPriceSearchMin,clearable:""},on:{"on-change":function(e){return t.initNumberMoney(e,"marketPriceSearchMin")},"on-blur":function(e){return t.initNumberMoneyFocus(e,"marketPriceSearchMin")}}}),t._v(" ~\n                    "),r("Input",{staticStyle:{width:"44%"},attrs:{value:t.selectItem.marketPriceSearchMax,clearable:""},on:{"on-change":function(e){return t.initNumberMoney(e,"marketPriceSearchMax")},"on-blur":function(e){return t.initNumberMoneyFocus(e,"marketPriceSearchMax")}}})],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("品牌 :")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":t.getOption},model:{value:t.selectItem.itemCategory11Id,callback:function(e){t.$set(t.selectItem,"itemCategory11Id",e)},expression:"selectItem.itemCategory11Id"}},t._l(t.itemCategoryArray,function(e){return r("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1),t._v(" "),r("Col",{attrs:{span:"6"}},[r("Col",{staticClass:"modalName",attrs:{span:"9"}},[t._v("品类 :")]),t._v(" "),r("Col",{attrs:{span:"14"}},[r("Select",{staticStyle:{width:"100%"},attrs:{clearable:"","label-in-value":!0},on:{"on-change":t.getOption1},model:{value:t.selectItem.itemCategory21Id,callback:function(e){t.$set(t.selectItem,"itemCategory21Id",e)},expression:"selectItem.itemCategory21Id"}},t._l(t.categoryArray,function(e){return r("Option",{key:e.cid,attrs:{value:e.cid}},[t._v(t._s(e.cName))])}))],1)],1)],1),t._v(" "),r("row",{staticClass:"but",staticStyle:{"text-align":"right",padding:"5px 0 0","border-top":"1px dotted #e5e5e5"}},[r("Button",{attrs:{type:"primary"},on:{click:function(e){t.selectItemAndSpu(1)}}},[t._v("查 询")])],1),t._v(" "),r("row",{staticStyle:{padding:"10px 0 0"}},[r("order-table",{attrs:{refs:t.tableRef2,columnsList:t.columnsListItem,thisTableData:t.thisTableDataItem,loading:t.loading,getHeight:250},on:{listenCheckbox:t.selectionClick}}),t._v(" "),r("div",{staticStyle:{padding:"10px 0 0",overflow:"hidden"}},[r("Page",{staticStyle:{float:"right"},attrs:{current:t.selectItem.page,total:t.totalCount,"page-size":10,"show-total":"","show-elevator":""},on:{"on-change":t.selectItemAndSpu}})],1)],1)],1)],1),t._v(" "),t.isDisable?r("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.default=i},601:function(t,e,r){"use strict";function a(t){c||r(900)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(891),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);var s=r(902),l=r.n(s),c=!1,u=r(13),p=a,d=u(i.a,l.a,!1,p,null,null);d.options.__file="src/views/tables/components/orderTable.vue",e.default=d.exports},740:function(t,e,r){"use strict";function a(t){c||r(2123)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(1622),i=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);var s=r(2125),l=r.n(s),c=!1,u=r(13),p=a,d=u(i.a,l.a,!1,p,"data-v-feab948a",null);d.options.__file="src/views/promotion-manage/war-programme/group-goods/groupGoods-edit.vue",e.default=d.exports},891:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,r){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},r.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},897:function(t,e,r){var a=r(44);t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},900:function(t,e,r){var a=r(901);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(43)("296919d0",a,!1,{})},901:function(t,e,r){e=t.exports=r(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.default=i},909:function(t,e,r){t.exports={default:r(910),__esModule:!0}},910:function(t,e,r){r(151),r(75),r(100),r(911),r(917),r(920),r(922),t.exports=r(11).Set},911:function(t,e,r){"use strict";var a=r(912),o=r(897);t.exports=r(913)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return a.def(o(this,"Set"),t=0===t?0:t,t)}},a)},912:function(t,e,r){"use strict";var a=r(32).f,o=r(148),i=r(245),n=r(64),s=r(244),l=r(240),c=r(147),u=r(246),p=r(248),d=r(37),h=r(243).fastKey,m=r(897),g=d?"_s":"size",f=function(t,e){var r,a=h(e);if("F"!==a)return t._i[a];for(r=t._f;r;r=r.n)if(r.k==e)return r};t.exports={getConstructor:function(t,e,r,c){var u=t(function(t,a){s(t,u,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=a&&l(a,r,t[c],t)});return i(u.prototype,{clear:function(){for(var t=m(this,e),r=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete r[a.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var r=m(this,e),a=f(r,t);if(a){var o=a.n,i=a.p;delete r._i[a.i],a.r=!0,i&&(i.n=o),o&&(o.p=i),r._f==a&&(r._f=o),r._l==a&&(r._l=i),r[g]--}return!!a},forEach:function(t){m(this,e);for(var r,a=n(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(a(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!f(m(this,e),t)}}),d&&a(u.prototype,"size",{get:function(){return m(this,e)[g]}}),u},def:function(t,e,r){var a,o,i=f(t,e);return i?i.v=r:(t._l=i={i:o=h(e,!0),k:e,v:r,p:a=t._l,n:void 0,r:!1},t._f||(t._f=i),a&&(a.n=i),t[g]++,"F"!==o&&(t._i[o]=i)),t},getEntry:f,setStrong:function(t,e,r){c(t,e,function(t,r){this._t=m(t,e),this._k=r,this._l=void 0},function(){for(var t=this,e=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==e?u(0,r.k):"values"==e?u(0,r.v):u(0,[r.k,r.v]):(t._t=void 0,u(1))},r?"entries":"values",!r,!0),p(e)}}},913:function(t,e,r){"use strict";var a=r(12),o=r(36),i=r(243),n=r(66),s=r(45),l=r(245),c=r(240),u=r(244),p=r(44),d=r(77),h=r(32).f,m=r(914)(0),g=r(37);t.exports=function(t,e,r,f,v,y){var b=a[t],k=b,S=v?"set":"add",_=k&&k.prototype,C={};return g&&"function"==typeof k&&(y||_.forEach&&!n(function(){(new k).entries().next()}))?(k=e(function(e,r){u(e,k,t,"_c"),e._c=new b,void 0!=r&&c(r,v,e[S],e)}),m("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in _&&(!y||"clear"!=t)&&s(k.prototype,t,function(r,a){if(u(this,k,t),!e&&y&&!p(r))return"get"==t&&void 0;var o=this._c[t](0===r?0:r,a);return e?this:o})}),y||h(k.prototype,"size",{get:function(){return this._c.size}})):(k=f.getConstructor(e,t,v,S),l(k.prototype,r),i.NEED=!0),d(k,t),C[t]=k,o(o.G+o.W+o.F,C),y||f.setStrong(k,t,v),k}},914:function(t,e,r){var a=r(64),o=r(149),i=r(98),n=r(99),s=r(915);t.exports=function(t,e){var r=1==t,l=2==t,c=3==t,u=4==t,p=6==t,d=5==t||p,h=e||s;return function(e,s,m){for(var g,f,v=i(e),y=o(v),b=a(s,m,3),k=n(y.length),S=0,_=r?h(e,k):l?h(e,0):void 0;k>S;S++)if((d||S in y)&&(g=y[S],f=b(g,S,v),t))if(r)_[S]=f;else if(f)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:_.push(g)}else if(u)return!1;return p?-1:c||u?u:_}}},915:function(t,e,r){var a=r(916);t.exports=function(t,e){return new(a(t))(e)}},916:function(t,e,r){var a=r(44),o=r(247),i=r(14)("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),a(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},917:function(t,e,r){var a=r(36);a(a.P+a.R,"Set",{toJSON:r(918)("Set")})},918:function(t,e,r){var a=r(150),o=r(919);t.exports=function(t){return function(){if(a(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},919:function(t,e,r){var a=r(240);t.exports=function(t,e){var r=[];return a(t,!1,r.push,r,e),r}},920:function(t,e,r){r(921)("Set")},921:function(t,e,r){"use strict";var a=r(36);t.exports=function(t){a(a.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},922:function(t,e,r){r(923)("Set")},923:function(t,e,r){"use strict";var a=r(36),o=r(76),i=r(64),n=r(240);t.exports=function(t){a(a.S,t,{from:function(t){var e,r,a,s,l=arguments[1];return o(this),e=void 0!==l,e&&o(l),void 0==t?new this:(r=[],e?(a=0,s=i(l,arguments[2],2),n(t,!1,function(t){r.push(s(t,a++))})):n(t,!1,r.push,r),new this(r))}})}}});