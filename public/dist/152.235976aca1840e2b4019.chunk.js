webpackJsonp([152,294],{1413:function(t,e,n){var a,r;!function(i,o){a=o,void 0!==(r="function"==typeof a?a.call(e,n,e,t):a)&&(t.exports=r)}(0,function(t,e,n){return function(t,e,n,a,r,i){for(var o=0,u=["webkit","moz","ms","o"],s=0;s<u.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[u[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[s]+"CancelAnimationFrame"]||window[u[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-o)),r=window.setTimeout(function(){t(n+a)},a);return o=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var c in i)i.hasOwnProperty(c)&&(l.options[c]=i[c]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(e),l.endVal=Number(n),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.formatNumber=function(t){t=t.toFixed(l.decimals),t+="";var e,n,a,r;if(e=t.split("."),n=e[0],a=e.length>1?l.options.decimal+e[1]:"",r=/(\d+)(\d{3})/,l.options.useGrouping)for(;r.test(n);)n=n.replace(r,"$1"+l.options.separator+"$2");return l.options.prefix+n+a+l.options.suffix},l.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var e=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=e,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)}})},1436:function(t,e,n){"use strict";function a(t){var e=0,n="";return t<1e3?e=t:t>=1e3&&t<1e6?(e=parseInt(t/1e3),n="K+"):t>=1e6&&t<1e10?(e=parseInt(t/1e6),n="M+"):(e=parseInt(t/1e9),n="B+"),{val:e,unit:n}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1413),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={data:function(){return{unit:"",demo:{}}},name:"countUp",props:{idName:String,className:String,startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},delay:{type:Number,default:500},options:{type:Object,default:function(){return{useEasing:!0,useGrouping:!0,separator:",",decimal:"."}}},color:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},introText:[String,Number]},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var e=a(t.endVal),n=e.val;t.unit=e.unit;var r={};t.demo=r=new i.default(t.idName,t.startVal,n,t.decimals,t.duration,t.options),r.error||r.start()},t.delay)})},watch:{endVal:function(t){var e=a(t),n=e.val;this.unit=e.unit,this.demo.update(n)}}}},1483:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{class:t.className,style:{textAlign:"center",color:t.color,fontSize:t.countSize,fontWeight:t.countWeight}},[n("span",{attrs:{id:t.idName}},[t._v(t._s(t.startVal))]),n("span",[t._v(t._s(t.unit))])]),t._v(" "),t._t("intro")],2)},r=[];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.default=i},1528:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(625),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"inforCard",components:{countUp:r.default},props:{idName:String,endVal:Number,color:String,iconType:String,introText:String,countSize:{type:String,default:"30px"},countWeight:{type:Number,default:700},iconSize:{type:Number,default:40}}}},1820:function(t,e,n){var a=n(1821);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(43)("2beb3b10",a,!1,{})},1821:function(t,e,n){e=t.exports=n(42)(!1),e.push([t.i,"\n.infor-card-icon-con {\n  height: 100%;\n}\n.height-100 {\n  height: 100%;\n}\n.infor-card-con {\n  height: 100px;\n}\n.infor-intro-text {\n  font-size: 12px;\n  font-weight: 500;\n  color: #C8C8C8;\n}\n",""])},1822:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",{attrs:{padding:0}},[n("div",{staticClass:"infor-card-con"},[n("Col",{staticClass:"infor-card-icon-con",style:{backgroundColor:t.color,color:"white"},attrs:{span:"8"}},[n("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[n("Icon",{attrs:{type:t.iconType,size:t.iconSize}})],1)],1),t._v(" "),n("Col",{staticClass:"height-100",attrs:{span:"16"}},[n("Row",{staticClass:"height-100",attrs:{type:"flex",align:"middle",justify:"center"}},[n("count-up",{staticClass:"infor-card-count user-created-count",attrs:{"id-name":t.idName,"end-val":t.endVal,color:t.color,countSize:t.countSize,countWeight:t.countWeight}},[n("p",{staticClass:"infor-intro-text",attrs:{slot:"intro"},slot:"intro"},[t._v(t._s(t.introText))])])],1)],1)],1)])},r=[];a._withStripped=!0;var i={render:a,staticRenderFns:r};e.default=i},625:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1436),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var o=n(1483),u=n.n(o),s=n(13),l=s(r.a,u.a,!1,null,null,null);l.options.__file="src/views/home/components/countUp.vue",e.default=l.exports},653:function(t,e,n){"use strict";function a(t){l||n(1820)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1528),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);var u=n(1822),s=n.n(u),l=!1,c=n(13),d=a,f=c(i.a,s.a,!1,d,null,null);f.options.__file="src/views/home/components/inforCard.vue",e.default=f.exports}});