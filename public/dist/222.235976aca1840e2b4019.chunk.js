webpackJsonp([222],{1697:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{loginOk:!1,loginUrl:"",url:""}},mounted:function(){this.init()},methods:{init:function(){var t=this;t.url="",t.loginOk=!1,t.$util.ajax(t.$util.apiConfig.o2oToken).then(function(e){t.linkTokenLoad=!0,t.url=t.$util.o2oUrl+"/libuy/singleLogin?token="+e.data.data+"&tourl=listCombinationOfPromotion",t.loginOk=!0}).catch(function(e){t.$Modal.error({title:"请求O2O Token失败",content:"请求O2O Token失败"})})}},watch:{$route:function(){this.init()}}}},2369:function(t,e,n){var o=n(2370);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(43)("1ad85b9c",o,!1,{})},2370:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"",""])},2371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"o2o-present"},[n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.loginOk,expression:"loginOk"}],attrs:{id:"finereIframe",width:"100%",height:"600",border:"0",frameborder:"no",src:t.url}})])},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.default=r},812:function(t,e,n){"use strict";function o(t){s||n(2369)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1697),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var u=n(2371),l=n.n(u),s=!1,c=n(13),f=o,d=c(r.a,l.a,!1,f,"data-v-6af67a18",null);d.options.__file="src/views/statement/o2oReport/o2oReportCombination.vue",e.default=d.exports}});