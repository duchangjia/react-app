webpackJsonp([24,150,213,278],{1086:function(e,t,a){e.exports={default:a(1092),__esModule:!0}},1092:function(e,t,a){a(1093),e.exports=a(11).Object.keys},1093:function(e,t,a){var n=a(98),i=a(78);a(1094)("keys",function(){return function(e){return i(n(e))}})},1094:function(e,t,a){var n=a(36),i=a(11),r=a(66);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",o)}},1095:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkDate=t.initDate=t.initMoney=t.initNumber=t.initCode=void 0;var n=a(103),i=function(e,t){return!!e.test(t)};t.initCode=function(e){return i(/^[A-Z|a-z|_|0-9]*$/,e)},t.initNumber=function(e){return i(/^[1-9]\d*$/,e)},t.initMoney=function(e){return i(/^\d+(\.\d{0,2})?$|^\.\d{1,2}$/,e)},t.initDate=function(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+((t.getDate()<10?"0"+t.getDate():t.getDate())+" ")+((t.getHours()<10?"0"+t.getHours():t.getHours())+":")+((t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())}},t.checkDate=function(e,t,a){return e[t]?e[a]?!(new Date(e[t]).getTime()>=new Date(e[a]).getTime())||(n.Message.warning("开始时间不能大于或者等于结束时间"),!1):(n.Message.warning("结束时间不能为空"),!1):(n.Message.warning("开始时间不能为空"),!1)}},1100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{getCheckDatas:{type:Object,default:function(){return{checkGoodModal:!1,checkGoodType:!1,dmsList:{},eocList:{},checkTextNo:"以下产品在当前执行范围和执行时间段内已配置以下方案，不能添加",checkTextAdd:"以下产品在当前执行范围和执行时间段内已配置以下方案，是否叠加",dmsText:"经销商活动",eocText:"集团活动"}}}},created:function(){!this.getCheckDatas.checkTextNo&&(this.getCheckDatas.checkTextNo="以下产品在当前执行范围和执行时间段内已配置以下方案，不能添加"),!this.getCheckDatas.checkTextAdd&&(this.getCheckDatas.checkTextAdd="以下产品在当前执行范围和执行时间段内已配置以下方案，是否叠加"),!this.getCheckDatas.dmsText&&(this.getCheckDatas.dmsText="经销商活动"),!this.getCheckDatas.eocText&&(this.getCheckDatas.eocText="集团活动")},methods:{syncClose:function(){this.getCheckDatas.checkGoodModal=!1,this.$emit("liClose",this.getCheckDatas.checkGoodModal)},syncConfirm:function(){this.getCheckDatas.checkGoodModal=!1,this.$emit("syncConfirm")},_jumpDetails:function(e,t){var a={1:"/marketing/marketing-center/new-buy-promotion-index/new-buyPromotio-detail?id="+e+"&mode=view",2:"/marketing/marketing-center/rebate-promotion-index/rebatePromotion-detail?id="+e,3:"/marketing/marketing-center/new-salePromotion-index/new-salePromotion-detail?id="+e,4:"/marketing/marketing-center/new-group-goods/new-group-goods-detail?id="+e};window.open(window.location.href.replace(this.$route.fullPath,a[t]),"_blank")}},filters:{getPromotion:function(e){var t="特价";return 1==e?t="买赠":2==e?t="返利":4==e&&(t="组合"),t}}}},1421:function(e,t,a){var n=a(1422);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(43)("3a149b7c",n,!1,{})},1422:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.goods-title[data-v-64722846] {\n  background-color: #9e9999;\n}\n.goodsCodeList[data-v-64722846] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-indent: 1em;\n}\n.goodsCodeList span[data-v-64722846]:first-child {\n  margin: 5px 0;\n}\n",""])},1423:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1086),i=function(e){return e&&e.__esModule?e:{default:e}}(n),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{title:e.getCheckDatas.checkGoodType?e.getCheckDatas.checkTextNo:e.getCheckDatas.checkTextAdd},model:{value:e.getCheckDatas.checkGoodModal,callback:function(t){e.$set(e.getCheckDatas,"checkGoodModal",t)},expression:"getCheckDatas.checkGoodModal"}},[(0,i.default)(e.getCheckDatas.dmsList).length?a("div",[a("span",{staticClass:"goods-title",domProps:{textContent:e._s(e.getCheckDatas.dmsText)}}),e._v(" "),e._l(e.getCheckDatas.dmsList,function(t){return a("p",{key:t.id,staticClass:"goodsCodeList"},[a("span",[a("span",{staticStyle:{"background-color":"red"}},[e._v(e._s(e._f("getPromotion")(t.type)))]),e._v(" "),a("a",{on:{click:function(a){e._jumpDetails(t.id,t.type)}}},[e._v(e._s(t.promotionCode)+"查看详情>>")]),e._v(" "),a("br")]),e._v(" "),e._l(t.goodsCode79List,function(n,i){return a("span",{key:i},[a("span",[e._v(e._s(n.itemName))]),e._v(" "),a("a",{on:{click:function(a){e._jumpDetails(t.id,t.type)}}},[e._v(e._s(n.code79))]),e._v("\n          活动中存在冲突\n        ")])})],2)})],2):e._e(),e._v(" "),(0,i.default)(e.getCheckDatas.eocList).length?a("div",[a("span",{staticClass:"goods-title",domProps:{textContent:e._s(e.getCheckDatas.eocText)}}),e._v(" "),e._l(e.getCheckDatas.eocList,function(t){return a("p",{key:t.id,staticClass:"goodsCodeList"},[a("span",[a("span",{staticStyle:{"background-color":"red"}},[e._v(e._s(e._f("getPromotion")(t.type)))]),e._v(" "),a("a",{on:{click:function(a){e._jumpDetails(t.id,t.type)}}},[e._v(e._s(t.promotionCode)+"查看详情>>")]),e._v(" "),a("br")]),e._v(" "),e._l(t.goodsCode79List,function(n,i){return a("span",{key:i},[a("span",[e._v(e._s(n.itemName))]),e._v(" "),a("a",{on:{click:function(a){e._jumpDetails(t.id,t.type)}}},[e._v(e._s(n.code79))]),e._v("\n          活动中存在冲突\n        ")])})],2)})],2):e._e(),e._v(" "),e.getCheckDatas.checkGoodType?a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.syncClose()}}},[e._v("确定")])],1):e._e(),e._v(" "),e.getCheckDatas.checkGoodType?e._e():a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{size:"large"},on:{click:function(t){e.syncClose()}}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"primary",size:"large"},on:{click:e.syncConfirm}},[e._v("确定")])],1)])},o=[];r._withStripped=!0;var s={render:r,staticRenderFns:o};t.default=s},1461:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,".main-buy {\r\n  background-color: white;\r\n  height: auto;\r\n  padding:20px;\r\n}\r\n._title {\r\n  padding: 10px 0;\r\n}\r\n.left {\r\n  float: left;\r\n}\r\n.page {\r\n  text-align: right;\r\n}\r\n.center{\r\n  text-align: center;\r\n}\r\n.text-right {\r\n  text-align: right;\r\n}\r\n.text-left {\r\n  text-align: left;\r\n}\r\n.right {\r\n  float: right;\r\n}\r\n/* .ivu-table-body { */\r\n  /* overflow-x: initial; */\r\n/* } */\r\n.ivu-table-tip {\r\n  overflow: hidden;\r\n}\r\n.ListName{\r\n  text-align: right;\r\n  line-height: 32px;\r\n  color: #747474;\r\n  font-size: 12px;\r\n}\r\n.btn-group>button {\r\n  margin-right: 5px;\r\n}\r\n.col-group{\r\n  margin-bottom: 1rem;\r\n}\r\n.col-group .title {\r\n  line-height: 32px;\r\n}",""])},1634:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(101),r=n(i),o=a(2165),s=n(o),c=a(241),l=n(c),u=a(242),d=n(u),g=a(65),p=n(g),m=a(239),h=n(m),f=a(1095),v=a(601),y=n(v),I=a(602),S=n(I),k=a(614),C=n(k);t.default={name:"buyPromotion-add",data:function(){var e=this;return sessionStorage.getSelectItem||(sessionStorage.getSelectItem=(0,p.default)([])),sessionStorage.getLevelItem||(sessionStorage.getLevelItem=(0,p.default)([])),{checkDatas:{checkGoodModal:!1,checkGoodType:!1,dmsList:{},eocList:{}},apiGroup:this.$util.apiConfig.promotionManage.warProgramme.newSalePromotion,checkGoodType:!1,dmsList:{},eocList:{},checkGoodModal:!1,checkGoodText:"",stepsObj:{current:1,data:["定向规则","特价配置","促销预览"]},queryArray:{title:"",page:1,rows:5,code69:"",code79:"",code80:"",itemName:"",itemCategory11Id:"",itemCategory21Id:"",spuCode:""},loading:!1,totalCount:0,selectPage:1,columnsList:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:62,align:"center",type:"index"},{title:"物料编码",key:"code80",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格CRA",key:"marketPrice",align:"center"},{title:"价格EA",key:"price",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"品类",key:"cname",align:"center"},{title:"系列",key:"dealerId",align:"center"},{title:"操作",key:"dealerId",align:"center",render:function(t,a){return t("Button",{props:{size:"small"},attrs:{disabled:4==e.status},on:{click:function(){function t(){return n.apply(this,arguments)}var n=(0,d.default)(l.default.mark(function t(){var n,i,r,o,s,c;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(4==e.status){t.next=20;break}for(n=a.row.itemId,i=e.getSelectItem,r=!1,o=0;o<i.length;o++)s=i[o],s.itemId==n&&(r=!0);if(e.checkGoodDataStata){t.next=20;break}if(e.checkGoodDataStata=!0,r){t.next=14;break}return t.next=10,e.checkGoods([a.row]);case 10:c=t.sent,e.resultItem=a.row,t.next=15;break;case 14:e.$Message.warning("商品已添加");case 15:e.getSelectCount=e.getSelectItem.length,e.pageData("getSelectItem","getSelectPage",1),e.initGetSelectItem("getSelectItem"),e.getSelectItem=JSON.parse((0,p.default)(e.getSelectItem)),e.checkGoodDataStata=!1;case 20:case"end":return t.stop()}},t,e)}));return t}()}},"添加")}}],thisTableData:[],colCommodityList:[{title:"全选",key:"checkbox",width:60,align:"center",type:"selection"},{title:"序号",width:62,align:"center",type:"index"},{title:"物料编码",key:"code80",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"价格CRA",key:"marketPrice",align:"center"},{title:"价格EA",key:"price",align:"center"},{title:"优惠价EA*",key:"dealerId",align:"center",render:function(t,a){var n=e,i=0;i=1==n.selectPage?a.index:5*(n.selectPage-1)+a.index;var r=[],o=0;for(var s in n.getSelectItem[i].sillLevel.EA){n.getSelectItem[i].sillLevel.EA[s];o++,"level"==s&&"NUMBER"==s||(r[o]=function(e){return t("Input",{props:{value:n.getSelectItem[i].sillLevel.EA[e]},attrs:{disabled:4==n.status},style:{margin:"2px"},on:{"on-blur":function(t){if(4!=n.status){var a=t.target.value;(0,f.initMoney)(a)?setTimeout(function(r){t.target.value=parseFloat(a).toFixed(2),n.getSelectItem[i].sillLevel.EA[e]=t.target.value,n.getSelectItem[i].discountPrice=t.target.value}):setTimeout(function(a){t.target.value="0.00",n.getSelectItem[i].sillLevel.EA[e]=t.target.value,n.getSelectItem[i].discountPrice=t.target.value})}}}})}(s))}return t("div",r)}},{title:"数量EA*",key:"dealerId",align:"center",render:function(t,a){var n=e,i=0;i=1==n.selectPage?a.index:5*(n.selectPage-1)+a.index;var r=[],o=0;for(var c in n.getSelectItem[i].sillLevel.NUMBER){n.getSelectItem[i].sillLevel.NUMBER[c];o++,"level"==c&&"EA"==c||(r[o]=function(e){return t("Input",{props:{value:n.getSelectItem[i].sillLevel.NUMBER[e]},attrs:{disabled:4==n.status},style:{margin:"2px"},on:{"on-blur":function(t){if(4!=n.status){(0,f.initNumber)(t.target.value)?setTimeout(function(a){n.getSelectItem[i].sillLevel.NUMBER[e]=t.target.value,n.getSelectItem[0].mustNum=t.target.value}):setTimeout(function(e){t.target.value=(0,s.default)(t.target.value)})}}}})}(c))}return t("div",r)}},{title:"坎级*",key:"dealerId",align:"center",render:function(t,a){var n=e,i=0;i=1==n.selectPage?a.index:5*(n.selectPage-1)+a.index;var r=[],o=0;for(var s in n.getSelectItem[i].sillLevel.EA)o++,r[o]=function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:"");return t("div",{style:{lineHeight:"32px",padding:"2px"}},[t("Icon",{props:{type:"plus-round"},style:{marginRight:"5px",fontSize:"1rem",color:4!=n.status?"#2d8cf0":"#ccc"},attrs:{disabled:4==n.status},on:{click:function(e){if(4!=n.status){e.stopPropagation(),n.getSelectItem[i].sillLevel.level++;for(var t=n.getSelectItem[i].sillLevel.level,a=0;a<t;a++)n.getSelectItem[i].sillLevel.EA["val"+a]||(n.getSelectItem[i].sillLevel.EA["val"+a]=1),n.getSelectItem[i].sillLevel.NUMBER["val"+a]||(n.getSelectItem[i].sillLevel.NUMBER["val"+a]=1);n.getSelectItem=JSON.parse((0,p.default)(n.getSelectItem))}}}},"新增"),t("Icon",{props:{type:"trash-a"},style:{marginRight:"5px",fontSize:"1rem",color:4!=n.status?"#2d8cf0":"#ccc"},attrs:{disabled:4==n.status},on:{click:function(){4!=n.status&&(n.getSelectItem[i].sillLevel.level>1?(n.getSelectItem[i].sillLevel.level--,delete a.row.sillLevel[e],delete n.getSelectItem[i].sillLevel[e],delete n.getSelectItem[i].sillLevel.EA[e],delete n.getSelectItem[i].sillLevel.NUMBER[e],n.getSelectItem=JSON.parse((0,p.default)(n.getSelectItem))):(n.getSelectItem[i].sillLevel.level=1,n.$Message.info("最后一项, 请勿删除")))}}},"删除")])}(o,s);return t("div",r)}},{title:"操作",key:"dealerId",align:"center",render:function(t,a){return t("div",{style:{lineHeight:"32px",padding:"2px"}},[t("Button",{props:{size:"small"},attrs:{disabled:4==e.status},on:{click:function(t){if(t.stopPropagation(),4!=e.status){for(var n=a.index,i=e.getSelectItem.splice(n,1),r=e.getLevelItem,o=0;o<r.length;o++){r[o].itemId==i[0].itemId&&e.getLevelItem.splice(o,1)}e.$Message.success("删除成功"),e.pageData("getSelectItem","getSelectPage",1),e.getSelectCount=e.getSelectItem.length,e.setLevelCount=e.getLevelItem.length}}}},"删除")])}}],setSelectItem:[],getSelectItem:[],getSelectCount:0,getSelectPage:[],delSelectItem:[],getLevelItem:[],setLevelItem:[],setLevelCount:0,brandArray:[],categoryArray:[],categoryArrayItem:[],resultItem:"",status:"",textTitle:"",lookDeadil:"",checkGoodDataStata:!1}},created:function(){this.status=this.$route.query.status,this.getData(),this.getCategory(),this.getSelectItem=JSON.parse(sessionStorage.getSelectItem),this.initGetSelectItem("getSelectItem"),this.pageData("getSelectItem","getSelectPage",1)},methods:{getCheckGoods:function(){this.saveGoods("setSelectItem","getSelectItem")},jump:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$route.query;"copy"==t.state&&delete t.id,this.$router.push({path:e,query:t})},getBrandOptions:function(e){if(e){this.queryArray.itemCategory11Id=e.value,this.queryArray.itemCategory21Id="",this.categoryArrayItem=[];for(var t in this.categoryArray)e.value==this.categoryArray[t].parentCid&&this.categoryArrayItem.push(this.categoryArray[t])}else this.queryArray.itemCategory11Id="",this.queryArray.itemCategory21Id="",this.categoryArrayItem=[]},getCategoryOptions:function(e){this.queryArray.itemCategory21Id=e?e.value:""},_initCode:function(e,t){var a=e.target.value;(0,f.initCode)(a)?(this.queryArray[t]=a,setTimeout(function(t){return e.target.value=a})):(this.queryArray[t]="",setTimeout(function(t){return e.target.value=""}))},initGetSelectItem:function(e){for(var t=0;t<this[e].length;t++){var a=this[e][t];void 0===a.sillLevel?(a.sillLevel={},a.sillLevel.level=1,a.sillLevel.EA={},a.sillLevel.NUMBER={},a.sillLevel.EA.val0="1.00",a.sillLevel.NUMBER.val0="1"):(a.discountPrice="1.00",a.mustNum="1")}},initGetLevel:function(e,t){this[t].forEach(function(t){e.findIndex(function(e){return t.itemId==e.itemId})})},initGetSelectData:function(e,t){var a=this[e],n=this[t],i=[];return this.initGetSelectItem("getSelectItem"),a.forEach(function(e,t){var a=n.findIndex(function(t){return e.itemId==t.itemId});-1==a&&i.push(e)}),i},initSelectData:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=this[e],r=this[t];n?i.forEach(function(e,n){var i=r.findIndex(function(t){return e.itemId==t.itemId});-1==i&&a[t].push(e)}):i.forEach(function(e){a[t]=a[t].filter(function(t){return e.itemId!=t.itemId})})},delCommodity:function(){if(!this.delSelectItem.length)return void this.$Message.warning("请选择删除的商品");this.delSelectItem,this.getSelectItem;this.initSelectData("delSelectItem","getSelectItem",0);this.getLevelItem;this.initSelectData("delSelectItem","getLevelItem",0),this.delSelectItem=[],this.setLevelItem=[],this.pageData("getSelectItem","getSelectPage",1),this.getSelectCount=this.getSelectItem.length},getCommodityItem:function(e){var t=this;this.delSelectItem=e,this.setLevelItem=[],this.getSelectItem.forEach(function(a){var n=e.findIndex(function(e){return a.itemId==e.itemId});-1!=n&&t.setLevelItem.push(a)})},addCommoditySubmit:function(){function e(e,a,n,i){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(t,a,n,i){var r,o,s,c,u,d,g,p,m;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this[t].length){e.next=3;break}return this.$Message.info("请选择添加的对象"),e.abrupt("return");case 3:if(this.initGetSelectItem("getSelectItem"),r=this.initGetSelectData(t,a),o=this[a],s=this[t],1!=s.length){e.next=23;break}for(c=!1,u=s[0].itemId,d=0;d<o.length;d++)g=o[d],g.itemId==u&&(c=!0);if(this.checkGoodDataStata){e.next=21;break}if(c){e.next=19;break}return this.checkGoodDataStata=!0,e.next=16,this.checkGoods(r);case 16:p=e.sent,e.next=20;break;case 19:this.$Message.warning("商品已添加");case 20:this.checkGoodDataStata=!1;case 21:e.next=29;break;case 23:if(this.checkGoodDataStata){e.next=29;break}return this.checkGoodDataStata=!0,e.next=27,this.checkGoods(r);case 27:m=e.sent,this.checkGoodDataStata=!1;case 29:this[n]=this[a].length;case 30:case"end":return e.stop()}},e,this)}));return e}(),saveGoods:function(e,t){this.resultItem&&(this.getSelectItem.push(this.resultItem),this.resultItem=""),this.initSelectData(e,t),this.checkGoodModal=!1,this.dmsList={},this.eocList={},this.pageData("getSelectItem","getSelectPage",1),this.$Message.success("添加成功"),sessionStorage.getSelectItem=(0,p.default)(this[t])},checkGoods:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(t){var a,n,i;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.initData(t),n=this.apiGroup.newCheckGoodsList,e.next=4,this.$util.ajax({method:"POST",url:n,data:a});case 4:i=e.sent;try{200==i.data.code?(this.$Message.success("添加成功"),this.getSelectItem=this.getSelectItem.concat(t),sessionStorage.getSelectItem=(0,p.default)(this.getSelectItem),this.pageData("getSelectItem","getSelectPage",1)):400==i.data.code?(this.checkDatas.checkGoodModal=!0,this.checkDatas.checkGoodType=i.data.result.sameActivity,this.checkDatas.dmsList=i.data.result.dmsList,this.checkDatas.eocList=i.data.result.eocList):this.$Message.error("网络异常")}catch(e){console.error(e),this.$Message.error("网络异常")}return this.checkGoodDataStata=!1,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}));return e}(),selectionClick:function(e){this.setSelectItem=(0,r.default)([],e)},pageData:function(e,t,a){this.selectPage=a,this[t]=this[e].slice(5*a-5,5*a),this.initGetSelectItem("getSelectItem")},prev:function(){sessionStorage.getSelectItem=(0,p.default)(this.getSelectItem);this.$route.query.id;this.jump("sale-rule-setting",{status:this.$route.query.status,state:this.$route.query.state,tempId:this.$route.query.tempId})},next:function(){if(!this.getSelectItem.length)return void this.$Message.warning("请选择商品");sessionStorage.getSelectItem=(0,p.default)(this.getSelectItem),this.jump("new-salePromotion-preview")},formatData:function(e){var t=[];for(var a in e){var n={barCode:e[a].code69,brandId:e[a].itemCategory11Id,brandName:e[a].itemCategory11Name,cid:e[a].itemCategory21Id,cname:e[a].itemCategory21Name,code79:e[a].code79,dealerId:e[a].dealerId,itemId:e[a].itemId,itemName:e[a].itemName,guidePrice:e[a].guidePrice,changeUnitRate:e[a].changeUnitRate,planNum:"",price:(e[a].marketPrice/e[a].changeUnitRate).toFixed(2),type:1,unit:0,marketPrice:e[a].marketPrice,spuId:e[a].spuId,discountPrice:""};"Infinity"!=n.price&&"NaN"!=n.price||(n.price=0),t.push(n)}return t},initData:function(e){var t=e,a=JSON.parse(sessionStorage.activityArray),n={promotionGoodsNewList:[],promotionScopeDetailNewDTOList:[],promotionInfoNewDTO:{},promotionSalemanScopeDTOList:[]};t.forEach(function(e){n.promotionGoodsNewList.push(e)});var i={};if(i.beginDate=new Date(a.startTime).getTime(),i.endDate=new Date(a.endTime).getTime(),i.title=a.title,i.costRate=0,i.channel=a.platform.join(","),i.estimatedCost=0,i.forecastSales=0,i.scope=a.scope,i.type=3,i.isLevel=1,n.promotionInfoNewDTO=i,1==a.scope&&(n.promotionScopeDetailNewDTOList[0]={scopeType:1,scopeName:"全部门店"}),3==a.scope){var r=(a.Array,a.storeProp),o=a.groupArr,s=JSON.parse(sessionStorage.groupArr);r.forEach(function(e){if(e){var t={scopeCode:e,scopeType:3,scopeName:e,storeType:e,storeGroupId:"",storeGroupName:""};n.promotionScopeDetailNewDTOList.push(t)}}),o.forEach(function(e,t){var a=s.find(function(t){if(t&&t.id==e)return t}),i={};a&&(i.scopeCode="",i.scopeType=3,i.scopeName="",i.storeType="",i.storeGroupId=a.id,i.storeGroupName=a.groupName,n.promotionScopeDetailNewDTOList.push(i))})}if(3==a.scope||1==a.scope){var c=a.Array;n.promotionStoreScopeExclusionDTOList=[],c.forEach(function(e){var t={};t.storeGroupName=e.storeGroupName,t.storeGroupId=e.storeGroupId,t.storeType=e.storeType,t.storeCode=e.scopeCode,t.storeName=e.scopeName,t.storeId=e.storeId,n.promotionStoreScopeExclusionDTOList.push(t)})}if(2==a.scope){a.Array.forEach(function(e){var t={};t.scopeId=e.storeId,t.scopeName=e.scopeName,t.scopeCode=e.scopeCode,t.storeType=e.storeType,t.scopeType=e.scopeType,t.storeGroupName=e.storeGroupName,t.storeGroupId=e.storeGroupId,n.promotionScopeDetailNewDTOList.push(t)})}return a.salesmanList.forEach(function(e){var t=e.split(","),a={salesmanId:t[0],salesmanName:t[1],salesmanCode:t[2]};n.promotionSalemanScopeDTOList.push(a)}),n},getData:function(){function e(){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(){var t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.queryArray.page=n,t={method:"POST",url:this.$util.apiConfig.promotionManage.warProgramme.queryGoodsList,data:h.default.stringify(this.queryArray)},e.next=5,this.$util.ajax(t);case 5:a=e.sent,200===a.data.code?(this.loading=!1,this.thisTableData=this.formatData(a.data.result.records),this.totalCount=a.data.result.totalCount):this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));return e}(),getCategory:function(){function e(){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(){var t,a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",url:this.$util.apiConfig.promotionManage.warProgramme.category},e.next=3,this.$util.ajax(t);case 3:a=e.sent,a.data&&(this.brandArray=a.data.itemCategory11List,this.categoryArray=a.data.itemCategory21List);case 5:case"end":return e.stop()}},e,this)}));return e}()},components:{orderTable:y.default,steps:S.default,promotionCheckGoods:C.default},filters:{getPromotion:function(e){var t="特价";return 1==e?t="买赠":2==e?t="返利":4==e&&(t="组合"),t}}}},1635:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},2163:function(e,t,a){var n=a(2164);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(43)("2af10ea8",n,!1,{})},2164:function(e,t,a){t=e.exports=a(42)(!1),t.i(a(1461),""),t.push([e.i,"\n.but[data-v-4d18074c]{\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n    padding-top: 20px;\n}\r\n",""])},2165:function(e,t,a){e.exports={default:a(2166),__esModule:!0}},2166:function(e,t,a){a(2167),e.exports=a(11).Number.parseInt},2167:function(e,t,a){var n=a(36),i=a(2168);n(n.S+n.F*(Number.parseInt!=i),"Number",{parseInt:i})},2168:function(e,t,a){var n=a(12).parseInt,i=a(2169).trim,r=a(1635),o=/^[-+]?0[xX]/;e.exports=8!==n(r+"08")||22!==n(r+"0x16")?function(e,t){var a=i(String(e),3);return n(a,t>>>0||(o.test(a)?16:10))}:n},2169:function(e,t,a){var n=a(36),i=a(105),r=a(66),o=a(1635),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),d=function(e,t,a){var i={},s=r(function(){return!!o[e]()||c[e]()!=c}),l=i[e]=s?t(g):o[e];a&&(i[a]=l),n(n.P+n.F*s,"String",i)},g=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},2170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("steps",{attrs:{stepsObj:e.stepsObj}}),e._v(" "),a("div",{staticClass:"main-buy"},[a("Row",[a("Col",{staticClass:"demo-tabs-style2",attrs:{span:"24"}},[a("Row",{attrs:{gutter:0}},[a("Col",{attrs:{span:"24"}},[a("h4",{staticClass:"_title"},[e._v("选择特价商品")])])],1),e._v(" "),a("Row",{staticClass:"col-group",attrs:{gutter:8}},[a("Col",{attrs:{span:"4"}},[a("Col",{staticClass:"ListName center",attrs:{span:"8",pull:"1"}},[e._v("物料编码:")]),e._v(" "),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{value:e.queryArray.code80,clearable:""},on:{"on-change":function(t){return e._initCode(t,"code80")}}})],1)],1),e._v(" "),a("Col",{attrs:{span:"4"}},[a("Col",{staticClass:"ListName center",attrs:{span:"8",pull:"1"}},[e._v("商品名称:")]),e._v(" "),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{clearable:""},model:{value:e.queryArray.itemName,callback:function(t){e.$set(e.queryArray,"itemName",t)},expression:"queryArray.itemName"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"4"}},[a("Col",{staticClass:"ListName center",attrs:{span:"8",pull:"1"}},[e._v("品牌:")]),e._v(" "),a("Col",{attrs:{span:"16"}},[a("Select",{staticStyle:{width:"100%"},attrs:{"label-in-value":!0,clearable:""},on:{"on-change":e.getBrandOptions,"on-clear":e.getBrandOptions},model:{value:e.queryArray.itemCategory11Id,callback:function(t){e.$set(e.queryArray,"itemCategory11Id",t)},expression:"queryArray.itemCategory11Id"}},e._l(e.brandArray,function(t){return a("Option",{key:t.cid,attrs:{value:t.cid}},[e._v(e._s(t.cName))])}))],1)],1),e._v(" "),a("Col",{attrs:{span:"4"}},[a("Col",{staticClass:"ListName center",attrs:{span:"8",pull:"1"}},[e._v("品类:")]),e._v(" "),a("Col",{attrs:{span:"16"}},[a("Select",{staticStyle:{width:"100%"},attrs:{"label-in-value":!0,clearable:""},on:{"on-change":e.getCategoryOptions,"on-clear":function(t){e.queryArray.itemCategory21Id=""}},model:{value:e.queryArray.itemCategory21Id,callback:function(t){e.$set(e.queryArray,"itemCategory21Id",t)},expression:"queryArray.itemCategory21Id"}},e._l(e.categoryArrayItem,function(t){return a("Option",{key:t.cid,attrs:{value:t.cid}},[e._v(e._s(t.cName))])}))],1)],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("Col",{staticClass:"text-right",attrs:{span:"24"}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.getData(1)}}},[e._v("搜索")]),e._v(" "),a("Button",{attrs:{type:"primary",disabled:4==e.status||e.checkGoodDataStata},on:{click:function(t){e.addCommoditySubmit("setSelectItem","getSelectItem","getSelectCount",1)}}},[e._v("添加")])],1)],1)],1),e._v(" "),a("order-table",{attrs:{columnsList:e.columnsList,thisTableData:e.thisTableData,loading:e.loading},on:{listenCheckbox:e.selectionClick}}),e._v(" "),a("div",{staticStyle:{padding:"20px",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:e.totalCount,"page-size":5,"show-total":"","show-elevator":""},on:{"on-change":e.getData}})],1),e._v(" "),a("Row",{staticClass:"col-group",attrs:{gutter:8}},[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"error",disabled:4==e.status},on:{click:e.delCommodity}},[e._v("删除")])],1)],1),e._v(" "),a("order-table",{attrs:{columnsList:e.colCommodityList,thisTableData:e.getSelectPage,loading:!1},on:{listenCheckbox:e.getCommodityItem}}),e._v(" "),a("div",{staticStyle:{padding:"20px",overflow:"hidden"}},[a("Page",{staticStyle:{float:"right"},attrs:{total:e.getSelectItem.length,"page-size":5,current:e.selectPage,"show-total":"","show-elevator":""},on:{"on-change":function(t){e.pageData("getSelectItem","getSelectPage",t)}}})],1),e._v(" "),a("div",{staticClass:"but"},[a("Button",{on:{click:e.prev}},[e._v("上一步")]),e._v(" "),a("Button",{staticClass:"mr--20",attrs:{type:"primary"},on:{click:e.next}},[e._v("完成")])],1),e._v(" "),a("promotionCheckGoods",{attrs:{getCheckDatas:e.checkDatas},on:{syncConfirm:e.getCheckGoods}})],1)],1)],1)],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};t.default=r},601:function(e,t,a){"use strict";function n(e){l||a(900)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(891),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var s=a(902),c=a.n(s),l=!1,u=a(13),d=n,g=u(r.a,c.a,!1,d,null,null);g.options.__file="src/views/tables/components/orderTable.vue",t.default=g.exports},602:function(e,t,a){"use strict";function n(e){l||a(946)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(930),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var s=a(948),c=a.n(s),l=!1,u=a(13),d=n,g=u(r.a,c.a,!1,d,null,null);g.options.__file="src/views/marketing-centre-components/steps.vue",t.default=g.exports},614:function(e,t,a){"use strict";function n(e){l||a(1421)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1100),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var s=a(1423),c=a.n(s),l=!1,u=a(13),d=n,g=u(r.a,c.a,!1,d,"data-v-64722846",null);g.options.__file="src/views/my-components/promotion-check-goods/promotion-check-goods.vue",t.default=g.exports},752:function(e,t,a){"use strict";function n(e){l||a(2163)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1634),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var s=a(2170),c=a.n(s),l=!1,u=a(13),d=n,g=u(r.a,c.a,!1,d,"data-v-4d18074c",null);g.options.__file="src/views/promotion-manage/war-programme/new-sale-promotion/new-salePromotion-add.vue",t.default=g.exports},891:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var e=this;this.columnsList.forEach(function(t){"address1"==t.key&&(t.render=function(t,a){return t("Row",{props:{type:"flex",align:"middle",justify:"center"}},[t("Col",{props:{span:"22"}},a.row.name),t("Col",{props:{span:"2"}},[t("Button",{props:{type:"text",icon:"edit"},on:{click:function(t){e.$emit("showLayer","true")}}})])])})})},a:function(e){this.$emit("listenCheckbox",e)}},watch:{}}},900:function(e,t,a){var n=a(901);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(43)("296919d0",n,!1,{})},901:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Table",{attrs:{height:e.getHeight,columns:e.columnsList,data:e.thisTableData,stripe:"",border:"",loading:e.loading},on:{"on-selection-change":e.a}})],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};t.default=r},930:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"steps",props:{stepsObj:{type:Object}}}},946:function(e,t,a){var n=a(947);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(43)("62877a53",n,!1,{})},947:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.stepBox {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n  margin-bottom: 10px;\n}\n.bgcolor {\n  background-color: white;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-title {\n  color: #AAA;\n}\n",""])},948:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stepBox bgcolor"},[a("Steps",{attrs:{current:e.stepsObj.current,size:"small"}},e._l(e.stepsObj.data,function(e,t){return a("Step",{key:e,attrs:{title:e}})}))],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};t.default=r}});