(function(){"use strict";var e={14:function(e,t,a){var n=a(963),i=a(252);const l={class:"wrapper"};function o(e,t,a,n,o,s){const r=(0,i.up)("Vnavigation"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(r),(0,i.Wm)(c)])}var s=a(577);const r=e=>((0,i.dD)("data-v-73c33dcb"),e=e(),(0,i.Cn)(),e),c={class:"sidebar"},d={class:"navigation-wrp"},u=r((()=>(0,i._)("span",{class:"burger-button__line"},null,-1))),_=r((()=>(0,i._)("span",{class:"burger-button__line"},null,-1))),p=r((()=>(0,i._)("span",{class:"burger-button__line"},null,-1))),b=[u,_,p],m={class:"dropdown-nav"},v={class:"x-button"},g={class:"menu-wrp"},T={class:"menu"},C={class:"socialicons-list"},h={class:"langbutton-mobile"},f={class:"langbutton"};function w(e,t,a,l,o,r){const u=(0,i.up)("vicon"),_=(0,i.up)("router-link"),p=(0,i.up)("VLangButton");return(0,i.wg)(),(0,i.iD)("header",c,[(0,i._)("div",d,[(0,i._)("div",{class:"burger-button",onClick:t[0]||(t[0]=(...e)=>l.toggleNav&&l.toggleNav(...e))},b),(0,i.Wm)(n.uT,{name:"nav"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",m,[(0,i._)("div",v,[(0,i.Wm)(u,{"icon-id":"icon-x",width:"32",height:"32",onClick:l.toggleNav},null,8,["onClick"])]),(0,i._)("div",g,[(0,i._)("nav",null,[(0,i._)("ul",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.bmMenuList,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"menu__item",key:e.id},[(0,i.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.title),1)])),_:2},1032,["to"])])))),128))])]),(0,i._)("ul",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.socialMediaList,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"socialicons__item",key:e.id},[(0,i.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"icon_green","icon-id":e.iconId,width:e.width,height:e.height},null,8,["icon-id","width","height"])])),_:2},1032,["to"])])))),128))])]),(0,i._)("div",h,[(0,i.Wm)(p)])],512),[[n.F8,l.dropdownNav]])])),_:1})]),(0,i._)("div",f,[(0,i.Wm)(p)])])}var E=a(262);const y=["width","height"],S=["xlink:href"];function I(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("svg",{class:"icon",width:a.width,height:a.height},[(0,i._)("use",{"xlink:href":n.iconPath},null,8,S)],8,y)}var k=a(795),D={name:"v-icon",props:{iconId:{type:String,required:!0},width:{type:[Number,String],default:32},height:{type:[Number,String],default:32}},setup(e){const t=(0,i.Fl)((()=>`${k}#${e.iconId}`));return{iconPath:t}}},O=a(744);const L=(0,O.Z)(D,[["render",I]]);var F=L;function R(e,t,a,l,o,s){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.wy)((0,i.Wm)(r,{class:"link",to:{name:""}},{default:(0,i.w5)((()=>[(0,i._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:t[0]||(t[0]=(...e)=>l.toggleLangIcon&&l.toggleLangIcon(...e))}," Eng ")])),_:1},512),[[n.F8,l.langButton]]),(0,i.wy)((0,i.Wm)(r,{class:"link",to:{name:""}},{default:(0,i.w5)((()=>[(0,i._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:t[1]||(t[1]=(...e)=>l.toggleLangIcon&&l.toggleLangIcon(...e))}," Рус ")])),_:1},512),[[n.F8,!l.langButton]])],64)}var P={name:"v-lang-button",setup(){const e=(0,E.iH)(!0);function t(){e.value=!e.value}return{langButton:e,toggleLangIcon:t}}};const A=(0,O.Z)(P,[["render",R]]);var V=A,x={name:"v-navigation",components:{Vicon:F,VLangButton:V},setup(){const e=[{id:1,title:"Парковка",link:""},{id:2,title:"Страховка",link:""},{id:3,title:"Бензин",link:""},{id:4,title:"Обслуживание",link:""}],t=[{id:1,iconId:"icon-telegram",width:"32",height:"32",link:""}],a=(0,E.iH)(!0),n=(0,E.iH)(null);function i(){n.value=!n.value,a.value=!a.value}return{burgerButton:a,dropdownNav:n,bmMenuList:e,socialMediaList:t,toggleNav:i}}};const j=(0,O.Z)(x,[["render",w],["__scopeId","data-v-73c33dcb"]]);var N=j,W={components:{Vnavigation:N}};const Y=(0,O.Z)(W,[["render",o]]);var H=Y,M=a(119);const G={class:"main-wrp"},U={class:"left-wrp"},z={class:"about"},q=(0,i._)("h1",{class:"about__title"},"Каршеринг",-1),Z=(0,i._)("p",{class:"about__title about__title_green"},"Need for drive",-1),K=(0,i._)("p",{class:"about__text"},"Поминутная аренда авто твоего города",-1),$=(0,i._)("button",{class:"about__button"},"Забронировать",-1),B=(0,i._)("footer",{class:"footer"},[(0,i._)("p",{class:"footer__copyright"},"© 2016-2019 «Need for drive»"),(0,i._)("address",{class:"footer__phone"},[(0,i._)("a",{class:"footer__link",href:"tel:+74952342244"},"8 (495) 234-22-44")])],-1),X={class:"right-wrp"};function J(e,t,a,n,l,o){const s=(0,i.up)("Vheader"),r=(0,i.up)("router-link"),c=(0,i.up)("Vslider");return(0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("div",U,[(0,i.Wm)(s),(0,i._)("div",z,[q,Z,K,(0,i.Wm)(r,{to:{name:"v-order"}},{default:(0,i.w5)((()=>[$])),_:1})]),B]),(0,i._)("div",X,[(0,i.Wm)(c)])])}const Q={class:"header"},ee=(0,i._)("p",{class:"logo header__logo header__logo-order"},"Need for drive",-1),te={class:"header__map header__map-order"},ae=(0,i._)("span",null,"Ульяновск",-1);function ne(e,t,a,n,l,o){const s=(0,i.up)("vicon"),r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",Q,[ee,(0,i._)("p",te,[(0,i.Wm)(r,{class:"city header__city",to:{name:""}},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{class:"header__icon","icon-id":"icon-map",width:"20",height:"20"}),ae])),_:1})])])}var ie={name:"v-header",components:{Vicon:F}};const le=(0,O.Z)(ie,[["render",ne]]);var oe=le;const se=e=>((0,i.dD)("data-v-4389019c"),e=e(),(0,i.Cn)(),e),re={class:"slider-wrp"},ce={class:"slider-list"},de=["index"],ue={class:"slider-content"},_e={class:"slider-title"},pe={class:"slider-text"},be=se((()=>(0,i._)("span",{class:"sliderbtn__text"},"Подробнее",-1))),me=[be],ve={class:"pagination-list"},ge=["index"];function Te(e,t,a,l,o,r){const c=(0,i.up)("router-link"),d=(0,i.up)("vicon");return(0,i.wg)(),(0,i.iD)("div",re,[(0,i._)("ul",ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.sliderList,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:e.id,index:t},[(0,i.Wm)(n.uT,{name:l.slideDirection},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",{class:"slider__item",style:(0,s.j5)(e)},[(0,i._)("div",ue,[(0,i._)("p",_e,(0,s.zw)(e.title),1),(0,i._)("p",pe,(0,s.zw)(e.text),1),(0,i.Wm)(c,{to:{name:""}},{default:(0,i.w5)((()=>[(0,i._)("button",{class:(0,s.C_)(["sliderbtn",{sliderbtn_insurance:2===e.id,sliderbtn_petrol:3===e.id,sliderbtn_service:4===e.id}])},me,2)])),_:2},1024)])],4),[[n.F8,l.visibleSlide===t]])])),_:2},1032,["name"])],8,de)))),128)),(0,i._)("div",{class:"arrow-wrp arrow-wrp_prev",onClick:t[0]||(t[0]=(...e)=>l.changeSlidePrev&&l.changeSlidePrev(...e))},[(0,i.Wm)(d,{class:"arrow-slide arrow-slide_prev","icon-id":"icon-arrow-slider-prev",width:"10",height:"20"})]),(0,i._)("div",{class:"arrow-wrp arrow-wrp_next",onClick:t[1]||(t[1]=(...e)=>l.changeSlideNext&&l.changeSlideNext(...e))},[(0,i.Wm)(d,{class:"arrow-slide arrow-slide_next","icon-id":"icon-arrow-slider-next",width:"10",height:"20"})]),(0,i._)("ul",ve,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.sliderList,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["pagination__item",{pagination__item_active:l.visibleSlide===t}]),key:e.id,index:t},null,10,ge)))),128))])])])}var Ce={name:"v-slider",components:{Vicon:F},setup(){const e={backgroundRepeat:"no-repeat",backgroundSize:"cover"},t=[{...e,backgroundImage:`url(${a(828)})`,title:"Бесплатная парковка",text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",id:1},{...e,backgroundImage:`url(${a(715)})`,title:"Страховка",text:"Полная страховка страховка автомобиля",id:2},{...e,backgroundImage:`url(${a(983)})`,title:"Бензин",text:"Полный бак на любой заправке города за наш счёт",id:3},{...e,backgroundImage:`url(${a(849)})`,title:"Обслуживание",text:"Автомобиль проходит еженедельное ТО",id:4}],n=(0,E.iH)(0),i=(0,E.iH)("");function l(){n.value>0&&n.value--,i.value="right"}function o(){n.value<t.length-1&&n.value++,i.value="left"}return{sliderList:t,visibleSlide:n,slideDirection:i,changeSlidePrev:l,changeSlideNext:o}}};const he=(0,O.Z)(Ce,[["render",Te],["__scopeId","data-v-4389019c"]]);var fe=he,we={name:"v-main",components:{Vheader:oe,Vslider:fe}};const Ee=(0,O.Z)(we,[["render",J]]);var ye=Ee;const Se={class:"order-wrp"};function Ie(e,t,a,n,l,o){const s=(0,i.up)("Vheader"),r=(0,i.up)("OrderWindow");return(0,i.wg)(),(0,i.iD)("div",Se,[(0,i.Wm)(s,{class:"order-center"}),(0,i.Wm)(r)])}const ke={class:"tabs"},De={class:"order"},Oe={class:"order__window"};function Le(e,t,a,n,l,o){const s=(0,i.up)("VTabs"),r=(0,i.up)("VTotal");return(0,i.wg)(),(0,i.iD)("div",ke,[(0,i.Wm)(s,{tabs:n.filledUpData,selectedIndexTabs:n.selectedIndexTabs,selectedTab:n.selectedTab,onSwitchTab:n.updateSelectedTab},null,8,["tabs","selectedIndexTabs","selectedTab","onSwitchTab"]),(0,i._)("div",De,[(0,i._)("div",Oe,[((0,i.wg)(),(0,i.j4)((0,i.LL)(n.selectedTab),{idTab:n.selectedTab,onOnTabReset:n.resetTabs},null,8,["idTab","onOnTabReset"]))]),(0,i.Wm)(r,{tabs:n.tabs,selectedId:n.selectedIndexTabs,selectedTab:n.selectedTab,onUpdateSelectedTab:n.updateSelectedTab},null,8,["tabs","selectedId","selectedTab","onUpdateSelectedTab"])])])}var Fe=a(907);const Re={class:"tabs__border"},Pe={class:"tab-list order-center"},Ae={class:"tab__item"},Ve=["disabled","onClick"],xe={class:"tab__item-icon"};function je(e,t,a,n,l,o){const r=(0,i.up)("Vicon");return(0,i.wg)(),(0,i.iD)("div",Re,[(0,i._)("ul",Pe,[(0,i._)("li",Ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tabs,(e=>((0,i.wg)(),(0,i.iD)("button",{class:(0,s.C_)(["tab__item-btn",{tab__item_active:a.selectedTab===e.id,tab__item_filled:a.selectedTab!==e.id&&!e.isDisabled}]),key:e.id,disabled:e.isDisabled,onClick:t=>n.switchTab(e.id)},[(0,i.Uk)((0,s.zw)(e.label)+" ",1),(0,i._)("span",xe,[(0,i.Wm)(r,{"icon-id":"icon-arrow",width:"6",height:"8"})])],10,Ve)))),128))])])])}var Ne={name:"v-tabs",components:{Vicon:F},props:{tabs:{type:Array,required:!1},selectedTab:{type:String,required:!1}},setup(e,t){function a(e){t.emit("switchTab",e)}return{switchTab:a}}};const We=(0,O.Z)(Ne,[["render",je]]);var Ye=We;const He={class:"input-block"},Me=(0,i._)("p",{class:"place__text"},"Выбрать на карте",-1),Ge={class:"map-wrp"};function Ue(e,t,a,n,l,o){const s=(0,i.up)("VDropdown"),r=(0,i.up)("MapComponent");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",He,[(0,i.Wm)(s,{label:"Город",name:"city",placeholder:"Начните вводить город ...",itemList:n.cityList,selectedItem:n.selectedCity,onOnItemSelected:n.setSelectedCity,onOnItemReset:n.resetSelectedCity},null,8,["itemList","selectedItem","onOnItemSelected","onOnItemReset"]),(0,i.Wm)(s,{label:"Пункт выдачи",name:"point",placeholder:"Начните вводить пункт ...",itemList:n.FILTERED_POINTLIST,selectedItem:n.selectedPoint,onOnItemSelected:n.setSelectedPoint,onOnItemReset:n.resetSelectedPoint},null,8,["itemList","selectedItem","onOnItemSelected","onOnItemReset"])]),Me,(0,i._)("div",Ge,[((0,i.wg)(),(0,i.j4)(r,{key:n.componentKey,chosenCityObj:n.chosenCityObj},null,8,["chosenCityObj"]))])])}const ze={class:"dropdown input-wrp"},qe=["for"],Ze=["name","placeholder"],Ke={class:"dropdown-list"},$e=["onClick"];function Be(e,t,a,l,o,r){const c=(0,i.up)("vicon");return(0,i.wg)(),(0,i.iD)("div",ze,[(0,i._)("label",{class:"input-block__label",for:a.name},(0,s.zw)(a.label),9,qe),(0,i.wy)((0,i._)("input",{class:"dropdown-input input-block__input","onUpdate:modelValue":t[0]||(t[0]=e=>l.inputValue=e),name:a.name,placeholder:a.placeholder,type:"text",onFocus:t[1]||(t[1]=e=>l.isDropDownVisible=!0)},null,40,Ze),[[n.nr,l.inputValue,void 0,{trim:!0}]]),l.inputValue?((0,i.wg)(),(0,i.iD)("span",{key:0,class:"input-block__cross-icon",onClick:t[2]||(t[2]=(...e)=>l.resetSelection&&l.resetSelection(...e))},[(0,i.Wm)(c,{"icon-id":"icon-cross",width:"8",height:"8"})])):(0,i.kq)("",!0),(0,i.wy)((0,i._)("ul",Ke,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.filteredList,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"dropdown-item",key:e.id,onClick:t=>l.selectItem(e)},(0,s.zw)(e.name),9,$e)))),128))],512),[[n.F8,l.isDropDownVisible]])])}var Xe={name:"v-dropdown",components:{Vicon:F},props:{itemList:{type:Array,required:!0},selectedItem:{type:Object,required:!0},placeholder:{type:String,required:!0},label:{type:String,required:!0},name:{type:String,required:!0}},setup(e,t){(0,i.bv)((()=>{0!==Object.keys(e.selectedItem).length?a.value=e.selectedItem.name:a.value=""})),(0,i.YP)((0,E.Vh)(e,"selectedItem"),(()=>{0===Object.keys(e.selectedItem).length&&(a.value="")}),{deep:!0});const a=(0,E.iH)(""),n=(0,E.iH)(null),l=(0,i.Fl)((()=>{let t=a.value.toLowerCase();return t?e.itemList.filter((e=>{if(e?.name){let a=e.name.toLowerCase();return a.startsWith(t)}})):e.itemList}));function o(e){a.value=e?e.name:"",n.value=!1,t.emit("on-item-selected",e)}function s(){a.value="",t.emit("on-item-reset")}return{inputValue:a,isDropDownVisible:n,filteredList:l,selectItem:o,resetSelection:s}}};const Je=(0,O.Z)(Xe,[["render",Be]]);var Qe=Je;const et={ref:"mapRef",style:{width:"100%",height:"100%"}};function tt(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("div",et,null,512)}var at={name:"map-component",props:{chosenCityObj:{type:Object}},setup(e){const t=(0,Fe.oR)(),n=window.ymaps,l=(0,E.iH)(null),o=(0,i.Fl)((()=>t.state.selectedCity)),s=(0,i.Fl)((()=>t.state.selectedPoint));function r(t){let i=[],l=null;if(0!==Object.keys(s.value).length){const t=e.chosenCityObj.points.find((e=>e.id===s.value.id));i=t.coordsPoint,l=15}else 0!==Object.keys(o.value).length?(i=e.chosenCityObj.coords,l=12):(i=[67.010134,94.337659],l=3);const r=new n.Map(t,{center:i,zoom:l,controls:[]});if(e.chosenCityObj?.points)for(let o=0;o<e.chosenCityObj.points.length;o++){const t=new n.Placemark(e.chosenCityObj.points[o].coordsPoint,{hintContent:e.chosenCityObj.points[o].name,balloonContent:e.chosenCityObj.points[o].name},{iconLayout:"default#image",iconImageHref:`${a(273)}`,iconImageSize:[18,18]});r.geoObjects.add(t)}}return(0,i.bv)((()=>{n.ready((()=>r(l.value)))})),{ymaps:n,mapRef:l,selectedCity:o,selectedPoint:s}}};const nt=(0,O.Z)(at,[["render",tt]]);var it=nt,lt={name:"order-place",components:{VDropdown:Qe,MapComponent:it},props:["idTab"],setup(e,t){const a=(0,Fe.oR)(),n=[{id:"6011452fad015e0bb6997e1d",name:"Уфа",coords:[54.735152,55.958736]},{id:"60d6e4d32aed9a0b9b84fa82",name:"Краснодар",coords:[45.03547,38.975313]},{id:"6005b8f9ad015e0bb6997778",name:"Санкт-Петербург",coords:[59.939099,30.315877]},{id:"61a3675e05c99b2812794ed7",name:"Ростов-на-Дону",coords:[47.222078,39.720358]},{id:"61ab1310bb7a006c05c5497f",name:"Екатеринбург",coords:[56.838011,60.597474]},{id:"61b30fe9bb7a006c05c54e2b",name:"Ульяновск",coords:[54.314192,48.403132]},{id:"6238c42573b61100181018e1",name:"Омск",coords:[54.989347,73.368221]},{id:"615a1d1218f5c2264119b91a",name:"Саранск",coords:[54.187433,45.183938]},{id:"61585c3818f5c2264119b859",name:"Сочи",coords:[43.585472,39.723098]},{id:"6114e2a22aed9a0b9b85083e",name:"Воронеж",coords:[51.660786,39.200269]},{id:"5ea07c3b099b810b946c627b",name:"Саратов",coords:[51.533562,46.034266]}],l=[{id:"60bb074b2aed9a0b9b82fc71",name:"Арт-Квадрат",coords:[54.73995,55.95737]},{id:"6114630f2aed9a0b9b850806",name:"Автомобильная парковка",coords:[45.046319,39.030356]},{id:"615ae47018f5c2264119b939",name:"Пункт",coords:[59.935119,30.349339]},{id:"61a391e605c99b2812794f1c",name:"Администрация",coords:[47.221705,39.712156]},{id:"61adef6bbb7a006c05c54a8a",name:"Магнит",coords:[56.901277,60.585967]},{id:"61b310cfbb7a006c05c54e2c",name:"Мариинская гимназия",coords:[54.31228,48.395406]}],o=(0,E.iH)(0),s=(0,i.Fl)((()=>a.getters.FILTERED_POINTLIST)),r=(0,i.Fl)((()=>a.state.cityList)),c=(0,i.Fl)((()=>a.state.selectedCity)),d=(0,i.Fl)((()=>a.state.selectedPoint)),u=(0,i.Fl)((()=>{let e={};for(var t=0;t<n.length;t++)c.value.id===n[t].id&&(e={...c.value,coords:n[t].coords,points:_.value});return e})),_=(0,i.Fl)((()=>s.value.map((e=>{const t=l.find((t=>t.id===e.id));return t?{...e,coordsPoint:t.coords}:e}))));function p(){a.dispatch("GET_CITYLIST_FROM_API")}function b(){a.dispatch("GET_POINTLIST_FROM_API")}function m(e){a.dispatch("GET_SELECTEDCITY",e)}function v(){a.dispatch("GET_SELECTEDCITY"),a.dispatch("GET_SELECTEDPOINT"),t.emit("on-tab-reset",e.idTab)}function g(e){a.dispatch("GET_SELECTEDPOINT",e)}function T(){a.dispatch("GET_SELECTEDPOINT"),t.emit("on-tab-reset",e.idTab)}function C(){o.value+=1}return p(),b(),(0,i.YP)([c,d],(()=>{C()})),{cityListCoords:n,pointListCoords:l,componentKey:o,cityList:r,selectedCity:c,selectedPoint:d,FILTERED_POINTLIST:s,chosenCityObj:u,newPointListWithCoordsArr:_,setSelectedCity:m,resetSelectedCity:v,setSelectedPoint:g,resetSelectedPoint:T,GET_CITYLIST_FROM_API:p,GET_POINTLIST_FROM_API:b,forceRerenderMap:C}}};const ot=(0,O.Z)(lt,[["render",Ue]]);var st=ot;const rt={class:"radio-list"},ct={class:"cars-list"},dt=["onClick"],ut={class:"cars__model"},_t={class:"cars__price"},pt=["src","alt"];function bt(e,t,a,n,l,o){const r=(0,i.up)("VRadio");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",rt,[(0,i.Wm)(r,{label:"Все модели",modelValue:n.categoryCars,"onUpdate:modelValue":t[0]||(t[0]=e=>n.categoryCars=e),onChange:n.resetSelectedCategoryCar},null,8,["modelValue","onChange"]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.categories,(e=>((0,i.wg)(),(0,i.j4)(r,{key:e.id,label:e.name,value:e.id,modelValue:n.categoryCars,"onUpdate:modelValue":t[1]||(t[1]=e=>n.categoryCars=e)},null,8,["label","value","modelValue"])))),128))]),(0,i._)("ul",ct,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.filteredCars,(e=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["cars__item",{cars__item_active:n.selectedCar.id===e.id}]),key:e.id,onClick:t=>n.setSelectedCar(e)},[(0,i._)("p",ut,(0,s.zw)(e.name),1),(0,i._)("p",_t,(0,s.zw)(e.priceMin)+" - "+(0,s.zw)(e.priceMax)+" руб.",1),(0,i._)("img",{loading:"lazy",class:"cars__img",src:e.thumbnail.path,alt:e.thumbnail.originalname},null,8,pt)],10,dt)))),128))])])}const mt={class:"radio-item"},vt=["checked","value"],gt=(0,i._)("span",{class:"checkmark"},null,-1);function Tt(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("label",mt,[(0,i.Uk)((0,s.zw)(a.label)+" ",1),(0,i._)("input",{class:"radio__input",type:"radio",checked:n.isChecked,value:a.value,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,vt),gt])}var Ct={name:"v-radio",props:{label:{type:String,default:"",required:!0},modelValue:{type:String,default:""},value:{type:String,default:""}},setup(e){const t=(0,i.Fl)((()=>e.modelValue===e.value));return{isChecked:t}}};const ht=(0,O.Z)(Ct,[["render",Tt]]);var ft=ht,wt={name:"order-model",components:{VRadio:ft},setup(e,t){const a=(0,Fe.oR)(),n=[{id:"600598a3ad015e0bb699774c",name:"Эконом"},{id:"60b943492aed9a0b9b7ed335",name:"Премиум"},{id:"5fd91add935d4e0be16a3c4b",name:"Спорт"}],l=(0,i.Fl)((()=>a.state.carList)),o=(0,i.Fl)((()=>a.state.checkedCategoryCars)),s=(0,i.Fl)((()=>a.state.selectedCar)),r=(0,i.Fl)((()=>o.value?l.value.filter((e=>{if(e?.categoryId?.id)return e.categoryId.id.includes(o.value)})):l.value)),c=(0,i.Fl)({get:()=>o.value,set:e=>{a.dispatch("GET_CHECKEDCATEGORY",e)}});function d(){a.dispatch("GET_CARLIST_FROM_API")}function u(e){a.dispatch("GET_SELECTEDCAR",e)}function _(){a.dispatch("GET_CHECKEDCATEGORY"),a.dispatch("GET_SELECTEDCAR"),t.emit("on-tab-reset","order-model")}return d(),{categories:n,carList:l,checkedCategoryCars:o,selectedCar:s,filteredCars:r,categoryCars:c,setSelectedCar:u,resetSelectedCategoryCar:_}}};const Et=(0,O.Z)(wt,[["render",bt]]);var yt=Et;function St(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("div",null,"Вкладка Дополнительно")}var It={};const kt=(0,O.Z)(It,[["render",St]]);var Dt=kt;function Ot(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("div",null,"Вкладка Итого")}var Lt={};const Ft=(0,O.Z)(Lt,[["render",Ot]]);var Rt=Ft;const Pt={class:"total"},At=(0,i._)("p",{class:"total__title"},"Ваш заказ:",-1),Vt={class:"total-list"},xt={class:"total__item"},jt=(0,i._)("span",{class:"total__item-title"},"Пункт выдачи",-1),Nt={class:"total__item-value"},Wt={key:0,class:"total__item"},Yt=(0,i._)("span",{class:"total__item-title"},"Модель",-1),Ht={class:"total__item-value"},Mt={key:1,class:"total__item"},Gt=(0,i._)("span",{class:"total__item-title"},"Цвет",-1),Ut={class:"total__item-value"},zt={key:0,class:"total__price"},qt=(0,i.Uk)(" Цена: "),Zt={class:"total__price total__price-thin"},Kt=["disabled"],$t=["disabled"],Bt=["disabled"];function Xt(e,t,a,n,l,o){return(0,i.wg)(),(0,i.iD)("div",Pt,[At,(0,i._)("ul",Vt,[(0,i._)("li",xt,[jt,(0,i._)("div",Nt,[(0,i._)("span",null,(0,s.zw)(n.selectedCity.name),1),(0,i._)("span",null,(0,s.zw)(n.selectedPoint.name),1)])]),n.selectedCar.name?((0,i.wg)(),(0,i.iD)("li",Wt,[Yt,(0,i._)("span",Ht,(0,s.zw)(n.selectedCar.name),1)])):(0,i.kq)("",!0),n.selectedColor?((0,i.wg)(),(0,i.iD)("li",Mt,[Gt,(0,i._)("span",Ut,(0,s.zw)(n.selectedColor),1)])):(0,i.kq)("",!0)]),n.selectedCar.name?((0,i.wg)(),(0,i.iD)("p",zt,[qt,(0,i._)("span",Zt,"от "+(0,s.zw)(n.selectedCar.priceMin)+" до "+(0,s.zw)(n.selectedCar.priceMax)+" ₽",1)])):(0,i.kq)("",!0),"order-place"===a.selectedTab?((0,i.wg)(),(0,i.iD)("button",{key:1,class:(0,s.C_)(["total__button",{total__button_active:n.orderPlaceFilledUp}]),disabled:!n.orderPlaceFilledUp,onClick:t[0]||(t[0]=(...e)=>n.changeSelectedTabModel&&n.changeSelectedTabModel(...e))}," Выбрать модель ",10,Kt)):(0,i.kq)("",!0),"order-model"===a.selectedTab?((0,i.wg)(),(0,i.iD)("button",{key:2,class:(0,s.C_)(["total__button",{total__button_active:n.orderModelFilledUp}]),disabled:!n.orderModelFilledUp,onClick:t[1]||(t[1]=(...e)=>n.changeSelectedTabAdditional&&n.changeSelectedTabAdditional(...e))}," Дополнительно ",10,$t)):(0,i.kq)("",!0),"order-additional"===a.selectedTab?((0,i.wg)(),(0,i.iD)("button",{key:3,class:(0,s.C_)(["total__button",{total__button_active:n.orderAdditionalFilledUp}]),disabled:!n.orderAdditionalFilledUp,onClick:t[2]||(t[2]=(...e)=>n.changeSelectedTabSummary&&n.changeSelectedTabSummary(...e))}," Итого ",10,Bt)):(0,i.kq)("",!0)])}var Jt={name:"v-total",props:{tabs:{type:Array,required:!1},selectedId:{type:Number,required:!1},selectedTab:{type:String,required:!1}},setup(e,t){const a=(0,Fe.oR)(),n=(0,i.Fl)((()=>a.state.selectedCity)),l=(0,i.Fl)((()=>a.state.selectedPoint)),o=(0,i.Fl)((()=>a.state.selectedCar)),s=(0,i.Fl)((()=>a.state.selectedColor)),r=(0,i.Fl)((()=>a.state.dateFrom)),c=(0,i.Fl)((()=>a.state.dateTo)),d=(0,i.Fl)((()=>a.state.selectedRate)),u=(0,i.Fl)((()=>!(!Object.keys(n.value).length||0===Object.keys(l.value).length))),_=(0,i.Fl)((()=>0!==Object.keys(o.value).length)),p=(0,i.Fl)((()=>!!(r.value&&c.value&&d.value)));function b(){const a=e.tabs[e.selectedId+1].id;t.emit("updateSelectedTab",a)}function m(){const a=e.tabs[e.selectedId+2].id;t.emit("updateSelectedTab",a)}function v(){const a=e.tabs[e.selectedId+3].id;t.emit("updateSelectedTab",a)}return{selectedCity:n,selectedPoint:l,selectedCar:o,selectedColor:s,dateFrom:r,dateTo:c,selectedRate:d,orderPlaceFilledUp:u,orderModelFilledUp:_,orderAdditionalFilledUp:p,changeSelectedTabModel:b,changeSelectedTabAdditional:m,changeSelectedTabSummary:v}}};const Qt=(0,O.Z)(Jt,[["render",Xt]]);var ea=Qt,ta={name:"order-window",components:{VTabs:Ye,OrderPlace:st,OrderModel:yt,OrderAdditional:Dt,OrderSummary:Rt,VTotal:ea},setup(){const e=(0,Fe.oR)(),t=(0,E.iH)([{label:"Местоположение",id:"order-place",isDisabled:!0},{label:"Модель",id:"order-model",isDisabled:!0},{label:"Дополнительно",id:"order-additional",isDisabled:!0},{label:"Итого",id:"order-summary",isDisabled:!0}]),a=(0,E.iH)(0),n=(0,E.iH)("order-place"),l=(0,i.Fl)((()=>e.state.selectedCity)),o=(0,i.Fl)((()=>e.state.selectedPoint)),s=(0,i.Fl)((()=>e.state.selectedCar)),r=(0,i.Fl)((()=>e.state.selectedColor)),c=(0,i.Fl)((()=>e.state.dateFrom)),d=(0,i.Fl)((()=>e.state.dateTo)),u=(0,i.Fl)((()=>e.state.selectedRate)),_=(0,i.Fl)((()=>{const e=t.value.slice();return Object.keys(l.value).length&&0!==Object.keys(o.value).length&&"order-place"===n.value?(e[a.value].isDisabled=!1,e[a.value+1].isDisabled=!1,e):0!==Object.keys(s.value).length&&"order-model"===n.value?(e[a.value+2].isDisabled=!1,e):r.value&&c.value&&d.value&&u.value&&"order-additional"===n.value?(e[a.value+3].isDisabled=!1,e):e}));function p(e){n.value=e}function b(e){if("order-place"===e)for(var a=0;a<t.value.length;a++)t.value[a].isDisabled=!0;if("order-model"===e)for(var n=1;n<t.value.length;n++)t.value[n].isDisabled=!0;if("order-additional"===e)for(var i=2;i<t.value.length;i++)t.value[i].isDisabled=!0}return{tabs:t,selectedIndexTabs:a,selectedTab:n,filledUpData:_,selectedCity:l,selectedPoint:o,selectedCar:s,selectedColor:r,dateFrom:c,dateTo:d,selectedRate:u,updateSelectedTab:p,resetTabs:b}}};const aa=(0,O.Z)(ta,[["render",Le]]);var na=aa,ia={name:"v-order",components:{Vheader:oe,OrderWindow:na}};const la=(0,O.Z)(ia,[["render",Ie]]);var oa=la;const sa=[{path:"/",name:"v-main",component:ye},{path:"/order",name:"v-order",component:oa}],ra=(0,M.p7)({history:(0,M.PO)("/nfd_vue3/"),routes:sa});var ca=ra,da=a(669),ua=a.n(da);const _a=ua().create({baseURL:"https://api-factory.simbirsoft1.com/api"});_a.defaults.headers.common["X-Api-Factory-Application-Id"]="5e25c641099b810b946c5d5b";var pa=_a;const ba={CITY:"/db/city",POINT:"/db/point",CAR:"/db/car"};var ma={getCities(){return pa.get(ba.CITY)},getPoints(){return pa.get(ba.POINT)},getCars(){return pa.get(ba.CAR)}},va=(0,Fe.MT)({state:{cityList:[],pointList:[],carList:[],selectedCity:{},selectedPoint:{},checkedCategoryCars:"",selectedCar:{},selectedColor:"",dateFrom:0,dateTo:0,selectedRate:""},mutations:{SET_CITYLIST_TO_STATE:(e,t)=>{e.cityList=t.data.data},SET_POINTLIST_TO_STATE:(e,t)=>{e.pointList=t.data.data},SET_CARLIST_TO_STATE:(e,t)=>{e.carList=t.data.data},SET_SELECTEDCITY(e,t){e.selectedCity=t},RESET_SELECTEDCITY(e){e.selectedCity={}},SET_SELECTEDPOINT(e,t){e.selectedPoint=t},RESET_SELECTEDPOINT(e){e.selectedPoint={}},SET_CHECKEDCATEGORYCAR(e,t){e.checkedCategoryCars=t},RESET_CHECKEDCATEGORYCAR(e){e.checkedCategoryCars=""},SET_SELECTEDCAR(e,t){e.selectedCar=t},RESET_SELECTEDCAR(e){e.selectedCar={}}},actions:{GET_CITYLIST_FROM_API({commit:e}){ma.getCities().then((t=>(e("SET_CITYLIST_TO_STATE",t),t))).catch((e=>(console.log(e),e)))},GET_POINTLIST_FROM_API({commit:e}){ma.getPoints().then((t=>(e("SET_POINTLIST_TO_STATE",t),t))).catch((e=>(console.log(e),e)))},GET_CARLIST_FROM_API({commit:e}){ma.getCars().then((t=>(e("SET_CARLIST_TO_STATE",t),t))).catch((e=>(console.log(e),e)))},GET_SELECTEDCITY({commit:e},t){t?e("SET_SELECTEDCITY",t):e("RESET_SELECTEDCITY")},GET_SELECTEDPOINT({commit:e},t){t?e("SET_SELECTEDPOINT",t):e("RESET_SELECTEDPOINT")},GET_CHECKEDCATEGORY({commit:e},t){t?e("SET_CHECKEDCATEGORYCAR",t):e("RESET_CHECKEDCATEGORYCAR")},GET_SELECTEDCAR({commit:e},t){t?e("SET_SELECTEDCAR",t):e("RESET_SELECTEDCAR")}},getters:{FILTERED_POINTLIST(e){if(e.selectedCity?.id)return e.pointList.filter((t=>{if(t?.cityId?.id)return t.cityId.id.includes(e.selectedCity.id)}));{const e=[];return e}}}});(0,n.ri)(H).use(va).use(ca).mount("#app")},273:function(e,t,a){e.exports=a.p+"img/map-marker.2d9af2fe.svg"},795:function(e,t,a){e.exports=a.p+"img/sprite.344b0cfb.svg"},715:function(e,t,a){e.exports=a.p+"img/slide_insurance.0560f4c6.jpg"},828:function(e,t,a){e.exports=a.p+"img/slide_parking.264e8bce.jpg"},983:function(e,t,a){e.exports=a.p+"img/slide_petrol.2321050a.jpg"},849:function(e,t,a){e.exports=a.p+"img/slide_service.bef68e53.jpg"}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,l){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],l=e[d][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,i,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/nfd_vue3/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,o=n[0],s=n[1],r=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var d=r(a)}for(t&&t(n);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},n=self["webpackChunkneed_for_drive_vue3"]=self["webpackChunkneed_for_drive_vue3"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(14)}));n=a.O(n)})();
//# sourceMappingURL=app.e0901292.js.map