webpackJsonp([28,59],{1467:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(241),i=n(o),a=s(242),r=n(a),u=s(239),l=n(u),d=s(984);e.default={name:"AddrSel",model:{prop:"addrValue",event:"addr-change"},props:{inputStyles:{type:Object,default:function(){return{height:"32px",width:"150px"}}},addrValue:{type:Object,default:function(){return{shengNum:"",shiNum:"",quNum:"",shengValue:"",shiValue:"",quValue:""}}},shengDisable:{type:Boolean,default:!1},shiDisable:{type:Boolean,default:!1},quDisable:{type:Boolean,default:!1}},data:function(){return{initAddrCode:Number((0,d.createUniqueRandomNum24)()),sheng:[],shengValue:"",shengNum:0,shi:[],shiValue:"",shiNum:0,qu:[],quValue:"",quNum:0,shengLoading:!1,shiLoading:!1,quLoading:!1}},created:function(){var t=this;this.shengNum=this.initAddrCode,this.shiNum=this.initAddrCode,this.quNum=this.initAddrCode,this.shengLoading=!0,this.sheng=[];var e=this;this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:0})).then(function(e){t.shengLoading=!1,200==e.status?t.sheng=e.data:console.warn("获取省选择列表数据失败")}).catch(function(t){console.log(t)})},mounted:function(){this.init()},methods:{init:function(){function t(){return e.apply(this,arguments)}var e=(0,r.default)(i.default.mark(function t(){var e,s,n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,this.shengNum!=this.initAddrCode||this.shiNum!=this.initAddrCode||this.quNum!=this.initAddrCode||""!=this.shengValue||""!=this.shiValue||""!=this.quValue){t.next=3;break}return t.abrupt("return");case 3:if(this.shengNum==this.initAddrCode){t.next=13;break}return this.shiLoading=!0,this.shi=[],t.next=8,this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:this.shengNum}));case 8:s=t.sent,console.log(s),200==s.status?(this.shiLoading=!1,this.shi=s.data):console.warn("获取市选择列表数据失败"),t.next=19;break;case 13:this.shengValue="",this.shengNum=this.initAddrCode,this.shiValue="",this.shiNum=this.initAddrCode,this.quValue="",this.quNum=this.initAddrCode;case 19:if(this.shiNum==this.initAddrCode){t.next=28;break}return this.quLoading=!0,this.qu=[],t.next=24,this.$util.ajax.post(e.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:this.shiNum}));case 24:n=t.sent,200==n.status?(this.quLoading=!1,this.qu=n.data):console.warn("获取区选择列表数据失败"),t.next=31;break;case 28:this.shiValue="",this.quValue="",this.quNum=this.initAddrCode;case 31:case"end":return t.stop()}},t,this)}));return t}(),selectShengHandle:function(t){var e=this;if(this.shengValue=t.label,this.shengNum=t.value,this.shiValue="",this.quValue="",this.shiNum=this.initAddrCode,this.quNum=this.initAddrCode,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum}),this.shengNum!=this.initAddrCode){this.shiLoading=!0;var s=this;this.shi=[],this.qu=[],this.$util.ajax.post(s.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:this.shengNum})).then(function(t){200==t.status?(e.shiLoading=!1,e.shi=t.data):console.warn("获取市选择列表数据失败")}).catch(function(t){console.log(t)})}},selectShiHandle:function(t){var e=this;if(this.shiValue=t.label,this.shiNum=t.value,this.quValue="",this.quNum=this.initAddrCode,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum}),this.shiNum!=this.initAddrCode){this.quLoading=!0,this.qu=[];var s=this;this.$util.ajax.post(s.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:this.shiNum})).then(function(t){200==t.status?(e.quLoading=!1,e.qu=t.data):console.warn("获取区选择列表数据失败")}).catch(function(t){console.log(t)})}},selectQuHandle:function(t){this.quValue=t.label,this.quNum=t.value,this.$emit("addr-change",{shengValue:"请选择省份"==this.shengValue?"":this.shengValue,shiValue:"请选择市"==this.shiValue?"":this.shiValue,quValue:"请选择区"==this.quValue?"":this.quValue,shengNum:this.shengNum==this.initAddrCode?"":this.shengNum,shiNum:this.shiNum==this.initAddrCode?"":this.shiNum,quNum:this.quNum==this.initAddrCode?"":this.quNum})}},watch:{addrValue:{handler:function(){function t(t,s){return e.apply(this,arguments)}var e=(0,r.default)(i.default.mark(function t(e,s){var n,o,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this,t.prev=1,e.shengNum==s.shengNum){t.next=10;break}if(e.shengNum==this.shengNum||""==e.shengNum){t.next=10;break}return this.shi=[],this.qu=[],t.next=8,this.$util.ajax.post(n.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:e.shengNum}));case 8:o=t.sent,200==o.status?(this.shiLoading=!1,this.shi=o.data):console.warn("获取市选择列表数据失败");case 10:if(e.shiNum==s.shiNum){t.next=17;break}if(e.shiNum==this.shiNum||""==e.shiNum){t.next=17;break}return this.qu=[],t.next=15,this.$util.ajax.post(n.$util.apiConfig.traderManage.infoManage.storeManage.addrSelUrl,l.default.stringify({parentCode:e.shiNum}));case 15:a=t.sent,200==a.status?(this.quLoading=!1,this.qu=a.data):console.warn("获取区选择列表数据失败");case 17:this.shengValue=e.shengValue,this.shengNum=""==e.shengNum?this.initAddrCode:e.shengNum,this.shiValue=e.shiValue,this.shiNum=""==e.shiNum?this.initAddrCode:e.shiNum,this.quValue=e.quValue,this.quNum=""==e.quNum?this.initAddrCode:e.quNum,t.next=28;break;case 25:t.prev=25,t.t0=t.catch(1),console.warn("获取地址选择列表数据失败");case 28:case"end":return t.stop()}},t,this,[[1,25]])}));return t}(),deep:!0}}}},1510:function(t,e,s){var n=s(1511);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(43)("6560fe9e",n,!1,{})},1511:function(t,e,s){e=t.exports=s(42)(!1),e.push([t.i,"\n.font_name[data-v-1b5c26d0]{\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-left: 20px;\r\n    line-height: 35px;\r\n    height: 35px;\n}\r\n",""])},1512:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-省编码:")]),t._v(" "),s("span",[t._v(t._s(t.shengNum==t.initAddrCode?"":t.shengNum))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-省名称:")]),t._v(" "),s("i-select",{style:t.inputStyles,attrs:{loading:t.shengLoading,disabled:t.shengDisable,"label-in-value":!0},on:{"on-change":t.selectShengHandle},model:{value:t.shengNum,callback:function(e){t.shengNum=e},expression:"shengNum"}},[s("i-option",{attrs:{value:t.initAddrCode,label:"请选择省份"}}),t._v(" "),t._l(t.sheng,function(e){return s("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-市编码:")]),t._v(" "),s("span",[t._v(t._s(t.shiNum==t.initAddrCode?"":t.shiNum))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-市名称:")]),t._v(" "),s("i-select",{style:t.inputStyles,attrs:{loading:t.shiLoading,disabled:t.shiDisable,"label-in-value":!0},on:{"on-change":t.selectShiHandle},model:{value:t.shiNum,callback:function(e){t.shiNum=e},expression:"shiNum"}},[s("i-option",{attrs:{value:t.initAddrCode,label:"请选择市"}}),t._v(" "),t._l(t.shi,function(e){return s("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-区县编码:")]),t._v(" "),s("span",[t._v(t._s(t.quNum==t.initAddrCode?"":t.quNum))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店地址-区县名称:")]),t._v(" "),s("i-select",{style:t.inputStyles,attrs:{loading:t.quLoading,disabled:t.quDisable,"label-in-value":!0},on:{"on-change":t.selectQuHandle},model:{value:t.quNum,callback:function(e){t.quNum=e},expression:"quNum"}},[s("i-option",{attrs:{value:t.initAddrCode,label:"请选择区"}}),t._v(" "),t._l(t.qu,function(e){return s("i-option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1)],1)},o=[];n._withStripped=!0;var i={render:n,staticRenderFns:o};e.default=i},1756:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(241),i=n(o),a=s(242),r=n(a),u=(s(898),s(239)),l=n(u),d=s(638),h=n(d);e.default={components:{addrSel:h.default},data:function(){return{apiGroup:this.$util.apiConfig.traderManage.infoManage.storeManage,storeInfo:{},editAble:!1,storeAddr:{shengNum:"",shiNum:"",quNum:"",shengValue:"",shiValue:"",quValue:""},salesmanArray:[],columns1:[{title:"省名称",key:"provinceName",minWidth:250},{title:"市名称",key:"cityName",minWidth:250},{title:"区县名称",key:"countyName",minWidth:250},{title:"详细地址",key:"details",minWidth:400}],entity:[],groupArray:[],loading:!1,editEmpStoreEmpid:""}},created:function(){void 0!==this.$route.query.storeId&&null!==this.$route.query.storeId&&""!==this.$route.query.storeId||this.$router.push({name:"error-404"}),2==this.$route.query.updateState&&(this.editAble=!0),this.getInitData()},methods:{getInitData:function(){function t(){return e.apply(this,arguments)}var e=(0,r.default)(i.default.mark(function t(){var e,s=this;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$util.ajax.post(this.apiGroup.querySalesmanUrl,l.default.stringify({page:1}));case 2:e=t.sent,console.log("业务员获得数据：",e),200==e.status?this.salesmanArray=e.data.result:this.$Modal.error({title:"HTTP请求错误",content:e.statusText}),this.loading=!0,this.$util.ajax.post(this.apiGroup.getStoreDetail,l.default.stringify({storeId:this.$route.query.storeId})).then(function(t){if(s.loading=!1,console.log("门店详情获得数据：",t),200==t.status){if(s.storeId=t.data.result.storeId,s.storeInfo=t.data.result.storeInfo,s.storeInfo.openTicketName=s.storeInfo.openTicketName?s.storeInfo.openTicketName:s.storeInfo.storeName,s.entity=s.storeInfo.storeAddressDTOList,null!=s.storeInfo.operatingArea&&""!=s.storeInfo.operatingArea&&0!=s.storeInfo.operatingArea&&void 0!=s.storeInfo.operatingArea||(s.storeInfo.operatingArea="0"),s.storeInfo.doorheadPhoto&&""!=s.storeInfo.doorheadPhoto){if(!/http/.test(s.storeInfo.doorheadPhoto)){/^\//.test(s.storeInfo.doorheadPhoto)||(s.storeInfo.doorheadPhoto="/"+s.storeInfo.doorheadPhoto),s.storeInfo.doorheadPhoto=window.otoimgUrl+s.storeInfo.doorheadPhoto}}if(s.storeInfo.storePicture&&""!=s.storeInfo.storePicture){if(!/http/.test(s.storeInfo.storePicture)){/^\//.test(s.storeInfo.storePicture)||(s.storeInfo.storePicture="/"+s.storeInfo.storePicture),s.storeInfo.storePicture=window.otoimgUrl+s.storeInfo.storePicture}}if(s.storeInfo.storePicture&&""!=s.storeInfo.storePicture){if(!/http/.test(s.storeInfo.storePicture)){/^\//.test(s.storeInfo.storePicture)||(s.storeInfo.storePicture="/"+s.storeInfo.storePicture),s.storeInfo.storePicture=window.otoimgUrl+s.storeInfo.storePicture}}"是"==s.storeInfo.isChain?s.storeInfo.isChain=!0:s.storeInfo.isChain=!1,s.storeAddr={quNum:s.storeInfo.countyCode,quValue:s.storeInfo.countyName,shengNum:s.storeInfo.provinceCode,shengValue:s.storeInfo.provinceName,shiNum:s.storeInfo.cityCode,shiValue:s.storeInfo.cityName}}else s.$Modal.error({title:"门店详情请求错误",content:t.statusText})}).catch(function(t){console.log(t),s.$Modal.error({title:"HTTP请求错误",content:"门店详情请求失败"})});case 7:case"end":return t.stop()}},t,this)}));return t}(),goback:function(){this.$router.back(1)},selectStoreHeadPic:function(){this.editAble&&this.$refs.storeHeadPic.click()},storeHeadPicChange:function(){var t=this,e=event.target.files[0],s=e.name.split("."),n=e.name.split(".")[s.length-1].toLowerCase();if("jpg"!=n&&"jpeg"!=n&&"bmp"!=n&&"png"!=n)return this.$Modal.error({title:"文件类型错误",content:"只允许上传jpeg、jpg、bmp、png格式的文件！"}),event.target.value="",!1;if(e.size>1037836)return this.$Modal.error({title:"图片大小超出限制",content:"只允许上传小于1M的图片！"}),event.target.value="",!1;var o=new FormData;o.append("file",e),this.uploading=!0;var i=this.apiGroup.uploadPngUrl+"?size=1048576&date="+new Date;this.$util.ajax.post(i,o).then(function(e){console.log("图片上传返回结果：",e),t.uploading=!1,e.data.success?(t.storeInfo.doorheadPhoto=window.imgSrc+e.data.url,event.target.value=""):t.$Modal.error({title:"门头照片上传失败",content:e.data.msg})}).catch(function(e){console.log(e),t.uploading=!1,t.$Modal.error({title:"图片上传失败",content:"门头照片上传失败"})})},updata:function(){var t=this;if(""==this.storeInfo.storeName||null==this.storeInfo.storeName||void 0==this.storeInfo.storeName)return void this.$Modal.error({title:"输入有误",content:"门店名称不能为空"});if(this.storeInfo.storeName.length<4)return void this.$Modal.error({title:"输入有误",content:"门店名称不少于四个中文"});if(""==this.storeInfo.storeOwnerName||null==this.storeInfo.storeOwnerName||void 0==this.storeInfo.storeOwnerName)return void this.$Modal.error({title:"输入有误",content:"店主名称不能为空"});if(this.storeInfo.storeOwnerName.length<2)return void this.$Modal.error({title:"输入有误",content:"店主名称不少于两个中文"});if(""==this.storeAddr.quNum||""==this.storeAddr.shiNum||""==this.storeAddr.shengNum)return void this.$Modal.error({title:"输入有误",content:"请选择正确的地址！"});if(""==this.storeInfo.addressDetail||null==this.storeInfo.addressDetail||void 0==this.storeInfo.addressDetail)return void this.$Modal.error({title:"输入有误",content:"详细地址不能为空"});if(this.storeInfo.addressDetail.length<6)return void this.$Modal.error({title:"输入有误",content:"详细地址不少于六个中文"});if(""==this.storeInfo.phone||null==this.storeInfo.phone||void 0==this.storeInfo.phone)return void this.$Modal.error({title:"输入有误",content:"手机(电话)号码不能为空"});if(this.storeInfo.phone.length>0){var e=/^0\d{2,3}-?\d{7,8}$/,s=/^1[34578]\d{9}$/;if(!e.test(this.storeInfo.phone)&&!s.test(this.storeInfo.phone))return void this.$Modal.error({title:"输入有误",content:"请输入正确11位手机号码或者区号-电话号码！"})}this.loading=!0;var n="";this.salesmanArray.forEach(function(e){t.storeInfo.empId==e.empId&&(n=e.empCode)});var o={id:this.storeId,storeOwnerName:this.storeInfo.storeOwnerName,storeName:this.storeInfo.storeName,phone:this.storeInfo.phone,storeNature:this.storeInfo.storeNature,openCloseState:this.storeInfo.openCloseState,operatingArea:this.storeInfo.operatingArea,addressDetail:this.storeInfo.addressDetail,openTicketName:this.storeInfo.openTicketName,priceGroup:this.storeInfo.priceGroup,storeCreditPeriod:this.storeInfo.storeCreditPeriod,empId:this.storeInfo.empId,storeCode:this.storeInfo.storeCode,empCode:n,isChain:this.storeInfo.isChain?"是":"否",countyCode:this.storeAddr.quNum,countyName:this.storeAddr.quValue,provinceCode:this.storeAddr.shengNum,provinceName:this.storeAddr.shengValue,cityCode:this.storeAddr.shiNum,cityName:this.storeAddr.shiValue,doorheadPhoto:this.storeInfo.doorheadPhoto};this.$util.ajax.post(this.apiGroup.updataStoreDetail,l.default.stringify(o)).then(function(e){t.loading=!1,console.log("修改详情获得数据：",e),"操作成功!"==e.data.message?t.$Modal.success({title:"操作成功",content:"修改成功",onOk:function(){t.$router.go(-1)}}):t.$Modal.error({title:"修改详情请求错误",content:e.data.message})}).catch(function(e){console.log(e),t.$Modal.error({title:"HTTP请求错误",content:"修改详情请求失败"})})}}}},2597:function(t,e,s){var n=s(2598);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(43)("14e23d34",n,!1,{})},2598:function(t,e,s){e=t.exports=s(42)(!1),e.push([t.i,"\n.cmain[data-v-37a6137d] {\n  background-color: white;\n  position: relative;\n}\n.font_name[data-v-37a6137d] {\n  display: inline-block;\n  margin-right: 5px;\n  margin-left: 20px;\n  line-height: 35px;\n  height: 35px;\n}\n.line[data-v-37a6137d] {\n  border-bottom: 1px solid #dddee1;\n}\n",""])},2599:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cmain"},[s("div",{staticStyle:{padding:"20px 50px"}},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("基本信息")]),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.storeCode))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店名称:")]),t._v(" "),s("Input",{staticStyle:{width:"143px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.storeName,callback:function(e){t.$set(t.storeInfo,"storeName","string"==typeof e?e.trim():e)},expression:"storeInfo.storeName"}})],1)],1),t._v(" "),s("addrSel",{attrs:{shengDisable:!t.editAble,shiDisable:!t.editAble,quDisable:!t.editAble},model:{value:t.storeAddr,callback:function(e){t.storeAddr=e},expression:"storeAddr"}}),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("详细地址:")]),t._v(" "),s("Input",{staticStyle:{width:"200px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.addressDetail,callback:function(e){t.$set(t.storeInfo,"addressDetail","string"==typeof e?e.trim():e)},expression:"storeInfo.addressDetail"}})],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("统一社会信用代码证:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.license))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("店主姓名:")]),t._v(" "),s("Input",{staticStyle:{width:"143px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.storeOwnerName,callback:function(e){t.$set(t.storeInfo,"storeOwnerName","string"==typeof e?e.trim():e)},expression:"storeInfo.storeOwnerName"}})],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("电话:")]),t._v(" "),s("Input",{staticStyle:{width:"143px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.phone,callback:function(e){t.$set(t.storeInfo,"phone","string"==typeof e?e.trim():e)},expression:"storeInfo.phone"}})],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店状态:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.status))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("开店时间:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.openTime))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("闭店时间:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.closeTime))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("经营模式:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.model))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店性质:")]),t._v(" "),s("i-select",{staticStyle:{width:"143px"},attrs:{disabled:!t.editAble},model:{value:t.storeInfo.storeNature,callback:function(e){t.$set(t.storeInfo,"storeNature",e)},expression:"storeInfo.storeNature"}},[s("i-option",{attrs:{value:"区域KA"}},[t._v("区域KA")]),t._v(" "),s("i-option",{attrs:{value:"A"}},[t._v("A")]),t._v(" "),s("i-option",{attrs:{value:"B"}},[t._v("B")]),t._v(" "),s("i-option",{attrs:{value:"C"}},[t._v("C")]),t._v(" "),s("i-option",{attrs:{value:"D"}},[t._v("D")]),t._v(" "),s("i-option",{attrs:{value:"E"}},[t._v("E")]),t._v(" "),s("i-option",{attrs:{value:"F"}},[t._v("F")]),t._v(" "),s("i-option",{attrs:{value:"其他"}},[t._v("其他")])],1)],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店类型:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.storeType))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("开闭店状态:")]),t._v(" "),s("i-select",{staticStyle:{width:"143px"},attrs:{disabled:!t.editAble},model:{value:t.storeInfo.openCloseState,callback:function(e){t.$set(t.storeInfo,"openCloseState",e)},expression:"storeInfo.openCloseState"}},[s("i-option",{attrs:{value:"开业中"}},[t._v("开业中")]),t._v(" "),s("i-option",{attrs:{value:"已关闭"}},[t._v("已关闭")])],1)],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("所属经销商编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.dealerCode))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("是否连锁:")]),t._v(" "),s("Checkbox",{attrs:{disabled:!t.editAble},model:{value:t.storeInfo.isChain,callback:function(e){t.$set(t.storeInfo,"isChain",e)},expression:"storeInfo.isChain"}})],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("营业面积:")]),t._v(" "),s("i-select",{staticStyle:{width:"143px"},attrs:{disabled:!t.editAble},model:{value:t.storeInfo.operatingArea,callback:function(e){t.$set(t.storeInfo,"operatingArea",e)},expression:"storeInfo.operatingArea"}},[s("i-option",{attrs:{value:"0"}},[t._v("0")]),t._v(" "),s("i-option",{attrs:{value:"1-100"}},[t._v("1-100")]),t._v(" "),s("i-option",{attrs:{value:"100-500"}},[t._v("100-500")]),t._v(" "),s("i-option",{attrs:{value:"500-1000"}},[t._v("500-1000")]),t._v(" "),s("i-option",{attrs:{value:"1000-6000"}},[t._v("1000-6000")]),t._v(" "),s("i-option",{attrs:{value:"6000及以上"}},[t._v("6000及以上")])],1)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("所属经销商名称:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.dealerName))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("价格组:")]),t._v(" "),s("i-select",{staticStyle:{width:"143px"},attrs:{disabled:!t.editAble},model:{value:t.storeInfo.priceGroup,callback:function(e){t.$set(t.storeInfo,"priceGroup",e)},expression:"storeInfo.priceGroup"}},[s("i-option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),s("i-option",{attrs:{value:"一级"}},[t._v("一级")]),t._v(" "),s("i-option",{attrs:{value:"二级"}},[t._v("二级")]),t._v(" "),s("i-option",{attrs:{value:"三级"}},[t._v("三级")]),t._v(" "),s("i-option",{attrs:{value:"四级"}},[t._v("四级")]),t._v(" "),s("i-option",{attrs:{value:"五级"}},[t._v("五级")])],1)],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店授信账期:")]),t._v(" "),s("Input",{staticStyle:{width:"143px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.storeCreditPeriod,callback:function(e){t.$set(t.storeInfo,"storeCreditPeriod","string"==typeof e?e.trim():e)},expression:"storeInfo.storeCreditPeriod"}})],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织大区编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgBigareaCode))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织大区名称:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgBigareaName))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织省区编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgProvinceCode))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织省区名称:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgProvinceName))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织片区编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgZoneCode))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织片区名称:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgZoneName))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织区域编码:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgAreaCode))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("组织区域名称:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.orgAreaName))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店业态:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.storeFormat))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("配送模式:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.deliveryModel))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("合同形式:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.contractForm))])])],1),t._v(" "),s("Row",[s("Col",{staticStyle:{display:"flex","align-items":"flex-start"},attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门头照片:")]),t._v(" "),s("img",{staticStyle:{cursor:"pointer"},attrs:{src:t.storeInfo.doorheadPhoto,alt:"门头照片",width:"50",height:"50"},on:{click:t.selectStoreHeadPic}}),t._v(" "),s("input",{ref:"storeHeadPic",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.storeHeadPicChange}})]),t._v(" "),s("Col",{staticStyle:{display:"flex","align-items":"flex-start"},attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("门店照片:")]),t._v(" "),s("img",{attrs:{src:t.storeInfo.storePicture,alt:"门店照片",width:"50",height:"50"}})])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("开发形式:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.openBill))])]),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("开票名称:")]),t._v(" "),s("Input",{staticStyle:{width:"143px"},attrs:{readonly:!t.editAble,type:"text"},model:{value:t.storeInfo.openTicketName,callback:function(e){t.$set(t.storeInfo,"openTicketName","string"==typeof e?e.trim():e)},expression:"storeInfo.openTicketName"}})],1)],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("业务员:")]),t._v(" "),s("i-select",{staticStyle:{width:"143px"},attrs:{disabled:!0},model:{value:t.storeInfo.empId,callback:function(e){t.$set(t.storeInfo,"empId",e)},expression:"storeInfo.empId"}},[s("i-option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.salesmanArray,function(e){return s("i-option",{key:e.id,attrs:{value:e.empId}},[t._v(t._s(e.empName))])})],2)],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("span",{staticClass:"font_name"},[t._v("经度,纬度:")]),t._v(" "),s("span",[t._v(t._s(t.storeInfo.longitude)+","+t._s(t.storeInfo.latitude))])])],1)],1),t._v(" "),s("br"),t._v(" "),s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("送货地址")]),t._v(" "),s("Table",{attrs:{stripe:"",columns:t.columns1,data:t.entity}})],1),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("br"),t._v(" "),s("Row",{attrs:{type:"flex",justify:"center"}},[t.editAble?s("i-button",{staticStyle:{width:"150px"},attrs:{type:"primary"},on:{click:t.updata}},[t._v("保存")]):t._e(),t._v(" "),s("i-button",{staticStyle:{width:"150px","margin-left":"15px"},on:{click:t.goback}},[t._v("取消")])],1)],1),t._v(" "),t.loading?s("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},o=[];n._withStripped=!0;var i={render:n,staticRenderFns:o};e.default=i},638:function(t,e,s){"use strict";function n(t){l||s(1510)}Object.defineProperty(e,"__esModule",{value:!0});var o=s(1467),i=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);var r=s(1512),u=s.n(r),l=!1,d=s(13),h=n,f=d(i.a,u.a,!1,h,"data-v-1b5c26d0",null);f.options.__file="src/views/trader-manage/information-manage/store-manage/addrSelectForStoreDetail.vue",e.default=f.exports},867:function(t,e,s){"use strict";function n(t){l||s(2597)}Object.defineProperty(e,"__esModule",{value:!0});var o=s(1756),i=s.n(o);for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);var r=s(2599),u=s.n(r),l=!1,d=s(13),h=n,f=d(i.a,u.a,!1,h,"data-v-37a6137d",null);f.options.__file="src/views/trader-manage/information-manage/store-manage/store-manage-detail-old.vue",e.default=f.exports},897:function(t,e,s){var n=s(44);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},898:function(t,e,s){"use strict";function n(t,e){if(!e)var e="yyyy-MM-DD hh:mm:ss";var s={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in s)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?s[n]:("00"+s[n]).substr((""+s[n]).length)));return e}function o(t,e){if(!e)var e="yyyy-MM-dd";(t=Number(t))<1e10&&(t*=1e3);var s=new Date(t),n={"M+":s.getMonth()+1,"d+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=n,e.timestampToDay=o},909:function(t,e,s){t.exports={default:s(910),__esModule:!0}},910:function(t,e,s){s(151),s(75),s(100),s(911),s(917),s(920),s(922),t.exports=s(11).Set},911:function(t,e,s){"use strict";var n=s(912),o=s(897);t.exports=s(913)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(o(this,"Set"),t=0===t?0:t,t)}},n)},912:function(t,e,s){"use strict";var n=s(32).f,o=s(148),i=s(245),a=s(64),r=s(244),u=s(240),l=s(147),d=s(246),h=s(248),f=s(37),c=s(243).fastKey,p=s(897),v=f?"_s":"size",_=function(t,e){var s,n=c(e);if("F"!==n)return t._i[n];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,l){var d=t(function(t,n){r(t,d,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=n&&u(n,s,t[l],t)});return i(d.prototype,{clear:function(){for(var t=p(this,e),s=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete s[n.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var s=p(this,e),n=_(s,t);if(n){var o=n.n,i=n.p;delete s._i[n.i],n.r=!0,i&&(i.n=o),o&&(o.p=i),s._f==n&&(s._f=o),s._l==n&&(s._l=i),s[v]--}return!!n},forEach:function(t){p(this,e);for(var s,n=a(t,arguments.length>1?arguments[1]:void 0,3);s=s?s.n:this._f;)for(n(s.v,s.k,this);s&&s.r;)s=s.p},has:function(t){return!!_(p(this,e),t)}}),f&&n(d.prototype,"size",{get:function(){return p(this,e)[v]}}),d},def:function(t,e,s){var n,o,i=_(t,e);return i?i.v=s:(t._l=i={i:o=c(e,!0),k:e,v:s,p:n=t._l,n:void 0,r:!1},t._f||(t._f=i),n&&(n.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,s){l(t,e,function(t,s){this._t=p(t,e),this._k=s,this._l=void 0},function(){for(var t=this,e=t._k,s=t._l;s&&s.r;)s=s.p;return t._t&&(t._l=s=s?s.n:t._t._f)?"keys"==e?d(0,s.k):"values"==e?d(0,s.v):d(0,[s.k,s.v]):(t._t=void 0,d(1))},s?"entries":"values",!s,!0),h(e)}}},913:function(t,e,s){"use strict";var n=s(12),o=s(36),i=s(243),a=s(66),r=s(45),u=s(245),l=s(240),d=s(244),h=s(44),f=s(77),c=s(32).f,p=s(914)(0),v=s(37);t.exports=function(t,e,s,_,m,g){var C=n[t],I=C,N=m?"set":"add",y=I&&I.prototype,x={};return v&&"function"==typeof I&&(g||y.forEach&&!a(function(){(new I).entries().next()}))?(I=e(function(e,s){d(e,I,t,"_c"),e._c=new C,void 0!=s&&l(s,m,e[N],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in y&&(!g||"clear"!=t)&&r(I.prototype,t,function(s,n){if(d(this,I,t),!e&&g&&!h(s))return"get"==t&&void 0;var o=this._c[t](0===s?0:s,n);return e?this:o})}),g||c(I.prototype,"size",{get:function(){return this._c.size}})):(I=_.getConstructor(e,t,m,N),u(I.prototype,s),i.NEED=!0),f(I,t),x[t]=I,o(o.G+o.W+o.F,x),g||_.setStrong(I,t,m),I}},914:function(t,e,s){var n=s(64),o=s(149),i=s(98),a=s(99),r=s(915);t.exports=function(t,e){var s=1==t,u=2==t,l=3==t,d=4==t,h=6==t,f=5==t||h,c=e||r;return function(e,r,p){for(var v,_,m=i(e),g=o(m),C=n(r,p,3),I=a(g.length),N=0,y=s?c(e,I):u?c(e,0):void 0;I>N;N++)if((f||N in g)&&(v=g[N],_=C(v,N,m),t))if(s)y[N]=_;else if(_)switch(t){case 3:return!0;case 5:return v;case 6:return N;case 2:y.push(v)}else if(d)return!1;return h?-1:l||d?d:y}}},915:function(t,e,s){var n=s(916);t.exports=function(t,e){return new(n(t))(e)}},916:function(t,e,s){var n=s(44),o=s(247),i=s(14)("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},917:function(t,e,s){var n=s(36);n(n.P+n.R,"Set",{toJSON:s(918)("Set")})},918:function(t,e,s){var n=s(150),o=s(919);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},919:function(t,e,s){var n=s(240);t.exports=function(t,e){var s=[];return n(t,!1,s.push,s,e),s}},920:function(t,e,s){s(921)("Set")},921:function(t,e,s){"use strict";var n=s(36);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},922:function(t,e,s){s(923)("Set")},923:function(t,e,s){"use strict";var n=s(36),o=s(76),i=s(64),a=s(240);t.exports=function(t){n(n.S,t,{from:function(t){var e,s,n,r,u=arguments[1];return o(this),e=void 0!==u,e&&o(u),void 0==t?new this:(s=[],e?(n=0,r=i(u,arguments[2],2),a(t,!1,function(t){s.push(r(t,n++))})):a(t,!1,s.push,s),new this(s))}})}},984:function(t,e,s){"use strict";function n(){for(var t=void 0,e=a.size;e==a.size;){for(var s=(new Date).getTime()%1e5,n=Math.floor(1e8*Math.random()),o=Math.floor(1e9*Math.random());s<1e4;)s*=10;for(;n<1e8;)n*=10;for(;o<1e9;)o*=10;t=s.toString()+n.toString()+o.toString(),a.add(t)}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.createUniqueRandomNum24=void 0;var o=s(909),i=function(t){return t&&t.__esModule?t:{default:t}}(o),a=new i.default;e.createUniqueRandomNum24=n}});