webpackJsonp([92,259],{1009:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BreadCrumb",props:{Breadcrumb:{type:Object}},data:function(){return{list:[]}},mounted:function(){},filters:{statePague:function(e,t){return e===t?"进行中":e<t?"待开始":"已完成"}},methods:{generType:function(e){var t=this;this.list=[],"0"===e?this.$nextTick(function(){t.list=["新建代金券","使用规则"]}):"1"===e?this.$nextTick(function(){t.list=["新建代金券","定向规划","发放规则","发放细则","使用规则"]}):this.$nextTick(function(){t.list=["新建代金券","定向规划","使用规则"]})}}}},1101:function(e,t,a){var r=a(1102);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(43)("492815ce",r,!1,{})},1102:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.demo-breadcrumb-separator {\n  color: #ff5500;\n  padding: 0 5px;\n}\n",""])},1103:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"white select_box"},[a("Steps",{attrs:{current:e.Breadcrumb.current}},e._l(e.list,function(t,r){return a("Step",{key:t,attrs:{title:e._f("statePague")(e.Breadcrumb.current,r),content:t}})}))],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.default=o},1452:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={formatDate:function(e){if(null===e)return null;var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1;r=r<10?"0"+r:r;var i=t.getDate();i=i<10?"0"+i:i;var o=t.getHours();o=o<10?"0"+o:o;var n=t.getMinutes();n=n<10?"0"+n:n;var l=t.getSeconds();return l=n<10?"0"+l:l,a+"-"+r+"-"+i+" "+o+":"+n+":"+l}}},1566:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(65),o=r(i),n=a(1452),l=r(n),u=a(605),s=r(u);t.default={data:function(){return{Breadcrumb:{current:0},formValidate:{use:"1",validTimeType:"2",generationType:"0",voucherTypeName:"",cardPrefix:"M",voucherNumberLength:16,numberLengthSelect:[{value:16,text:"16"}],platform:["O2O"],generatedQuantity:"",reissueDate:"2016-01-01 00:00:00",period:"",voucherPrice:"",usagePattern:"",activityStartTime:"",activityEndTime:"",activityStartTimeOption:{},activityEndTimeOption:{},useStartTime:"",useEndTime:"",useEndTimeOption:{},useStartTimeOption:{}},modifyId:"",modifyType:window.sessionStorage.getItem("modifyType"),ruleValidate:{platform:[{required:!0,type:"array",min:1,message:"至少选择一个",trigger:"change"}],voucherTypeName:[{required:!0,pattern:/.+/,message:"代金券名称不能为空",trigger:"blur"}],voucherPrice:[{required:!0,pattern:/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/,message:"代金券金额不能为空且为数字正数",trigger:"blur"}],generatedQuantity:[{required:!0,pattern:/^([1-9][0-9]*){1,3}$/,message:"生成数量只能是正整数",trigger:"blur"}],activityStartTime:[{required:!0,pattern:/.+/,message:"活动开始时间不能为空",trigger:"blur"}],activityEndTime:[{required:!0,pattern:/.+/,message:"活动结束时间不能为空",trigger:"blur"}],useStartTime:[{required:!0,pattern:/.+/,message:"使用开始时间不能为空",trigger:"blur"}],useEndTime:[{required:!0,pattern:/.+/,message:"使用结束时间不能为空",trigger:"blur"}],period:[{required:!0,pattern:/^[1-9]\d*$/,message:"有效期只能是正整数",trigger:"blur"}]}}},components:{BreadCrumb:s.default},mounted:function(){this.getModify()},computed:{generationType:function(){return this.formValidate.generationType}},methods:{generationTypeChange:function(e){this.$refs.Breadcrumb.generType(this.formValidate.generationType),this.formValidate.cardPrefix="0"===e?"M":"1"===this.formValidate.generationType?"S":"V"},getModify:function(){if(this.$refs.formValidate.resetFields(),this.$route.query.type){var e=JSON.parse(window.localStorage.getItem("voucherDetail"));this.differentStates(e),this.modifyId=e.id}else{var t={};this.differentStates(t)}var a=JSON.parse(window.localStorage.getItem("paramsCreateVoucher"));null!==a&&this.differentStates(a)},differentStates:function(e){"number"==typeof(e.generationType&&e.generationType)&&(e.generationType=e.generationType.toString()),"number"==typeof(e.validTimeType&&e.validTimeType)&&(e.validTimeType=e.validTimeType.toString()),e.generationType||(e.generationType="0"),this.$refs.Breadcrumb.generType(e.generationType),e.platform?e.platform=e.platform.split(","):e.platform=["O2O"],this.formValidate.platform=e.platform,this.formValidate.voucherTypeName=e.voucherTypeName||null,this.formValidate.generationType=e.generationType||"0",this.formValidate.validTimeType=e.validTimeType||"2",this.formValidate.cardPrefix=e.cardPrefix||"M",this.formValidate.voucherNumberLength=e.voucherNumberLength||"16",this.formValidate.generatedQuantity=e.generatedQuantity||null,this.formValidate.reissueDate=e.reissueDate||l.default.formatDate(new Date),this.formValidate.voucherPrice=e.voucherPrice||null,this.formValidate.period=e.period||null,this.formValidate.activityStartTime=e.activityStartTime||null,this.formValidate.activityEndTime=e.activityEndTime||null,this.formValidate.useStartTime=e.useStartTime||null,this.formValidate.useEndTime=e.useEndTime||null},linkCreate:function(){var e=this;this.$refs.formValidate.validate(function(t){if(t){var a=e.formValidate,r=new Date(l.default.formatDate(a.activityStartTime)),i=new Date(l.default.formatDate(a.activityEndTime)),n=new Date(l.default.formatDate(a.useStartTime)),u=new Date(l.default.formatDate(a.useEndTime));if(r.getTime()>=i.getTime()||i.getTime()<(new Date).getTime())return e.$Message.error("活动结束时间大于活动开始时间且大于等于当前时间"),!1;if("1"!==e.formValidate.validTimeType){if(n.getTime()<r.getTime())return e.$Message.error("使用开始时间不能小于活动开始时间"),!1;if(u.getTime()<n.getTime()||u.getTime()<i.getTime())return e.$Message.error("使用结束时间不能小于使用开始时间或者活动结束时间"),!1}var s={platform:a.platform.join(),voucherTypeName:a.voucherTypeName,generationType:a.generationType,validTimeType:a.validTimeType,cardPrefix:""===a.cardPrefix?null:a.cardPrefix,voucherNumberLength:""===a.voucherNumberLength?null:a.voucherNumberLength,generatedQuantity:a.generatedQuantity,reissueDate:l.default.formatDate(a.reissueDate),voucherPrice:a.voucherPrice,period:a.period,activityStartTime:l.default.formatDate(a.activityStartTime),activityEndTime:l.default.formatDate(a.activityEndTime),useStartTime:l.default.formatDate(a.useStartTime),useEndTime:l.default.formatDate(a.useEndTime)};e.$route.query.type&&(s.id=e.modifyId),"1"===a.validTimeType?(s.useStartTime=null,s.useEndTime=null,a.useStartTime=null,a.useEndTime=null):(s.period=null,a.period=null);var m=JSON.parse(window.localStorage.getItem("paramsCreateVoucher"));if(null===m)s.voucherExcludeRuleList=[],s.voucherIssueDetailList=[],s.voucherIssueRuleList=[],s.voucherExcludeRuleList=[],s.voucherUseRuleList=[],s.voucherOrientationRuleList=[],s.salesmanList=[],window.localStorage.setItem("paramsCreateVoucher",(0,o.default)(s));else{m.platform=a.platform.join(),m.voucherTypeName=a.voucherTypeName,m.generationType=a.generationType;"0"===m.generationType?(m.voucherExcludeRuleList.length>0||m.voucherIssueDetailList.length>0||m.voucherIssueRuleList.length>0||m.voucherOrientationRuleList.length>0)&&(m.voucherExcludeRuleList=[],m.voucherIssueDetailList=[],m.voucherIssueRuleList=[],m.voucherOrientationRuleList=[],m.salesmanList=[]):"2"===m.generationType&&(m.voucherIssueDetailList.length>0||m.voucherIssueRuleList.length>0)&&(m.voucherIssueDetailList=[],m.voucherIssueRuleList=[]),m.validTimeType=a.validTimeType,m.cardPrefix=""===a.cardPrefix?null:a.cardPrefix,m.voucherNumberLength=""===a.voucherNumberLength?null:a.voucherNumberLength,m.generatedQuantity=a.generatedQuantity,m.reissueDate=null===a.reissueDate?null:l.default.formatDate(a.reissueDate),m.voucherPrice=a.voucherPrice,m.period=a.period,m.activityStartTime=l.default.formatDate(a.activityStartTime),m.activityEndTime=l.default.formatDate(a.activityEndTime),m.useStartTime=l.default.formatDate(a.useStartTime),m.useEndTime=l.default.formatDate(a.useEndTime),window.localStorage.setItem("paramsCreateVoucher",(0,o.default)(m))}if("1"===e.formValidate.generationType){if(e.$route.query.type)return e.$router.push({path:"o2o-report-coupon-orienteering",query:{type:"Modify"}}),!1;e.$router.push({path:"o2o-report-coupon-orienteering"})}else if("2"===e.formValidate.generationType){if(e.$route.query.type)return e.$router.push({path:"o2o-report-coupon-orienteering",query:{type:"Modify",generationType:"collection"}}),!1;e.$router.push({path:"o2o-report-coupon-orienteering",query:{generationType:"collection"}})}else{if(e.$route.query.type)return e.$router.push({path:"o2o-report-coupon-use-rule",query:{type:"Modify"}}),!1;window.localStorage.removeItem("voucherDetail"),e.$router.push({path:"o2o-report-coupon-use-rule"})}}})},goPrevPage:function(){window.localStorage.removeItem("paramsCreateVoucher"),this.$router.push({path:"o2o-report-coupon-type-index"})},activityStartTimeChange:function(e){var t=this;this.formValidate.activityStartTime=e,this.formValidate.activityEndTimeOption={disabledDate:function(e){var a=t.formValidate.activityStartTime?new Date(t.formValidate.activityStartTime).valueOf():"";return a<(new Date).valueOf()&&(a=(new Date).valueOf()),e&&e.valueOf()<a-864e5}},this.formValidate.useStartTimeOption={disabledDate:function(e){var a=t.formValidate.activityStartTime?new Date(t.formValidate.activityStartTime).valueOf():"";return e&&e.valueOf()<a-864e5}}},activityEndTimeChange:function(e){this.formValidate.activityEndTime=e},onUseStartTimeChange:function(e){var t=this;this.formValidate.useStartTime=e,this.formValidate.useEndTimeOption={disabledDate:function(e){var a=t.formValidate.useStartTime?new Date(t.formValidate.useStartTime).valueOf():"",r=t.formValidate.activityEndTime?new Date(t.formValidate.activityEndTime).valueOf():"";return a<r&&(a=r),e&&e.valueOf()<a-864e5}}},onUseEndTimeChange:function(e){this.formValidate.useEndTime=e,this.formValidate.useStartTimeOption={disabledDate:function(e){}}}}}},1953:function(e,t,a){var r=a(1954);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(43)("784439e3",r,!1,{})},1954:function(e,t,a){t=e.exports=a(42)(!1),t.push([e.i,"\n.margin_n {\n  margin-bottom: 0px;\n}\n.add_btn {\n  padding: 15px 0px;\n  text-align: center;\n}\n.warncolor {\n  color: #ffd77a;\n}\n/*.dju_name{\n    ::-webkit-input-placeholder { !* WebKit browsers *!color:red;}\n    :-moz-placeholder { !* Mozilla Firefox 4 to 18 *!color:red;}\n    ::-moz-placeholder { !* Mozilla Firefox 19+ *!color:red;}\n    :-ms-input-placeholder { !* Internet Explorer 10+ *!color:red;}\n  }*/\n",""])},1955:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("bread-crumb",{ref:"Breadcrumb",attrs:{Breadcrumb:e.Breadcrumb}}),e._v(" "),a("Card",{staticClass:"white create_active margin-top-8",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("新建代金券")]),e._v(" "),a("div",[a("Form",{ref:"formValidate",attrs:{action:"",model:e.formValidate,rules:e.ruleValidate,"label-position":"right","label-width":100}},[a("div",{staticClass:"select_box"},[a("Row",[a("Col",[a("FormItem",{attrs:{label:"发布平台:",prop:"platform"}},[a("CheckboxGroup",{model:{value:e.formValidate.platform,callback:function(t){e.$set(e.formValidate,"platform",t)},expression:"formValidate.platform"}},[a("Checkbox",{attrs:{label:"O2O"}})],1)],1)],1)],1),e._v(" "),a("Row",{staticClass:"head"},[a("Col",{attrs:{span:"8"}},[a("FormItem",{staticClass:"margin_bottom_0",attrs:{label:"生成类型:",prop:"create"}},[a("RadioGroup",{on:{"on-change":e.generationTypeChange},model:{value:e.formValidate.generationType,callback:function(t){e.$set(e.formValidate,"generationType",t)},expression:"formValidate.generationType"}},[a("Radio",{attrs:{label:"0"}},[e._v("手动生成")]),e._v(" "),a("Radio",{attrs:{label:"1"}},[e._v("实时生成")]),e._v(" "),a("Radio",{attrs:{label:"2"}},[e._v("门店手动领取")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("FormItem",{staticClass:"margin_bottom_0",attrs:{label:"使用类型:",prop:"use"}},[a("RadioGroup",{model:{value:e.formValidate.use,callback:function(t){e.$set(e.formValidate,"use",t)},expression:"formValidate.use"}},[a("Radio",{attrs:{label:"1"}},[e._v("现发后用")])],1)],1)],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("FormItem",{staticClass:"margin_bottom_0",attrs:{label:"有效期类型:",prop:"validTimeType"}},[a("RadioGroup",{model:{value:e.formValidate.validTimeType,callback:function(t){e.$set(e.formValidate,"validTimeType",t)},expression:"formValidate.validTimeType"}},[a("Radio",{attrs:{label:"1"}},[e._v("生成时间+周期")]),e._v(" "),a("Radio",{attrs:{label:"2"}},[e._v("自定义时间")])],1)],1)],1)],1),e._v(" "),a("Row",{staticClass:"ling_height"},[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"代金券名称:",prop:"voucherTypeName"}},[a("Input",{attrs:{placeholder:"请填写代金券名称"},model:{value:e.formValidate.voucherTypeName,callback:function(t){e.$set(e.formValidate,"voucherTypeName","string"==typeof t?t.trim():t)},expression:"formValidate.voucherTypeName"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"代金券前缀:",prop:"cardPrefix"}},[a("Input",{staticClass:"dju_name",attrs:{placeholder:"请输入代金券前缀最好大写"},model:{value:e.formValidate.cardPrefix,callback:function(t){e.$set(e.formValidate,"cardPrefix",t)},expression:"formValidate.cardPrefix"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"代金券卡号长度:"}},[a("i-select",{model:{value:e.formValidate.voucherNumberLength=16,callback:function(t){e.$set(e.formValidate,"voucherNumberLength = 16",t)},expression:"formValidate.voucherNumberLength = 16"}},e._l(e.formValidate.numberLengthSelect,function(t,r){return a("i-option",{key:r,attrs:{value:t.value}},[e._v(e._s(t.text))])}))],1)],1)],1),e._v(" "),"1"!==e.formValidate.generationType?a("Row",[a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"代金券金额:",prop:"voucherPrice"}},[a("Input",{attrs:{placeholder:"请输入代金券金额"},model:{value:e.formValidate.voucherPrice,callback:function(t){e.$set(e.formValidate,"voucherPrice",t)},expression:"formValidate.voucherPrice"}})],1)],1),e._v(" "),"0"===e.formValidate.generationType?a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"生成数量:",prop:"generatedQuantity"}},[a("Input",{attrs:{placeholder:"请填写生成数量"},model:{value:e.formValidate.generatedQuantity,callback:function(t){e.$set(e.formValidate,"generatedQuantity",t)},expression:"formValidate.generatedQuantity"}})],1)],1):e._e(),e._v(" "),"2"!==e.formValidate.generationType?a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"补发时间:"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入补发时间"},model:{value:e.formValidate.reissueDate,callback:function(t){e.$set(e.formValidate,"reissueDate",t)},expression:"formValidate.reissueDate"}})],1)],1):e._e()],1):e._e(),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{label:"活动开始时间:",prop:"activityStartTime"}},[a("date-picker",{attrs:{type:"datetime",options:e.formValidate.activityStartTimeOption,placeholder:"请选择活动开始时间"},model:{value:e.formValidate.activityStartTime,callback:function(t){e.$set(e.formValidate,"activityStartTime",t)},expression:"formValidate.activityStartTime"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{label:"活动结束时间:",prop:"activityEndTime"}},[a("date-picker",{attrs:{type:"datetime",placeholder:"请选择活动结束时间",options:e.formValidate.activityEndTimeOption},model:{value:e.formValidate.activityEndTime,callback:function(t){e.$set(e.formValidate,"activityEndTime",t)},expression:"formValidate.activityEndTime"}})],1)],1),e._v(" "),"1"===e.formValidate.validTimeType?a("Col",{attrs:{span:"8"}},[a("FormItem",{attrs:{label:"有效期:",prop:"period"}},[a("Input",{attrs:{format:"yyyy-MM-dd HH:mm:ss",placeholder:"请输入有效期"},model:{value:e.formValidate.period,callback:function(t){e.$set(e.formValidate,"period",t)},expression:"formValidate.period"}})],1)],1):e._e(),e._v(" "),"2"===e.formValidate.validTimeType?a("div",[a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{label:"使用开始时间:",prop:"useStartTime"}},[a("date-picker",{attrs:{type:"datetime",options:e.formValidate.useStartTimeOption,placeholder:"请选择使用开始时间"},model:{value:e.formValidate.useStartTime,callback:function(t){e.$set(e.formValidate,"useStartTime",t)},expression:"formValidate.useStartTime"}})],1)],1),e._v(" "),a("Col",{attrs:{span:"6"}},[a("FormItem",{attrs:{label:"使用结束时间:",prop:"useEndTime"}},[a("date-picker",{attrs:{type:"datetime",placeholder:"请选择使用结束时间",options:e.formValidate.useEndTimeOption},model:{value:e.formValidate.useEndTime,callback:function(t){e.$set(e.formValidate,"useEndTime",t)},expression:"formValidate.useEndTime"}})],1)],1)],1):e._e()],1)],1),e._v(" "),a("div",{staticClass:"add_btn"},[a("FormItem",[a("Button",{on:{click:e.goPrevPage}},[e._v("返    回")]),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.linkCreate}},[e._v("下一步")])],1)],1)])],1)])],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.default=o},605:function(e,t,a){"use strict";function r(e){s||a(1101)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1009),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);var l=a(1103),u=a.n(l),s=!1,m=a(13),d=r,c=m(o.a,u.a,!1,d,null,null);c.options.__file="src/views/promotion-manage/o2oVoucher/components/Breadcrumb.vue",t.default=c.exports},684:function(e,t,a){"use strict";function r(e){s||a(1953)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1566),o=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);var l=a(1955),u=a.n(l),s=!1,m=a(13),d=r,c=m(o.a,u.a,!1,d,null,null);c.options.__file="src/views/promotion-manage/o2oVoucher/o2oReportAdd/o2oReportCouponCreate.vue",t.default=c.exports}});