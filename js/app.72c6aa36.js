(function(){"use strict";var e={940:function(e,n,t){var i=t(963),o=t(252);const r={class:"wrapper"};function l(e,n,t,i,l,a){const s=(0,o.up)("Vnavigation"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(s),(0,o.Wm)(c)])}var a=t(577);const s=e=>((0,o.dD)("data-v-6aa0ba1f"),e=e(),(0,o.Cn)(),e),c={class:"sidebar"},u={class:"navigation-wrp"},d=s((()=>(0,o._)("span",{class:"burger-button__line"},null,-1))),_=s((()=>(0,o._)("span",{class:"burger-button__line"},null,-1))),g=s((()=>(0,o._)("span",{class:"burger-button__line"},null,-1))),v=[d,_,g],p={class:"dropdown-nav"},f={class:"x-button"},h={class:"menu-wrp"},m={class:"menu"},w={class:"socialicons-list"},b={class:"langbutton-mobile"},k={class:"langbutton"};function x(e,n,t,r,l,s){const d=(0,o.up)("vicon"),_=(0,o.up)("router-link"),g=(0,o.up)("VLangButton");return(0,o.wg)(),(0,o.iD)("header",c,[(0,o._)("div",u,[(0,o._)("div",{class:"burger-button",onClick:n[0]||(n[0]=(...e)=>r.toggleNav&&r.toggleNav(...e))},v),(0,o.Wm)(i.uT,{name:"nav"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",p,[(0,o._)("div",f,[(0,o.Wm)(d,{onClick:r.toggleNav,"icon-id":"icon-x",width:"32",height:"32"},null,8,["onClick"])]),(0,o._)("div",h,[(0,o._)("nav",null,[(0,o._)("ul",m,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.bmMenuList,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"menu__item",key:e.id},[(0,o.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:2},1032,["to"])])))),128))])]),(0,o._)("ul",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.socialMediaList,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"socialicons__item",key:e.id},[(0,o.Wm)(_,{class:"link",to:{name:e.link}},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"icon_green","icon-id":e.iconId,width:e.width,height:e.height},null,8,["icon-id","width","height"])])),_:2},1032,["to"])])))),128))])]),(0,o._)("div",b,[(0,o.Wm)(g)])],512),[[i.F8,r.dropdownNav]])])),_:1})]),(0,o._)("div",k,[(0,o.Wm)(g)])])}var y=t(262);const W=["width","height"],D=["xlink:href"];function I(e,n,t,i,r,l){return(0,o.wg)(),(0,o.iD)("svg",{class:"icon",width:t.width,height:t.height},[(0,o._)("use",{"xlink:href":i.iconPath},null,8,D)],8,W)}var L=t(795),N={name:"v-icon",props:{iconId:{type:String,required:!0},width:{type:[Number,String],default:32},height:{type:[Number,String],default:32}},setup(e){const n=(0,o.Fl)((()=>`${L}#${e.iconId}`));return{iconPath:n}}},C=t(744);const S=(0,C.Z)(N,[["render",I]]);var O=S;function j(e,n,t,r,l,a){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o.Wm)(s,{class:"link",to:{name:""}},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:n[0]||(n[0]=(...e)=>r.toggleLangIcon&&r.toggleLangIcon(...e))}," Eng ")])),_:1},512),[[i.F8,r.langButton]]),(0,o.wy)((0,o.Wm)(s,{class:"link",to:{name:""}},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"link__langbutton link__langbutton_mobile",onClick:n[1]||(n[1]=(...e)=>r.toggleLangIcon&&r.toggleLangIcon(...e))}," Рус ")])),_:1},512),[[i.F8,!r.langButton]])],64)}var V={name:"v-lang-button",setup(){const e=(0,y.iH)(!0);function n(){e.value=!e.value}return{langButton:e,toggleLangIcon:n}}};const H=(0,C.Z)(V,[["render",j]]);var P=H,Z={name:"v-navigation",components:{Vicon:O,VLangButton:P},setup(){const e=[{id:1,title:"Парковка",link:""},{id:2,title:"Страховка",link:""},{id:3,title:"Бензин",link:""},{id:4,title:"Обслуживание",link:""}],n=[{id:1,iconId:"icon-telegram",width:"32",height:"32",link:""}],t=(0,y.iH)(!0),i=(0,y.iH)(null);function o(){i.value=!i.value,t.value=!t.value}return{burgerButton:t,dropdownNav:i,bmMenuList:e,socialMediaList:n,toggleNav:o}}};const B=(0,C.Z)(Z,[["render",x],["__scopeId","data-v-6aa0ba1f"]]);var F=B,$={components:{Vnavigation:F}};const M=(0,C.Z)($,[["render",l]]);var T=M,Y=t(119);const z={class:"main-wrp"},K={class:"left-wrp"},E={class:"about"},q=(0,o._)("h1",{class:"about__title"},"Каршеринг",-1),R=(0,o._)("p",{class:"about__title about__title_green"},"Need for drive",-1),U=(0,o._)("p",{class:"about__text"},"Поминутная аренда авто твоего города",-1),A=(0,o._)("button",{class:"about__button"},"Забронировать",-1),G=(0,o._)("footer",{class:"footer"},[(0,o._)("p",{class:"footer__copyright"},"© 2016-2019 «Need for drive»"),(0,o._)("address",{class:"footer__phone"},[(0,o._)("a",{class:"footer__link",href:"tel:+74952342244"},"8 (495) 234-22-44")])],-1),J={class:"right-wrp"};function Q(e,n,t,i,r,l){const a=(0,o.up)("Vheader"),s=(0,o.up)("router-link"),c=(0,o.up)("Vslider");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",K,[(0,o.Wm)(a),(0,o._)("div",E,[q,R,U,(0,o.Wm)(s,{to:{name:""}},{default:(0,o.w5)((()=>[A])),_:1})]),G]),(0,o._)("div",J,[(0,o.Wm)(c)])])}const X={class:"header"},ee=(0,o._)("p",{class:"logo header__logo header__logo-order"},"Need for drive",-1),ne={class:"header__map header__map-order"},te=(0,o._)("span",null,"Ульяновск",-1);function ie(e,n,t,i,r,l){const a=(0,o.up)("vicon"),s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",X,[ee,(0,o._)("p",ne,[(0,o.Wm)(s,{class:"city header__city",to:{name:""}},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{class:"header__icon","icon-id":"icon-map",width:"20",height:"20"}),te])),_:1})])])}var oe={name:"v-header",components:{Vicon:O}};const re=(0,C.Z)(oe,[["render",ie]]);var le=re;const ae=e=>((0,o.dD)("data-v-4389019c"),e=e(),(0,o.Cn)(),e),se={class:"slider-wrp"},ce={class:"slider-list"},ue=["index"],de={class:"slider-content"},_e={class:"slider-title"},ge={class:"slider-text"},ve=ae((()=>(0,o._)("span",{class:"sliderbtn__text"},"Подробнее",-1))),pe=[ve],fe={class:"pagination-list"},he=["index"];function me(e,n,t,r,l,s){const c=(0,o.up)("router-link"),u=(0,o.up)("vicon");return(0,o.wg)(),(0,o.iD)("div",se,[(0,o._)("ul",ce,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.sliderList,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,index:n},[(0,o.Wm)(i.uT,{name:r.slideDirection},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",{class:"slider__item",style:(0,a.j5)(e)},[(0,o._)("div",de,[(0,o._)("p",_e,(0,a.zw)(e.title),1),(0,o._)("p",ge,(0,a.zw)(e.text),1),(0,o.Wm)(c,{to:{name:""}},{default:(0,o.w5)((()=>[(0,o._)("button",{class:(0,a.C_)(["sliderbtn",{sliderbtn_insurance:2===e.id,sliderbtn_petrol:3===e.id,sliderbtn_service:4===e.id}])},pe,2)])),_:2},1024)])],4),[[i.F8,r.visibleSlide===n]])])),_:2},1032,["name"])],8,ue)))),128)),(0,o._)("div",{class:"arrow-wrp arrow-wrp_prev",onClick:n[0]||(n[0]=(...e)=>r.changeSlidePrev&&r.changeSlidePrev(...e))},[(0,o.Wm)(u,{class:"arrow-slide arrow-slide_prev","icon-id":"icon-arrow-slider-prev",width:"10",height:"20"})]),(0,o._)("div",{class:"arrow-wrp arrow-wrp_next",onClick:n[1]||(n[1]=(...e)=>r.changeSlideNext&&r.changeSlideNext(...e))},[(0,o.Wm)(u,{class:"arrow-slide arrow-slide_next","icon-id":"icon-arrow-slider-next",width:"10",height:"20"})]),(0,o._)("ul",fe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.sliderList,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,a.C_)(["pagination__item",{pagination__item_active:r.visibleSlide===n}]),key:e.id,index:n},null,10,he)))),128))])])])}var we={name:"v-slider",components:{Vicon:O},setup(){const e={backgroundRepeat:"no-repeat",backgroundSize:"cover"},n=[{...e,backgroundImage:`url(${t(828)})`,title:"Бесплатная парковка",text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",id:1},{...e,backgroundImage:`url(${t(715)})`,title:"Страховка",text:"Полная страховка страховка автомобиля",id:2},{...e,backgroundImage:`url(${t(983)})`,title:"Бензин",text:"Полный бак на любой заправке города за наш счёт",id:3},{...e,backgroundImage:`url(${t(849)})`,title:"Обслуживание",text:"Автомобиль проходит еженедельное ТО",id:4}],i=(0,y.iH)(0),o=(0,y.iH)("");function r(){i.value>0&&i.value--,o.value="right"}function l(){i.value<n.length-1&&i.value++,o.value="left"}return{sliderList:n,visibleSlide:i,slideDirection:o,changeSlidePrev:r,changeSlideNext:l}}};const be=(0,C.Z)(we,[["render",me],["__scopeId","data-v-4389019c"]]);var ke=be,xe={name:"v-main",components:{Vheader:le,Vslider:ke}};const ye=(0,C.Z)(xe,[["render",Q]]);var We=ye;const De=[{path:"/",name:"v-main",component:We}],Ie=(0,Y.p7)({history:(0,Y.PO)("/nfd_vue3/"),routes:De});var Le=Ie,Ne=t(907),Ce=(0,Ne.MT)({state:{},mutations:{},actions:{},modules:{}});(0,i.ri)(T).use(Ce).use(Le).mount("#app")},795:function(e,n,t){e.exports=t.p+"img/sprite.344b0cfb.svg"},715:function(e,n,t){e.exports=t.p+"img/slide_insurance.0560f4c6.jpg"},828:function(e,n,t){e.exports=t.p+"img/slide_parking.264e8bce.jpg"},983:function(e,n,t){e.exports=t.p+"img/slide_petrol.2321050a.jpg"},849:function(e,n,t){e.exports=t.p+"img/slide_service.bef68e53.jpg"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,i,o,r){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],r=e[u][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(a=!1,r<l&&(l=r));if(a){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,o,r]}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/nfd_vue3/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var o,r,l=i[0],a=i[1],s=i[2],c=0;if(l.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var u=s(t)}for(n&&n(i);c<l.length;c++)r=l[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},i=self["webpackChunkneed_for_drive_vue3"]=self["webpackChunkneed_for_drive_vue3"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(940)}));i=t.O(i)})();
//# sourceMappingURL=app.72c6aa36.js.map