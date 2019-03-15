webpackJsonp([11],{1766:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(65);!function(n){n&&n.__esModule}(i);t.default={name:"orderPrint",data:function(){return{printOrder:null,totalMoneySum:0,totalShowCarNum:0,totalShowEaNum:0}},methods:{getData:function(){var n=this,t=this;this.printOrder={orderIds:[0x72b717324124d],printType:1},this.$util.ajax({url:t.$util.apiConfig.traderManage.orderManage.printBatchOrder,method:"post",data:{orderIds:["2018090900017161"],printType:1}}).then(function(e){var i=e.data.result;if(200==e.data.code)for(var o=0;o<i.dataDtos.length;o++){var a=i.printMainTemplateDto,r=i.dataDtos[o];t.totalMoneySum=0,t.totalShowCarNum=0,t.totalShowEaNum=0,n.commonModel(a,r)}else alert(e.data.message)}).catch(function(n){console.log("失败信息：",n)})},goPinter:function(){document.getElementById("noprint").style.display="none",window.print(),setTimeout(function(){document.getElementById("noprint").style.display=""})},commonModel:function(n,t){for(var e=t.dtoList,i=n.printMaxRows||5,o=Math.ceil(e.length/i),a=0;a<o;a++){var r=e.slice(a*i,(a+1)*i);this.makeModel(n,r,t,a+1,o,n.printMaxRows)}},makeModel:function(n,t,e,i,o,a){var r=document.createElement("div");r.innerHTML='<div class="printOne"><h3 style="font-size:'+n.titleFontSize+'px">'+(n.addHeader?n.printTitle||"打印":i>1?"":n.printTitle||"打印")+'</h3><div class="m"><div class="tbl-n" style="font-size:'+n.headerFontSize+'px"><ul>'+(n.addHeader?this.getLi(n.titleTemplateDtoSet,e,n.headerCol):i>1?"":this.getLi(n.titleTemplateDtoSet,e,n.headerCol))+'</ul></div></div><div id="opening"><div class="tbl-list"><div class="tbl-bg"><table cellspacing="0" style="text-align: center;width:100%;"><thead><tr><th>序号</th>'+this.getTh(n.contentTemplateDtos,n.detailFontSize)+"</tr></thead><tbody>"+this.getTr(n.contentTemplateDtos,t,i,o,a,n.detailFontSize)+"</tbody></table>"+this.getTotalModel(i==o,t,n.detailTotalFontSize,n.selfTotalTemplateDtos,n.totalTemplateDtos)+'</div></div><div class="tbl-n" style="font-size:'+n.footerFontSize+'px"><ul>'+(n.footerShowAll?this.getLi(n.tailTemplateDtos,e,n.headerCol,n.footerContentFontSize):i==o?this.getLi(n.tailTemplateDtos,e,n.headerCol,n.footerContentFontSize):"")+'</ul></div><p style="text-align: right">页码:'+i+"/"+o+'</p></div></div><div style="page-break-after:always"></div>',document.getElementById("content").appendChild(r)},getLi:function(n,t,e,i){if(n&&!(n.length<0)){for(var e=e||3,o="",a="",r=0;r<n.length;r++)for(var l in t)"footerContent"==n[r].key&&"footerContent"==l?a+='<li class="tbl-li" style="width:100%;font-size:'+(i?i+"px":"100%")+';" data-id="'+n[r].key+'">'+(n[r].value?n[r].value:"")+"</li>":"footerShowMemo"==n[r].key&&"footerShowMemo"==l||"footerOrderSource"==n[r].key&&"footerOrderSource"==l?o+='<li class="tbl-li" style="width:100%" data-id="'+n[r].key+'">'+(n[r].showName?n[r].showName+"："+(t[l]?t[l]:"_____"):"")+"</li>":l==n[r].key&&(o+='<li class="tbl-li" style="width:'+(100/e).toFixed(2)+'%" data-id="'+n[r].key+'">'+(n[r].showName?n[r].showName+"："+(t[l]?t[l]:"_____"):"")+"</li>");return o+=a}},getTh:function(n,t){if(n&&!(n.length<0)){for(var e="",i=0;i<n.length;i++)e+='<th style="font-size:'+(t?t+"px":"100%")+'" data-id="'+n[i].key+'" style="width:'+("detailShowSpuName"==n[i].key?"50%":"auto")+'">'+n[i].showName+"</th>";return e}},getTr:function(n,t,e,i,o,a){if(n&&!(n.length<0)){var r="";if(1==this.printOrder.printType||3==this.printOrder.printType||5==this.printOrder.printType)for(var l=0;l<t.length;l++)r+=this.getTd(n,t[l],l+o*(e-1),!1,a);else if(2==this.printOrder.printType||4==this.printOrder.printType)if(i==e)for(var l=0;l<=t.length;l++)l==t.length?r+=this.getTd(n,t[0],0,!0,a):r+=this.getTd(n,t[l],l+o*(e-1),!1,a);else for(var l=0;l<t.length;l++)r+=this.getTd(n,t[l],l+o*(e-1),!1,a);return r}},getTd:function(n,t,e,i,o){var i=i||!1;if(n&&!(n.length<0)){var a="";if(i){a+="<td>合计：</td>";for(var r=0;r<n.length;r++)for(var l in t)l==n[r].key&&(a+='<td class="'+l+'Total"><span></span></td>')}else{a+='<td style="font-size:'+(o?o+"px":"100%")+'">'+(e+1)+"</td>";for(var r=0;r<n.length;r++)for(var l in t)l!=n[r].key||"detailShowPriceTotal"!=l&&"detailShowEaPrice"!=l&&"detailShowCarPrice"!=l?l==n[r].key&&(a+='<td style="font-size:'+(o?o+"px":"100%")+'"><span style="font-size:'+(o?o+"px":"100%")+'" name="'+l+'">'+(t[l]||("detailShowCarNum"==l||"detailShowCarEaNum"==l||"detailShowEaNum"==l||"detailShowCarPrice"==l||"detailShowEaPrice"==l||"detailShowPriceTotal"==l||"detailShowWarehouseOutCar"==l||"detailShowWarehouseOutEa"==l?0:""))+"</span></td>"):a+='<td style="font-size:'+(o?o+"px":"100%")+'"><span style="font-size:'+(o?o+"px":"100%")+'" name="'+l+'">'+(t[l]||0).toFixed(2)+"</span></td>"}return a="<tr>"+a+"</tr>"}},getTotalModel:function(n,t,e,i,o){function a(){var n="<tr>";if(o.length>0)for(var t=0;t<o.length;t++)n+='<td style="font-size： '+e+'px" name="'+o[t].key+'">'+o[t].showName+'：<span style="font-size:'+e+'px;">'+r(o[t])+"</span></td>"+(t==o.length-1?"</tr>":"");else n="";return n}function r(n){var t=0;switch(n.key){case"detailTotalMoenyCapital":t=l.digitUppercase(l.totalMoneySum);break;case"detailTotalCarNum":t=l.totalShowCarNum;break;case"detailTotalEaNum":t=l.totalShowEaNum;break;case"detailTotalMoeny":t=l.totalMoneySum.toFixed(2);break;default:t=0}return t}for(var l=this,e=e||12,d='<table style="width:100%"><tbody><tr>',p=0,s=0,h=0,g=0,c=0;c<t.length;c++)p+=t[c].detailShowPriceTotal||0,s+=t[c].detailShowCarNum||0,h+=t[c].detailShowZheheEaNum||0;if(this.totalMoneySum+=p,this.totalShowCarNum+=s,this.totalShowEaNum+=h,1==this.printOrder.printType||3==this.printOrder.printType||5==this.printOrder.printType)if(i.length>0)for(var c=0;c<i.length;c++){switch(i[c].key){case"detailTotalPageEaNum":g=h;break;case"detailTotalPageCarNum":g=s;break;case"detailTotalPageMoeny":g=p.toFixed(2);break;case"detailTotalPageMoenyCapital":g=this.digitUppercase(p);break;default:g=0}d+='<td style="font-size: '+e+'px" name="'+i[c].key+'">'+i[c].showName+'：<span style="font-size: '+e+'px">'+g+"</span></td>"+(c==i.length-1?n?"</tr>"+a()+"</tbody></table>":"</tr></tbody></table>":"")}else d=d+"</tr>"+a()+"</tbody></table>";return d},digitUppercase:function(n){var t=["角","分"],e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],i=[["元","万","亿"],["","拾","佰","仟"]],o=n<0?"欠":"";n=Math.abs(n);for(var a="",r=0;r<t.length;r++)a+=(e[Math.floor(10*n*Math.pow(10,r))%10]+t[r]).replace(/零./,"");a=a||"整",n=Math.floor(n);for(var r=0;r<i[0].length&&n>0;r++){for(var l="",d=0;d<i[1].length&&n>0;d++)l=e[n%10]+i[1][d]+l,n=Math.floor(n/10);a=l.replace(/(零.)*零$/,"").replace(/^$/,"零")+i[0][r]+a}return o+a.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")},totalSum:function(n,t){for(var e=$('span[name="'+n+'"]'),i=0,o=0;o<e.length;o++)i+=parseFloat(e.eq(o).text()||0);$(t).find("span").text(i)},goBack:function(){this.$router.push({name:"order-list"})}},mounted:function(){this.getData()}}},2642:function(n,t,e){var i=e(2643);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(43)("7e2aea38",i,!1,{})},2643:function(n,t,e){t=n.exports=e(42)(!1),t.push([n.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\nhtml,\nbody {\n  overflow: visible;\n  background: white;\n}\nbody {\n  background: white;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  color: #000;\n}\np,\nh3 {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  color: #000;\n}\nh3 {\n  width: 100%;\n  text-align: center;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.print-table {\n  margin: 0 auto;\n  width: 98%;\n}\n.print-button {\n  margin: 30px 0;\n  text-align: center;\n}\n.order_list li {\n  display: inline-block;\n  margin-right: 25px;\n  /*font-size: 16px;*/\n}\n.order_list span:first-child {\n  display: inline-block;\n  text-align: right;\n}\ntable tr {\n  margin: 0;\n  padding: 0;\n}\ntable tr td.item {\n  width: 33.33%;\n}\ntable tr td.item-four {\n  width: 25%;\n}\ntable tr td.item-half {\n  width: 50%;\n}\ntable tr td .name-control {\n  max-width: 100px;\n  margin: 0 auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.tbl-bg table,\n.tbl-bg td {\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n.foot_tbl_s {\n  padding-top: 10px;\n}\n.foot_tbl_s span {\n  margin: 0 80px 0 0;\n}\nbody,\np,\nh3 {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  color: #000000;\n}\nh3 {\n  width: 100%;\n  text-align: center;\n}\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#content b {\n  font-weight: 100;\n  /*font-size: 16px;*/\n  width: 100px;\n  text-align: right;\n  display: inline-block;\n}\nth {\n  font-weight: normal;\n}\n.order_list li {\n  display: inline-block;\n  margin-right: 25px;\n  /*font-size: 16px;*/\n}\n.order_list span:first-child {\n  display: inline-block;\n  text-align: right;\n}\ntable tr {\n  margin: 0;\n  padding: 0;\n}\n.tbl-bg table,\n.tbl-bg td {\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n/*.tbl-n td{*/\n/*padding-top: 10px;*/\n/*}*/\n.foot_tbl_s {\n  padding-top: 10px;\n}\n.foot_tbl_s span {\n  margin: 0 80px 0 0;\n}\n.tbl-n {\n  clear: both;\n  overflow: hidden;\n}\n.tbl-n ul li {\n  width: 20%;\n  float: left;\n}\n.tbl-bg thead th {\n  border-left: 1px solid #000000;\n}\n.tbl-bg thead th:first-child {\n  border-left: 0;\n}\n.tbl-n ul .tbl-li:nth-child(3n-1) {\n  width: 60%;\n}\n* {\n  font-size: 12px;\n}\n.noprint {\n  display: none;\n}\n.tbl-n ul {\n  font-size: inherit;\n}\n.tbl-n .tbl-li {\n  white-space: normal;\n  word-break: break-all;\n  font-size: inherit;\n}\n@media print {\n.noprint {\n    display: none;\n}\n.tbl-n ul li {\n    padding-right: 7px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n}\n.tbl-n ul {\n    margin-right: -7px;\n    overflow: hidden;\n}\n}\n",""])},2644:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._m(0),n._v(" "),e("div",{staticClass:"print-button",attrs:{id:"noprint"}},[e("Button",{staticStyle:{"margin-right":"12px"},on:{click:n.goBack}},[n._v(" 返回")]),n._v(" "),e("Button",{attrs:{type:"primary"},on:{click:n.goPinter}},[n._v("打印")])],1)])},o=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticStyle:{width:"98%",margin:"0 auto"},attrs:{id:"batchPrintList"}},[e("div",{staticStyle:{width:"100%","padding-top":"20px"},attrs:{id:"content"}})])}];i._withStripped=!0;var a={render:i,staticRenderFns:o};t.default=a},268:function(n,t,e){"use strict";function i(n){p||e(2642)}Object.defineProperty(t,"__esModule",{value:!0});var o=e(1766),a=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);var l=e(2644),d=e.n(l),p=!1,s=e(13),h=i,g=s(a.a,d.a,!1,h,null,null);g.options.__file="src/views/trader-manage/order-manage/order-print.vue",t.default=g.exports}});