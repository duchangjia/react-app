webpackJsonp([5],{1437:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},1537:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(241),a=o(i),r=n(242),s=o(r),l=n(38),c=o(l),u=n(239);o(u);e.default={data:function(){return{logining:!1,captcha:"",captchaImgSrc:"",loginFailCounter:0,form:{userName:"",password:""},rules:{userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},created:function(){void 0!=c.default.get("user")&&(this.form.userName=c.default.get("user")),void 0!=c.default.get("loginFailCounter")&&(this.loginFailCounter=c.default.get("loginFailCounter")),this.changeCaptcha()},mounted:function(){c.default.set("logout")&&(window.location.reload(),c.default.remove("logout")),clearTimeout(window.timer),window.timer=null,window.isGet=!1},methods:{changeCaptcha:function(){this.captchaImgSrc=this.$util.baseUrl+"/user/acquire?a="+(new Date).getTime(),this.captcha=""},handleSubmit:function(){var t=this;this.$refs.loginForm.validate(function(e){if(e){if(t.loginFailCounter>0&&4!=t.captcha.length)return void t.$Modal.error({title:"验证码错误",content:"请输入正确的验证码"});t.httpSend()}})},httpSend:function(){function t(){return e.apply(this,arguments)}var e=(0,s.default)(a.default.mark(function t(){var e,n,o,i,r,s=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(this.loginFailCounter>0)){t.next=10;break}return e="captcha="+this.captcha,t.next=5,this.$util.ajax.post("/user/verifyCaptcha",e);case 5:if(n=t.sent,n.data.message){t.next=10;break}return this.$Modal.error({title:"登陆错误",content:"校验码错误！"}),this.changeCaptcha(),t.abrupt("return");case 10:return o=1,/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.form.userName)||(o=2),i="loginname="+this.form.userName+"&loginpwd="+this.form.password+"&userFlage="+o,this.logining=!0,t.next=16,this.$util.ajax.post("/user/homepage",i);case 16:r=t.sent,200==r.status?(console.log("登陆返回数据：",r),this.logining=!1,"可以登录"==r.data.message?(this.loginFailCounter=0,c.default.set("loginFailCounter",this.loginFailCounter,{expires:1/48}),c.default.set("user",this.form.userName),c.default.set("access",1),localStorage.setItem("promotionMode",r.data.promotionMode?r.data.promotionMode:1),this.$router.replace({name:"home_index"})):"找回密码"==r.data.message?(this.loginFailCounter++,c.default.set("loginFailCounter",this.loginFailCounter,{expires:1/48}),this.changeCaptcha(),this.$Modal.error({title:"登陆错误",content:"您的登陆失败次数过多，请自行找回密码！"})):"个人信息还没有完善"==r.data.message||"公司信息信息还没有完善"==r.data.message||"店铺信息信息还没有完善"==r.data.message||"分销商还未审核"==r.data.message||"分销商审核通过"==r.data.message||"用户未认证"==r.data.message?(c.default.set("user",this.form.userName),c.default.set("access",1),this.loginFailCounter=0,c.default.set("loginFailCounter",this.loginFailCounter,{expires:1/48}),this.$Modal.confirm({title:"用户未认证",content:"用户未认证,将为您跳转到认证页面进行认证",onOk:function(){s.$router.push({name:"trader-verify1"})}})):(this.loginFailCounter++,c.default.set("loginFailCounter",this.loginFailCounter,{expires:1/48}),this.changeCaptcha(),this.$Modal.error({title:"登陆错误",content:r.data.message}))):this.$Modal.error({title:"登陆失败",content:"登陆请求失败"}),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),this.$Modal.error({title:"登陆失败",content:"http请求失败"});case 23:case"end":return t.stop()}},t,this,[[0,20]])}));return t}()}}},1847:function(t,e,n){var o=n(1848);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(43)("b177eea6",o,!1,{})},1848:function(t,e,n){var o=n(1437);e=t.exports=n(42)(!1),e.push([t.i,"\n.login-mian {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n.login-mian .heading {\n  width: 100%;\n  height: 15%;\n  min-height: 100px;\n}\n.login-mian .heading .logo {\n  position: relative;\n  top: 50%;\n  left: 22%;\n}\n.login-mian .footing {\n  font-family: NotoSansCJKsc-Regular;\n  font-size: 14px;\n  color: #484C50;\n}\n.login-mian .footing .copy-right {\n  left: 22%;\n  top: 50px;\n  position: relative;\n  display: inline-block;\n}\n.ivu-form-item {\n  margin-bottom: 20px;\n}\n.login {\n  width: 100%;\n  height: 45%;\n  min-height: 320px;\n  background-image: url("+o(n(1849))+");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: center;\n  position: relative;\n}\n.login-con {\n  position: absolute;\n  right: 22%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 250px;\n}\n.login-con-title {\n  font-family: NotoSansCJKsc-Regular;\n  font-size: 16px;\n  color: #265380;\n  text-align: center;\n}\n.login-con .form-con {\n  padding: 10px 0 0;\n}\n.login-con .login-tip {\n  font-size: 10px;\n  text-align: center;\n  color: #c3c3c3;\n}\n.login-con-link {\n  font-family: NotoSansCJKsc-Regular;\n  font-size: 14px;\n  color: #118CDF;\n  text-align: center;\n  margin-bottom: 10px;\n}\n@media (min-width: 1420px) {\n.login {\n    background-image: url("+o(n(1850))+");\n}\n}\n.login-con-link + .login-con-link {\n  margin-left: 15px;\n}\n.login-con-link span {\n  cursor: pointer;\n}\n",""])},1849:function(t,e,n){t.exports=n.p+"b972501137f6bf9accd206850988ebd3.png"},1850:function(t,e,n){t.exports=n.p+"b19f063859d861d18d2fef95f2989695.png"},1851:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-mian"},[t._m(0),t._v(" "),n("div",{staticClass:"login",on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleSubmit(e):null}}},[n("div",{staticClass:"login-con"},[n("Card",{attrs:{bordered:!1}},[n("p",{staticClass:"login-con-title"},[t._v("欢迎")]),t._v(" "),n("div",{staticClass:"form-con"},[n("Form",{ref:"loginForm",attrs:{model:t.form,rules:t.rules}},[n("FormItem",{attrs:{prop:"userName"}},[n("Input",{attrs:{placeholder:"请输入用户名"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("Icon",{attrs:{size:16,type:"person"}})],1)])],1),t._v(" "),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("Icon",{attrs:{size:14,type:"locked"}})],1)])],1),t._v(" "),n("Button",{staticStyle:{"margin-bottom":"10px","font-size":"14px"},attrs:{loading:t.logining,type:"primary",long:""},on:{click:t.handleSubmit}},[t._v("登录")])],1)],1),t._v(" "),t.loginFailCounter>0?n("div",{staticStyle:{display:"flex","margin-bottom":"10px"}},[n("Input",{staticStyle:{width:"70px"},attrs:{placeholder:"验证码"},model:{value:t.captcha,callback:function(e){t.captcha="string"==typeof e?e.trim():e},expression:"captcha"}}),t._v(" "),n("img",{staticStyle:{margin:"0 4px",cursor:"pointer"},attrs:{src:t.captchaImgSrc},on:{click:t.changeCaptcha}}),t._v(" "),n("Button",{attrs:{type:"warning"},on:{click:t.changeCaptcha}},[t._v("换一张")])],1):t._e(),t._v(" "),n("div",{staticStyle:{"text-align":"right"}},[n("span",{staticClass:"login-con-link"},[n("span",{on:{click:function(e){t.$router.push("/register")}}},[t._v("注册")])]),t._v(" "),n("span",{staticClass:"login-con-link"},[n("span",{on:{click:function(e){t.$router.push("/reset-password")}}},[t._v("忘记密码")])])])])],1)]),t._v(" "),t._m(1)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"heading"},[o("img",{staticClass:"logo",attrs:{src:n(1852),alt:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footing"},[n("span",{staticClass:"copy-right"},[t._v("Copyright © 2018. All Rights Reserved.")])])}];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.default=a},1852:function(t,e,n){t.exports=n.p+"48b338d601959949c903ecc7f182389f.png"},257:function(t,e,n){"use strict";function o(t){c||n(1847)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1537),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n(1851),l=n.n(s),c=!1,u=n(13),p=o,g=u(a.a,l.a,!1,p,null,null);g.options.__file="src/views/login.vue",e.default=g.exports}});