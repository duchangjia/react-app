webpackJsonp([101],{1437:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},1513:function(e,t,r){e.exports=r.p+"0f18ecbacd58024a55f12b55863e47bf.jpg"},1768:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(241),i=a(n),s=r(146),o=a(s),u=r(242),l=a(u),c=r(898),d=r(239);t.default={data:function(){var e=this;return{apiGroup:this.$util.apiConfig.traderManage.productManage,imgBaseUrl:window.imgSrc||"",query:{page:1,goodsExportType:1,checkedItemIds:"",listFor:"",cid:"",cid1:"",id:"",itemName:"",code69:"",spuCode:"",code80:"",itemStatus:"",minPrice:"",maxPrice:"",createStartTime:"",createEndTime:""},result:[],resultLoading:!1,resultColumns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"图片",key:"pictureUrl",minWidth:130,align:"center",render:function(t,r){var a=t("img",{attrs:{style:"width:75px;height:75px;vertical-align:middle;overflow:hidden;",src:r.row.pictureUrl&&null!==r.row.pictureUrl?e.imgBaseUrl+r.row.pictureUrl:""}});return r.row.pictureUrl?t("span",{class:{"image-exist":!0}},[a]):t("span",{class:{"image-empty":!0}})}},{title:"商品名称",align:"center",minWidth:90,key:"itemName"},{title:"销售分类",align:"center",minWidth:90,key:"itemCategoryName",render:function(e,t){return e("span",[t.row.itemCategory11Name,t.row.itemCategory21Name].join(" / "))}},{title:"转化系数",align:"center",minWidth:90,key:"changeUnitRate"},{title:"销售编码",align:"center",key:"code79",minWidth:75,width:150},{title:"条形码",align:"center",key:"code69",minWidth:75,width:150},{title:"供货价(元/箱)",align:"center",minWidth:130,key:"marketPrice",render:function(e,t){return e("span","0")}},{title:"区间价(元/箱)",minWidth:130,align:"center",render:function(e,t){return e("span","0 - 0")}},{title:"商品状态",align:"center",minWidth:100,name:"itemStatus",render:function(e,t){var r="";switch(parseInt(t.row.itemStatus)){case 1:r="未发布";break;case 2:r="待审核";break;case 3:r="待上架";break;case 4:r="在售";break;case 5:r="已下架";break;case 6:r="锁定";break;case 7:r="申请解锁";break;case 14:r="在售（平台）";break;case 15:r="已下架（平台）"}return e("span",r)}},{title:"操作",align:"center",width:80,fixed:"right",render:function(t,r){var a=void 0,n="margin:2px 0;";return 3==r.row.itemStatus||5==r.row.itemStatus?a=t("Button",{props:{size:"small"},attrs:{style:n},on:{click:function(t){return e.handleUpAndDown([r.row],4)}}},"上架"):4==r.row.itemStatus&&(a=t("Button",{props:{size:"small"},attrs:{style:n},on:{click:function(t){return e.handleUpAndDown([r.row],5)}}},"下架")),t("span",[t("Button",{props:{size:"small"},attrs:{style:n},on:{click:function(t){return e.$router.push({name:"dealer-gift-detail",query:{type:"view",itemId:r.row.itemId}})}}},"查看"),t("Button",{props:{size:"small"},attrs:{style:n},on:{click:function(t){return e.$router.push({name:"dealer-gift-detail",query:{type:"edit",itemId:r.row.itemId}})}}},"修改"),a])}}],selectedResult:[],total:0,exportModalVisible:!1}},computed:{createEndTimeDisabled:function(){if(this.query.createStartTime){var e=this;return{disabledDate:function(t){return t.getTime()<e.query.createStartTime.getTime()}}}},createStartTimeDisabled:function(){if(this.query.createEndTime){var e=this;return{disabledDate:function(t){return t.getTime()>e.query.createEndTime.getTime()}}}}},mounted:function(){this.getResult()},methods:{getResult:function(){function e(){return t.apply(this,arguments)}var t=(0,l.default)(i.default.mark(function e(){var t,r,a,n,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="",r="",this.query.createStartTime&&(t=(0,c.formatDate)(this.query.createStartTime,"yyyy-MM-DD hh:mm:ss")),this.query.createEndTime&&(r=this.query.createEndTime&&(0,c.formatDate)(this.query.createEndTime,"yyyy-MM-DD")+" 23:59:59"),a=(0,o.default)({},this.query,{createStartTime:t,createEndTime:r,checkedItemIds:""}),this.resultLoading=!0,this.result=[],this.total=0,this.selectedResult=[],e.prev=9,e.next=12,this.$ajax.post(this.apiGroup.selfGiftList,d.stringify(a));case 12:n=e.sent,s=n.data,200==s.code?(s.result.records instanceof Array&&(this.result=s.result.records.concat()),s.result.totalCount&&null!==s.result.totalCount&&(this.total=s.result.totalCount)):this.$Message.error("商品列表获取失败"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(9),console.error(e.t0),this.$Message.error("商品列表获取失败");case 21:this.resultLoading=!1;case 22:case"end":return e.stop()}},e,this,[[9,17]])}));return e}(),handleResetBtnClick:function(){this.query={page:1,goodsExportType:1,checkedItemIds:"",listFor:"",cid:"",cid1:"",id:"",itemName:"",code69:"",spuCode:"",code80:"",itemStatus:"",minPrice:"",maxPrice:"",createStartTime:"",createEndTime:""},this.getResult()},handleNumberINputBlur:function(e){var t=this,r=this.query[e];isNaN(parseFloat(r))&&setTimeout(function(r){return t.query[e]=""})},handleQueryBtnClick:function(){this.query.page=1,this.getResult()},handleSelectionChange:function(e){var t=e.map(function(e){return e.itemId});this.selectedResult=e,this.query.checkedItemIds=t.join(",")},handleUpAndDown:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,l.default)(i.default.mark(function e(t,r){var a,n,s,o,u,l,c=this;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<=0)){e.next=2;break}return e.abrupt("return",this.$Modal.warning({content:"请选择需要设置的商品!"}));case 2:if(a=[],n=[],s=t.map(function(e){var t=e.itemStatus,i=e.itemName;return 4==r?"3"!=t&&"5"!=t&&a.push("【"+i+"】"):5==r&&"4"!=t&&a.push("【"+i+"】"),"14"!=t&&"15"!=t||n.push("<p>商品【"+i+"】已被平台上/下架，不允许执行此操作\n</p><br>"),e.itemId}),!(n.length>0)){e.next=7;break}return e.abrupt("return",this.$Modal.error({content:error.join(""),width:600}));case 7:if(!(a.length>0)){e.next=9;break}return e.abrupt("return",this.$Modal.error({content:"商品 "+a.join(" ")+" 不允许执行此操作!"}));case 9:return e.prev=9,o={itemIdStr:s.join(","),status:r},e.next=13,this.$ajax.post(this.apiGroup.goodsPublish50,d.stringify(o));case 13:u=e.sent,l=u.data,l.message?this.$Modal.info({content:l.message,onOk:function(e){return c.getResult()}}):this.$Message.error("请求发送失败"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),this.$Message.error("请求发送失败");case 21:case"end":return e.stop()}},e,this,[[9,18]])}));return e}(),exportList:function(){var e=this;if(2==this.query.goodsExportType&&0==this.query.checkedItemIds.length)return this.$Modal.warning({content:"请选择要导出的商品"});document.getElementById("query-area").submit(),setTimeout(function(t){return e.exportModalVisible=!1},1e3)}},activated:function(){this.getResult()}}},2648:function(e,t,r){var a=r(2649);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("21314b0a",a,!1,{})},2649:function(e,t,r){t=e.exports=r(42)(!1),t.push([e.i,"\n.dealer-gift[data-v-1ed5d032] {\n  min-height: 500px;\n}\n.flr[data-v-1ed5d032] {\n  float: right;\n}\n.wd-80[data-v-1ed5d032] {\n  width: 80px;\n}\n.wd-220[data-v-1ed5d032] {\n  width: 220px;\n}\n#query-area .bfc[data-v-1ed5d032] {\n  width: 100%;\n  overflow: hidden;\n  clear: both;\n}\n#query-area .bfc > .flr[data-v-1ed5d032] {\n  width: 120px;\n  text-align: center;\n  min-height: 100px;\n}\n#query-area .bfc > .flr .btn[data-v-1ed5d032] {\n  margin: 10px 0;\n}\n#query-area .bfc .left[data-v-1ed5d032] {\n  padding-top: 10px;\n  min-height: 100px;\n  width: auto;\n  overflow: hidden;\n}\n#query-area .bfc .left .item[data-v-1ed5d032] {\n  display: inline-block;\n}\n#query-area .bfc .left .up-and-down .btn[data-v-1ed5d032] {\n  margin-right: 10px;\n}\n.result[data-v-1ed5d032] {\n  margin-top: 20px;\n  overflow: hidden;\n}\n.page[data-v-1ed5d032] {\n  float: right;\n  margin: 10px;\n}\n",""])},2650:function(e,t,r){var a=r(2651);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(43)("42aa58a8",a,!1,{})},2651:function(e,t,r){var a=r(1437);t=e.exports=r(42)(!1),t.push([e.i,"\n.image-empty{\r\n    height: 75px;\r\n    width: 75px;\r\n    display: block;\r\n    background: url("+a(r(1513))+") no-repeat;\r\n    background-size: 100%;    \r\n    margin: 10px;\n}\n.image-exist{\r\n     height: 75px;\r\n     width: 75px;\r\n     display: block;\r\n     margin: 10px;\n}\r\n",""])},2652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Card",{staticClass:"dealer-gift"},[r("div",{staticClass:"query"},[r("Form",{attrs:{id:"query-area",method:"get",action:e.$util.baseUrl+e.$util.apiConfig.traderManage.productManage.goodsExportXlsUrl,"label-width":80}},[r("input",{attrs:{type:"hidden",name:"page",value:"1"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.goodsExportType,expression:"query.goodsExportType"}],attrs:{type:"hidden",name:"goodsExportType"},domProps:{value:e.query.goodsExportType},on:{input:function(t){t.target.composing||e.$set(e.query,"goodsExportType",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.checkedItemIds,expression:"query.checkedItemIds"}],attrs:{type:"hidden",name:"checkedItemIds"},domProps:{value:e.query.checkedItemIds},on:{input:function(t){t.target.composing||e.$set(e.query,"checkedItemIds",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.listFor,expression:"query.listFor"}],attrs:{type:"hidden",name:"listFor"},domProps:{value:e.query.listFor},on:{input:function(t){t.target.composing||e.$set(e.query,"listFor",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.cid,expression:"query.cid"}],attrs:{type:"hidden",name:"cid"},domProps:{value:e.query.cid},on:{input:function(t){t.target.composing||e.$set(e.query,"cid",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.query.cid1,expression:"query.cid1"}],attrs:{type:"hidden",name:"cid1"},domProps:{value:e.query.cid1},on:{input:function(t){t.target.composing||e.$set(e.query,"cid1",t.target.value)}}}),e._v(" "),r("div",{staticClass:"bfc"},[r("div",{staticClass:"flr"},[r("Button",{staticClass:"wd-80 btn",on:{click:e.handleQueryBtnClick}},[e._v("查询")]),e._v(" "),r("Button",{staticClass:"wd-80 btn",on:{click:function(t){e.exportModalVisible=!0}}},[e._v("导出")]),e._v(" "),r("Button",{staticClass:"wd-80 btn",on:{click:e.handleResetBtnClick}},[e._v("重置")]),e._v(" "),r("Button",{staticClass:"wd-80 btn",on:{click:function(t){e.$router.push({name:"dealer-gift-detail",query:{type:"add"}})}}},[e._v("新增")])],1),e._v(" "),r("div",{staticClass:"left"},[r("Row",[r("FormItem",{staticClass:"wd-220 item",attrs:{label:"商品编码:"}},[r("Input",{attrs:{name:"id"},model:{value:e.query.id,callback:function(t){e.$set(e.query,"id",t)},expression:"query.id"}})],1),e._v(" "),r("FormItem",{staticClass:"wd-220 item",attrs:{label:"商品名称:"}},[r("Input",{attrs:{name:"itemName"},model:{value:e.query.itemName,callback:function(t){e.$set(e.query,"itemName",t)},expression:"query.itemName"}})],1)],1),e._v(" "),r("Row",[r("FormItem",{staticClass:"wd-220 item",attrs:{label:"条形码:"}},[r("Input",{attrs:{name:"code69"},model:{value:e.query.code69,callback:function(t){e.$set(e.query,"code69",t)},expression:"query.code69"}})],1),e._v(" "),r("FormItem",{staticClass:"wd-220 item",attrs:{label:"销售编码:"}},[r("Input",{attrs:{name:"spuCode"},model:{value:e.query.spuCode,callback:function(t){e.$set(e.query,"spuCode",t)},expression:"query.spuCode"}})],1),e._v(" "),r("FormItem",{staticClass:"wd-220 item",attrs:{label:"物料编码:"}},[r("Input",{attrs:{name:"code80"},model:{value:e.query.code80,callback:function(t){e.$set(e.query,"code80",t)},expression:"query.code80"}})],1)],1),e._v(" "),r("Row",[r("FormItem",{staticClass:"wd-220 item",attrs:{label:"商品状态:"}},[r("Select",{staticStyle:{width:"100%"},attrs:{name:"itemStatus"},model:{value:e.query.itemStatus,callback:function(t){e.$set(e.query,"itemStatus",t)},expression:"query.itemStatus"}},[r("Option",{attrs:{value:""}},[e._v("请选择")]),e._v(" "),r("Option",{attrs:{value:4}},[e._v("在售")]),e._v(" "),r("Option",{attrs:{value:5}},[e._v("已下架")])],1)],1),e._v(" "),r("FormItem",{staticClass:"item",attrs:{label:"供货价区间:"}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.query.minPrice,expression:"query.minPrice",modifiers:{number:!0}}],staticClass:"wd-80 ivu-input",attrs:{name:"minPrice"},domProps:{value:e.query.minPrice},on:{blur:[function(t){e.handleNumberINputBlur("minPrice")},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.query,"minPrice",e._n(t.target.value))}}}),e._v(" "),r("span",[e._v(" - ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.query.maxPrice,expression:"query.maxPrice",modifiers:{number:!0}}],staticClass:"wd-80 ivu-input",attrs:{name:"maxPrice"},domProps:{value:e.query.maxPrice},on:{blur:[function(t){e.handleNumberINputBlur("maxPrice")},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.query,"maxPrice",e._n(t.target.value))}}})])],1),e._v(" "),r("Row",[r("FormItem",{staticClass:"item",attrs:{label:"创建时间:"}},[r("DatePicker",{attrs:{type:"date",name:"createStartTime",transfer:!0,editable:!1,clearable:!1,placeholder:"开始时间",options:e.createStartTimeDisabled},model:{value:e.query.createStartTime,callback:function(t){e.$set(e.query,"createStartTime",t)},expression:"query.createStartTime"}}),e._v(" "),r("span",[e._v(" 至 ")]),e._v(" "),r("DatePicker",{attrs:{type:"date",name:"createEndTime",transfer:!0,editable:!1,clearable:!1,placeholder:"截止时间",options:e.createEndTimeDisabled},model:{value:e.query.createEndTime,callback:function(t){e.$set(e.query,"createEndTime",t)},expression:"query.createEndTime"}})],1)],1),e._v(" "),r("Row",[r("span",{staticClass:"up-and-down"},[r("Button",{staticClass:"btn",on:{click:function(t){e.handleUpAndDown(e.selectedResult,4)}}},[e._v("批量上架")]),e._v(" "),r("Button",{staticClass:"btn",on:{click:function(t){e.handleUpAndDown(e.selectedResult,5)}}},[e._v("批量下架")])],1)])],1)])])],1),e._v(" "),r("div",{staticClass:"result"},[r("Table",{attrs:{data:e.result,columns:e.resultColumns,loading:e.resultLoading},on:{"on-selection-change":e.handleSelectionChange}}),e._v(" "),r("Page",{staticClass:"page",attrs:{current:e.query.page,total:e.total,"show-elevator":"","show-total":""},on:{"update:current":function(t){e.$set(e.query,"page",t)},"on-change":e.getResult}})],1),e._v(" "),r("Modal",{attrs:{title:"商品导出"},model:{value:e.exportModalVisible,callback:function(t){e.exportModalVisible=t},expression:"exportModalVisible"}},[r("div",{staticStyle:{"text-align":"center"}},[r("RadioGroup",{model:{value:e.query.goodsExportType,callback:function(t){e.$set(e.query,"goodsExportType",t)},expression:"query.goodsExportType"}},[r("Radio",{staticStyle:{margin:"0 20px"},attrs:{label:1}},[e._v("全部记录")]),e._v(" "),r("Radio",{staticStyle:{margin:"0 20px"},attrs:{label:2}},[e._v("选中记录")])],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:e.exportList}},[e._v("导出")]),e._v(" "),r("Button",{on:{click:function(t){e.exportModalVisible=!1}}},[e._v("取消")])],1)])],1)},n=[];a._withStripped=!0;var i={render:a,staticRenderFns:n};t.default=i},876:function(e,t,r){"use strict";function a(e){l||(r(2648),r(2650))}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1768),i=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,function(){return n[e]})}(s);var o=r(2652),u=r.n(o),l=!1,c=r(13),d=a,m=c(i.a,u.a,!1,d,"data-v-1ed5d032",null);m.options.__file="src/views/trader-manage/product-manage/dealer-gift/dealer-gift.vue",t.default=m.exports},898:function(e,t,r){"use strict";function a(e,t){if(!t)var t="yyyy-MM-DD hh:mm:ss";var r={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var a in r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length)));return t}function n(e,t){if(!t)var t="yyyy-MM-dd";(e=Number(e))<1e10&&(e*=1e3);var r=new Date(e),a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in a)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return t}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=a,t.timestampToDay=n}});