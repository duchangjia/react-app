webpackJsonp([6],{1689:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(241),i=s(r),n=a(242),o=s(n),l=a(38),c=s(l),u=a(2346),d=s(u),p=a(239);t.default={components:{dragVerify:d.default},data:function(){return{apiGroup:this.$util.apiConfig.register,step:0,mobileTester:/^[1][3,4,5,7,8][0-9]{9}$/,mailTester:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,imgTimeset:(new Date).getTime(),tab0Data:{mobile:{value:"",errorType:-1,checked:!1,errorText:["请填写手机号码","手机号码格式不正确","该手机号码已存在，请重新输入","手机号未通过联网验证","手机号联网验证中"]},verify:{checked:!1,errorType:-1,errorText:["请完成滑块验证"]},agree:{value0:!1,value1:!1,checked:!1,errorType:-1,errorText:["请同意条款"]},captcha:{value:"",checked:!1}},agreeModalVisible:!1,agreeModalType:0,mobileMsgVerifyData:{codeKey:"",ikey:""},latestVerifyTime:0,mobileMsgVerifyModalVisible:!1,getVerifyMsgTimer:null,getVerifyMsgDisabled:!1,verifyMsgLimitSec:0,tab1Data:{uname:{value:"",checked:!1,errorType:-1,errorText:["用户名不能为空","用户名格式不正确","用户名已存在!","用户名未通过联网验证","用户名联网验证中"]},password:{value:"",checked:!1,errorType:-1,errorText:["警告！密码至少8个数字，字母或特殊字符组成的"]},rePassword:{value:"",checked:!1,errorType:-1,errorText:["两次密码输入不一致"]},companyName:{value:"",checked:!1,errorType:-1,errorText:["公司名称不能为空"]},email:{value:"",checked:!0,timer:null,lastReqTime:0,limitSec:0,sendDisabled:!1},ecode:{value:"",checked:!0},code:{value:"",checked:!0}},submitDisabled:!1}},computed:{tab0Next:function(){var e=!1;for(var t in this.tab0Data)this.tab0Data[t].checked||(e=!0);return e},agreeDisabled:function(){var e=!1;return this.tab0Data.agree.value0&&this.tab0Data.agree.value1||(e=!0),e},tab1NextDisabled:function(){if(this.submitDisabled)return!0;var e=!1;for(var t in this.tab1Data)this.tab1Data[t].checked||(e=!0);return e}},methods:{setMobile:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(t){var a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,!(a.length<=0)){e.next=5;break}return this.tab0Data.mobile.checked=!1,this.tab0Data.mobile.errorType=0,e.abrupt("return");case 5:if(this.mobileTester.test(a)){e.next=9;break}return this.tab0Data.mobile.checked=!1,this.tab0Data.mobile.errorType=1,e.abrupt("return");case 9:if(!this.tab0Data.mobile.checked||a!=this.tab0Data.mobile.value){e.next=11;break}return e.abrupt("return");case 11:this.tab0Data.mobile.checked=!0,this.tab0Data.mobile.errorType=-1,this.tab0Data.mobile.value=a;case 14:case"end":return e.stop()}},e,this)}));return e}(),handleCaptchaValueChange:function(e){if(this.tab0Data.captcha.value=e.target.value,this.tab0Data.captcha.value.replace(/ /g,"").length<=0)return this.tab0Data.captcha.checked=!1;this.tab0Data.captcha.checked=!0},checkUserAndCaptcha:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t,a,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.prev=1,e.next=4,this.$ajax.post("/user/verifyCaptcha",p.stringify({captcha:this.tab0Data.captcha.value}));case 4:a=e.sent,a.data.message||(t="验证码错误"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),t="http错误 请求失败";case 12:if(t){e.next=24;break}return e.prev=13,e.next=16,this.$ajax.post(this.apiGroup.phoneExist,p.stringify({phone:this.tab0Data.mobile.value}));case 16:s=e.sent,s.data.success||(t="手机号已存在"),e.next=24;break;case 20:e.prev=20,e.t1=e.catch(13),console.error(e.t1),t="http错误 请求失败";case 24:if(!t){e.next=29;break}return this.imgTimeset=(new Date).getTime(),this.tab0Data.captcha.value="",this.tab0Data.captcha.checked=!1,e.abrupt("return",this.$Message.error(t));case 29:this.getMobileVerifyMsg();case 31:case"end":return e.stop()}},e,this,[[1,8],[13,20]])}));return e}(),handleVerifyPass:function(){this.tab0Data.verify.checked=!0},openAgreeModal:function(e){this.agreeModalType=e,this.agreeModalVisible=!0},agreeChange:function(){this.tab0Data.agree["value"+this.agreeModalType]=!0,this.agreeModalVisible=!1},getMobileVerifyMsg:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(t){var a,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",this.mobileMsgVerifyModalVisible=!0);case 2:return e.prev=2,e.next=5,this.$ajax.post(this.apiGroup.verify,p.stringify({cont:this.tab0Data.mobile.value,type:2}));case 5:a=e.sent,s=a.data,s.success?(this.mobileMsgVerifyData.codeKey=s.codeKey,this.mobileMsgVerifyModalVisible=!0,this.disabledGetVerifyMsgBtn()):this.$Modal.error({content:s.msg}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0),this.$Modal.error({content:"手机验证码发送失败"});case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return e}(),disabledGetVerifyMsgBtn:function(){this.getVerifyMsgDisabled=!0,this.latestVerifyTime=(new Date).getTime(),this.setGetVerifyMsgTimer()},setGetVerifyMsgTimer:function(){var e=this,t=(new Date).getTime(),a=(t-this.latestVerifyTime)/1e3;a<60?(this.getVerifyMsgTimer=setTimeout(function(t){return e.setGetVerifyMsgTimer()},1e3),this.verifyMsgLimitSec=60-a):(clearTimeout(this.getVerifyMsgTimer),this.verifyMsgLimitSec=0,this.getVerifyMsgDisabled=!1)},verifyMobileMsg:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.mobileMsgVerifyData.ikey.replace(/' '/g,"").length<=0)){e.next=2;break}return e.abrupt("return",this.$Modal.error({content:"请输入短信验证码"}));case 2:return e.prev=2,e.next=5,this.$ajax.post(this.apiGroup.checkMsg,p.stringify({codeKey:this.mobileMsgVerifyData.codeKey,ikey:this.mobileMsgVerifyData.ikey.replace(/' '/g,"")}));case 5:t=e.sent,a=t.data,a.success?(this.$Message.success("验证成功"),this.mobileMsgVerifyModalVisible=!1,this.step=1):this.$Modal.error({content:a.msg}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),this.$Modal.error({content:"验证请求发送失败"});case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return e}(),checkUname:function(e){var t=this,a=e.target.value.replace(/[^\w\.\/]/gi,"");/^[a-zA-Z][a-zA-Z0-9_]*$/.test(a)||""===a?(e.target.value!==a&&setTimeout(function(a){return e.target.value=t.tab1Data.uname.value}),this.tab1Data.uname.value=a):setTimeout(function(a){return e.target.value=t.tab1Data.uname.value})},checkUnameAsync:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t,a,s,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.tab1Data.uname.value,this.tab1Data.uname.checked=!1,!(t.length<4||t.length>30)){e.next=8;break}return a=1,0===t.length&&(a=0),this.tab1Data.uname.errorType=a,this.$Modal.error({content:"用户名长度必须在4-30之间"}),e.abrupt("return");case 8:return this.tab1Data.uname.errorType=4,e.prev=9,e.next=12,this.$ajax.post(this.apiGroup.unameExist,p.stringify({uname:t}));case 12:s=e.sent,r=s.data,r.success?(this.tab1Data.uname.checked=!0,this.tab1Data.uname.errorType=-1,this.$Message.success("用户名可用")):this.tab1Data.uname.errorType=2,e.next=21;break;case 17:e.prev=17,e.t0=e.catch(9),console.error(e.t0),this.tab1Data.uname.errorType=3;case 21:case"end":return e.stop()}},e,this,[[9,17]])}));return e}(),checkPassword:function(){this.tab1Data.password.value.length<8?(this.tab1Data.password.errorType=0,this.tab1Data.password.checked=!1):(this.tab1Data.password.errorType=-1,this.tab1Data.password.checked=!0),this.checkRePassword()},checkRePassword:function(){this.tab1Data.password.value!==this.tab1Data.rePassword.value?(this.tab1Data.rePassword.errorType=0,this.tab1Data.rePassword.checked=!1):(this.tab1Data.rePassword.errorType=1,this.tab1Data.rePassword.checked=!0)},checkCompanyName:function(){this.tab1Data.companyName.value.replace(/' '/g,"").length<=0?(this.tab1Data.companyName.errorType=0,this.tab1Data.companyName.checked=!1):(this.tab1Data.companyName.errorType=-1,this.tab1Data.companyName.checked=!0)},getMailVerifyCode:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t,a,s,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,a=this.tab1Data.email.value,t.test(this.tab1Data.email.value)){e.next=5;break}return this.$Modal.error({content:"邮箱格式错误"}),e.abrupt("return");case 5:return e.prev=5,e.next=8,this.$ajax.post(this.apiGroup.verify,p.stringify({cont:a,type:1}));case 8:s=e.sent,r=s.data,r.success?(this.$Modal.success({content:"验证码已发送"}),this.tab1Data.ecode.value=r.codeKey,this.tab1Data.email.sendDisabled=!0,this.tab1Data.email.lastReqTime=(new Date).getTime(),this.setEmailTimer()):this.$Modal.error({content:r.msg}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0),this.$Modal.error({content:"验证码发送失败"});case 17:case"end":return e.stop()}},e,this,[[5,13]])}));return e}(),setEmailTimer:function(){var e=this,t=((new Date).getTime()-this.tab1Data.email.lastReqTime)/1e3;t<60?this.tab1Data.email.timer=setTimeout(function(a){e.tab1Data.email.limitSec=60-t,e.setEmailTimer()},1e3):(this.tab1Data.email.sendDisabled=!1,clearTimeout(this.tab1Data.email.timer))},submitRegister:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t,a,s;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={code:this.tab1Data.code.value,ecode:this.tab1Data.ecode.value,companyName:this.tab1Data.companyName.value,password:this.tab1Data.password.value,uname:this.tab1Data.uname.value,userEmail:this.tab1Data.email.value,umobile:this.tab0Data.mobile.value},t.userEmail.replace(/' '/g,"").length<=0&&(delete t.userEmail,delete t.code,delete t.ecode),this.submitDisabled=!0,e.prev=3,e.next=6,this.$ajax.post(this.apiGroup.submit,t);case 6:a=e.sent,s=a.data,s.success?(this.$Message.success("注册成功"),this.step=2):this.$Modal.error({content:s.msg}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),this.$Modal.error({content:"网络连接失败"});case 15:this.submitDisabled=!1;case 16:case"end":return e.stop()}},e,this,[[3,11]])}));return e}(),setLoginCookies:function(){c.default.set("user","user"),c.default.set("password","password"),c.default.set("access",1)},loginAndJump:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(t){var a,s,r,n=this;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=1,/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.tab1Data.uname.value)||(a=2),s={loginname:this.tab1Data.uname.value,loginpwd:this.tab1Data.password.value,userFlage:a},e.prev=3,e.next=6,this.$util.ajax.post(this.apiGroup.login,p.stringify(s));case 6:if(r=e.sent,200!=r.status){e.next=11;break}return this.setLoginCookies(),t?this.$router.replace(t):this.$router.replace("/"),e.abrupt("return");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:this.$Modal.error({content:"自动登录失败,请手动登录",onOk:function(e){return n.$router.replace({name:"login"})}});case 17:case"end":return e.stop()}},e,this,[[3,13]])}));return e}(),showAgreeWarning:function(){this.$Modal.warning({content:"请同意隐私/服务条款"})}}}},2342:function(e,t,a){var s=a(2343);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(43)("a289ff98",s,!1,{})},2343:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.register-view[data-v-006f7b36] {\n  width: 1000px;\n  margin: 10px auto;\n  text-align: center;\n  min-height: 500px;\n}\n.register-view .info-row[data-v-006f7b36] {\n  font-size: 12px;\n  overflow: hidden;\n}\n.register-view .info-row.notify[data-v-006f7b36],\n.register-view .info-row.error[data-v-006f7b36] {\n  color: red;\n}\n.register-view .edit-row[data-v-006f7b36] {\n  width: 400px;\n  margin: 0 auto;\n  text-align: left;\n}\n.register-view .edit-row.large[data-v-006f7b36] {\n  width: 600px;\n}\n.register-view .edit-row .label[data-v-006f7b36] {\n  width: 80px;\n  text-align: right;\n  display: inline-block;\n}\n.register-view .info-row[data-v-006f7b36],\n.register-view .edit-row[data-v-006f7b36] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.register-view .info-row.error[data-v-006f7b36] {\n  margin-top: 0;\n}\n.register-view .agreement-row[data-v-006f7b36] {\n  cursor: default;\n  font-size: 12px;\n}\n.register-view .agreement-span[data-v-006f7b36] {\n  cursor: pointer;\n}\n.register-view .agreement-span[data-v-006f7b36]:hover {\n  color: #38a8d9;\n}\n.register-view .wd-250[data-v-006f7b36] {\n  width: 250px;\n}\n.register-view .info-small[data-v-006f7b36] {\n  font-size: 12px;\n}\n.register-view .info-small.error[data-v-006f7b36] {\n  color: red;\n}\n#agreeMask[data-v-006f7b36] {\n  width: 14px;\n  height: 16px;\n  display: inline-block;\n  position: relative;\n  margin-right: -15px;\n  left: -26px;\n  top: 3px;\n  z-index: 10;\n  cursor: pointer;\n}\n",""])},2344:function(e,t,a){var s=a(2345);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(43)("094a18cc",s,!1,{})},2345:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.register-view .dv_handler.dv_handler_bg {\n  box-sizing: content-box;\n  font-size: 8px;\n}\n#mobile-msg-verify-modal .row {\n  width: 550px;\n  text-align: left;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n#mobile-msg-verify-modal .row .label {\n  display: inline-block;\n  width: 50px;\n  text-align: right;\n}\n",""])},2346:function(e,t){e.exports=function(e){function t(s){if(a[s])return a[s].exports;var r=a[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),r=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=r.default},function(e,t,a){function s(e){a(2)}var r=a(7)(a(8),a(9),s,null,null);e.exports=r.exports},function(e,t,a){var s=a(3);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals),a(5)("587d6418",s,!0)},function(e,t,a){t=e.exports=a(4)(),t.push([e.i,".drag_verify{position:relative;background-color:#e8e8e8;text-align:center}.drag_verify .dv_handler{position:absolute;top:0;left:0;border:1px solid #ccc;cursor:move}.drag_verify .dv_handler i{color:#666;font-size:1.5em}.drag_verify .dv_progress_bar{position:absolute;height:34px;width:0;transition:background 2s ease-in}.drag_verify .dv_text{position:absolute;top:0;color:#444;-moz-user-select:none;-webkit-user-select:none;user-select:none;-o-user-select:none;-ms-user-select:none}",""])},function(e,t,a){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(s[i]=!0)}for(r=0;r<t.length;r++){var n=t[r];"number"==typeof n[0]&&s[n[0]]||(a&&!n[2]?n[2]=a:a&&(n[2]="("+n[2]+") and ("+a+")"),e.push(n))}},e}},function(e,t,a){function s(e){for(var t=0;t<e.length;t++){var a=e[t],s=u[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(i(a.parts[r]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{for(var n=[],r=0;r<a.parts.length;r++)n.push(i(a.parts[r]));u[a.id]={id:a.id,refs:1,parts:n}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,a,s=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(s){if(v)return f;s.parentNode.removeChild(s)}if(b){var i=h++;s=p||(p=r()),t=n.bind(null,s,i,!1),a=n.bind(null,s,i,!0)}else s=r(),t=o.bind(null,s),a=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else a()}}function n(e,t,a,s){var r=a?"":s.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),n=e.childNodes;n[t]&&e.removeChild(n[t]),n.length?e.insertBefore(i,n[t]):e.appendChild(i)}}function o(e,t){var a=t.css,s=t.media,r=t.sourceMap;if(s&&e.setAttribute("media",s),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(6),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,v=!1,f=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a){v=a;var r=c(e,t);return s(r),function(t){for(var a=[],i=0;i<r.length;i++){var n=r[i],o=u[n.id];o.refs--,a.push(o)}t?(r=c(e,t),s(r)):r=[];for(var i=0;i<a.length;i++){var o=a[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var g=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){"use strict";e.exports=function(e,t){for(var a=[],s={},r=0;r<t.length;r++){var i=t[r],n=i[0],o=i[1],l=i[2],c=i[3],u={id:e+":"+r,css:o,media:l,sourceMap:c};s[n]?s[n].parts.push(u):a.push(s[n]={id:n,parts:[u]})}return a}},function(e,t){e.exports=function(e,t,a,s,r){var i,n=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,n=e.default);var l="function"==typeof n?n.options:n;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),s&&(l._scopeId=s);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=a),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(e,t){return c.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:i,exports:n,options:l}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dragVerify",props:{width:{type:Number,default:200},height:{type:Number,default:60},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#ccc"},progressBarBg:{type:String,default:"#FFFF99"},completedBg:{type:String,default:"#66cc66"},circle:{type:Boolean,default:!0},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"20px"}},computed:{handlerStyle:function(){return{left:"0px",width:this.height-2+"px",height:this.height-2+"px",borderRadius:this.circle?"50%":0,background:this.handlerBg}},message:function(){return this.isPassing?this.successText:this.text},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":0}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":0}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}},handlerIconClass:function(){return this.isPassing?this.handlerIcon:this.successIcon}},data:function(){return{isMoving:!1,x:0,isPassing:!1}},mounted:function(){this.init()},methods:{init:function(){},dragStart:function(e){if(!this.isPassing){this.isMoving=!0;var t=this.$refs.handler;this.x=(e.pageX||e.touches[0].pageX)-parseInt(t.style.left.replace("px",""),10)}},dragMoving:function(e){if(this.isMoving&&!this.isPassing){var t=(e.pageX||e.touches[0].pageX)-this.x,a=this.$refs.handler;t>0&&t<=this.width-this.height?(a.style.left=t+"px",this.$refs.progressBar.style.width=t+this.height/2+"px"):t>this.width-this.height&&(a.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify())}},dragFinish:function(e){this.isMoving&&!this.isPassing&&((e.pageX||e.changedTouches[0].pageX)-this.x<this.width-this.height&&(this.$refs.handler.style.left="0",this.$refs.progressBar.style.width="0"),this.isMoving=!1)},passVerify:function(){this.isPassing=!0,this.isMoving=!1;var e=this.$refs.handler;e.className+=" dv_handler_ok_bg",e.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style.color="#fff",this.$emit("passcallback")}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag_verify",style:e.dragVerifyStyle,on:{mousemove:e.dragMoving,mouseup:e.dragFinish,touchmove:e.dragMoving,touchend:e.dragFinish}},[a("div",{ref:"progressBar",staticClass:"dv_progress_bar",style:e.progressBarStyle}),e._v(" "),a("div",{ref:"message",staticClass:"dv_text",style:e.textStyle},[e._v(e._s(e.message))]),e._v(" "),a("div",{ref:"handler",staticClass:"dv_handler dv_handler_bg",style:e.handlerStyle,on:{mousedown:e.dragStart,touchstart:e.dragStart}},[a("i",{class:e.handlerIcon})])])},staticRenderFns:[]}}])},2347:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Card",{staticClass:"register-view"},[a("Tabs",{attrs:{value:e.step.toString()}},[a("TabPane",{attrs:{label:"验证手机号",disabled:0!==e.step,name:"0"}},[a("div",{staticClass:"info-row notify"},[a("span",[e._v("注册手机号码所有者将会是经销商唯一的超级")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("管理员，建议采用经销商老板的手机号码")])]),e._v(" "),a("div",{staticClass:"edit-row"},[a("span",{staticClass:"label"},[e._v("手机号 ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Select",{staticStyle:{width:"80px"},attrs:{value:"0",disabled:""}},[a("Option",{attrs:{value:"0",selected:""}},[e._v("+86中国")])],1),e._v(" "),a("Input",{staticStyle:{width:"180px"},attrs:{type:"text",value:e.tab0Data.mobile.value},on:{"on-blur":function(t){e.setMobile(t)}}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.tab0Data.mobile.errorType>-1,expression:"tab0Data.mobile.errorType>-1"}],staticStyle:{color:"red"},attrs:{type:"close"}})],1)]),e._v(" "),e.tab0Data.mobile.errorType>-1?a("div",{staticClass:"info-row error"},[e._v("\n                "+e._s(e.tab0Data.mobile.errorText[e.tab0Data.mobile.errorType])+"\n            ")]):e._e(),e._v(" "),a("div",{staticClass:"edit-row"},[a("span",{staticClass:"label"},[e._v("验证码 ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticStyle:{width:"80px"},attrs:{value:e.tab0Data.captcha.value},on:{"on-change":e.handleCaptchaValueChange}}),e._v(" "),a("span",{staticStyle:{"font-size":"12px"}},[a("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:e.$util.baseUrl+"/user/acquire?a="+e.imgTimeset}}),e._v(" "),a("span",[e._v("忘记密码?")]),e._v(" "),a("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.imgTimeset=(new Date).getTime()}}},[e._v("下一张")])])],1)]),e._v(" "),a("div",{staticClass:"edit-row"},[a("span",{staticClass:"label"},[e._v("验证 ")]),e._v(" "),a("span",{staticClass:"edit"},[a("dragVerify",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{width:240,height:34,text:"请按住滑块，拖动到最右边",successText:"验证通过","handler-icon":"ivu-icon ivu-icon-chevron-right","success-icon":"ivu-icon ivu-icon-checkmark-round",textSize:"12px",circle:!0},on:{passcallback:e.handleVerifyPass}})],1)]),e._v(" "),a("div",{staticClass:"edit-row"},[a("span",{staticClass:"label"}),e._v(" "),a("span",{staticClass:"edit"},[a("Checkbox",{attrs:{type:"ckeckbox",disabled:e.agreeDisabled},model:{value:e.tab0Data.agree.checked,callback:function(t){e.$set(e.tab0Data.agree,"checked",t)},expression:"tab0Data.agree.checked"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.agreeDisabled,expression:"agreeDisabled"}],attrs:{id:"agreeMask"},on:{click:function(t){e.showAgreeWarning()}}}),e._v(" "),a("span",{staticClass:"agreement-row"},[a("span",[e._v("同意DMS")]),e._v(" "),a("span",{staticClass:"agreement-span",on:{click:function(t){e.openAgreeModal(0)}}},[e._v("《隐私条款》")]),e._v(" "),a("span",{staticClass:"agreement-span",on:{click:function(t){e.openAgreeModal(1)}}},[e._v("《服务条款》")])])],1)]),e._v(" "),a("div",{staticClass:"button-row"},[a("Button",{attrs:{disabled:e.tab0Next,type:"primary"},on:{click:e.checkUserAndCaptcha}},[e._v("下一步")])],1)]),e._v(" "),a("TabPane",{attrs:{label:"填写账号信息",disabled:1!==e.step,name:"1"}},[a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("用户名* ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",attrs:{placeholder:'字母开头的4-30个字母，数字或"_"字符串'},on:{"on-change":function(t){e.checkUname(t)},"on-blur":e.checkUnameAsync}}),e._v(" "),e.tab1Data.uname.errorType>=0?a("span",{staticClass:"info-small error"},[e._v("\n                        "+e._s(e.tab1Data.uname.errorText[e.tab1Data.uname.errorType])+"\n                    ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("密码* ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",attrs:{type:"password"},on:{"on-blur":e.checkPassword},model:{value:e.tab1Data.password.value,callback:function(t){e.$set(e.tab1Data.password,"value",t)},expression:"tab1Data.password.value"}}),e._v(" "),e.tab1Data.password.errorType<0?a("span",{staticClass:"info-small"},[e._v("\n                        至少8个数字，字母或特殊字符组成的字符串\n                    ")]):e._e(),e._v(" "),e.tab1Data.password.errorType>=0?a("span",{staticClass:"info-small error"},[e._v("\n                        "+e._s(e.tab1Data.password.errorText[e.tab1Data.password.errorType])+"\n                    ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("确认密码* ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",attrs:{type:"password"},on:{"on-blur":e.checkRePassword},model:{value:e.tab1Data.rePassword.value,callback:function(t){e.$set(e.tab1Data.rePassword,"value",t)},expression:"tab1Data.rePassword.value"}}),e._v(" "),e.tab1Data.rePassword.errorType>=0?a("span",{staticClass:"info-small error"},[e._v("\n                        "+e._s(e.tab1Data.rePassword.errorText[e.tab1Data.rePassword.errorType])+"\n                    ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("公司名称* ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",on:{"on-blur":e.checkCompanyName},model:{value:e.tab1Data.companyName.value,callback:function(t){e.$set(e.tab1Data.companyName,"value",t)},expression:"tab1Data.companyName.value"}}),e._v(" "),e.tab1Data.companyName.errorType>=0?a("span",{staticClass:"info-small error"},[e._v("\n                        "+e._s(e.tab1Data.companyName.errorText[e.tab1Data.companyName.errorType])+"\n                    ")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("电子邮箱 ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",model:{value:e.tab1Data.email.value,callback:function(t){e.$set(e.tab1Data.email,"value",t)},expression:"tab1Data.email.value"}}),e._v(" "),a("Button",{attrs:{disabled:e.tab1Data.email.sendDisabled},on:{click:e.getMailVerifyCode}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.tab1Data.email.sendDisabled,expression:"!tab1Data.email.sendDisabled"}]},[e._v("免费获取验证码")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.tab1Data.email.sendDisabled,expression:"tab1Data.email.sendDisabled"}]},[e._v("重新发送 "+e._s(Math.ceil(e.tab1Data.email.limitSec)))])]),e._v(" "),a("span",{staticClass:"info-small"},[e._v("可在后续阶段再绑定邮箱")])],1)]),e._v(" "),a("div",{staticClass:"edit-row large"},[a("span",{staticClass:"label"},[e._v("邮箱验证码 ")]),e._v(" "),a("span",{staticClass:"edit"},[a("Input",{staticClass:"wd-250",model:{value:e.tab1Data.code.value,callback:function(t){e.$set(e.tab1Data.code,"value",t)},expression:"tab1Data.code.value"}})],1)]),e._v(" "),a("div",[a("Button",{attrs:{type:"primary",disabled:e.tab1NextDisabled},on:{click:e.submitRegister}},[e._v("下一步")])],1)]),e._v(" "),a("TabPane",{attrs:{label:"注册成功",disabled:2!==e.step,name:"2"}},[a("div",{staticClass:"info-row"},[a("span",{staticStyle:{"font-size":"30px"}},[a("Icon",{staticStyle:{color:"green"},attrs:{type:"checkmark-circled"}}),e._v(" "),a("span",[e._v("恭喜你注册成功!")])],1)]),e._v(" "),a("div",{staticClass:"info-row"},[a("span",{staticStyle:{color:"red"}},[e._v("提醒：认证完成后才能完整使用系统功能")]),e._v(" "),a("span",{staticStyle:{"font-size":"30px",cursor:"pointer"},on:{click:function(t){e.loginAndJump({name:"trader-verify1"})}}},[e._v("马上去认证")])]),e._v(" "),a("div",{staticClass:"info-row"},[a("router-link",{attrs:{to:{name:"login"}}},[a("Button",{staticStyle:{width:"100px","margin-top":"50px"},attrs:{type:"primary"}},[e._v("登录")])],1)],1)])],1),e._v(" "),a("Modal",{attrs:{title:"请阅读，隐私/服务条款"},model:{value:e.agreeModalVisible,callback:function(t){e.agreeModalVisible=t},expression:"agreeModalVisible"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.agreeModalType,expression:"agreeModalType == 0"}]},[a("p",{staticStyle:{"text-align":"left","vertical-align":"center"}},[e._v("\n                1. 在遵守国家法律以及本协议的情况下，您可以出于非商业目的浏览、下载本网站的内容。如出于商业目的使用（如：拷贝、下载、存储、通过硬盘拷贝或电子抓取系统发送、转换、出租、演示、传播、出版本网站的任何内容，或创造与前述内容有关的演绎作品或衍生产品），则必须事先经过观致的书面许可，并在使用时注明来源和版权系观致所有的标记。\n                "),a("br"),e._v(" "),a("br"),e._v("\n                2. 如果您需要使用本网站包含的由任何其他主体提供的内容，请直接与适当的版权权利人联系。\n                "),a("br"),e._v(" "),a("br"),e._v("\n                3. 如果任何个人或组织事先获得允许后以任何形式复制或传播本网站内著作权属观致所有的内容，还必须遵守以下条件：\n                "),a("br"),e._v(" "),a("br"),e._v("\n                （1）复制或传播行为应确保不改变原著的真实含义；\n                "),a("br"),e._v(" "),a("br"),e._v("\n                （2）且以显要方式注明出处，即本网站的 URL： www.liby.com.cn\n            ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.agreeModalType,expression:"agreeModalType == 1"}]},[a("p",{staticStyle:{"text-align":"left","vertical-align":"center"}},[e._v("\n                本网站所提供任何内容，包括但不限于数据、文字、图表、图象、声音或录像，其所有权、著作权及其他权利均由立白享有。前述权利受中华人民共和国的法律、法规、规章、规范性法律文件及相关国际条约的保护；对前述权利的任何侵犯行为均有可能导致民事、行政或刑事责任，一切后果均由侵权行为人承担。未经立白事先书面许可，您不得以任何方式复制、修改、传播、出版、转载或展示本网站的任何内容。同时，未经立白事先书面许可，对于本网站上的任何内容，任何人不得在非立白所属的服务器上做镜像。\n                "),a("br"),a("br"),e._v("\n                本网站采用但非本网站原创的所有内容，其版权归版权所有人所有；转载的部分内容源自其他网站，因无法和版权权利人联系，本网站本着尊重权利人的原则，在相关内容右部醒目注明来源网站的说明。如果您是前述内容的版权权利人，请与我们联系并提供证明材料和详实说明，我们将及时加注版权信息；如果您提出异议，我们将立即撤除任何涉及版权问题的内容。对于独家授权本网站提供的任何内容，如您需要转载，应当事先得到本网站和版权所有人的同意。\n            ")])]),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:e.agreeChange}},[e._v("同意")]),e._v(" "),a("Button",{on:{click:function(t){e.agreeModalVisible=!1}}},[e._v("取消")])],1)]),e._v(" "),a("Modal",{attrs:{title:"验证手机号",closable:!1,width:600,"mask-closable":!1},model:{value:e.mobileMsgVerifyModalVisible,callback:function(t){e.mobileMsgVerifyModalVisible=t},expression:"mobileMsgVerifyModalVisible"}},[a("div",{attrs:{id:"mobile-msg-verify-modal"}},[a("div",{staticClass:"row"},[a("span",{staticStyle:{color:"green"}},[e._v("!")]),e._v(" "),a("span",[e._v("验证码已发送到你的手机，15分钟内输入有效，请勿泄露")])]),e._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"label"},[e._v("手机号：")]),e._v(" "),a("span",[e._v(e._s(e.tab0Data.mobile.value))])]),e._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"label"},[e._v("验证码：")]),e._v(" "),a("Input",{staticStyle:{width:"120px"},model:{value:e.mobileMsgVerifyData.ikey,callback:function(t){e.$set(e.mobileMsgVerifyData,"ikey",t)},expression:"mobileMsgVerifyData.ikey"}}),e._v(" "),a("Button",{attrs:{disabled:e.getVerifyMsgDisabled},on:{click:function(t){e.getMobileVerifyMsg()}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.getVerifyMsgDisabled,expression:"!getVerifyMsgDisabled"}]},[e._v("免费获取验证码")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.getVerifyMsgDisabled,expression:"getVerifyMsgDisabled"}]},[e._v("重新发送("+e._s(Math.ceil(e.verifyMsgLimitSec))+")")])]),e._v(" "),a("Icon",{staticStyle:{color:"green"},attrs:{type:"checkmark"}}),e._v(" "),a("span",[e._v("验证码已经发送到你的手机，请查收")])],1)]),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:e.verifyMobileMsg}},[e._v("确定")])],1)])],1)},r=[];s._withStripped=!0;var i={render:s,staticRenderFns:r};t.default=i},259:function(e,t,a){"use strict";function s(e){c||(a(2342),a(2344))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1689),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);var o=a(2347),l=a.n(o),c=!1,u=a(13),d=s,p=u(i.a,l.a,!1,d,"data-v-006f7b36",null);p.options.__file="src/views/register/register.vue",t.default=p.exports}});