!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[DropDownMenu_OverlineMenuButtonSkin]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[DropDownMenu_OverlineMenuButtonSkin]"]=t(require("react")):e["rb_wixui.thunderbolt[DropDownMenu_OverlineMenuButtonSkin]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{components:function(){return Y}});var e=r(448),t=r.n(e),n=r(5329),a=r.n(n);function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var s=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r};const l=13,u=27;function c(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const d=c(32),p=c(l),m=e=>{p(e),d(e)},f=(c(u),e=>Object.entries(e).reduce(((e,[t,n])=>(t.includes("data-")&&(e[t]=n),e)),{}));const h={root:"linkElement"},v=(e,r)=>{const{href:o,role:a,target:i,rel:s,className:l="",children:u,linkPopupId:c,anchorDataId:v,anchorCompId:b,tabIndex:k,dataTestId:y=h.root,title:g,onClick:I,onDoubleClick:M,onMouseEnter:w,onMouseLeave:C,onFocusCapture:B,onBlurCapture:x,"aria-live":N,"aria-disabled":D,"aria-label":E,"aria-labelledby":S,"aria-pressed":P,"aria-expanded":O,"aria-describedby":L,"aria-haspopup":A,dataPreview:T}=e,_=void 0!==e.activateByKey?e.activateByKey:(e=>e?"SpaceOrEnter":"Space")(c);let j;switch(_){case"Enter":j=p;break;case"Space":j=d;break;case"SpaceOrEnter":j=m;break;default:j=void 0}return void 0!==o?n.createElement("a",t()({},f(e),{"data-testid":y,"data-popupid":c,"data-anchor":v,"data-anchor-comp-id":b,"data-preview":T,href:o||void 0,target:i,role:c?"button":a,rel:s,className:l,onKeyDown:j,"aria-live":N,"aria-disabled":D,"aria-label":E,"aria-labelledby":S,"aria-pressed":P,"aria-expanded":O,"aria-haspopup":A,"aria-describedby":L,title:g,onClick:I,onMouseEnter:w,onMouseLeave:C,onDoubleClick:M,onFocusCapture:B,onBlurCapture:x,ref:r,tabIndex:c?0:k}),u):n.createElement("div",t()({},f(e),{"data-testid":y,"data-preview":T,className:l,tabIndex:k,"aria-label":E,"aria-labelledby":S,"aria-haspopup":A,"aria-disabled":D,"aria-expanded":O,title:g,role:a,onClick:I,onDoubleClick:M,onMouseEnter:w,onMouseLeave:C,ref:r}),u)};var b=n.forwardRef(v);var k=e=>{let{wrapperProps:{ariaHasPopup:n,isMoreButton:r,ariaDescribedBy:o},className:i,children:s,link:l,tabIndex:u}=e;return a().createElement(b,t()({},l,{"aria-haspopup":n,"aria-describedby":o,tabIndex:u||(!r&&l&&l.href?void 0:0),className:i}),s)};const y=e=>{let{dir:t,textAlign:n,className:r,children:o,tagName:i="p",id:s}=e;return a().createElement(i,{className:r,style:{textAlign:n},dir:t,id:s+"label"},o)};var g=e=>{let{wrapperProps:{dir:t,textAlign:n,id:r},classNames:o,children:i}=e;return a().createElement("div",{className:s(o.bg),style:{textAlign:n}},a().createElement(y,{dir:t,textAlign:n,className:o.label,id:r},i))};var I=e=>{const{label:r,direction:o="ltr",positionInList:a,parentId:i,dataId:l,isContainer:u,isSelected:c,isHovered:d,link:p,tagName:m="div",id:h,className:v,compClassName:b,onClick:y,onDoubleClick:g,onMouseEnter:I,onMouseLeave:M,index:w,children:C,isDropDownButton:B,subItems:x}=e,N=[u?"drop":"menu",c&&"selected",d&&"over",p&&(p.hasOwnProperty("href")||p.hasOwnProperty("target")||p.hasOwnProperty("rel")||p.hasOwnProperty("linkPopupId"))?"link":"header"],D={...f(e),"data-direction":o,"data-listposition":a,"data-parent-id":i,"data-data-id":l,"data-state":N.join(" "),"data-index":w,"data-dropdown":B},E=e=>e?e.trim():"\xa0",S=x&&x.length?n.createElement("ul",{"aria-hidden":!0,style:{display:"none"}},x.map(((e,t)=>n.createElement("li",{key:e.id||t},n.createElement(k,{wrapperProps:{ariaHasPopup:e.hasPopup},link:e.link,tabIndex:-1,compClassName:b},E(e.label)))))):null;return n.createElement(m,t()({id:h},D,{className:s(b,v),onClick:y,onDoubleClick:g,onMouseEnter:I,onMouseLeave:M,onFocus:I,onBlur:M}),C(E(r)),S)};var M=e=>{const{id:r,isDropDownButton:o,"aria-haspopup":a,"aria-describedby":i,isMoreButton:l,dir:u,textAlign:c,positionInList:d,link:p,skinsStyle:m,skin:f}=e;return n.createElement(I,t()({},e,{className:s(e.className,m[f])}),(e=>n.createElement(k,{wrapperProps:{positionInList:d,ariaHasPopup:o?a:"false",ariaDescribedBy:i,isMoreButton:l},link:p,className:m.linkElement},n.createElement("div",{className:m.gapper},n.createElement("div",{className:m.wrapper},n.createElement(g,{wrapperProps:{dir:u,textAlign:c,id:r},classNames:{bg:m.bg,label:m.label}},e))))))},w={root:"Gs0oXs",OverlineMenuButtonNSkin:"pr7XQM",overlineMenuButtonNSkin:"pr7XQM",linkElement:"rcIF9K",gapper:"nzVyrk",wrapper:"VCJeT5",label:"xYGmQj"};var C=e=>n.createElement(M,t()({},e,{skinsStyle:w,skin:"OverlineMenuButtonNSkin"}));const B=(e,t)=>e?{"data-comp":t,"data-aid":t}:{},x="wixui-",N=(e,...t)=>{const n=[];return e&&n.push(`${x}${e}`),t.forEach((e=>{e&&(n.push(`${x}${e}`),n.push(e))})),n.join(" ")},D=new Set(["PointerMenuButtonHorizontalMenuAdaptationSkin","PointerMenuButtonSkin","VerticalRibbonsMenuButtonSkin","RibbonsMenuButtonSkin"]),E="data-dropdown-shown",S="__more__",P="SCROLL_TO_TOP",O="SCROLL_TO_BOTTOM";var L={root:"dropdown-menu",menuItem:"dropdown-menu__item",subMenu:"dropdown-menu__submenu"};const A=e=>e.split("?")[0],T=(e,t)=>e.filter((e=>e.link&&e.link.linkPopupId&&e.link.linkPopupId===t)),_=(e,t,n)=>{const r=n.compId||n.dataId;let o=new Set;return r&&(o=new Set(e.filter((e=>((e,t,n)=>e.link&&(!e.link.href||A(e.link.href)===t)&&(e.link.anchorCompId&&e.link.anchorCompId===n.compId||e.link.anchorDataId&&e.link.anchorDataId===n.dataId&&e.link.anchorDataId!==P&&e.link.anchorDataId!==O))(e,t,n))))),o},j=function(e,t,n,r){void 0===e&&(e=[]),void 0===t&&(t=""),void 0===n&&(n={}),void 0===r&&(r="");const o=new Set([...Array.from(_(e,t,n)),...Array.from(T(e,r))]),a=o.size>0;return e.forEach((e=>{const i=e.items&&e.items.length?j(e.items,t,n,r):new Set;!1!==e.selected&&((e.selected||((e,t,n)=>!n&&!(e=>e.link&&(e.link.anchorDataId||e.link.anchorCompId))(e)&&e.link&&e.link.href&&decodeURIComponent(A(e.link.href))===t)(e,t,a)||e.link&&Object.keys(e.link).length>0&&i.size>0)&&o.add(e),i.forEach((e=>o.add(e))))})),o};function K(e,t){return""+e+t}function R(e,t){return e.filter(((e,n)=>{var r;const o=K(t,n.toString()),a=document.getElementById(o);return"hidden"===(null==a||null==(r=a.style)?void 0:r.visibility)}))}const W=e=>{const t=n.useMemo((()=>j(e.items,e.currentUrl,e.activeAnchor,e.currentPopupId)),[e.items,e.currentUrl,e.activeAnchor,e.currentPopupId]),r=(e,t)=>{const{Button:r}=e,o={...{onMouseEnter:e.onItemMouseEnter,onMouseLeave:e.onItemMouseLeave,onDoubleClick:e.onItemDblClick,onClick:e.onItemClick,textAlign:e.alignText},...t};return n.createElement(r,o)};function o(e,t,n,r,o,a){return e===t-1?1===t?"dropLonely":n?"bottom":a||"right"===o?r?"left":"right":"center":0===e?n?"top":a||"left"===o?r?"right":"left":"center":n?"dropCenter":"center"}const a=(e,t)=>{let n=e,r=0;for(;t[n]&&r<100;)n+=t[n]++,r++;return t[n]=(t[n]||0)+1,n},i=(e,n)=>{let{items:i=[],compClassName:s,dropdown:l,rtl:u,buttonAlign:p,stretch:m}=n;const f={};return i.map(((n,h)=>{var v,b,k;const y=(l?"moreContainer":"")+h,g={isContainer:l,isSelected:t.has(n),positionInList:n.positionInList||o(h,i.length,l,u,p,m),id:c(y),index:h,refInParent:y,isDropDownButton:l,"aria-haspopup":n.hasPopup||(null!=(v=null==n||null==(b=n.items)?void 0:b.length)?v:0)>0?"true":"false","aria-describedby":null!=n&&null!=(k=n.items)&&k.length?d():void 0,tagName:"li",direction:u?"rtl":"ltr",parentId:n.parent,dataId:n.id,label:n.label,link:n.link,compClassName:s,key:a(n.label,f),subItems:l?void 0:n.items};return r(e,g)}))};function l(e){const{styles:t,items:n,rtl:o,stretchButtonsToMenuWidth:a,alignButtons:l="center"}=e,u=i(e,{items:n,compClassName:s(t.menuItem,N(L.menuItem)),rtl:o,buttonAlign:l,stretch:a}),d=function(e){const{rtl:t,styles:n,stretchButtonsToMenuWidth:o,alignButtons:a="center",moreButtonLabel:i,onItemMouseEnter:s,onItemMouseLeave:l,onSubMenuKeyDown:u}=e,d=S;let p=t?"left":"right";o||"right"===a||(p="center");const m={label:i||"",isSelected:!1,positionInList:p,id:c(d),index:S,refInParent:d,key:d,onFocus:s,onBlur:l,"aria-haspopup":"true",tagName:"li",onKeyDown:u,isDropDownButton:!1,compClassName:n.moreButton,isMoreButton:!0};return r(e,m)}(e);return d&&u.push(d),u}function u(t){var r;const{alignButtons:o="center",onSubMenuKeyDown:a,hover:l,styles:u}=t,d=function(t){const{items:n,rtl:r,alignButtons:o="center",stretchButtonsToMenuWidth:a,hover:s,styles:l}=t;let u=null,c=[];if(n&&s){const t=parseInt(s,10);Number.isInteger(t)&&n[t]?u=n[t].items:s===S&&(u=function(e){return e.reduce(((e,t)=>{let n=[];return t.items&&(n=t.items.map((e=>({...e,parent:t.id})))),[...e,t,...n]}),[])}(R(n,e.id)))}return u&&(c=i(t,{items:u,compClassName:l.dropdownButton,dropdown:!0,rtl:r,buttonAlign:o,stretch:a})),c}(t),p=c("moreContainer"),m=c("dropWrapper"),f=(null!=(r=null==d?void 0:d.length)?r:0)>0,h=s(u.dropWrapper,{[u.showMore]:f}),v=f,b=function(e){const{hover:t,hoverListPosition:n}=e;return t?n:null}(t);return n.createElement("div",{className:h,id:m,"data-drophposition":b,"data-dropalign":o,[E]:v},n.createElement("ul",{className:s(u.moreContainer,N(L.subMenu)),"data-hover":l,id:p,onKeyDown:a},d))}const c=t=>K(e.id,t),d=()=>c("navContainer")+"-hiddenA11ySubMenuIndication";return function(e){const{translations:t,styles:r}=e,o=function(e){const{styles:t,skin:r,alignButtons:o="center",marginAllChildren:a,onMenuKeyDown:i}=e,u=l(e),d=c("itemsContainer");let p=n.createElement("ul",{className:s(t.itemsContainer,t[""+o]),id:d,style:{textAlign:o},"data-marginallchildren":a,onKeyDown:i},u);if((()=>{switch(r){case"IndentedMenuButtonSkin":case"ShinyMenuIIButtonSkin":case"SloppyBorderMenuButtonSkin":return!0;default:return!1}})()){const e=c("wrapper");p=n.createElement("div",{className:s(t.itemsContainerWrapper),id:e},p)}return p}(e),a=function(e){const{skin:t,styles:r}=e;let o=null;return D.has(t)&&(o=n.createElement("div",{className:r.utility})),o}(e),i=u(e),p=c("navContainer");return n.createElement("nav",{className:s(r.navContainer),id:p,"aria-label":t.ariaLabel,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},a,o,i,(m=t.subMenuIndication,n.createElement("div",{style:{display:"none"},id:d()},m)));var m}(e)},U={hover:null,hoverListPosition:null};var V=e=>{const[r,o]=n.useState(U),a=n.useRef();let i;const l=t=>{var n;const{hover:o}=r,{id:a,items:i}=e,s=t.getAttribute("data-index")||"-1",l=parseInt(s,10);if((null==t||null==(n=t.parentNode)?void 0:n.id)!==a+"moreContainer")return i[l];if(!o)return null;if(o===S){return R(i,a)[l]}return i[parseInt(o,10)].items[l]},u=t=>{const{onItemMouseIn:n}=e,{currentTarget:r}=t;null==n||n(t,l(r)),c(t)},c=t=>{var n;const{hover:a}=r,{id:s}=e,{currentTarget:l}=t,u=l.getAttribute("data-listposition"),c=l.getAttribute("data-index")||"-1",d=parseInt(c,10);clearTimeout(i);(null==l||null==(n=l.parentNode)?void 0:n.id)!==s+"moreContainer"&&(Number.isInteger(d)&&-1!==d||c.startsWith("__"))&&c!==a&&o({hover:c,hoverListPosition:u})},d=t=>{const{onItemMouseOut:n}=e,{currentTarget:r}=t;null==n||n(t,l(r)),p()},p=()=>{i=setTimeout((()=>{o({hover:null,hoverListPosition:null})}),1e3)},m=t=>{const{onItemDblClick:n}=e,{currentTarget:r}=t;null==n||n(t,l(r))},f=t=>{const{hover:n}=r,{currentTarget:o}=t,{items:a,onItemClick:i,isTouchDevice:s}=e;if(null==i||i(t,l(o)),s){var u;const e=o.getAttribute("data-index")||"-1",r="true"===o.getAttribute("data-dropdown"),i=parseInt(e,10),s=a?a[i]:null,l=e===S||(null==s||null==(u=s.items)?void 0:u.length)>0;r?p():n?(p(),l&&n!==e&&(t.preventDefault(),t.stopPropagation(),c(t))):l&&(c(t),t.preventDefault(),t.stopPropagation())}},h=function(t,n){if(void 0===n&&(n=!1),a.current){const{id:o}=e;let i=a.current.querySelector("#"+o+"itemsContainer > li:nth-child("+(t+1)+")");for(;i&&"true"===i.getAttribute("aria-hidden");)i=n?i.previousSibling:i.nextSibling;if(i){var r;const e=null==(r=i.childNodes)?void 0:r[0];if(e)return e.focus(),!0}}return!1},v=t=>{const{hover:n}=r,{items:o}=e,{key:i,shiftKey:s}=t;if("Tab"===i&&null!==n){const r=n?parseInt(n,10):-1;let i=!1;if(!s&&o){const t=o[r];t&&t.items&&(i=(t=>{const{id:n}=e;if(a.current){const e=a.current.querySelector("#"+n+"moreContainer li:nth-child("+(t+1)+") a");if(e)return e.focus(),!0}return!1})(0))}i&&(t.stopPropagation(),t.preventDefault())}},b=t=>{const{hover:n}=r,{items:o}=e,{shiftKey:a,key:i,target:s,currentTarget:l}=t;let u=s;if(s!==l&&"li"!==s.tagName.toLowerCase()&&(u=s.closest("li")),u){const e=u.getAttribute("data-index")||"";let r=!1;if(n&&"Tab"===i){const t=((e,t)=>{const n=parseInt(e,10);return Number.isNaN(n)?t:n})(n,-1),i=parseInt(e,10);if(t>=0)if(a)0===i&&(r=h(t,a));else if(o&&o[t]){const e=o[t];e&&e.items&&e.items.length===i+1&&(r=h(t+1))}}r&&(t.stopPropagation(),t.preventDefault())}};function k(e,t){const{hover:n,hoverListPosition:r}=t,{stretchButtonsToMenuWidth:o,sameWidthButtons:a,skinExports:i,alignButtons:s="center",items:l,isQaMode:u,fullNameCompType:c}=e;return{"data-stretch-buttons-to-menu-width":o,"data-same-width-buttons":a,"data-num-items":null==l?void 0:l.length,"data-menuborder-y":i.menuBorderY,"data-menubtn-border":i.menuBtnBorder,"data-ribbon-els":i.ribbonEls,"data-label-pad":i.labelPad,"data-ribbon-extra":i.ribbonExtra,"data-drophposition":r,"data-dropalign":s,"data-hovered-item":n,...B(u,c)}}return function(r,o){const{id:i,className:l,customClassNames:c=[],skin:p,rtl:h,styles:y}=r,g={id:i,class:s(y[p],y.wrapper,l,N(L.root,...c),"hidden-during-prewarmup"),ref:a,tabIndex:-1,dir:h?"rtl":"ltr",...k(r,o)};return n.createElement("wix-dropdown-menu",g,n.createElement(W,t()({},r,o,{onItemMouseEnter:e.isTouchDevice?void 0:u,onItemMouseLeave:e.isTouchDevice?void 0:d,onItemDoubleClick:e.onItemDblClick?m:void 0,onItemClick:e.isTouchDevice||e.onItemClick?f:void 0,onMenuKeyDown:v,onSubMenuKeyDown:b})))}(e,r)};const X=(e,r)=>{const{styles:o,Button:a,...i}=e;return n.createElement(V,t()({},i,{styles:o,Button:a,ref:r}))};var z=n.forwardRef(X),F={wrapper:"XRwtpn",navContainer:"SvGGzE",itemsContainerWrapper:"ckXV57",itemsContainer:"CkCpUo",menuItem:"L3ZIQx",dropdownButton:"DTRNn1",dropWrapper:"O1lweY",moreContainer:"VtNw6g",showMore:"GkAfhB",moreButton:"u7d_AM",utility:"Ursk0e",OverlineMenuButtonSkin:"YXlfNd",overlineMenuButtonSkin:"YXlfNd"};const G=(e,r)=>n.createElement(z,t()({},e,{styles:F,Button:C,ref:r}));const H=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`));var Q;const Y={DropDownMenu_OverlineMenuButtonSkin:{component:n.forwardRef(G),controller:(Q=e=>{let{stateValues:t,mapperProps:n}=e;const{currentUrl:r}=t;return{...n,currentUrl:r}},{useComponentProps:(e,t,n)=>{const r=(e=>({...e,updateStyles:t=>{const n=Object.entries(t).reduce(((e,[t,n])=>{return{...e,[(r=t,r.startsWith("--")?t:H(t))]:void 0===n?null:n};var r}),{});e.updateStyles(n)}}))(n);return Q({mapperProps:e,stateValues:t,controllerUtils:r})}})}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[DropDownMenu_OverlineMenuButtonSkin].3a0857b5.bundle.min.js.map