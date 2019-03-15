webpackJsonp([173],{1562:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(146),i=a(r),s=n(241),o=a(s),l=n(242),c=a(l),u=n(239);t.default={data:function(){var e=this;return{apiGroup:this.$util.apiConfig.permissionManage.role,query:{name:""},pageNumber:1,total:0,tableColumn:[{title:"角色名称",align:"center",key:"name"},{title:"描述",align:"center",key:"roleDes"},{title:"操作",align:"center",render:function(t,n){return t("span",[t("Button",{props:{size:"small"},on:{click:function(t){return e.handleUpdateBtnClick(n.row)}},style:"margin: 0 5px;"},"修改"),t("Button",{props:{size:"small"},on:{click:function(t){return e.handleDeleteBtnClick(n.row)}},style:"margin: 0 5px;"},"删除"),t("Button",{props:{size:"small"},on:{click:function(t){return e.handleMenuBtnClick(n.row)}},style:"margin: 0 5px;"},"分配菜单")])}}],tableData:[],editModalVisible:!1,editModalType:0,editParams:{name:"",roleDes:""},menuModalVisible:!1,menuModalId:"",menu:[],menuOrigin:[]}},created:function(){this.queryData()},methods:{queryData:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(){var t,n,a,r,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.apiGroup.page,n={pageNumber:this.pageNumber},this.query.name&&(t=this.apiGroup.getRolesByName,n={name:this.query.name}),this.tableData=[],a="",e.prev=5,e.next=8,this.$ajax.post(t,u.stringify(n));case 8:r=e.sent,i=r.data,i.success?(this.total=i.totalRecords,this.tableData=i.vos):a="角色列表获取失败",e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0),a="角色列表获取失败";case 17:a&&this.$Message.error(a);case 18:case"end":return e.stop()}},e,this,[[5,13]])}));return e}(),handleSearch:function(){this.pageNumber=1,this.queryData()},handleAddBtnClick:function(){this.editModalVisible=!0,this.editModalType=0,this.editParams={name:"",roleDes:""}},handleUpdateBtnClick:function(e){var t=e.id,n=e.name,a=e.roleDes;this.editModalVisible=!0,this.editModalType=1,this.editParams={name:n,roleDes:a,id:t}},handleSaveBtnClick:function(){if(!this.editParams.name.replace(/ /g,""))return this.$Modal.error({content:"角色名称不能为空"});this.saveRole()},saveRole:function(){function e(){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(){var t,n,a,r,i=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.apiGroup.addRole,this.editModalType&&(t=this.apiGroup.updateRole),n="",e.prev=3,e.next=6,this.$ajax.post(t,u.stringify(this.editParams));case 6:a=e.sent,r=a.data,r.success?this.$Modal.success({content:"保存成功",onOk:function(e){i.editModalVisible=!1,i.queryData()}}):n="保存失败",e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),n="保存失败";case 15:n&&this.$Modal.error({content:n});case 16:case"end":return e.stop()}},e,this,[[3,11]])}));return e}(),closeEditModal:function(){this.editModalVisible=!1},handleDeleteBtnClick:function(e){var t=this,n=e.id;this.$Modal.confirm({content:"删除是不可恢复的，您确认要删除吗？",onOk:function(e){t.deleteRole(n)}})},deleteRole:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t){var n,a,r,i=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.prev=1,e.next=4,this.$ajax.post(this.apiGroup.deleteRole,u.stringify({id:t}));case 4:a=e.sent,r=a.data,r.success?setTimeout(function(e){i.$Modal.success({content:"删除成功"}),i.queryData()},500):(n="删除失败",r.msg&&null!==r.msg&&(n=r.msg)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),n="删除失败";case 13:n&&setTimeout(function(e){i.$Modal.error({content:n})},500);case 14:case"end":return e.stop()}},e,this,[[1,9]])}));return e}(),handleMenuBtnClick:function(e){var t=e.id;this.menuModalId=t,this.menuModalVisible=!0,this.getMenu(t)},getMenu:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t){var n,a,r,i,s;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="",a=this,e.prev=2,e.next=5,a.$ajax.post(a.apiGroup.getRoleMenu,u.stringify({roleId:t}));case 5:r=e.sent,i=r.data,s=localStorage.getItem("promotionMode"),2===parseInt(s)&&(i.children=a.$util.sellerModePage(i.children)),a.menu=a.transMenu([i]),setTimeout(function(e){a.menuOrigin=a.$refs.menuTree.getCheckedNodes().concat()}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0),n="菜单获取失败";case 17:n&&a.$Message.error(n);case 18:case"end":return e.stop()}},e,this,[[2,13]])}));return e}(),transMenu:function(e){var t=this;if(e instanceof Array)return e.map(function(e){return t.transMenu(e)});var n=(0,i.default)({},e,{title:e.name,children:this.transMenu(e.children)});return e.children.length>0&&e.children.forEach(function(e){e.check||(n.checked=!1)}),n},handleMenuSaveBtnClick:function(){var e=this,t={},n={};this.menuOrigin.forEach(function(e){t[e.id]=e}),this.$refs.menuTree.getCheckedNodes().forEach(function(e){n[e.id]=e});var a=[],r=[];for(var i in n)n[i]&&!t[i]&&a.push(i);for(var s in t)!n[s]&&t[s]&&(this.nodeIsChecked(t[s])||r.push(s));var o=[];a.forEach(function(t){var n=e.addIdGroup(e.menu,t);n.shift(),n.pop(),o=o.concat(n)}),a=a.concat(o).map(function(e){return Number(e)}),a=a.filter(function(e,t,n){return n.indexOf(e)===t}),a=a.join(",");var l=[];if(r.forEach(function(t){var n=e.deleteIdGroup(e.menu,t);l=l.concat(n)}),r=r.concat(l).map(function(e){return Number(e)}),r=r.filter(function(e,t,n){return n.indexOf(e)===t}),r=r.join(","),a.length<=0&&r.length<=0)return this.$Modal.warning({content:"菜单分配未修改 无需保存"});this.saveMenu(u.stringify({roleId:this.menuModalId,upIds:a,downIds:r}))},addIdGroup:function(e,t){if(e instanceof Array)for(var n=0;n<e.length;n++){var a=this.addIdGroup(e[n],t);if(a)return a}else{if(e.id==t)return[t];var r=this.addIdGroup(e.children,t);if(r)return[e.id].concat(r)}},nodeIsChecked:function(e){if(e instanceof Array)for(var t=0;t<e.length;t++){var n=this.nodeIsChecked(e[t]);if(n)return n}else{if(e.checked)return!0;var a=e.children;if(a)return this.nodeIsChecked(a)}},deleteIdGroup:function(e,t,n){if(e instanceof Array)for(var a=0;a<e.length;a++){var r=this.deleteIdGroup(e[a],t,n);if(r)return r}else if(e.id==t){if(n&&!this.nodeIsChecked(n))return[n.id]}else{var i=this.deleteIdGroup(e.children,t,e);if(i){var s=[];return n&&!this.nodeIsChecked(n)&&s.push(n.id),s.concat(i)}}},saveMenu:function(){function e(e){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t){var n,a,r=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$ajax.post(this.apiGroup.updateRoleMenu,t);case 3:n=e.sent,a=n.data,this.$Modal.success({content:a.msg,onOk:function(e){r.menuModalVisible=!1,r.queryData()}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.$Modal.error("分配菜单失败");case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return e}()}}},1939:function(e,t,n){var a=n(1940);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(43)("de46748e",a,!1,{})},1940:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"\nspan.label[data-v-a29953f4] {\n  width: 90px;\n  display: inline-block;\n  text-align: right;\n}\nspan.input[data-v-a29953f4] {\n  width: auto;\n  display: inline-block;\n}\n.custom-row[data-v-a29953f4] {\n  margin-bottom: 10px;\n}\n[require][data-v-a29953f4] {\n  color: #0099ff;\n}\n",""])},1941:function(e,t,n){var a=n(1942);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(43)("4127c396",a,!1,{})},1942:function(e,t,n){t=e.exports=n(42)(!1),t.push([e.i,"",""])},1943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("Row",{staticClass:"custom-row"},[n("span",{staticClass:"label"},[n("span",[e._v("用户名:")])]),e._v(" "),n("span",{staticClass:"input"},[n("Input",{attrs:{clearable:""},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}})],1),e._v(" "),n("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")])],1),e._v(" "),n("Row",{staticClass:"custom-row"},[n("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:e.handleAddBtnClick}},[e._v("+ 增加")])],1),e._v(" "),n("Row",{staticClass:"custom-row"},[n("Table",{attrs:{columns:e.tableColumn,data:e.tableData}})],1),e._v(" "),n("Row",[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{current:e.pageNumber,pageSize:10,total:e.total},on:{"update:current":function(t){e.pageNumber=t},"on-change":e.queryData}})],1)]),e._v(" "),n("Modal",{attrs:{title:e.editModalType?"修改角色":"添加角色"},model:{value:e.editModalVisible,callback:function(t){e.editModalVisible=t},expression:"editModalVisible"}},[n("Row",{staticClass:"custom-row"},[n("span",{staticClass:"label"},[n("span",{attrs:{require:""}},[e._v("*")]),e._v(" "),n("span",[e._v("角色名称:")])]),e._v(" "),n("span",{staticClass:"input"},[n("Input",{model:{value:e.editParams.name,callback:function(t){e.$set(e.editParams,"name",t)},expression:"editParams.name"}})],1)]),e._v(" "),n("Row",{staticClass:"custom-row"},[n("span",{staticClass:"label"},[n("span",[e._v("描述:")])]),e._v(" "),n("span",{staticClass:"input"},[n("Input",{model:{value:e.editParams.roleDes,callback:function(t){e.$set(e.editParams,"roleDes",t)},expression:"editParams.roleDes"}})],1)]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleSaveBtnClick}},[e._v("保存")]),e._v(" "),n("Button",{on:{click:e.closeEditModal}},[e._v("关闭")])],1)],1),e._v(" "),n("Modal",{attrs:{title:"分配菜单"},model:{value:e.menuModalVisible,callback:function(t){e.menuModalVisible=t},expression:"menuModalVisible"}},[n("Tree",{ref:"menuTree",attrs:{data:e.menu,"show-checkbox":""}}),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleMenuSaveBtnClick}},[e._v("保存")]),e._v(" "),n("Button",{on:{click:function(t){e.menuModalVisible=!1}}},[e._v("取消")])],1)],1)],1)},r=[];a._withStripped=!0;var i={render:a,staticRenderFns:r};t.default=i},680:function(e,t,n){"use strict";function a(e){c||(n(1939),n(1941))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1562),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);var o=n(1943),l=n.n(o),c=!1,u=n(13),d=a,f=u(i.a,l.a,!1,d,"data-v-a29953f4",null);f.options.__file="src/views/permission-manage/role-manage.vue",t.default=f.exports}});