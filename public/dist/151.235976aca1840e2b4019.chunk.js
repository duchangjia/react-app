webpackJsonp([151,293],{1413:function(t,n,e){var a,o;!function(i,r){a=r,void 0!==(o="function"==typeof a?a.call(n,e,n,t):a)&&(t.exports=o)}(0,function(t,n,e){return function(t,n,e,a,o,i){for(var r=0,l=["webkit","moz","ms","o"],s=0;s<l.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[l[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[s]+"CancelAnimationFrame"]||window[l[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var e=(new Date).getTime(),a=Math.max(0,16-(e-r)),o=window.setTimeout(function(){t(e+a)},a);return r=e+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var u=this;u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var d in i)i.hasOwnProperty(d)&&(u.options[d]=i[d]);""===u.options.separator&&(u.options.useGrouping=!1),u.options.prefix||(u.options.prefix=""),u.options.suffix||(u.options.suffix=""),u.d="string"==typeof t?document.getElementById(t):t,u.startVal=Number(n),u.endVal=Number(e),u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.decimals=Math.max(0,a||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(o)||2e3,u.formatNumber=function(t){t=t.toFixed(u.decimals),t+="";var n,e,a,o;if(n=t.split("."),e=n[0],a=n.length>1?u.options.decimal+n[1]:"",o=/(\d+)(\d{3})/,u.options.useGrouping)for(;o.test(e);)e=e.replace(o,"$1"+u.options.separator+"$2");return u.options.prefix+e+a+u.options.suffix},u.easeOutExpo=function(t,n,e,a){return e*(1-Math.pow(2,-10*t/a))*1024/1023+n},u.easingFn=u.options.easingFn?u.options.easingFn:u.easeOutExpo,u.formattingFn=u.options.formattingFn?u.options.formattingFn:u.formatNumber,u.version=function(){return"1.7.1"},u.printValue=function(t){var n=u.formattingFn(t);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(t){u.startTime||(u.startTime=t),u.timestamp=t;var n=t-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(t){return u.callback=t,u.rAF=requestAnimationFrame(u.count),!1},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.startVal=n,cancelAnimationFrame(u.rAF),u.printValue(u.startVal)},u.update=function(t){cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=Number(t),u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count)},u.printValue(u.startVal)}})},1442:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(1413),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={name:"CountTo",data:function(){return{counter:{},unitText:"",countId:"count"+parseInt(1e6*Math.random())}},props:{mainClass:String,countClass:String,mainStyle:{type:Object,default:function(){return{fontSize:"16px",fontWeight:500,color:"gray"}}},countStyle:Object,initCount:{type:Number,default:0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},simplify:{type:Boolean,default:!1},duration:{type:Number,default:2},delay:{type:Number,default:200},uneasing:{type:Boolean,default:!1},ungroup:{type:Boolean,default:!1},separator:{type:String,default:","},decimals:{type:Number,default:0},decimal:{type:String,default:"."},unit:{type:Array,default:function(){return[[3,"K+"],[6,"M+"],[9,"B+"]]}}},methods:{transformValue:function(t){var n=0,e="",a=this.unit.length;if(t<Math.pow(10,this.unit[0][0]))n=t;else for(var o=1;o<a;o++)t>=Math.pow(10,this.unit[o-1][0])&&t<Math.pow(10,this.unit[o][0])&&(n=parseInt(t/Math.pow(10,this.unit[o-1][0])),e=this.unit[o-1][1]);return t>Math.pow(10,this.unit[a-1][0])&&(n=parseInt(t/Math.pow(10,this.unit[a-1][0])),e=this.unit[a-1][1]),{val:n,unit:e}}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){var n=0,e={};t.simplify?(e=t.transformValue(t.endVal),n=e.val,t.unitText=e.unit):n=t.endVal;var a={};t.counter=a=new o.default(t.countId,t.startVal,n,t.decimals,t.duration,{useEasing:!t.uneasing,useGrouping:!t.ungroup,separator:t.separator,decimal:t.decimal}),a.error||a.start()},t.delay)})},watch:{endVal:function(t){var n=0;if(this.simplify){var e=this.transformValue(this.endVal);n=e.val,this.unitText=e.unit}else n=this.endVal;this.counter.update(n)}}}},1492:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{class:t.mainClass,style:t.mainStyle},[t._t("leftText"),t._v(" "),e("span",{class:t.countClass,style:t.countStyle},[e("span",{attrs:{id:t.countId}},[t._v(t._s(t.initCount))]),e("span",[t._v(t._s(t.unitText))])]),t._v(" "),t._t("rightText")],2)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},1543:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(630),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={name:"count-to",components:{CountTo:o.default},data:function(){return{endVal:0,mainStyle:{fontSize:"30px"},countStyle:{fontSize:"50px",color:"#dc9387"},mainStyle2:{fontSize:"22px"},countStyle2:{fontSize:"30px",color:"#dc9387"},unit:[[3,"千多"],[4,"万多"],[5,"十万多"]],unit2:[[1,"十多"],[2,"百多"],[3,"千多"],[4,"万多"],[5,"十万多"],[6,"百万多"],[7,"千万多"],[8,"亿多"]],asynEndVal:487,integratedEndVal:3}},methods:{init:function(){var t=this;setInterval(function(){t.asynEndVal+=parseInt(20*Math.random()),t.integratedEndVal+=parseInt(30*Math.random())},2e3)}},mounted:function(){this.init()}}},1866:function(t,n,e){var a=e(1867);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(43)("00249258",a,!1,{})},1867:function(t,n,e){n=t.exports=e(42)(!1),n.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n.countto-page-row {\n  height: 200px;\n}\n.count-to-con {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.pre-code-show-con p {\n  height: 30px;\n  margin: 0;\n}\n",""])},1868:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Row",[e("Col",{attrs:{span:"3"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"waterdrop"}}),t._v("\n                    CountTo组件基础用法\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534}})],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"5"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"code"}}),t._v("\n                    可添加左右文字\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"paintbucket"}}),t._v("\n                    自定义样式\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"settings"}}),t._v("\n                    设置数据格式\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle,decimals:2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),e("Row",{staticClass:"margin-top-10"},[e("Col",{attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-color-wand"}}),t._v("\n                    转换单位简化数据\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{simplify:!0,endVal:2534,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-shuffle-strong"}}),t._v("\n                    自定义单位\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:253,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：253 => ")])]),t._v(" "),e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:2534,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：2534 => ")])]),t._v(" "),e("CountTo",{attrs:{simplify:!0,unit:t.unit,endVal:257678,mainStyle:t.mainStyle2,countStyle:t.countStyle2}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据：257678 => ")])])],1)])],1)],1),t._v(" "),e("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"android-stopwatch"}}),t._v("\n                    可异步更新数据\n                ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{endVal:t.asynEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("Total: ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1),t._v(" "),e("Row",{staticClass:"margin-top-10"},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n                综合实例\n            ")],1),t._v(" "),e("Row",{staticClass:"countto-page-row",attrs:{type:"flex",justify:"center",align:"middle"}},[e("div",{staticClass:"count-to-con"},[e("CountTo",{attrs:{delay:500,simplify:!0,unit:t.unit2,endVal:t.integratedEndVal,mainStyle:t.mainStyle,countStyle:t.countStyle}},[e("span",{attrs:{slot:"leftText"},slot:"leftText"},[t._v("原始数据: "+t._s(t.integratedEndVal)+" => ")]),t._v(" "),e("span",{attrs:{slot:"rightText"},slot:"rightText"},[t._v(" times")])])],1)])],1)],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};n.default=i},630:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(1442),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var r=e(1492),l=e.n(r),s=e(13),u=s(o.a,l.a,!1,null,null,null);u.options.__file="src/views/my-components/count-to/CountTo.vue",n.default=u.exports},665:function(t,n,e){"use strict";function a(t){u||e(1866)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(1543),i=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);var l=e(1868),s=e.n(l),u=!1,d=e(13),p=a,c=d(i.a,s.a,!1,p,null,null);c.options.__file="src/views/my-components/count-to/count-to.vue",n.default=c.exports}});