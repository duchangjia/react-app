webpackJsonp([175],{1515:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(38),o=function(n){return n&&n.__esModule?n:{default:n}}(a);t.default={name:"access_index",data:function(){return{accessCode:parseInt(o.default.get("access")),switchValue:1===parseInt(o.default.get("access"))}},computed:{avatorPath:function(){return localStorage.avatorImgPath}},methods:{changeAccess:function(n){n?(this.accessCode=1,o.default.set("access",1)):(this.accessCode=0,o.default.set("access",0)),this.$store.commit("updateMenulist")}}}},1783:function(n,t,e){var a=e(1784);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(43)("e542019c",a,!1,{})},1784:function(n,t,e){t=n.exports=e(42)(!1),t.push([n.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.access-user-con {\n  height: 200px;\n}\n.access-current-user-con {\n  text-align: center;\n  padding-top: 10px;\n}\n.access-current-user-con img {\n  display: block;\n  width: 100px;\n  height: 100px;\n  border: 2px solid #dddde2;\n  border-radius: 50%;\n  margin: 0px auto 10px;\n}\n.access-current-user-con p {\n  display: block;\n  padding: 20px 0 0;\n}\n.access-current-user-con p b {\n  margin: 0 10px;\n  color: #2d8cf0;\n}\n.access-change-access-con-row {\n  height: 200px;\n}\n",""])},1785:function(n,t,e){var a=e(1786);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(43)("32cca07d",a,!1,{})},1786:function(n,t,e){t=n.exports=e(42)(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},1787:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"access"},[e("Row",[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contact"}}),n._v("\n                    当前用户\n                ")],1),n._v(" "),e("div",{staticClass:"access-user-con access-current-user-con"},[e("img",{attrs:{src:n.avatorPath,alt:""}}),n._v(" "),e("p",[n._v("当前用户权限值:"),e("b",[n._v(n._s(n.accessCode))])])])])],1),n._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-contacts"}}),n._v("\n                    不同权限用户的不同菜单\n                ")],1),n._v(" "),e("div",{staticClass:"access-user-con access-change-access-con"},[e("Col",{attrs:{span:"8"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("i-switch",{attrs:{value:n.switchValue,size:"large"},on:{"on-change":n.changeAccess}})],1)],1),n._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"16"}},[e("Row",{staticClass:"access-change-access-con-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("p",[n._v("您可以通过左侧的开关来切换当前用户的权限值，然后您可以观察左侧菜单栏的变化，如果当前用户的权限值是"),e("b",[n._v(" 0 ")]),n._v("，则左侧菜单栏会显示’权限测试页‘这一项('权限测试页'只用于测试，点击不会跳转)。")])])],1)],1)])],1)],1)],1)},o=[];a._withStripped=!0;var r={render:a,staticRenderFns:o};t.default=r},640:function(n,t,e){"use strict";function a(n){p||(e(1783),e(1785))}Object.defineProperty(t,"__esModule",{value:!0});var o=e(1515),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);var s=e(1787),c=e.n(s),p=!1,l=e(13),d=a,g=l(r.a,c.a,!1,d,null,null);g.options.__file="src/views/access/access.vue",t.default=g.exports}});