webpackJsonp([64],{1096:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(241),u=n(s),a=i(242),r=n(a),o=i(239),h=n(o),d=i(984);e.default={name:"AddrSel",model:{prop:"addrValue",event:"addr-change"},props:{inputStyles:{type:Object,default:function(){return{height:"32px",width:"150px"}}},addrValue:{type:Object,default:function(){return{shengNum:"",shiNum:"",quNum:"",shengValue:"",shiValue:"",quValue:""}}},shengDisable:{type:Boolean,default:!1},shiDisable:{type:Boolean,default:!1},quDisable:{type:Boolean,default:!1}},data:function(){return{initAddrCode:Number((0,d.createUniqueRandomNum24)()),sheng:[],shengValue:"",shengNum:0,shi:[],shiValue:"",shiNum:0,qu:[],quValue:"",quNum:0,shengLoading:!1,shiLoading:!1,quLoading:!1}},created:function(){var t=this;this.shengNum=this.initAddrCode,this.shiNum=this.initAddrCode,this.quNum=this.initAddrCode,this.shengLoading=!0,this.sheng=[];var e=this;this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:0})).then(function(e){t.shengLoading=!1,200==e.status?t.sheng=e.data:console.warn("获取省选择列表数据失败")}).catch(function(t){console.log(t)})},mounted:function(){this.init()},methods:{init:function(){function t(){return e.apply(this,arguments)}var e=(0,r.default)(u.default.mark(function t(){var e,i,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,this.shengNum!=this.initAddrCode||this.shiNum!=this.initAddrCode||this.quNum!=this.initAddrCode||""!=this.shengValue||""!=this.shiValue||""!=this.quValue){t.next=3;break}return t.abrupt("return");case 3:if(this.shengNum==this.initAddrCode){t.next=13;break}return this.shiLoading=!0,this.shi=[],t.next=8,this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:this.shengNum}));case 8:i=t.sent,console.log(i),200==i.status?(this.shiLoading=!1,this.shi=i.data):console.warn("获取市选择列表数据失败"),t.next=19;break;case 13:this.shengValue="",this.shengNum=this.initAddrCode,this.shiValue="",this.shiNum=this.initAddrCode,this.quValue="",this.quNum=this.initAddrCode;case 19:if(this.shiNum==this.initAddrCode){t.next=28;break}return this.quLoading=!0,this.qu=[],t.next=24,this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:this.shiNum}));case 24:n=t.sent,200==n.status?(this.quLoading=!1,this.qu=n.data):console.warn("获取区选择列表数据失败"),t.next=31;break;case 28:this.shiValue="",this.quValue="",this.quNum=this.initAddrCode;case 31:case"end":return t.stop()}},t,this)}));return t}(),selectShengHandle:function(t){var e=this;if(this.shengValue=t.label,this.shengNum=t.value,this.shiValue="",this.quValue="",this.shiNum=this.initAddrCode,this.quNum=this.initAddrCode,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum}),this.shi=[],this.qu=[],this.shengNum!=this.initAddrCode){this.shiLoading=!0;var i=this;this.$util.ajax.post(i.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:this.shengNum})).then(function(t){200==t.status?(e.shiLoading=!1,e.shi=t.data):console.warn("获取市选择列表数据失败")}).catch(function(t){console.log(t)})}},selectShiHandle:function(t){var e=this;if(this.shiValue=t.label,this.shiNum=t.value,this.quValue="",this.quNum=this.initAddrCode,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum}),this.qu=[],this.shiNum!=this.initAddrCode){this.quLoading=!0;var i=this;this.$util.ajax.post(i.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:this.shiNum})).then(function(t){200==t.status?(e.quLoading=!1,e.qu=t.data):console.warn("获取区选择列表数据失败")}).catch(function(t){console.log(t)})}},selectQuHandle:function(t){this.quValue=t.label,this.quNum=t.value,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum})}},watch:{addrValue:{handler:function(){function t(t,i){return e.apply(this,arguments)}var e=(0,r.default)(u.default.mark(function t(e,i){var n,s,a;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this,t.prev=1,e.shengNum==i.shengNum){t.next=10;break}if(e.shengNum==this.shengNum||""==e.shengNum){t.next=10;break}return this.shi=[],this.qu=[],t.next=8,this.$util.ajax.post(n.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:e.shengNum}));case 8:s=t.sent,200==s.status?(this.shiLoading=!1,this.shi=s.data):console.warn("获取市选择列表数据失败");case 10:if(e.shiNum==i.shiNum){t.next=17;break}if(e.shiNum==this.shiNum||""==e.shiNum){t.next=17;break}return this.qu=[],t.next=15,this.$util.ajax.post(n.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,h.default.stringify({parentCode:e.shiNum}));case 15:a=t.sent,200==a.status?(this.quLoading=!1,this.qu=a.data):console.warn("获取区选择列表数据失败");case 17:this.shengValue=e.shengValue,this.shengNum=""==e.shengNum?this.initAddrCode:e.shengNum,this.shiValue=e.shiValue,this.shiNum=""==e.shiNum?this.initAddrCode:e.shiNum,this.quValue=e.quValue,this.quNum=""==e.quNum?this.initAddrCode:e.quNum,t.next=28;break;case 25:t.prev=25,t.t0=t.catch(1),console.warn("获取地址选择列表数据失败");case 28:case"end":return t.stop()}},t,this,[[1,25]])}));return t}(),deep:!0}}}},1414:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i-select",{style:t.inputStyles,attrs:{loading:t.shengLoading,disabled:t.shengDisable,"label-in-value":!0},on:{"on-change":t.selectShengHandle},model:{value:t.shengNum,callback:function(e){t.shengNum=e},expression:"shengNum"}},[i("i-option",{attrs:{value:t.initAddrCode,label:"请选择省份"}}),t._v(" "),t._l(t.sheng,function(e){return i("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2),t._v(" "),i("i-select",{style:t.inputStyles,attrs:{loading:t.shiLoading,disabled:t.shiDisable,"label-in-value":!0},on:{"on-change":t.selectShiHandle},model:{value:t.shiNum,callback:function(e){t.shiNum=e},expression:"shiNum"}},[i("i-option",{attrs:{value:t.initAddrCode,label:"请选择市"}}),t._v(" "),t._l(t.shi,function(e){return i("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2),t._v(" "),i("i-select",{style:t.inputStyles,attrs:{loading:t.quLoading,disabled:t.quDisable,"label-in-value":!0},on:{"on-change":t.selectQuHandle},model:{value:t.quNum,callback:function(e){t.quNum=e},expression:"quNum"}},[i("i-option",{attrs:{value:t.initAddrCode,label:"请选择区"}}),t._v(" "),t._l(t.qu,function(e){return i("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)},s=[];n._withStripped=!0;var u={render:n,staticRenderFns:s};e.default=u},611:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1096),s=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);var a=i(1414),r=i.n(a),o=i(13),h=o(s.a,r.a,!1,null,null,null);h.options.__file="src/views/my-components/addr-selector/addrSelector1.vue",e.default=h.exports},897:function(t,e,i){var n=i(44);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},909:function(t,e,i){t.exports={default:i(910),__esModule:!0}},910:function(t,e,i){i(151),i(75),i(100),i(911),i(917),i(920),i(922),t.exports=i(11).Set},911:function(t,e,i){"use strict";var n=i(912),s=i(897);t.exports=i(913)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(s(this,"Set"),t=0===t?0:t,t)}},n)},912:function(t,e,i){"use strict";var n=i(32).f,s=i(148),u=i(245),a=i(64),r=i(244),o=i(240),h=i(147),d=i(246),l=i(248),c=i(37),f=i(243).fastKey,g=i(897),m=c?"_s":"size",p=function(t,e){var i,n=f(e);if("F"!==n)return t._i[n];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,h){var d=t(function(t,n){r(t,d,e,"_i"),t._t=e,t._i=s(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=n&&o(n,i,t[h],t)});return u(d.prototype,{clear:function(){for(var t=g(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var i=g(this,e),n=p(i,t);if(n){var s=n.n,u=n.p;delete i._i[n.i],n.r=!0,u&&(u.n=s),s&&(s.p=u),i._f==n&&(i._f=s),i._l==n&&(i._l=u),i[m]--}return!!n},forEach:function(t){g(this,e);for(var i,n=a(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(n(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!p(g(this,e),t)}}),c&&n(d.prototype,"size",{get:function(){return g(this,e)[m]}}),d},def:function(t,e,i){var n,s,u=p(t,e);return u?u.v=i:(t._l=u={i:s=f(e,!0),k:e,v:i,p:n=t._l,n:void 0,r:!1},t._f||(t._f=u),n&&(n.n=u),t[m]++,"F"!==s&&(t._i[s]=u)),t},getEntry:p,setStrong:function(t,e,i){h(t,e,function(t,i){this._t=g(t,e),this._k=i,this._l=void 0},function(){for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?"keys"==e?d(0,i.k):"values"==e?d(0,i.v):d(0,[i.k,i.v]):(t._t=void 0,d(1))},i?"entries":"values",!i,!0),l(e)}}},913:function(t,e,i){"use strict";var n=i(12),s=i(36),u=i(243),a=i(66),r=i(45),o=i(245),h=i(240),d=i(244),l=i(44),c=i(77),f=i(32).f,g=i(914)(0),m=i(37);t.exports=function(t,e,i,p,v,N){var _=n[t],q=_,V=v?"set":"add",C=q&&q.prototype,y={};return m&&"function"==typeof q&&(N||C.forEach&&!a(function(){(new q).entries().next()}))?(q=e(function(e,i){d(e,q,t,"_c"),e._c=new _,void 0!=i&&h(i,v,e[V],e)}),g("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in C&&(!N||"clear"!=t)&&r(q.prototype,t,function(i,n){if(d(this,q,t),!e&&N&&!l(i))return"get"==t&&void 0;var s=this._c[t](0===i?0:i,n);return e?this:s})}),N||f(q.prototype,"size",{get:function(){return this._c.size}})):(q=p.getConstructor(e,t,v,V),o(q.prototype,i),u.NEED=!0),c(q,t),y[t]=q,s(s.G+s.W+s.F,y),N||p.setStrong(q,t,v),q}},914:function(t,e,i){var n=i(64),s=i(149),u=i(98),a=i(99),r=i(915);t.exports=function(t,e){var i=1==t,o=2==t,h=3==t,d=4==t,l=6==t,c=5==t||l,f=e||r;return function(e,r,g){for(var m,p,v=u(e),N=s(v),_=n(r,g,3),q=a(N.length),V=0,C=i?f(e,q):o?f(e,0):void 0;q>V;V++)if((c||V in N)&&(m=N[V],p=_(m,V,v),t))if(i)C[V]=p;else if(p)switch(t){case 3:return!0;case 5:return m;case 6:return V;case 2:C.push(m)}else if(d)return!1;return l?-1:h||d?d:C}}},915:function(t,e,i){var n=i(916);t.exports=function(t,e){return new(n(t))(e)}},916:function(t,e,i){var n=i(44),s=i(247),u=i(14)("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),n(e)&&null===(e=e[u])&&(e=void 0)),void 0===e?Array:e}},917:function(t,e,i){var n=i(36);n(n.P+n.R,"Set",{toJSON:i(918)("Set")})},918:function(t,e,i){var n=i(150),s=i(919);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return s(this)}}},919:function(t,e,i){var n=i(240);t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},920:function(t,e,i){i(921)("Set")},921:function(t,e,i){"use strict";var n=i(36);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},922:function(t,e,i){i(923)("Set")},923:function(t,e,i){"use strict";var n=i(36),s=i(76),u=i(64),a=i(240);t.exports=function(t){n(n.S,t,{from:function(t){var e,i,n,r,o=arguments[1];return s(this),e=void 0!==o,e&&s(o),void 0==t?new this:(i=[],e?(n=0,r=u(o,arguments[2],2),a(t,!1,function(t){i.push(r(t,n++))})):a(t,!1,i.push,i),new this(i))}})}},984:function(t,e,i){"use strict";function n(){for(var t=void 0,e=a.size;e==a.size;){for(var i=(new Date).getTime()%1e5,n=Math.floor(1e8*Math.random()),s=Math.floor(1e9*Math.random());i<1e4;)i*=10;for(;n<1e8;)n*=10;for(;s<1e9;)s*=10;t=i.toString()+n.toString()+s.toString(),a.add(t)}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.createUniqueRandomNum24=void 0;var s=i(909),u=function(t){return t&&t.__esModule?t:{default:t}}(s),a=new u.default;e.createUniqueRandomNum24=n}});