(function(){"use strict";var e={4984:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var i=n(9963),a=n(6252),r={class:"wrapper"};function o(e,t,n,i,o,l){var c=(0,a.up)("Vnavigation"),s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(c),(0,a.Wm)(s)])}n(9254);var l=n(3577),c=function(e){return(0,a.dD)("data-v-73c33dcb"),e=e(),(0,a.Cn)(),e},s={class:"sidebar"},d={class:"navigation-wrp"},u=c((function(){return(0,a._)("span",{class:"burger-button__line"},null,-1)})),_=c((function(){return(0,a._)("span",{class:"burger-button__line"},null,-1)})),p=c((function(){return(0,a._)("span",{class:"burger-button__line"},null,-1)})),f=[u,_,p],v={class:"dropdown-nav"},b={class:"x-button"},m={class:"menu-wrp"},g={class:"menu"},T={class:"socialicons-list"},C={class:"langbutton-mobile"},h={class:"langbutton"};function w(e,t,n,r,o,c){var u=(0,a.up)("vicon"),_=(0,a.up)("router-link"),p=(0,a.up)("VLangButton");return(0,a.wg)(),(0,a.iD)("header",s,[(0,a._)("div",d,[(0,a._)("div",{class:"burger-button",onClick:t[0]||(t[0]=function(){return r.toggleNav&&r.toggleNav.apply(r,arguments)})},f),(0,a.Wm)(i.uT,{name:"nav"},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",v,[(0,a._)("div",b,[(0,a.Wm)(u,{"icon-id":"icon-x",width:"32",height:"32",onClick:r.toggleNav},null,8,["onClick"])]),(0,a._)("div",m,[(0,a._)("nav",null,[(0,a._)("ul",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.bmMenuList,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"menu__item",key:e.id},[(0,a.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,l.zw)(e.title),1)]})),_:2},1032,["to"])])})),128))])]),(0,a._)("ul",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.socialMediaList,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"socialicons__item",key:e.id},[(0,a.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,a.w5)((function(){return[(0,a.Wm)(u,{class:"icon_green","icon-id":e.iconId,width:e.width,height:e.height},null,8,["icon-id","width","height"])]})),_:2},1032,["to"])])})),128))])]),(0,a._)("div",C,[(0,a.Wm)(p)])],512),[[i.F8,r.dropdownNav]])]})),_:1})]),(0,a._)("div",h,[(0,a.Wm)(p)])])}var E=n(2262),y=["width","height"],S=["xlink:href"];function I(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("svg",{class:"icon",width:n.width,height:n.height},[(0,a._)("use",{"xlink:href":i.iconPath},null,8,S)],8,y)}n(9653),n(2222);var k=n(7795),D={name:"v-icon",props:{iconId:{type:String,required:!0},width:{type:[Number,String],default:32},height:{type:[Number,String],default:32}},setup:function(e){var t=(0,a.Fl)((function(){return"".concat(k,"#").concat(e.iconId)}));return{iconPath:t}}},O=n(3744);const L=(0,O.Z)(D,[["render",I]]);var F=L;function P(e,t,n,r,o,l){var c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.wy)((0,a.Wm)(c,{class:"link",to:{name:""}},{default:(0,a.w5)((function(){return[(0,a._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:t[0]||(t[0]=function(){return r.toggleLangIcon&&r.toggleLangIcon.apply(r,arguments)})}," Eng ")]})),_:1},512),[[i.F8,r.langButton]]),(0,a.wy)((0,a.Wm)(c,{class:"link",to:{name:""}},{default:(0,a.w5)((function(){return[(0,a._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:t[1]||(t[1]=function(){return r.toggleLangIcon&&r.toggleLangIcon.apply(r,arguments)})}," Рус ")]})),_:1},512),[[i.F8,!r.langButton]])],64)}var R={name:"v-lang-button",setup:function(){var e=(0,E.iH)(!0);function t(){e.value=!e.value}return{langButton:e,toggleLangIcon:t}}};const A=(0,O.Z)(R,[["render",P]]);var V=A,x={name:"v-navigation",components:{Vicon:F,VLangButton:V},setup:function(){var e=[{id:1,title:"Парковка",link:""},{id:2,title:"Страховка",link:""},{id:3,title:"Бензин",link:""},{id:4,title:"Обслуживание",link:""}],t=[{id:1,iconId:"icon-telegram",width:"32",height:"32",link:""}],n=(0,E.iH)(!0),i=(0,E.iH)(null);function a(){i.value=!i.value,n.value=!n.value}return{burgerButton:n,dropdownNav:i,bmMenuList:e,socialMediaList:t,toggleNav:a}}};const j=(0,O.Z)(x,[["render",w],["__scopeId","data-v-73c33dcb"]]);var N=j,W={components:{Vnavigation:N}};const Y=(0,O.Z)(W,[["render",o]]);var Z=Y,H=n(2119),M={class:"main-wrp"},G={class:"left-wrp"},U={class:"about"},z=(0,a._)("h1",{class:"about__title"},"Каршеринг",-1),q=(0,a._)("p",{class:"about__title about__title_green"},"Need for drive",-1),K=(0,a._)("p",{class:"about__text"},"Поминутная аренда авто твоего города",-1),B=(0,a._)("button",{class:"about__button"},"Забронировать",-1),X=(0,a._)("footer",{class:"footer"},[(0,a._)("p",{class:"footer__copyright"},"© 2016-2019 «Need for drive»"),(0,a._)("address",{class:"footer__phone"},[(0,a._)("a",{class:"footer__link",href:"tel:+74952342244"},"8 (495) 234-22-44")])],-1),$={class:"right-wrp"};function J(e,t,n,i,r,o){var l=(0,a.up)("Vheader"),c=(0,a.up)("router-link"),s=(0,a.up)("Vslider");return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",G,[(0,a.Wm)(l),(0,a._)("div",U,[z,q,K,(0,a.Wm)(c,{to:{name:"v-order"}},{default:(0,a.w5)((function(){return[B]})),_:1})]),X]),(0,a._)("div",$,[(0,a.Wm)(s)])])}var Q={class:"header"},ee=(0,a._)("p",{class:"logo header__logo header__logo-order"},"Need for drive",-1),te={class:"header__map header__map-order"},ne=(0,a._)("span",null,"Ульяновск",-1);function ie(e,t,n,i,r,o){var l=(0,a.up)("vicon"),c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",Q,[ee,(0,a._)("p",te,[(0,a.Wm)(c,{class:"city header__city",to:{name:""}},{default:(0,a.w5)((function(){return[(0,a.Wm)(l,{class:"header__icon","icon-id":"icon-map",width:"20",height:"20"}),ne]})),_:1})])])}var ae={name:"v-header",components:{Vicon:F}};const re=(0,O.Z)(ae,[["render",ie]]);var oe=re,le=function(e){return(0,a.dD)("data-v-4389019c"),e=e(),(0,a.Cn)(),e},ce={class:"slider-wrp"},se={class:"slider-list"},de=["index"],ue={class:"slider-content"},_e={class:"slider-title"},pe={class:"slider-text"},fe=le((function(){return(0,a._)("span",{class:"sliderbtn__text"},"Подробнее",-1)})),ve=[fe],be={class:"pagination-list"},me=["index"];function ge(e,t,n,r,o,c){var s=(0,a.up)("router-link"),d=(0,a.up)("vicon");return(0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("ul",se,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.sliderList,(function(e,t){return(0,a.wg)(),(0,a.iD)("li",{key:e.id,index:t},[(0,a.Wm)(i.uT,{name:r.slideDirection},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",{class:"slider__item",style:(0,l.j5)(e)},[(0,a._)("div",ue,[(0,a._)("p",_e,(0,l.zw)(e.title),1),(0,a._)("p",pe,(0,l.zw)(e.text),1),(0,a.Wm)(s,{to:{name:""}},{default:(0,a.w5)((function(){return[(0,a._)("button",{class:(0,l.C_)(["sliderbtn",{sliderbtn_insurance:2===e.id,sliderbtn_petrol:3===e.id,sliderbtn_service:4===e.id}])},ve,2)]})),_:2},1024)])],4),[[i.F8,r.visibleSlide===t]])]})),_:2},1032,["name"])],8,de)})),128)),(0,a._)("div",{class:"arrow-wrp arrow-wrp_prev",onClick:t[0]||(t[0]=function(){return r.changeSlidePrev&&r.changeSlidePrev.apply(r,arguments)})},[(0,a.Wm)(d,{class:"arrow-slide arrow-slide_prev","icon-id":"icon-arrow-slider-prev",width:"10",height:"20"})]),(0,a._)("div",{class:"arrow-wrp arrow-wrp_next",onClick:t[1]||(t[1]=function(){return r.changeSlideNext&&r.changeSlideNext.apply(r,arguments)})},[(0,a.Wm)(d,{class:"arrow-slide arrow-slide_next","icon-id":"icon-arrow-slider-next",width:"10",height:"20"})]),(0,a._)("ul",be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.sliderList,(function(e,t){return(0,a.wg)(),(0,a.iD)("li",{class:(0,l.C_)(["pagination__item",{pagination__item_active:r.visibleSlide===t}]),key:e.id,index:t},null,10,me)})),128))])])])}var Te=n(4648),Ce={name:"v-slider",components:{Vicon:F},setup:function(){var e={backgroundRepeat:"no-repeat",backgroundSize:"cover"},t=[(0,Te.Z)((0,Te.Z)({},e),{},{backgroundImage:"url(".concat(n(3828),")"),title:"Бесплатная парковка",text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",id:1}),(0,Te.Z)((0,Te.Z)({},e),{},{backgroundImage:"url(".concat(n(715),")"),title:"Страховка",text:"Полная страховка страховка автомобиля",id:2}),(0,Te.Z)((0,Te.Z)({},e),{},{backgroundImage:"url(".concat(n(8983),")"),title:"Бензин",text:"Полный бак на любой заправке города за наш счёт",id:3}),(0,Te.Z)((0,Te.Z)({},e),{},{backgroundImage:"url(".concat(n(3849),")"),title:"Обслуживание",text:"Автомобиль проходит еженедельное ТО",id:4})],i=(0,E.iH)(0),a=(0,E.iH)("");function r(){i.value>0&&i.value--,a.value="right"}function o(){i.value<t.length-1&&i.value++,a.value="left"}return{sliderList:t,visibleSlide:i,slideDirection:a,changeSlidePrev:r,changeSlideNext:o}}};const he=(0,O.Z)(Ce,[["render",ge],["__scopeId","data-v-4389019c"]]);var we=he,Ee={name:"v-main",components:{Vheader:oe,Vslider:we}};const ye=(0,O.Z)(Ee,[["render",J]]);var Se=ye,Ie={class:"order-wrp"};function ke(e,t,n,i,r,o){var l=(0,a.up)("Vheader"),c=(0,a.up)("OrderWindow");return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a.Wm)(l,{class:"order-center"}),(0,a.Wm)(c)])}var De={class:"tabs"},Oe={class:"order"},Le={class:"order__window"};function Fe(e,t,n,i,r,o){var l=(0,a.up)("VTabs"),c=(0,a.up)("VTotal");return(0,a.wg)(),(0,a.iD)("div",De,[(0,a.Wm)(l,{tabs:i.filledUpData,selectedIndexTabs:i.selectedIndexTabs,selectedTab:i.selectedTab,onSwitchTab:i.updateSelectedTab},null,8,["tabs","selectedIndexTabs","selectedTab","onSwitchTab"]),(0,a._)("div",Oe,[(0,a._)("div",Le,[((0,a.wg)(),(0,a.j4)((0,a.LL)(i.selectedTab),{idTab:i.selectedTab,onOnTabReset:i.resetTabs},null,8,["idTab","onOnTabReset"]))]),(0,a.Wm)(c,{tabs:i.tabs,selectedId:i.selectedIndexTabs,selectedTab:i.selectedTab,onUpdateSelectedTab:i.updateSelectedTab},null,8,["tabs","selectedId","selectedTab","onUpdateSelectedTab"])])])}n(7042),n(7941);var Pe=n(3907),Re={class:"tabs__border"},Ae={class:"tab-list order-center"},Ve={class:"tab__item"},xe=["disabled","onClick"],je={class:"tab__item-icon"};function Ne(e,t,n,i,r,o){var c=(0,a.up)("Vicon");return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("ul",Ae,[(0,a._)("li",Ve,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.tabs,(function(e){return(0,a.wg)(),(0,a.iD)("button",{class:(0,l.C_)(["tab__item-btn",{tab__item_active:n.selectedTab===e.id,tab__item_filled:n.selectedTab!==e.id&&!e.isDisabled}]),key:e.id,disabled:e.isDisabled,onClick:function(t){return i.switchTab(e.id)}},[(0,a.Uk)((0,l.zw)(e.label)+" ",1),(0,a._)("span",je,[(0,a.Wm)(c,{"icon-id":"icon-arrow",width:"6",height:"8"})])],10,xe)})),128))])])])}var We={name:"v-tabs",components:{Vicon:F},props:{tabs:{type:Array,required:!1},selectedTab:{type:String,required:!1}},setup:function(e,t){function n(e){t.emit("switchTab",e)}return{switchTab:n}}};const Ye=(0,O.Z)(We,[["render",Ne]]);var Ze=Ye,He={class:"input-block"},Me=(0,a._)("p",{class:"place__text"},"Выбрать на карте",-1),Ge={class:"map-wrp"};function Ue(e,t,n,i,r,o){var l=(0,a.up)("VDropdown"),c=(0,a.up)("MapComponent");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",He,[(0,a.Wm)(l,{label:"Город",name:"city",placeholder:"Начните вводить город ...",itemList:i.cityList,selectedItem:i.selectedCity,onOnItemSelected:i.setSelectedCity,onOnItemReset:i.resetSelectedCity},null,8,["itemList","selectedItem","onOnItemSelected","onOnItemReset"]),(0,a.Wm)(l,{label:"Пункт выдачи",name:"point",placeholder:"Начните вводить пункт ...",itemList:i.FILTERED_POINTLIST,selectedItem:i.selectedPoint,onOnItemSelected:i.setSelectedPoint,onOnItemReset:i.resetSelectedPoint},null,8,["itemList","selectedItem","onOnItemSelected","onOnItemReset"])]),Me,(0,a._)("div",Ge,[((0,a.wg)(),(0,a.j4)(c,{key:i.componentKey,chosenCityObj:i.chosenCityObj},null,8,["chosenCityObj"]))])])}n(1249),n(9826),n(1539),n(8309);var ze={class:"dropdown input-wrp"},qe=["for"],Ke=["name","placeholder"],Be={class:"dropdown-list"},Xe=["onClick"];function $e(e,t,n,r,o,c){var s=(0,a.up)("vicon");return(0,a.wg)(),(0,a.iD)("div",ze,[(0,a._)("label",{class:"input-block__label",for:n.name},(0,l.zw)(n.label),9,qe),(0,a.wy)((0,a._)("input",{class:"dropdown-input input-block__input","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.inputValue=e}),name:n.name,placeholder:n.placeholder,type:"text",autocomplete:"off",onFocus:t[1]||(t[1]=function(e){return r.isDropDownVisible=!0})},null,40,Ke),[[i.nr,r.inputValue,void 0,{trim:!0}]]),r.inputValue?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"input-block__cross-icon",onClick:t[2]||(t[2]=function(){return r.resetSelection&&r.resetSelection.apply(r,arguments)})},[(0,a.Wm)(s,{"icon-id":"icon-cross",width:"8",height:"8"})])):(0,a.kq)("",!0),(0,a.wy)((0,a._)("ul",Be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.filteredList,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:"dropdown-item",key:e.id,onClick:function(t){return r.selectItem(e)}},(0,l.zw)(e.name),9,Xe)})),128))],512),[[i.F8,r.isDropDownVisible]])])}n(7327),n(6755);var Je={name:"v-dropdown",components:{Vicon:F},props:{itemList:{type:Array,required:!0},selectedItem:{type:Object,required:!0},placeholder:{type:String,required:!0},label:{type:String,required:!0},name:{type:String,required:!0}},setup:function(e,t){(0,a.bv)((function(){0!==Object.keys(e.selectedItem).length?n.value=e.selectedItem.name:n.value=""})),(0,a.YP)((0,E.Vh)(e,"selectedItem"),(function(){0===Object.keys(e.selectedItem).length&&(n.value="")}),{deep:!0});var n=(0,E.iH)(""),i=(0,E.iH)(null),r=(0,a.Fl)((function(){var t=n.value.toLowerCase();return t?e.itemList.filter((function(e){if(null!==e&&void 0!==e&&e.name){var n=e.name.toLowerCase();return n.startsWith(t)}})):e.itemList}));function o(e){n.value=e?e.name:"",i.value=!1,t.emit("on-item-selected",e)}function l(){n.value="",t.emit("on-item-reset")}return{inputValue:n,isDropDownVisible:i,filteredList:r,selectItem:o,resetSelection:l}}};const Qe=(0,O.Z)(Je,[["render",$e]]);var et=Qe,tt={ref:"mapRef",style:{width:"100%",height:"100%"}};function nt(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("div",tt,null,512)}var it={name:"map-component",props:{chosenCityObj:{type:Object}},setup:function(e){var t=(0,Pe.oR)(),i=window.ymaps,r=(0,E.iH)(null),o=(0,a.Fl)((function(){return t.state.selectedCity})),l=(0,a.Fl)((function(){return t.state.selectedPoint}));function c(t){var a,r=[],c=null;if(0!==Object.keys(l.value).length){var s=e.chosenCityObj.points.find((function(e){return e.id===l.value.id}));r=s.coordsPoint,c=15}else 0!==Object.keys(o.value).length?(r=e.chosenCityObj.coords,c=12):(r=[67.010134,94.337659],c=3);var d=new i.Map(t,{center:r,zoom:c,controls:[]});if(null!==(a=e.chosenCityObj)&&void 0!==a&&a.points)for(var u=0;u<e.chosenCityObj.points.length;u++){var _=new i.Placemark(e.chosenCityObj.points[u].coordsPoint,{hintContent:e.chosenCityObj.points[u].name,balloonContent:e.chosenCityObj.points[u].name},{iconLayout:"default#image",iconImageHref:"".concat(n(4273)),iconImageSize:[18,18]});d.geoObjects.add(_)}}return(0,a.bv)((function(){i.ready((function(){return c(r.value)}))})),{ymaps:i,mapRef:r,selectedCity:o,selectedPoint:l}}};const at=(0,O.Z)(it,[["render",nt]]);var rt=at,ot={name:"order-place",components:{VDropdown:et,MapComponent:rt},props:["idTab"],setup:function(e,t){var n=(0,Pe.oR)(),i=[{id:"6011452fad015e0bb6997e1d",name:"Уфа",coords:[54.735152,55.958736]},{id:"60d6e4d32aed9a0b9b84fa82",name:"Краснодар",coords:[45.03547,38.975313]},{id:"6005b8f9ad015e0bb6997778",name:"Санкт-Петербург",coords:[59.939099,30.315877]},{id:"61a3675e05c99b2812794ed7",name:"Ростов-на-Дону",coords:[47.222078,39.720358]},{id:"61ab1310bb7a006c05c5497f",name:"Екатеринбург",coords:[56.838011,60.597474]},{id:"61b30fe9bb7a006c05c54e2b",name:"Ульяновск",coords:[54.314192,48.403132]},{id:"6238c42573b61100181018e1",name:"Омск",coords:[54.989347,73.368221]},{id:"615a1d1218f5c2264119b91a",name:"Саранск",coords:[54.187433,45.183938]},{id:"61585c3818f5c2264119b859",name:"Сочи",coords:[43.585472,39.723098]},{id:"6114e2a22aed9a0b9b85083e",name:"Воронеж",coords:[51.660786,39.200269]},{id:"5ea07c3b099b810b946c627b",name:"Саратов",coords:[51.533562,46.034266]}],r=[{id:"60bb074b2aed9a0b9b82fc71",name:"Арт-Квадрат",coords:[54.73995,55.95737]},{id:"6114630f2aed9a0b9b850806",name:"Автомобильная парковка",coords:[45.046319,39.030356]},{id:"615ae47018f5c2264119b939",name:"Пункт",coords:[59.935119,30.349339]},{id:"61a391e605c99b2812794f1c",name:"Администрация",coords:[47.221705,39.712156]},{id:"61adef6bbb7a006c05c54a8a",name:"Магнит",coords:[56.901277,60.585967]},{id:"61b310cfbb7a006c05c54e2c",name:"Мариинская гимназия",coords:[54.31228,48.395406]}],o=(0,E.iH)(0),l=(0,a.Fl)((function(){return n.getters.FILTERED_POINTLIST})),c=(0,a.Fl)((function(){return n.state.cityList})),s=(0,a.Fl)((function(){return n.state.selectedCity})),d=(0,a.Fl)((function(){return n.state.selectedPoint})),u=(0,a.Fl)((function(){for(var e={},t=0;t<i.length;t++)s.value.id===i[t].id&&(e=(0,Te.Z)((0,Te.Z)({},s.value),{},{coords:i[t].coords,points:_.value}));return e})),_=(0,a.Fl)((function(){return l.value.map((function(e){var t=r.find((function(t){return t.id===e.id}));return t?(0,Te.Z)((0,Te.Z)({},e),{},{coordsPoint:t.coords}):e}))}));function p(){n.dispatch("GET_CITYLIST_FROM_API")}function f(){n.dispatch("GET_POINTLIST_FROM_API")}function v(e){n.dispatch("GET_SELECTEDCITY",e)}function b(){n.dispatch("GET_SELECTEDCITY"),n.dispatch("GET_SELECTEDPOINT"),t.emit("on-tab-reset",e.idTab)}function m(e){n.dispatch("GET_SELECTEDPOINT",e)}function g(){n.dispatch("GET_SELECTEDPOINT"),t.emit("on-tab-reset",e.idTab)}function T(){o.value+=1}return p(),f(),(0,a.YP)([s,d],(function(){T()})),{cityListCoords:i,pointListCoords:r,componentKey:o,cityList:c,selectedCity:s,selectedPoint:d,FILTERED_POINTLIST:l,chosenCityObj:u,newPointListWithCoordsArr:_,setSelectedCity:v,resetSelectedCity:b,setSelectedPoint:m,resetSelectedPoint:g,GET_CITYLIST_FROM_API:p,GET_POINTLIST_FROM_API:f,forceRerenderMap:T}}};const lt=(0,O.Z)(ot,[["render",Ue]]);var ct=lt,st={class:"radio-list"},dt={key:1,class:"cars-list"},ut=["onClick"],_t={class:"cars__model"},pt={class:"cars__price"},ft=["src","alt"];function vt(e,t,n,i,r,o){var c=(0,a.up)("VRadio"),s=(0,a.up)("Preloader");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",st,[(0,a.Wm)(c,{label:"Все модели",modelValue:i.categoryCars,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.categoryCars=e}),onChange:i.resetSelectedCategoryCar},null,8,["modelValue","onChange"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.categories,(function(e){return(0,a.wg)(),(0,a.j4)(c,{key:e.id,label:e.name,value:e.id,modelValue:i.categoryCars,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.categoryCars=e})},null,8,["label","value","modelValue"])})),128))]),i.togglePreloader?((0,a.wg)(),(0,a.j4)(s,{key:0})):((0,a.wg)(),(0,a.iD)("ul",dt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredCars,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:(0,l.C_)(["cars__item",{cars__item_active:i.selectedCar.id===e.id}]),key:e.id,onClick:function(t){return i.setSelectedCar(e)}},[(0,a._)("p",_t,(0,l.zw)(e.name),1),(0,a._)("p",pt,(0,l.zw)(e.priceMin)+" - "+(0,l.zw)(e.priceMax)+" руб.",1),(0,a._)("img",{loading:"lazy",class:"cars__img",src:e.thumbnail.path,alt:e.thumbnail.originalname},null,8,ft)],10,ut)})),128))]))])}n(6699),n(2023);var bt={class:"radio-item"},mt=["checked","value"],gt=(0,a._)("span",{class:"checkmark"},null,-1);function Tt(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("label",bt,[(0,a.Uk)((0,l.zw)(n.label)+" ",1),(0,a._)("input",{class:"radio__input",type:"radio",checked:i.isChecked,value:n.value,onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,mt),gt])}var Ct={name:"v-radio",props:{label:{type:String,default:"",required:!0},modelValue:{type:String,default:""},value:{type:String,default:""}},setup:function(e){var t=(0,a.Fl)((function(){return e.modelValue===e.value}));return{isChecked:t}}};const ht=(0,O.Z)(Ct,[["render",Tt]]);var wt=ht,Et={class:"spinner-wrp"},yt=(0,a._)("div",{class:"lds-spinner"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div"),(0,a._)("div")],-1),St=[yt];function It(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("div",Et,St)}var kt={name:"preloader"};const Dt=(0,O.Z)(kt,[["render",It]]);var Ot=Dt,Lt={name:"order-model",components:{VRadio:wt,Preloader:Ot},setup:function(e,t){var n=(0,Pe.oR)(),i=[{id:"600598a3ad015e0bb699774c",name:"Эконом"},{id:"60b943492aed9a0b9b7ed335",name:"Премиум"},{id:"5fd91add935d4e0be16a3c4b",name:"Спорт"}],r=(0,a.Fl)((function(){return n.state.carList})),o=(0,a.Fl)((function(){return n.state.checkedCategoryCars})),l=(0,a.Fl)((function(){return n.state.selectedCar})),c=(0,a.Fl)((function(){return!(r.value.length>0)})),s=(0,a.Fl)((function(){return o.value?r.value.filter((function(e){var t;if(null!==e&&void 0!==e&&null!==(t=e.categoryId)&&void 0!==t&&t.id)return e.categoryId.id.includes(o.value)})):r.value})),d=(0,a.Fl)({get:function(){return o.value},set:function(e){n.dispatch("GET_CHECKEDCATEGORY",e)}}),u=function(){return n.dispatch("GET_CARLIST_FROM_API")},_=function(e){return n.dispatch("GET_SELECTEDCAR",e)},p=function(){n.dispatch("GET_CHECKEDCATEGORY"),n.dispatch("GET_SELECTEDCAR"),t.emit("on-tab-reset","order-model")};return u(),{categories:i,carList:r,checkedCategoryCars:o,selectedCar:l,togglePreloader:c,filteredCars:s,categoryCars:d,setSelectedCar:_,resetSelectedCategoryCar:p}}};const Ft=(0,O.Z)(Lt,[["render",vt]]);var Pt=Ft;function Rt(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("div",null,"Вкладка Дополнительно")}var At={};const Vt=(0,O.Z)(At,[["render",Rt]]);var xt=Vt;function jt(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("div",null,"Вкладка Итого")}var Nt={};const Wt=(0,O.Z)(Nt,[["render",jt]]);var Yt=Wt,Zt={class:"total"},Ht=(0,a._)("p",{class:"total__title"},"Ваш заказ:",-1),Mt={class:"total-list"},Gt={class:"total__item"},Ut=(0,a._)("span",{class:"total__item-title"},"Пункт выдачи",-1),zt={class:"total__item-value"},qt={key:0,class:"total__item"},Kt=(0,a._)("span",{class:"total__item-title"},"Модель",-1),Bt={class:"total__item-value"},Xt={key:1,class:"total__item"},$t=(0,a._)("span",{class:"total__item-title"},"Цвет",-1),Jt={class:"total__item-value"},Qt={key:0,class:"total__price"},en=(0,a.Uk)(" Цена: "),tn={class:"total__price total__price-thin"},nn=["disabled"],an=["disabled"],rn=["disabled"];function on(e,t,n,i,r,o){return(0,a.wg)(),(0,a.iD)("div",Zt,[Ht,(0,a._)("ul",Mt,[(0,a._)("li",Gt,[Ut,(0,a._)("div",zt,[(0,a._)("span",null,(0,l.zw)(i.selectedCity.name),1),(0,a._)("span",null,(0,l.zw)(i.selectedPoint.name),1)])]),i.selectedCar.name?((0,a.wg)(),(0,a.iD)("li",qt,[Kt,(0,a._)("span",Bt,(0,l.zw)(i.selectedCar.name),1)])):(0,a.kq)("",!0),i.selectedColor?((0,a.wg)(),(0,a.iD)("li",Xt,[$t,(0,a._)("span",Jt,(0,l.zw)(i.selectedColor),1)])):(0,a.kq)("",!0)]),i.selectedCar.name?((0,a.wg)(),(0,a.iD)("p",Qt,[en,(0,a._)("span",tn,"от "+(0,l.zw)(i.selectedCar.priceMin)+" до "+(0,l.zw)(i.selectedCar.priceMax)+" ₽",1)])):(0,a.kq)("",!0),"order-place"===n.selectedTab?((0,a.wg)(),(0,a.iD)("button",{key:1,class:(0,l.C_)(["total__button",{total__button_active:i.orderPlaceFilledUp}]),disabled:!i.orderPlaceFilledUp,onClick:t[0]||(t[0]=function(){return i.changeSelectedTabModel&&i.changeSelectedTabModel.apply(i,arguments)})}," Выбрать модель ",10,nn)):(0,a.kq)("",!0),"order-model"===n.selectedTab?((0,a.wg)(),(0,a.iD)("button",{key:2,class:(0,l.C_)(["total__button",{total__button_active:i.orderModelFilledUp}]),disabled:!i.orderModelFilledUp,onClick:t[1]||(t[1]=function(){return i.changeSelectedTabAdditional&&i.changeSelectedTabAdditional.apply(i,arguments)})}," Дополнительно ",10,an)):(0,a.kq)("",!0),"order-additional"===n.selectedTab?((0,a.wg)(),(0,a.iD)("button",{key:3,class:(0,l.C_)(["total__button",{total__button_active:i.orderAdditionalFilledUp}]),disabled:!i.orderAdditionalFilledUp,onClick:t[2]||(t[2]=function(){return i.changeSelectedTabSummary&&i.changeSelectedTabSummary.apply(i,arguments)})}," Итого ",10,rn)):(0,a.kq)("",!0)])}var ln={name:"v-total",props:{tabs:{type:Array,required:!1},selectedId:{type:Number,required:!1},selectedTab:{type:String,required:!1}},setup:function(e,t){var n=(0,Pe.oR)(),i=(0,a.Fl)((function(){return n.state.selectedCity})),r=(0,a.Fl)((function(){return n.state.selectedPoint})),o=(0,a.Fl)((function(){return n.state.selectedCar})),l=(0,a.Fl)((function(){return n.state.selectedColor})),c=(0,a.Fl)((function(){return n.state.dateFrom})),s=(0,a.Fl)((function(){return n.state.dateTo})),d=(0,a.Fl)((function(){return n.state.selectedRate})),u=(0,a.Fl)((function(){return!(!Object.keys(i.value).length||0===Object.keys(r.value).length)})),_=(0,a.Fl)((function(){return 0!==Object.keys(o.value).length})),p=(0,a.Fl)((function(){return!!(c.value&&s.value&&d.value)}));function f(){var n=e.tabs[e.selectedId+1].id;t.emit("updateSelectedTab",n)}function v(){var n=e.tabs[e.selectedId+2].id;t.emit("updateSelectedTab",n)}function b(){var n=e.tabs[e.selectedId+3].id;t.emit("updateSelectedTab",n)}return{selectedCity:i,selectedPoint:r,selectedCar:o,selectedColor:l,dateFrom:c,dateTo:s,selectedRate:d,orderPlaceFilledUp:u,orderModelFilledUp:_,orderAdditionalFilledUp:p,changeSelectedTabModel:f,changeSelectedTabAdditional:v,changeSelectedTabSummary:b}}};const cn=(0,O.Z)(ln,[["render",on]]);var sn=cn,dn={name:"order-window",components:{VTabs:Ze,OrderPlace:ct,OrderModel:Pt,OrderAdditional:xt,OrderSummary:Yt,VTotal:sn},setup:function(){var e=(0,Pe.oR)(),t=(0,E.iH)([{label:"Местоположение",id:"order-place",isDisabled:!0},{label:"Модель",id:"order-model",isDisabled:!0},{label:"Дополнительно",id:"order-additional",isDisabled:!0},{label:"Итого",id:"order-summary",isDisabled:!0}]),n=(0,E.iH)(0),i=(0,E.iH)("order-place"),r=(0,a.Fl)((function(){return e.state.selectedCity})),o=(0,a.Fl)((function(){return e.state.selectedPoint})),l=(0,a.Fl)((function(){return e.state.selectedCar})),c=(0,a.Fl)((function(){return e.state.selectedColor})),s=(0,a.Fl)((function(){return e.state.dateFrom})),d=(0,a.Fl)((function(){return e.state.dateTo})),u=(0,a.Fl)((function(){return e.state.selectedRate})),_=(0,a.Fl)((function(){var e=t.value.slice();return Object.keys(r.value).length&&0!==Object.keys(o.value).length&&"order-place"===i.value?(e[n.value].isDisabled=!1,e[n.value+1].isDisabled=!1,e):0!==Object.keys(l.value).length&&"order-model"===i.value?(e[n.value+2].isDisabled=!1,e):c.value&&s.value&&d.value&&u.value&&"order-additional"===i.value?(e[n.value+3].isDisabled=!1,e):e}));function p(e){i.value=e}function f(e){if("order-place"===e)for(var n=0;n<t.value.length;n++)t.value[n].isDisabled=!0;if("order-model"===e)for(var i=1;i<t.value.length;i++)t.value[i].isDisabled=!0;if("order-additional"===e)for(var a=2;a<t.value.length;a++)t.value[a].isDisabled=!0}return{tabs:t,selectedIndexTabs:n,selectedTab:i,filledUpData:_,selectedCity:r,selectedPoint:o,selectedCar:l,selectedColor:c,dateFrom:s,dateTo:d,selectedRate:u,updateSelectedTab:p,resetTabs:f}}};const un=(0,O.Z)(dn,[["render",Fe]]);var _n=un,pn={name:"v-order",components:{Vheader:oe,OrderWindow:_n}};const fn=(0,O.Z)(pn,[["render",ke]]);var vn=fn,bn=[{path:"/",name:"v-main",component:Se},{path:"/order",name:"v-order",component:vn}],mn=(0,H.p7)({history:(0,H.PO)("/nfd_vue3/"),routes:bn}),gn=mn,Tn=n(9669),Cn=n.n(Tn),hn=Cn().create({baseURL:"https://api-factory.simbirsoft1.com/api"});hn.defaults.headers.common["X-Api-Factory-Application-Id"]="5e25c641099b810b946c5d5b";var wn=hn,En={CITY:"/db/city",POINT:"/db/point",CAR:"/db/car"},yn={getCities:function(){return wn.get(En.CITY)},getPoints:function(){return wn.get(En.POINT)},getCars:function(){return wn.get(En.CAR)}},Sn=(0,Pe.MT)({state:{cityList:[],pointList:[],carList:[],selectedCity:{},selectedPoint:{},checkedCategoryCars:"",selectedCar:{},selectedColor:"",dateFrom:0,dateTo:0,selectedRate:""},mutations:{SET_CITYLIST_TO_STATE:function(e,t){e.cityList=t.data.data},SET_POINTLIST_TO_STATE:function(e,t){e.pointList=t.data.data},SET_CARLIST_TO_STATE:function(e,t){e.carList=t.data.data},SET_SELECTEDCITY:function(e,t){e.selectedCity=t},RESET_SELECTEDCITY:function(e){e.selectedCity={}},SET_SELECTEDPOINT:function(e,t){e.selectedPoint=t},RESET_SELECTEDPOINT:function(e){e.selectedPoint={}},SET_CHECKEDCATEGORYCAR:function(e,t){e.checkedCategoryCars=t},RESET_CHECKEDCATEGORYCAR:function(e){e.checkedCategoryCars=""},SET_SELECTEDCAR:function(e,t){e.selectedCar=t},RESET_SELECTEDCAR:function(e){e.selectedCar={}}},actions:{GET_CITYLIST_FROM_API:function(e){var t=e.commit;yn.getCities().then((function(e){return t("SET_CITYLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))},GET_POINTLIST_FROM_API:function(e){var t=e.commit;yn.getPoints().then((function(e){return t("SET_POINTLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))},GET_CARLIST_FROM_API:function(e){var t=e.commit;yn.getCars().then((function(e){return t("SET_CARLIST_TO_STATE",e),e})).catch((function(e){return console.log(e),e}))},GET_SELECTEDCITY:function(e,t){var n=e.commit;t?n("SET_SELECTEDCITY",t):n("RESET_SELECTEDCITY")},GET_SELECTEDPOINT:function(e,t){var n=e.commit;t?n("SET_SELECTEDPOINT",t):n("RESET_SELECTEDPOINT")},GET_CHECKEDCATEGORY:function(e,t){var n=e.commit;t?n("SET_CHECKEDCATEGORYCAR",t):n("RESET_CHECKEDCATEGORYCAR")},GET_SELECTEDCAR:function(e,t){var n=e.commit;t?n("SET_SELECTEDCAR",t):n("RESET_SELECTEDCAR")}},getters:{FILTERED_POINTLIST:function(e){var t;if(null!==(t=e.selectedCity)&&void 0!==t&&t.id)return e.pointList.filter((function(t){var n;if(null!==t&&void 0!==t&&null!==(n=t.cityId)&&void 0!==n&&n.id)return t.cityId.id.includes(e.selectedCity.id)}));var n=[];return n}}});(0,i.ri)(Z).use(Sn).use(gn).mount("#app")},4273:function(e,t,n){e.exports=n.p+"img/map-marker.2d9af2fe.svg"},7795:function(e,t,n){e.exports=n.p+"img/sprite.344b0cfb.svg"},715:function(e,t,n){e.exports=n.p+"img/slide_insurance.0560f4c6.jpg"},3828:function(e,t,n){e.exports=n.p+"img/slide_parking.264e8bce.jpg"},8983:function(e,t,n){e.exports=n.p+"img/slide_petrol.2321050a.jpg"},3849:function(e,t,n){e.exports=n.p+"img/slide_service.bef68e53.jpg"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,r){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],r=e[d][2];for(var l=!0,c=0;c<i.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(l=!1,r<o&&(o=r));if(l){e.splice(d--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/nfd_vue3/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,o=i[0],l=i[1],c=i[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var d=c(n)}for(t&&t(i);s<o.length;s++)r=o[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=self["webpackChunkneed_for_drive_vue3"]=self["webpackChunkneed_for_drive_vue3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4984)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.469bbc2b.js.map