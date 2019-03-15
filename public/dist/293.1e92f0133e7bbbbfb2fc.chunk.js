webpackJsonp([293],{1413:function(t,e,n){var a,i;!function(r,o){a=o,void 0!==(i="function"==typeof a?a.call(e,n,e,t):a)&&(t.exports=i)}(0,function(t,e,n){return function(t,e,n,a,i,r){for(var o=0,u=["webkit","moz","ms","o"],s=0;s<u.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[u[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[s]+"CancelAnimationFrame"]||window[u[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-o)),i=window.setTimeout(function(){t(n+a)},a);return o=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var m in r)r.hasOwnProperty(m)&&(l.options[m]=r[m]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(e),l.endVal=Number(n),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.formatNumber=function(t){t=t.toFixed(l.decimals),t+="";var e,n,a,i;if(e=t.split("."),n=e[0],a=e.length>1?l.options.decimal+e[1]:"",i=/(\d+)(\d{3})/,l.options.useGrouping)for(;i.test(n);)n=n.replace(i,"$1"+l.options.separator+"$2");return l.options.prefix+n+a+l.options.suffix},l.easeOutExpo=function(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var e=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=e,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)}})},1442:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1413),i=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"CountTo",data:function(){return{counter:{},unitText:"",countId:"count"+parseInt(1e6*Math.random())}},props:{mainClass:String,countClass:String,mainStyle:{type:Object,default:function(){return{fontSize:"16px",fontWeight:500,color:"gray"}}},countStyle:Object,initCount:{type:Number,default:0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},simplify:{type:Boolean,default:!1},duration:{type:Number,default:2},delay:{type:Number,default:200},uneasing:{type:Boolean,default:!1},ungroup:{type:Boolean,default:!1},separator:{type:String,default:","},decimals:{type:Number,default:0},decimal:{type:String,default:"."},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}}},methods:{transformValue:function(t){var e=0,n="",a=this.unit.length;if(t<Math.pow(10,this.unit[0][0]))e=t;else for(var i=1;i<a;i++)t>=Math.pow(10,this.unit[i-1][0])&&t<Math.pow(10,this.unit[i][0])&&(e=parseInt(t/Math.pow(10,this.unit[i-1][0])),n=this.unit[i-1][1]);return t>Math.pow(10,this.unit[a-1][0])&&(e=parseInt(t/Math.pow(10,this.unit[a-1][0])),n=this.unit[a-1][1]),{val:e,unit:n}}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var e=0,n={};t.simplify?(n=t.transformValue(t.endVal),e=n.val,t.unitText=n.unit):e=t.endVal;var a={};t.counter=a=new i.default(t.countId,t.startVal,e,t.decimals,t.duration,{useEasing:!t.uneasing,useGrouping:!t.ungroup,separator:t.separator,decimal:t.decimal}),a.error||a.start()},t.delay)})},watch:{endVal:function(t){var e=0;if(this.simplify){var n=this.transformValue(this.endVal);e=n.val,this.unitText=n.unit}else e=this.endVal;this.counter.update(e)}}}},1492:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{class:t.mainClass,style:t.mainStyle},[t._t("leftText"),t._v(" "),n("span",{class:t.countClass,style:t.countStyle},[n("span",{attrs:{id:t.countId}},[t._v(t._s(t.initCount))]),n("span",[t._v(t._s(t.unitText))])]),t._v(" "),t._t("rightText")],2)},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};e.default=r},630:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1442),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n(1492),u=n.n(o),s=n(13),l=s(i.a,u.a,!1,null,null,null);l.options.__file="src/views/my-components/count-to/CountTo.vue",e.default=l.exports}});