webpackJsonp([46,213],{1598:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(909),r=n(i),a=o(152),s=n(a),l=o(239),u=n(l),c=o(601),p=n(c);e.default={name:"buyPromotion-detail",components:{orderTable:p.default},data:function(){return{isDisable:!1,promotionInfoDTO:{beginDate:"",endDate:"",channel:"",type:"",title:""},metrologicalUnit:"",metrologyUnit:"",promotionRuleDTO:{meetNum:"",proNum:""},promotionScopeDetailDTOList:[],loading:!1,tableRef:"",columnsList:[{title:"序号",type:"index",width:70,align:"center"},{title:"销售编码",key:"code79",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"指定数量",key:"mustFullMoney",align:"center"}],thisTableData:[],tableRef3:"",columnsList3:[{title:"序号",type:"index",width:62,align:"center"},{title:"销售编码",key:"code79",align:"center"},{title:"商品名称",key:"itemName",align:"center"},{title:"品牌",key:"brandName",align:"center"},{title:"指定数量",key:"mustNum",align:"center"},{title:"补差标准(元/CAR)",key:"supplementCar",align:"center"},{title:"补差标准(元/EA)",key:"supplementEa",align:"center"}],promotionSendGoodsList:[],tableRef1:"",columnsList1:[{title:"序号",type:"index",width:70,align:"center"},{title:"门店编码",key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"}],columnsListDetail:[{title:"序号",type:"index",width:70,align:"center"},{title:"门店编码",key:"scopeCode",align:"center"},{title:"门店名称",key:"scopeName",align:"center"},{title:"门店类型",key:"storeNature",align:"center"},{title:"自定义组",key:"groupName",align:"center"}],thisTableData1:[],btnShow:!0,storeProp:[],group:[]}},methods:{queryData:function(){var t=this;this.$util.ajax({method:"post",url:t.$util.apiConfig.promotionManage.warDeploy.groupBuy.getDetailUrl,data:u.default.stringify({id:t.$route.query.id})}).then(function(e){t.promotionInfoDTO=e.data.result.detail.promotionInfoDTO,t.promotionInfoDTO.beginDate=t.timestampToTime(t.promotionInfoDTO.beginDate),t.promotionInfoDTO.endDate=t.timestampToTime(t.promotionInfoDTO.endDate),t.promotionRuleDTO=e.data.result.detail.promotionRuleDTO,t.metrologicalUnit="EA"==t.promotionRuleDTO.metrologicalUnit?"个":"件",t.metrologyUnit="EA"==t.promotionRuleDTO.metrologyUnit?"个":"件",t.thisTableData=e.data.result.detail.promotionGoodsList,t.thisTableData1=e.data.result.detail.promotionScopeDetailDTOList,t.promotionScopeDetailDTOList=e.data.result.detail.promotionScopeDetailDTOList,t.promotionSendGoodsList=e.data.result.detail.promotionSendGoodsList,3==t.promotionInfoDTO.scope&&(t.promotionScopeDetailDTOList.forEach(function(e){t.storeProp.push(e.scopeName),t.group.push(e.storeGroupName)}),t.group=(0,s.default)(new r.default(t.group)),t.storeProp=(0,s.default)(new r.default(t.storeProp)))}).catch(function(t){console.log("失败信息：",t)})},goBack:function(t){t?this.$router.push({path:"group-buy",query:{editPage:this.$route.query.editPage}}):this.$router.go(-1)},timestampToTime:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())},SubmitNews:function(){var t=this,e=JSON.parse(sessionStorage.getItem("params"));t.promotionInfoDTO=e.promotionInfoDTO,t.promotionInfoDTO.beginDate=t.timestampToTime(t.promotionInfoDTO.beginDate),t.promotionInfoDTO.endDate=t.timestampToTime(t.promotionInfoDTO.endDate),t.promotionRuleDTO=e.promotionRuleDTO,t.metrologicalUnit="EA"==t.promotionRuleDTO.metrologicalUnit?"个":"件",t.metrologyUnit="EA"==t.promotionRuleDTO.metrologyUnit?"个":"件",t.thisTableData=e.promotionGoodsList,t.thisTableData1=e.promotionScopeDetailDTOList,t.promotionScopeDetailDTOList=e.promotionScopeDetailDTOList,t.promotionSendGoodsList=e.promotionSendGoodsList,3==t.promotionInfoDTO.scope&&(t.promotionScopeDetailDTOList.forEach(function(e){t.storeProp.push(e.scopeName),t.group.push(e.storeGroupName)}),t.group=(0,s.default)(new r.default(t.group)),t.storeProp=(0,s.default)(new r.default(t.storeProp)))},savePromotion:function(){var t=this,e=this;this.isDisable=!0;var o=JSON.parse(sessionStorage.getItem("params"));this.$util.ajax({method:"post",url:e.$util.apiConfig.promotionManage.warDeploy.groupBuy.saveChannelPromotion,data:o}).then(function(o){200==o.data.code?(t.$Modal.success({title:"提示",content:"发布成功",onOk:function(){sessionStorage.removeItem("params"),e.goBack(1)}}),t.btnShow=!0):(t.isDisable=!1,t.$Modal.error({title:"提示",content:o.data.message}))}).catch(function(e){t.isDisable=!1,console.log("失败信息：",e)})}},mounted:function(){if(""==this.$route.query.id||null==this.$route.query.id||void 0==this.$route.query.id)return this.SubmitNews(),this.btnShow=!1,void(this.columnsList1=this.columnsListDetail);this.queryData()}}},2051:function(t,e,o){var n=o(2052);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(43)("67473bb9",n,!1,{})},2052:function(t,e,o){e=t.exports=o(42)(!1),e.push([t.i,"\n.ListName[data-v-0cfc66b3]{\n    text-align: right;\n    line-height: 46px;\n    color: #747474;\n    font-size: 12px;\n    margin-right: 16px;\n}\n.content[data-v-0cfc66b3]{\n    line-height: 46px;\n    color: #747474;\n}\n.but[data-v-0cfc66b3]{\n    text-align: center;\n    padding-bottom: 30px;\n    padding-top: 20px;\n}\n",""])},2053:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{background:"#fff",padding:"20px"}},[o("p",{staticStyle:{color:"#747474","font-weight":"bold","font-size":"larger"},attrs:{slot:"title"},slot:"title"},[t._v("\n        促销预览\n    ")]),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("活动名称:")]),t._v(" "),o("Col",{staticClass:"content",attrs:{span:"6"}},[t._v(" "+t._s(t.promotionInfoDTO.title))])],1),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("活动时间:")]),t._v(" "),o("Col",{staticClass:"content",attrs:{span:"6"}},[t._v(" "+t._s(t.promotionInfoDTO.beginDate)+" 至 "+t._s(t.promotionInfoDTO.endDate))])],1),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("执行平台:")]),t._v(" "),o("Col",{staticClass:"content",attrs:{span:"6"}},[t._v(t._s(t.promotionInfoDTO.channel)+" ")])],1),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("促销类型:")]),t._v(" "),o("Col",{staticClass:"content",attrs:{span:"6"}},[t._v(" 买赠")])],1),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("促销规则:")]),t._v(" "),o("Col",{staticClass:"content",attrs:{span:"6"}},[1==t.promotionRuleDTO.meetType?o("span",[t._v("买满  "+t._s(t.promotionRuleDTO.meetNum)+" 元 以下商品 ")]):t._e(),t._v(" "),o("span",{attrs:{else:""}},[t._v("买满  "+t._s(t.promotionRuleDTO.meetNum)+t._s(t.metrologicalUnit)+" 以下商品： ")])])],1),t._v(" "),o("row",{staticStyle:{"border-top":"1px solid #e5e5e5","border-bottom":"1px dashed #e5e5e5","padding-bottom":"30px"}},[o("row",{staticStyle:{padding:"20px"}},[o("order-table",{attrs:{refs:t.tableRef,columnsList:t.columnsList,thisTableData:t.thisTableData,loading:t.loading}})],1),t._v(" "),o("p",[t._v("送以下赠品 "+t._s(t.promotionRuleDTO.proNum)+" "+t._s(t.metrologyUnit)+" ")]),t._v(" "),o("row",{staticStyle:{padding:"10px 20px"}},[o("order-table",{attrs:{refs:t.tableRef3,columnsList:t.columnsList3,thisTableData:t.promotionSendGoodsList,loading:t.loading}})],1),t._v(" "),o("row",[o("Col",{staticClass:"ListName",attrs:{span:"2"}},[t._v("执行范围:")]),t._v(" "),1==t.promotionInfoDTO.scope?o("Col",{staticClass:"content",attrs:{span:"10"}},[t._v("全部门店")]):t._e(),t._v(" "),2==t.promotionInfoDTO.scope?o("Col",{staticClass:"content",attrs:{span:"10"}},[t._v("指定门店")]):t._e(),t._v(" "),3==t.promotionInfoDTO.scope?o("Col",{staticClass:"content",attrs:{span:"10"}},[o("div",[o("span",[t._v("门店性质:")]),t._v(" "),t._l(t.storeProp,function(e){return o("span",{staticStyle:{padding:"0 12px"}},[t._v(" \n                        "+t._s(e)+" ")])})],2),t._v(" "),o("div",[o("span",[t._v("标签分类:")]),t._v(" "),t._l(t.group,function(e){return o("span",{staticStyle:{padding:"0 12px"}},[t._v(" \n                        "+t._s(e)+" ")])})],2)]):t._e()],1),t._v(" "),2==t.promotionInfoDTO.scope?o("row",{staticStyle:{padding:"20px"}},[o("order-table",{attrs:{refs:t.tableRef1,columnsList:t.columnsList1,thisTableData:t.thisTableData1,loading:t.loading}})],1):t._e()],1),t._v(" "),o("row",{staticClass:"but"},[o("Button",{directives:[{name:"show",rawName:"v-show",value:t.btnShow,expression:"btnShow"}],on:{click:function(e){t.goBack(1)}}},[t._v("返 回")]),t._v(" "),o("Button",{directives:[{name:"show",rawName:"v-show",value:!t.btnShow,expression:"!btnShow"}],attrs:{disabled:t.isDisable},on:{click:function(e){t.savePromotion()}}},[t._v("确 认")]),t._v(" "),o("Button",{directives:[{name:"show",rawName:"v-show",value:!t.btnShow,expression:"!btnShow"}],on:{click:function(e){t.goBack()}}},[t._v("取 消")])],1)],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.default=r},601:function(t,e,o){"use strict";function n(t){u||o(900)}Object.defineProperty(e,"__esModule",{value:!0});var i=o(891),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);var s=o(902),l=o.n(s),u=!1,c=o(13),p=n,f=c(r.a,l.a,!1,p,null,null);f.options.__file="src/views/tables/components/orderTable.vue",e.default=f.exports},716:function(t,e,o){"use strict";function n(t){u||o(2051)}Object.defineProperty(e,"__esModule",{value:!0});var i=o(1598),r=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);var s=o(2053),l=o.n(s),u=!1,c=o(13),p=n,f=c(r.a,l.a,!1,p,"data-v-0cfc66b3",null);f.options.__file="src/views/promotion-manage/war-deploy/group-buy/groupBuy-detail.vue",e.default=f.exports},891:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"orderTable",props:{columnsList:Array,thisTableData:Array,getHeight:Number,loading:{type:Boolean,default:!0}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.columnsList.forEach(function(e){"address1"==e.key&&(e.render=function(e,o){return e("Row",{props:{type:"flex",align:"middle",justify:"center"}},[e("Col",{props:{span:"22"}},o.row.name),e("Col",{props:{span:"2"}},[e("Button",{props:{type:"text",icon:"edit"},on:{click:function(e){t.$emit("showLayer","true")}}})])])})})},a:function(t){this.$emit("listenCheckbox",t)}},watch:{}}},897:function(t,e,o){var n=o(44);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},900:function(t,e,o){var n=o(901);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(43)("296919d0",n,!1,{})},901:function(t,e,o){e=t.exports=o(42)(!1),e.push([t.i,"\n.show-edit-btn {\n  display: none;\n  margin-left: -10px;\n}\n.ivu-table-cell:hover .show-edit-btn {\n  display: inline-block;\n}\n",""])},902:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Table",{attrs:{height:t.getHeight,columns:t.columnsList,data:t.thisTableData,stripe:"",border:"",loading:t.loading},on:{"on-selection-change":t.a}})],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.default=r},909:function(t,e,o){t.exports={default:o(910),__esModule:!0}},910:function(t,e,o){o(151),o(75),o(100),o(911),o(917),o(920),o(922),t.exports=o(11).Set},911:function(t,e,o){"use strict";var n=o(912),i=o(897);t.exports=o(913)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(i(this,"Set"),t=0===t?0:t,t)}},n)},912:function(t,e,o){"use strict";var n=o(32).f,i=o(148),r=o(245),a=o(64),s=o(244),l=o(240),u=o(147),c=o(246),p=o(248),f=o(37),d=o(243).fastKey,m=o(897),v=f?"_s":"size",g=function(t,e){var o,n=d(e);if("F"!==n)return t._i[n];for(o=t._f;o;o=o.n)if(o.k==e)return o};t.exports={getConstructor:function(t,e,o,u){var c=t(function(t,n){s(t,c,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=n&&l(n,o,t[u],t)});return r(c.prototype,{clear:function(){for(var t=m(this,e),o=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete o[n.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var o=m(this,e),n=g(o,t);if(n){var i=n.n,r=n.p;delete o._i[n.i],n.r=!0,r&&(r.n=i),i&&(i.p=r),o._f==n&&(o._f=i),o._l==n&&(o._l=r),o[v]--}return!!n},forEach:function(t){m(this,e);for(var o,n=a(t,arguments.length>1?arguments[1]:void 0,3);o=o?o.n:this._f;)for(n(o.v,o.k,this);o&&o.r;)o=o.p},has:function(t){return!!g(m(this,e),t)}}),f&&n(c.prototype,"size",{get:function(){return m(this,e)[v]}}),c},def:function(t,e,o){var n,i,r=g(t,e);return r?r.v=o:(t._l=r={i:i=d(e,!0),k:e,v:o,p:n=t._l,n:void 0,r:!1},t._f||(t._f=r),n&&(n.n=r),t[v]++,"F"!==i&&(t._i[i]=r)),t},getEntry:g,setStrong:function(t,e,o){u(t,e,function(t,o){this._t=m(t,e),this._k=o,this._l=void 0},function(){for(var t=this,e=t._k,o=t._l;o&&o.r;)o=o.p;return t._t&&(t._l=o=o?o.n:t._t._f)?"keys"==e?c(0,o.k):"values"==e?c(0,o.v):c(0,[o.k,o.v]):(t._t=void 0,c(1))},o?"entries":"values",!o,!0),p(e)}}},913:function(t,e,o){"use strict";var n=o(12),i=o(36),r=o(243),a=o(66),s=o(45),l=o(245),u=o(240),c=o(244),p=o(44),f=o(77),d=o(32).f,m=o(914)(0),v=o(37);t.exports=function(t,e,o,g,h,_){var D=n[t],y=D,b=h?"set":"add",T=y&&y.prototype,w={};return v&&"function"==typeof y&&(_||T.forEach&&!a(function(){(new y).entries().next()}))?(y=e(function(e,o){c(e,y,t,"_c"),e._c=new D,void 0!=o&&u(o,h,e[b],e)}),m("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in T&&(!_||"clear"!=t)&&s(y.prototype,t,function(o,n){if(c(this,y,t),!e&&_&&!p(o))return"get"==t&&void 0;var i=this._c[t](0===o?0:o,n);return e?this:i})}),_||d(y.prototype,"size",{get:function(){return this._c.size}})):(y=g.getConstructor(e,t,h,b),l(y.prototype,o),r.NEED=!0),f(y,t),w[t]=y,i(i.G+i.W+i.F,w),_||g.setStrong(y,t,h),y}},914:function(t,e,o){var n=o(64),i=o(149),r=o(98),a=o(99),s=o(915);t.exports=function(t,e){var o=1==t,l=2==t,u=3==t,c=4==t,p=6==t,f=5==t||p,d=e||s;return function(e,s,m){for(var v,g,h=r(e),_=i(h),D=n(s,m,3),y=a(_.length),b=0,T=o?d(e,y):l?d(e,0):void 0;y>b;b++)if((f||b in _)&&(v=_[b],g=D(v,b,h),t))if(o)T[b]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:T.push(v)}else if(c)return!1;return p?-1:u||c?c:T}}},915:function(t,e,o){var n=o(916);t.exports=function(t,e){return new(n(t))(e)}},916:function(t,e,o){var n=o(44),i=o(247),r=o(14)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},917:function(t,e,o){var n=o(36);n(n.P+n.R,"Set",{toJSON:o(918)("Set")})},918:function(t,e,o){var n=o(150),i=o(919);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},919:function(t,e,o){var n=o(240);t.exports=function(t,e){var o=[];return n(t,!1,o.push,o,e),o}},920:function(t,e,o){o(921)("Set")},921:function(t,e,o){"use strict";var n=o(36);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},922:function(t,e,o){o(923)("Set")},923:function(t,e,o){"use strict";var n=o(36),i=o(76),r=o(64),a=o(240);t.exports=function(t){n(n.S,t,{from:function(t){var e,o,n,s,l=arguments[1];return i(this),e=void 0!==l,e&&i(l),void 0==t?new this:(o=[],e?(n=0,s=r(l,arguments[2],2),a(t,!1,function(t){o.push(s(t,n++))})):a(t,!1,o.push,o),new this(o))}})}}});