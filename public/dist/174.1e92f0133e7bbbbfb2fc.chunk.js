webpackJsonp([174],{1561:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(146),i=a(s),r=n(241),o=a(r),d=n(242),c=a(d),l=n(102),u=a(l),p=n(239);e.default={data:function(){return(0,u.default)({root:[],selectedRoot:{},editType:0,apiGroup:this.$util.apiConfig.permissionManage.orgnization,disableEdit:!0,editInfo:{name:""},loading:!1},"selectedRoot",{})},mounted:function(){this.getRoot()},computed:{saveBtnDisabled:function(){return this.editInfo.name.replace(/ /g,"").length<=0},btnGroupDisabled:function(){var t=this.selectedRoot.id;return!t&&0!==t}},methods:{getRoot:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(){var e,n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="",this.loading=!0,t.prev=2,t.next=5,this.$ajax.post(this.apiGroup.refresh);case 5:n=t.sent,a=n.data,a instanceof Object?this.root=this.transRes2Root([a]):e="组织数据请求失败",t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.error(t.t0),e="组织数据请求失败";case 14:this.loading=!1,e&&this.$Message.error(e);case 16:case"end":return t.stop()}},t,this,[[2,10]])}));return t}(),transRes2Root:function(t){var e=this;if(t instanceof Array)return t.map(function(t){return e.transRes2Root(t)});var n={title:t.name,name:t.name,id:t.id,pId:t.pId};return t.children.length>0&&(n.children=this.transRes2Root(t.children)),n},handleSelected:function(){function t(t){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(e){var n,a,s,r,d;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.disableEdit=!0,this.editInfo={name:""},!(e.length<1)){t.next=5;break}return this.selectedRoot={},t.abrupt("return");case 5:if(n=e[0],a=n.id,s=n.pId,this.editType=0,this.selectedRoot=e[0],0!=a||0!=s){t.next=11;break}return t.abrupt("return");case 11:return t.prev=11,t.next=14,this.$ajax.post(this.apiGroup.orgInfo,p.stringify({id:a,pId:s}));case 14:r=t.sent,d=r.data,d.success?(this.editInfo=(0,i.default)({},d.vo),this.disableEdit=!1):this.$Message.error(d.msg),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(11),this.$Message.error("修改数据请求失败"),console.error(t.t0);case 23:case"end":return t.stop()}},t,this,[[11,19]])}));return t}(),updateOrg:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(){var e,n,a,s,i,r,d,c,l,u=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.editInfo,n=e.id,a=e.pId,s=e.name,i=e.des,r="",t.prev=2,t.next=5,this.$ajax.post(this.apiGroup.updateOrg,p.stringify({id:n,pId:a,name:s,des:i}));case 5:d=t.sent,c=d.data,l=c.msg,c.success?(this.disableEdit=!0,setTimeout(function(t){u.$Modal.success({content:"保存成功",onOk:function(t){return u.getRoot()}})},500)):r=l,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),r="保存请求发送失败",console.error(t.t0);case 15:r&&setTimeout(function(t){return u.$Modal.error({content:r})},500);case 16:case"end":return t.stop()}},t,this,[[2,11]])}));return t}(),handleCreateBtnClick:function(){this.editType=1,this.disableEdit=!1;var t=this.selectedRoot,e=t.id,n=t.name;this.editInfo={parent:n,pId:e,name:"",des:""}},handleDeleteBntClick:function(){var t=this;this.$Modal.confirm({content:"确定要删除吗？删除后不可恢复",onOk:function(e){t.deleteRoot(t.selectedRoot)}})},deleteRoot:function(){function t(t){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(e){var n,a,s,i,r=this,d=e.id;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(d),0!=d){t.next=4;break}return setTimeout(function(t){return r.$Modal.error({content:"不能删除ROOT"})},500),t.abrupt("return",!1);case 4:return n="",t.prev=5,t.next=8,this.$ajax.post(this.apiGroup.deleteOrg,p.stringify({id:d}));case 8:a=t.sent,s=a.data,i=s.msg,s.success?(this.disableEdit=!0,setTimeout(function(t){r.$Modal.success({content:"删除成功",onOk:function(t){return r.getRoot()}})},500)):n=i,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),n="删除请求发送失败",console.error(t.t0);case 18:n&&setTimeout(function(t){return r.$Modal.error({content:n})},500);case 19:case"end":return t.stop()}},t,this,[[5,14]])}));return t}(),submitCreate:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(o.default.mark(function t(){var e,n,a,s,i,r,d,c,l=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.editInfo,n=e.pId,a=e.name,s=e.des,i="",t.prev=2,t.next=5,this.$ajax.post(this.apiGroup.addOrg,p.stringify({pId:n,name:a,des:s}));case 5:r=t.sent,d=r.data,c=d.msg,d.success?(this.disableEdit=!0,setTimeout(function(t){l.$Modal.success({content:"添加成功",onOk:function(t){return l.getRoot()}})},500)):i=c,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),i="添加请求发送失败",console.error(t.t0);case 15:i&&setTimeout(function(t){return l.$Modal.error({content:i})},500);case 16:case"end":return t.stop()}},t,this,[[2,11]])}));return t}()}}},1934:function(t,e,n){var a=n(1935);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("02dba4a6",a,!1,{})},1935:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.top-btn-group[data-v-555d4784] {\n  margin-bottom: 10px;\n  padding: 0 20px;\n}\n.tree-container[data-v-555d4784] {\n  border: 1px solid #ddd;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 0;\n}\n.edit .edit-pannel[data-v-555d4784] {\n  width: 320px;\n  margin-left: 20px;\n}\n.edit h3[data-v-555d4784] {\n  margin-bottom: 20px;\n}\n.edit div.row[data-v-555d4784] {\n  margin-bottom: 10px;\n}\n.edit span.label[data-v-555d4784] {\n  width: 80px;\n  text-align: right;\n  line-height: 32px;\n  display: inline-block;\n}\n.edit span.input[data-v-555d4784] {\n  width: auto;\n  display: inline-block;\n}\n.edit .save[data-v-555d4784] {\n  margin-top: 20px;\n  text-align: center;\n}\n.edit [required][data-v-555d4784] {\n  color: red;\n}\n",""])},1936:function(t,e,n){var a=n(1937);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("289cbc60",a,!1,{})},1937:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n#orgnization-management .tree span {\n  font-size: 14px!important;\n}\n",""])},1938:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{attrs:{id:"orgnization-management"}},[n("Spin",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{size:"large",fix:""}}),t._v(" "),n("Row",{staticClass:"top-btn-group"},[n("Col",[n("Button",{attrs:{type:"success",disabled:t.btnGroupDisabled},on:{click:t.handleCreateBtnClick}},[t._v("添加从属机构")]),t._v(" "),n("Button",{attrs:{type:"error",disabled:t.btnGroupDisabled},on:{click:t.handleDeleteBntClick}},[t._v("删除机构")])],1)],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("div",{staticClass:"tree-container"},[n("Tree",{staticClass:"tree",attrs:{data:t.root},on:{"on-select-change":t.handleSelected}})],1)]),t._v(" "),n("Col",{staticClass:"edit",attrs:{span:"12"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.editType,expression:"editType == 0"}],staticClass:"update edit-pannel"},[n("h3",[t._v("修改")]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"label"},[n("span",{attrs:{required:""}},[t._v("*")]),t._v(" "),n("span",[t._v("机构名称:")])]),t._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{type:"text",disabled:t.disableEdit},model:{value:t.editInfo.name,callback:function(e){t.$set(t.editInfo,"name",e)},expression:"editInfo.name"}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"label"},[n("span",[t._v("描述:")])]),t._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{type:"text",disabled:t.disableEdit},model:{value:t.editInfo.des,callback:function(e){t.$set(t.editInfo,"des",e)},expression:"editInfo.des"}})],1)]),t._v(" "),n("div",{staticClass:"row save"},[n("Button",{attrs:{type:"primary",disabled:t.saveBtnDisabled},on:{click:t.updateOrg}},[t._v("保存")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.editType,expression:"editType == 1"}],staticClass:"create edit-pannel"},[n("h3",[t._v("添加")]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"label"},[n("span",[t._v("上级机构:")])]),t._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{type:"text",value:t.editInfo.parent,disabled:!0}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"label"},[n("span",{attrs:{required:""}},[t._v("*")]),t._v(" "),n("span",[t._v("机构名称:")])]),t._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{type:"text",disabled:t.disableEdit},model:{value:t.editInfo.name,callback:function(e){t.$set(t.editInfo,"name",e)},expression:"editInfo.name"}})],1)]),t._v(" "),n("div",{staticClass:"row"},[n("span",{staticClass:"label"},[n("span",[t._v("描述:")])]),t._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{type:"text",disabled:t.disableEdit},model:{value:t.editInfo.des,callback:function(e){t.$set(t.editInfo,"des",e)},expression:"editInfo.des"}})],1)]),t._v(" "),n("div",{staticClass:"row save"},[n("Button",{attrs:{type:"primary",disabled:t.saveBtnDisabled},on:{click:t.submitCreate}},[t._v("保存")])],1)])])],1)],1)},s=[];a._withStripped=!0;var i={render:a,staticRenderFns:s};e.default=i},679:function(t,e,n){"use strict";function a(t){c||(n(1934),n(1936))}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1561),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,function(){return s[t]})}(r);var o=n(1938),d=n.n(o),c=!1,l=n(13),u=a,p=l(i.a,d.a,!1,u,"data-v-555d4784",null);p.options.__file="src/views/permission-manage/orgnization.vue",e.default=p.exports}});