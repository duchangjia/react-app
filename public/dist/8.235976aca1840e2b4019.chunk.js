webpackJsonp([8],{1749:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={0:{key:"template-name",value:"订单模板"},1:{key:"order-name",value:"立白集团广州"},2:{key:"width-paper",value:"241"},3:{key:"height-paper",value:"140"},4:{key:"row-number",value:"5"},5:{key:"column-number",value:"2"},6:{key:"customer-text",value:"调拨单打印备注"},7:{key:"name-ellipsis",value:!0},8:{key:"page-title",value:!0},9:{key:"client-name",value:!1,sortIndex:"0"},10:{key:"send-date",value:!1,sortIndex:"0"},11:{key:"sale-number",value:!1,sortIndex:"0"},12:{key:"client-number",value:!1,sortIndex:"0"},13:{key:"client-address",value:!1,sortIndex:"0"},14:{key:"print-date",value:!0,sortIndex:"1"},15:{key:"client-telephone",value:!1,sortIndex:"0"},16:{key:"salesman",value:!0,sortIndex:"10"},17:{key:"send-number",value:!1,sortIndex:"0"},18:{key:"output-warehouse",value:!0,sortIndex:"1"},19:{key:"input-warehouse",value:!0,sortIndex:"1"},20:{key:"exchange-number",value:!1,sortIndex:"0"},21:{key:"move-warehouse",value:!0,sortIndex:"1"},22:{key:"warehouse-manage",value:!0,sortIndex:"1"},23:{key:"send-man",value:!1,sortIndex:"0"},24:{key:"receive-man",value:!1,sortIndex:"0"},25:{key:"car-number",value:!0,sortIndex:"14"},26:{key:"driver",value:!0,sortIndex:"15"},27:{key:"driver-telephone",value:!0,sortIndex:"16"},28:{key:"note-sale",value:!0,sortIndex:"17"},29:{key:"output-warehouse-manage",value:!0,sortIndex:"1"},30:{key:"input-warehouse-manage",value:!0,sortIndex:"19"},31:{key:"number-sale",value:!1,sortIndex:"0"}};e.default={name:"orderPrint",data:function(){return{submitArray:[],printType:0,printOrderNumber:"",temporaryObject:a,temporaryObjectTable:[!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1],tempBoxFirst:"table-first-id",tempBoxSecond:"table-second-id",temporaryTitleHtml:"",tempBoxTopHtml:"",tempBoxTopHtmlArray:[],temporaryHtml:"",temporaryFristHtml:"",temporarySecondHtml:"",temporaryBodyHtml:"",tempTableTotalHtml:"",tempBoxBottomHtml:"",tempBoxBottomHtmlArray:[],tempCertificationHtml:"",tempCustomerTextHtml:"",tempPageHtml:"",tempItemName:"item",ellipsis:!0,pageTitle:0,orderName:"立白集团广州销售单",temporaryNumber:5,temporaryNumberMax:5,temporaryColumnTotal:3,temporaryName:"name-control",columnShow:[!1],html69Code:"",html79Code:"",htmlName:"",htmlUnitRate:"",htmlBoxNumber:"",htmlMergeBoxNumber:"",htmlElseNumber:"",htmlPricePer:"",htmlPrice:"",htmlPriceTotal:"",htmlNote:"",html69CodeList:"",html79CodeList:"",htmlNameList:"",htmlUnitRateList:"",htmlBoxNumberList:"",htmlMergeBoxNumberList:"",htmlElseNumberList:"",htmlPricePerList:"",htmlPriceList:"",htmlPriceTotalList:"",htmlNoteList:"",CarUnit:"",CarUnitList:"",EaUnit:"",EaUnitList:"",EaNum:"",EaNumList:"",OutCar:"",OutCarList:"",OutEa:"",OutEaList:"",footerShowAll:0,detailTotalShowAll:0}},methods:{initTable:function(){this.ellipsis?this.temporaryName="name-uncontrol":this.temporaryName="name-control";var t=JSON.parse(localStorage.printTemplatePreviewData),e=[];t.detailShow69Code&&e.push({idx:t.detailShow69Code,headText:'<td width="10%">     条形码     </td>            ',bodyText:"<td>     6920174749618     </td>            "}),t.detailShowSpuCode&&e.push({idx:t.detailShowSpuCode,headText:'<td width="10%">     销售编码     </td>            ',bodyText:"<td>     79464223454     </td>            "}),t.detailShowSpuName&&e.push({idx:t.detailShowSpuName,headText:'<td width="30%">     商品名称     </td>            ',bodyText:'<td width="30%">     <div class="'+this.temporaryName+'">        立白冷水速效衣粉1.8千克 *6    </div>       </td>            '}),t.detailShowChangeUnitRate&&e.push({idx:t.detailShowChangeUnitRate,headText:'<td width="7%">     商品规格     </td>            ',bodyText:"<td>     100*1     </td>            "}),t.detailShowCarNum&&e.push({idx:t.detailShowCarNum,headText:'<td width="5%">      CAR数         </td>            ',bodyText:'<td width="5%">      2         </td>            '}),t.detailShowCarEaNum&&e.push({idx:t.detailShowCarEaNum,headText:'<td width="7%">      折合CAR数         </td>            ',bodyText:'<td width="5%">      2         </td>            '}),t.detailShowEaNum&&e.push({idx:t.detailShowEaNum,headText:'<td width="5%">      EA数         </td>            ',bodyText:'<td width="5%">      2         </td>            '}),t.detailShowMemo&&e.push({idx:t.detailShowMemo,headText:'<td width="5%">      备注       </td>            ',bodyText:'<td width="5%">             </td>            '}),t.mark&&e.push({idx:t.mark,headText:'<td width="5%">      标识       </td>            ',bodyText:'<td width="5%">             </td>            '}),t.detailShowCarPrice&&e.push({idx:t.detailShowCarPrice,headText:'<td width="5%">      CAR单价       </td>            ',bodyText:'<td width="5%">      2.00       </td>            '}),t.detailShowEaPrice&&e.push({idx:t.detailShowEaPrice,headText:'<td width="5%">      EA单价       </td>            ',bodyText:'<td width="5%">      1.00       </td>            '}),t.detailShowPriceTotal&&e.push({idx:t.detailShowPriceTotal,headText:'<td width="13%">     总金额</td>',bodyText:'<td width="13%"> 5.00</td>'}),t.detailShowCarUnit&&e.push({idx:t.detailShowCarUnit,headText:'<td width="13%">     折合总EA数</td>',bodyText:'<td width="6%"> 件</td>'}),t.detailShowEaUnit&&e.push({idx:t.detailShowEaUnit,headText:'<td width="6%">     EA单位</td>',bodyText:'<td width="6%"> 个</td>'}),t.detailShowZheheEaNum&&e.push({idx:t.detailShowZheheEaNum,headText:'<td width="13%">     折合总EA数</td>',bodyText:'<td width="13%"> 14</td>'}),t.detailShowWarehouseOutCar&&e.push({idx:t.detailShowWarehouseOutCar,headText:'<td width="13%">    出库件数</td>',bodyText:'<td width="13%"> 2件2</td>'}),t.detailShowWarehouseOutEa&&e.push({idx:t.detailShowWarehouseOutEa,headText:'<td width="13%">    出库个数</td>',bodyText:'<td width="13%"> 14</td>'});var r=e.sort(function(t,e){return t.idx-e.idx}),a=r.map(function(t){return t.headText}).join(""),o=r.map(function(t){return t.bodyText}).join("");this.temporaryHtml='<thead><tr><td width="5%">      序号         </td>            '+a+"</tr></thead>";for(var n=0;n<this.temporaryNumber;n++)this.temporaryBodyHtml+="<tr><td>  "+(n+1)+"</td>"+o+"</tr>";var i="",s="";t.detailTotalPageMoenyCapital?i+='<td width="30%"><span style=" float:left;">本页金额合计（大写）：<span class="caseNum">壹拾元</span></span></td>':i+='<td width="30%"></td>',t.detailTotalPageCarNum?i+='<td width="25%"><span style=" float:left;">本页箱数：<span class="caseNum">1</span></span></td>':i+='<td width="25%"></td>',t.detailTotalPageEaNum?i+='<td width="25%"><span style="float:left;">本页散数：<span class="bulkNum">1</span></span></td>':i+='<td width="25%"></td>',t.detailTotalPageMoeny?i+='<td width="25%"><span>本页金额合计：</span><span class="price">10.00</span></td>':i+='<td width="25%"></td>',t.detailTotalMoenyCapital?s+='<td width="30%" ><span style=" float:left;">总金额合计（大写）：<span class="caseNum">壹拾元</span></span></td>':s+='<td width="30%"></td>',t.detailTotalMoeny?s+='<td width="25%" ><span style=" float:left;">累计总箱数：<span class="caseNum">1</span></span></td>':s+='<td width="25%"></td>',t.detailTotalCarNum?s+='<td width="25%" ><span style=" float:left;">累计总散数：<span class="caseNum">1</span></span></td>':s+='<td width="25%"></td>',t.detailTotalEaNum?s+='<td width="25%"><span>总金额合计：</span><span class="all_price">10.00</span></td>':s+='<td width="25%"></td>';var m='<table width="100%" style="font-size:'+t.detailTotalFontSize+'px;">                        <tr>'+i+"                        </tr>                            <tr>"+s+"                            </tr>                    </table>";this.temporarySecondHtml='<div class="tbl-list"><div class="tbl-bg"><table cellspacing="0" style="text-align: center;font-size:'+t.detailFontSize+'px;" width="100%" >'+this.temporaryHtml+this.temporaryBodyHtml+"</table>"+m+"</div></div>";var l="";l=this.detailTotalShowAll&&0!=this.detailTotalShowAll?'<table width="100%" style="font-size:'+t.detailTotalFontSize+'px;">                        <tr>'+i+"                        </tr>                            <tr>"+s+"                            </tr>                    </table>":'<table width="100%" style="font-size:'+t.detailTotalFontSize+'px;">                        <tr>'+i+"                        </tr>                    </table>",this.temporaryFristHtml='<div class="tbl-list"><div class="tbl-bg"><table cellspacing="0" style="text-align: center;font-size:'+t.detailFontSize+'px;" width="100%" >'+this.temporaryHtml+this.temporaryBodyHtml+"</table>"+l+"</div></div>"},goPinter:function(){document.getElementById("noprint").style.display="none",window.print(),setTimeout(function(){document.getElementById("noprint").style.display=""})},goBack:function(){this.$router.push({name:"print-template-operate",query:{previewGoBack:1}})}},mounted:function(){function t(t,e){return t.sortIndex-e.sortIndex}var e=this;document.getElementsByTagName("html")[0].style.overflow="visible",document.getElementsByTagName("body")[0].style.overflow="visible";var r=this;r.submitArray={};var a=JSON.parse(localStorage.printTemplatePreviewData),o=0;for(var n in a)o++,r.submitArray[o]={key:n,value:a[n]?a[n]:0,sortIndex:a[n]?a[n]:0};r.temporaryObject=r.submitArray;var i=this.$route.query.id?this.$route.query.id.toString():"100001";this.printOrderNumber=i,console.log(i),console.log(this.temporaryObject);for(var s in this.temporaryObject)"printTitle"===this.temporaryObject[s].key&&(this.orderName=this.temporaryObject[s].value),"height-paper"===this.temporaryObject[s].key&&("140"===this.temporaryObject[s].value&&(this.temporaryNumberMax=10),"93.5"===this.temporaryObject[s].value&&(this.temporaryNumberMax=2),"280"===this.temporaryObject[s].value&&(this.temporaryNumberMax=35)),"headerCol"===this.temporaryObject[s].key&&(2==parseInt(this.temporaryObject[s].value)?(this.tempItemName="item-half",this.temporaryColumnTotal=2):4==parseInt(this.temporaryObject[s].value)?(this.tempItemName="item-four",this.temporaryColumnTotal=4):(this.tempItemName="item",this.temporaryColumnTotal=3)),"isNewline"===this.temporaryObject[s].key&&(this.temporaryObject[s].value,this.ellipsis=this.temporaryObject[s].value),"addHeader"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&(this.pageTitle=this.temporaryObject[s].value),"footerShowAll"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&(this.footerShowAll=this.temporaryObject[s].value),"detailTotalShowAll"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&(this.detailTotalShowAll=this.temporaryObject[s].value),"printMaxRows"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&(this.temporaryNumber=parseInt(this.temporaryObject[s].value)<=this.temporaryNumberMax?parseInt(this.temporaryObject[s].value):this.temporaryNumberMax),"showStoreName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">客户名称：立白集团</td>'}),"showDeliverTime"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">送货日期：2018/06/15</td>'}),"showOrderSource"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">销售单号：12124192312931</td>'}),"showStoreCode"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">客户编码：37138782028</td>'}),"showAddressDetail"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">客户地址：安徽--安庆市--怀宁县--洪镇东风桥</td>'}),"showPrintTime"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">打印时间：2018/06/14</td>'}),"showPhone"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">客户电话：18812341234</td>'}),"showEmpName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">业务员：测试出库</td>'}),"showDespatchOrderNo"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">发货单号：241124536446</td>'}),"showWarehouseOutName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">出库仓库：1号仓库</td>'}),"showWarehouseInName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">入库仓库：2号仓库</td>'}),"showTransferNo"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">调拨单号：642222322345</td>'}),"showTransferUpdateDate"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxTopHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">移库日期：2018/06/12</td>'}),"footerShowUserName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">仓管：测试出库</td>'}),"footerShowDeliveryMan"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">送货人：测试出库</td>'}),"footerShowSigner"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">签收人：测试出库</td>'}),"footerShowCarNum"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">车牌：粤A12345</td>'}),"footerShowDriverName"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">司机：测试出库</td>'}),"footerShowDriverPhone"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">司机电话：13956551295</td>'}),"footerShowMemo"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">备注：测试出库</td>'}),"footerOutWareKeeper"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">出库仓管：测试出库</td>'}),"footerIntWareKeeper"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">入库仓管：测试出库</td>'}),"footerOrderSource"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&this.tempBoxBottomHtmlArray.push({sortIndex:this.temporaryObject[s].sortIndex,htmlString:'<td class="'+this.tempItemName+'">销售单号：12124192312931</td>'}),"footerContent"===this.temporaryObject[s].key&&this.temporaryObject[s].value&&(this.tempCustomerTextHtml=this.temporaryObject[s].value.replace(/\n/g,"<br>"));this.tempBoxTopHtmlArray.sort(t),this.tempBoxBottomHtmlArray.sort(t),this.tempBoxTopHtmlArray.forEach(function(t,r){0===r&&(t.htmlString="<tr>"+t.htmlString),(r+1)%e.temporaryColumnTotal==0&&0!==r&&r+1!==e.tempBoxTopHtmlArray.length&&(t.htmlString=t.htmlString+"</tr><tr>"),r+1===e.tempBoxTopHtmlArray.length&&(t.htmlString=t.htmlString+"</tr>")}),this.tempBoxBottomHtmlArray.forEach(function(t,r){0===r&&(t.htmlString="<tr>"+t.htmlString),(r+1)%e.temporaryColumnTotal==0&&0!==r&&r+1!==e.tempBoxBottomHtmlArray.length&&(t.htmlString=t.htmlString+"</tr><tr>"),r+1===e.tempBoxBottomHtmlArray.length&&(t.htmlString=t.htmlString+"</tr>")}),this.tempBoxTopHtmlArray.forEach(function(t,r){e.tempBoxTopHtml+=t.htmlString}),this.tempBoxBottomHtmlArray.forEach(function(t,r){e.tempBoxBottomHtml+=t.htmlString}),this.initTable();var m='<div style="text-align:center;width: 100%">        <h3 style="font-size:'+a.titleFontSize+'px;position: relative">                <span>'+this.orderName+"</span>        </h3>        </div>";this.tempBoxTopHtml='<div class="m" style="font-size:'+a.headerFontSize+'px"><div class="tbl-n"><table width="100%">'+this.tempBoxTopHtml+"</table></div></div>",this.tempBoxBottomHtml='<div class="m" style="font-size:'+a.footerFontSize+'px"><div class="tbl-n"><table width="100%">'+this.tempBoxBottomHtml+'</table><div class="tbl-n"></div>';var l='<p><span class="white_order">(白单存根、红单客户、黄单仓库、蓝单为收款凭证)</span></p><p style="text-align: left;">'+this.tempCustomerTextHtml+'</p><p style="text-align: right;">页码：1/1</p><div style="page-break-after:always"></div>';this.footerShowAll&&0!=this.footerShowAll?document.getElementById(this.tempBoxFirst).innerHTML=m+this.tempBoxTopHtml+this.temporaryFristHtml+this.tempBoxBottomHtml+l:document.getElementById(this.tempBoxFirst).innerHTML=m+this.tempBoxTopHtml+this.temporaryFristHtml+l,this.pageTitle&&0!=this.pageTitle?document.getElementById(this.tempBoxSecond).innerHTML=m+this.tempBoxTopHtml+this.temporarySecondHtml+this.tempBoxBottomHtml+l:document.getElementById(this.tempBoxSecond).innerHTML=m+this.temporarySecondHtml+this.tempBoxBottomHtml+l},beforeDestroy:function(){document.getElementsByTagName("html")[0].style.overflow="hidden",document.getElementsByTagName("body")[0].style.overflow="hidden"}}},2567:function(t,e,r){var a=r(2568);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(43)("503cefa4",a,!1,{})},2568:function(t,e,r){e=t.exports=r(42)(!1),e.push([t.i,"\n.width-100 {\n  width: 100%;\n}\n.lb-left {\n  float: left;\n}\n.lb-right {\n  float: right;\n}\n.lb-center {\n  text-align: center;\n}\n.lb-promotion-main {\n  height: auto;\n  background-color: #fff;\n}\n.lb-promotion-main .lb-promotion-search {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row {\n  margin-bottom: 14px;\n}\n.lb-promotion-main .lb-promotion-search .lb-promotion-row .ListName {\n  text-align: right;\n  line-height: 32px;\n  color: #747474;\n  font-size: 12px;\n  margin-right: 8px;\n}\n.promotion-page {\n  margin: 1rem 0 0 0;\n}\n.container {\n  background: #fff;\n  color: #747474;\n  border: 1px solid #E8E8E8;\n  padding: 1% 1% 3%;\n}\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-12 {\n  margin-bottom: 12px;\n}\n.margin-bottom-14 {\n  margin-bottom: 14px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.mb--12 {\n  margin-bottom: 12px;\n}\n.mb--14 {\n  margin-bottom: 14px;\n}\n.border-b--dashed {\n  border-bottom: 1px dashed #e5e5e5;\n}\n.pd--20 {\n  padding: 20px;\n}\n.ml--50 {\n  margin-left: 50px;\n}\n.fr {\n  float: right;\n}\n.fl {\n  float: left;\n}\n.bg--white {\n  background: #fff;\n}\n.clearfix:after {\n  content: '';\n  display: block;\n  height: 0;\n  clear: both;\n}\n.text-center {\n  text-align: center;\n}\n.white {\n  background-color: white;\n}\n.select_box {\n  padding: 20px;\n  border-bottom: 1px dashed #E8E8E8;\n}\n.ling_height {\n  padding-top: 15px;\n}\n.text_align_right {\n  text-align: right;\n}\n.text_align_center {\n  text-align: center;\n}\n.operation_box {\n  padding: 10px 20px;\n  text-align: right;\n}\n.page_right {\n  text-align: right;\n  padding: 10px 20px;\n}\n.input_width {\n  width: 120px;\n}\n.search_btn {\n  width: 100px;\n}\n.margin_bottom_0 {\n  margin-bottom: 0;\n}\n.ivu-breadcrumb a {\n  color: #999;\n}\n.ivu-breadcrumb {\n  font-size: 12px;\n}\n.ivu-breadcrumb > span:last-child {\n  color: #426196;\n}\n.box_shadow {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: #eee;\n}\n.border_bottom_dashed {\n  border-bottom: 1px dashed #E8E8E8;\n}\n.problem_table .ivu-checkbox-wrapper {\n  margin-right: 0px;\n}\n#myPrintArea {\n  overflow: visible;\n  background: white;\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  color: #000;\n}\n#myPrintArea #noprint {\n  height: 100px;\n}\n#myPrintArea p,\nh3 {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  font-weight: 100;\n  color: #000;\n}\n#myPrintArea h3 {\n  width: 100%;\n  text-align: center;\n}\n#myPrintArea ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n#myPrintArea .print-table {\n  margin: 0 auto;\n  width: 98%;\n}\n#myPrintArea .print-button {\n  margin: 30px 0;\n  text-align: center;\n}\n#myPrintArea .order_list li {\n  display: inline-block;\n  margin-right: 25px;\n  /*font-size: 16px;*/\n}\n#myPrintArea .order_list span:first-child {\n  display: inline-block;\n  text-align: right;\n}\n#myPrintArea table tr {\n  margin: 0;\n  padding: 0;\n}\n#myPrintArea table tr td.item {\n  width: 33.33%;\n}\n#myPrintArea table tr td.item-four {\n  width: 25%;\n}\n#myPrintArea table tr td.item-half {\n  width: 50%;\n}\n#myPrintArea table tr td .name-control {\n  max-width: 100px;\n  margin: 0 auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n#myPrintArea .tbl-bg table,\n#myPrintArea .tbl-bg td {\n  border: 1px solid #000;\n  border-collapse: collapse;\n}\n#myPrintArea .foot_tbl_s {\n  padding-top: 10px;\n}\n#myPrintArea .foot_tbl_s span {\n  margin: 0 80px 0 0;\n}\n",""])},2569:function(t,e,r){var a=r(2570);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(43)("62faa6c5",a,!1,{})},2570:function(t,e,r){e=t.exports=r(42)(!1),e.push([t.i,"\n.clear[data-v-27c77129] {\n    clear: both;\n    font-size: 0;\n    line-height: 0;\n    height: 0;\n}\n",""])},2571:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"myPrintArea"}},[r("div",[r("div",{staticClass:"print-table",attrs:{id:"table-first-id"}},[t._v("\n            print"+t._s(t.printOrderNumber)+"\n        ")]),t._v(" "),r("div",{staticClass:"print-table",attrs:{id:"table-second-id"}},[t._v("\n            print"+t._s(t.printOrderNumber)+"\n        ")])]),t._v(" "),r("div",{staticClass:"print-button",attrs:{id:"noprint"}},[r("i-button",{attrs:{type:"success",icon:"printer"},on:{click:function(e){t.goPinter()}}},[t._v("打印")]),t._v(" "),r("i-button",{staticStyle:{"margin-left":"20px"},attrs:{icon:"arrow-return-left"},on:{click:function(e){t.goBack()}}},[t._v("返回")])],1)])},o=[];a._withStripped=!0;var n={render:a,staticRenderFns:o};e.default=n},265:function(t,e,r){"use strict";function a(t){l||(r(2567),r(2569))}Object.defineProperty(e,"__esModule",{value:!0});var o=r(1749),n=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);var s=r(2571),m=r.n(s),l=!1,d=r(13),h=a,p=d(n.a,m.a,!1,h,"data-v-27c77129",null);p.options.__file="src/views/trader-manage/information-manage/print-template-preview.vue",e.default=p.exports}});