webpackJsonp([271],{1098:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:{total:{type:Number,default:0},current:{type:Number,default:1},pageSizeOpts:{type:Array,default:function(){return[10,20,30,40]}},pageSize:{type:Number,default:10},showSizer:{type:Boolean,default:!0},showTotal:{type:Boolean,default:!0},showElevator:{type:Boolean,default:!0}},methods:{getPage:function(e){this.$emit("getData",e)},getPageSize:function(e){this.$emit("setPageSize",e)}}}},1418:function(e,t,a){var o=a(1419);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(43)("00b631b6",o,!1,{})},1419:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"",""])},1420:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lb-page-contion"},[a("Page",{staticClass:"lb-page",attrs:{total:e.total,current:e.current,"page-size":e.pageSize,"page-size-opts":e.pageSizeOpts,"show-total":e.showTotal,"show-sizer":e.showSizer,"show-elevator":e.showElevator},on:{"on-change":e.getPage,"on-page-size-change":e.getPageSize}})],1)},n=[];o._withStripped=!0;var s={render:o,staticRenderFns:n};t.default=s},613:function(e,t,a){"use strict";function o(e){l||a(1418)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1098),s=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var i=a(1420),u=a.n(i),l=!1,p=a(13),c=o,f=p(s.a,u.a,!1,c,"data-v-3527b68b",null);f.options.__file="src/views/my-components/list-page/list-page.vue",t.default=f.exports}});