webpackJsonp([113,213],{1644:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(65),i=r(n),s=a(239),o=r(s),l=a(601),c=r(l);e.default={name:"expensesPromotion-detail",components:{orderTable:c.default},data:function(){return{queryArray:{title:"",beginDate:"",endDate:"",brandId:"",brandName:"",budget:"",cid:"",cname:"",code:"",costPromotionGoodsDTOList:[],costPromotionRequireDTOList:[],costPromotionScopeDTOList:[],platform:"",description:""},itemCategoryArray:[{cName:""}],categoryArray:[{cName:""}],social:[],requireList:[{requireName:"陈列",detail:""},{requireName:"分销",detail:""},{requireName:"海报",detail:""},{requireName:"物料制作费",detail:""},{requireName:"人员激励",detail:""},{requireName:"其他",detail:""}],loading:!1,itemStatus:[{value:"3",label:"待上架"},{value:"4",label:"在售"},{value:"5",label:"已下架"},{value:"14",label:"在售(平台)"},{value:"15",label:"已下架((平台)"}],tableRefGetItem:"",columnsListGetItem:[{title:"序号",width:62,align:"center",type:"index"},{title:"销售编码",key:"code79",align:"center"},{title:"条形码",key:"barCode",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cname",align:"center"}],thisTableDataGetItem:[],platform:[],tableRefGetStore:"",totalCountStore:0,columnsListGetStore:[{title:"序号",width:70,align:"center",type:"index"},{title:"门店编号",key:"storeCode",align:"center"},{title:"门店名称",key:"storeName",align:"center"},{title:"门店类型",key:"storeNature",align:"center"},{title:"自定义组",key:"groupName",align:"center"}],thisTableDataGetStore:[],totalCount:0}},methods:{goback:function(){this.$router.push({path:"pureExpenses-promotion"})},timestampToTime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},queryDetail:function(){var t=this;console.log((0,i.default)(this.queryArray)),this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warProgramme.expensesPromotion.getDetailUrl,data:o.default.stringify({id:this.$route.query.id})}).then(function(e){if(console.log((0,i.default)(e.data)),"200"==e.data.code){var a="",r="",n=e.data.result.costPromotionInfo;(n.beginDate||null!==n.beginDate)&&(a=new Date(n.beginDate)),(n.endDate||null!==n.endDate)&&(r=new Date(n.endDate)),t.queryArray.title=n.title,t.queryArray.code=n.code,t.queryArray.beginDate=t.timestampToTime(a),t.queryArray.endDate=t.timestampToTime(r),t.queryArray.budget=n.budget,t.itemCategoryArray=[{cid:n.brandId,cName:n.brandName}],t.categoryArray=[{cid:n.cid,cName:n.cname}],t.queryArray.description=n.description,t.thisTableDataGetItem=n.costPromotionGoodsDTOList,t.thisTableDataGetStore=e.data.result.storeScope,t.platform=n.platform,t.requireList=n.costPromotionRequireDTOList}}).catch(function(t){console.log(t)})}},mounted:function(){if(""!=this.$route.query.id||null!=this.$route.query.id||void 0!=this.$route.query.id)return void this.queryDetail()}}},2197:function(t,e,a){var r=a(2198);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(43)("39545be0",r,!1,{})},2198:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.ListName[data-v-d7222cd4]{\n    text-align: right;\n    line-height: 42px;\n    color: #747474;\n    font-size: 12px;\n    margin-right: 10px;\n}\n.content[data-v-d7222cd4]{\n    line-height: 42px;\n    color: #747474;\n}\n.modalName[data-v-d7222cd4]{\n    line-height: 32px;\n    text-align: right;\n    margin-right:4px;\n}\n.but[data-v-d7222cd4]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n.activeDscIpt[data-v-d7222cd4]{\n    width: 300px;\n    overflow: hidden;\n    margin-bottom: 8px;\n}\n",""])},2199:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"auto",background:"#fff",padding:"20px"}},[a("Row",{staticStyle:{padding:"20px 20px 0"}},[a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动编码 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{placeholder:"系统自动生成",disabled:""},model:{value:t.queryArray.code,callback:function(e){t.$set(t.queryArray,"code",e)},expression:"queryArray.code"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动名称 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{disabled:""},model:{value:t.queryArray.title,callback:function(e){t.$set(t.queryArray,"title",e)},expression:"queryArray.title"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("开始时间:")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("DatePicker",{attrs:{type:"datetime",disabled:"",readonly:"",format:"yyyy-MM-dd "},model:{value:t.queryArray.beginDate,callback:function(e){t.$set(t.queryArray,"beginDate",e)},expression:"queryArray.beginDate"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("结束时间:")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("DatePicker",{attrs:{type:"datetime",disabled:"",readonly:"",format:"yyyy-MM-dd "},model:{value:t.queryArray.endDate,callback:function(e){t.$set(t.queryArray,"endDate",e)},expression:"queryArray.endDate"}})],1)],1)],1),t._v(" "),a("row",{staticStyle:{"margin-bottom":"14px"}},[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动预算 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{disabled:""},model:{value:t.queryArray.budget,callback:function(e){t.$set(t.queryArray,"budget",e)},expression:"queryArray.budget"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定品牌 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{disabled:""},model:{value:t.itemCategoryArray[0].cName,callback:function(e){t.$set(t.itemCategoryArray[0],"cName",e)},expression:"itemCategoryArray[0].cName"}})],1)],1),t._v(" "),a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定品类 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{attrs:{disabled:""},model:{value:t.categoryArray[0].cName,callback:function(e){t.$set(t.categoryArray[0],"cName",e)},expression:"categoryArray[0].cName"}})],1)],1)],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动描述 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[a("Input",{staticStyle:{width:"430px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},disabled:""},model:{value:t.queryArray.description,callback:function(e){t.$set(t.queryArray,"description",e)},expression:"queryArray.description"}})],1)],1)],1)],1),t._v(" "),a("row",{staticStyle:{padding:"0 20px"}},[a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定商品 :")])],1)],1),t._v(" "),a("order-table",{attrs:{refs:t.tableRefGetItem,columnsList:t.columnsListGetItem,thisTableData:t.thisTableDataGetItem,loading:t.loading}})],1),t._v(" "),a("div",{staticStyle:{padding:"20px",overflow:"hidden"}}),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("活动描述 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},t._l(t.requireList,function(e,r){return a("div",{staticClass:"activeDscIpt"},[a("span",[t._v(t._s(e.requireName)+":")]),t._v(" "),a("Input",{staticStyle:{width:"180px"},attrs:{clearable:"",disabled:""},model:{value:e.detail,callback:function(a){t.$set(e,"detail",a)},expression:"itme.detail"}})],1)}))],1)],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定范围 :")])],1)],1),t._v(" "),a("row",{staticStyle:{padding:"0 20px"}},[a("order-table",{attrs:{refs:t.tableRefGetStore,columnsList:t.columnsListGetStore,thisTableData:t.thisTableDataGetStore,loading:t.loading}})],1),t._v(" "),a("row",[a("Col",{attrs:{span:"6"}},[a("Col",{staticClass:"ListName",attrs:{span:"6"}},[t._v("指定平台 :")]),t._v(" "),a("Col",{staticClass:"content",attrs:{span:"15"}},[t._v("\n       "+t._s(t.platform)+"\n        ")])],1)],1),t._v(" "),a("row",{staticClass:"but",staticStyle:{"text-align":"center"}},[a("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",size:"large"},on:{click:t.goback}},[t._v("返 回")])],1)],1)},n=[];r._withStripped=!0;var i={render:r,staticRenderFns:n};e.default=i},601:function(t,e,a){"use strict";function r(t){c||a(900)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(891),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a(902),l=a.n(o),c=!1,d=a(13),u=r,p=d(i.a,l.a,!1,u,null,null);p.options.__file="src/views/tables/components/orderTable.vue",e.default=p.exports},761:function(t,e,a){"use strict";function r(t){c||a(2197)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1644),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var o=a(2199),l=a.n(o),c=!1,d=a(13),u=r,p=d(i.a,l.a,!1,u,"data-v-d7222cd4",null);p.options.__file="src/views/promotion-manage/war-programme/pureExpenses-promotion/pureExpensesPromotion-detail.vue",e.default=p.exports},891:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,a){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},a.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},900:function(t,e,a){var r=a(901);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(43)("296919d0",r,!1,{})},901:function(t,e,a){e=t.exports=a(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},n=[];r._withStripped=!0;var i={render:r,staticRenderFns:n};e.default=i}});