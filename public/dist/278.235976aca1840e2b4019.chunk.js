webpackJsonp([278],{602:function(t,e,n){"use strict";function s(t){c||n(946)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(930),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var a=n(948),u=n.n(a),c=!1,p=n(13),l=s,d=p(o.a,u.a,!1,l,null,null);d.options.__file="src/views/marketing-centre-components/steps.vue",e.default=d.exports},930:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"steps",props:{stepsObj:{type:Object}}}},946:function(t,e,n){var s=n(947);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(43)("62877a53",s,!1,{})},947:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.stepBox {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n  margin-bottom: 10px;\n}\n.bgcolor {\n  background-color: white;\n}\n.ivu-steps-item.ivu-steps-status-wait .ivu-steps-title {\n  color: #AAA;\n}\n",""])},948:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stepBox bgcolor"},[n("Steps",{attrs:{current:t.stepsObj.current,size:"small"}},t._l(t.stepsObj.data,function(t,e){return n("Step",{key:t,attrs:{title:t}})}))],1)},r=[];s._withStripped=!0;var o={render:s,staticRenderFns:r};e.default=o}});