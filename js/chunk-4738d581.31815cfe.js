(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4738d581"],{"0b42":function(t,e,i){var s=i("da84"),n=i("e8b5"),o=i("68ee"),a=i("861d"),r=i("b622"),l=r("species"),c=s.Array;t.exports=function(t){var e;return n(t)&&(e=t.constructor,o(e)&&(e===c||n(e.prototype))?e=void 0:a(e)&&(e=e[l],null===e&&(e=void 0))),void 0===e?c:e}},"109e":function(t,e,i){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}const i={setDataAttribute(t,i,s){t.setAttribute("data-bs-"+e(i),s)},removeDataAttribute(t,i){t.removeAttribute("data-bs-"+e(i))},getDataAttributes(e){if(!e)return{};const i={};return Object.keys(e.dataset).filter(t=>t.startsWith("bs")).forEach(s=>{let n=s.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),i[n]=t(e.dataset[s])}),i},getDataAttribute(i,s){return t(i.getAttribute("data-bs-"+e(s)))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}};return i}))},1741:function(t,e,i){
/*!
  * Bootstrap carousel.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6a95"),i("109e"),i("848f"),i("302d"))})(0,(function(t,e,i,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=n(t),a=n(e),r=n(i),l=n(s),c="transitionend",d=t=>null===t||void 0===t?""+t:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},f=t=>{const e=u(t);return e?document.querySelector(e):null},h=t=>{t.dispatchEvent(new Event(c))},p=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),m=(t,e,i)=>{Object.keys(i).forEach(s=>{const n=i[s],o=e[s],a=o&&p(o)?"element":d(o);if(!new RegExp(n).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${n}".`)})},g=t=>!(!p(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),b=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},y=[],A=t=>{"loading"===document.readyState?(y.length||document.addEventListener("DOMContentLoaded",()=>{y.forEach(t=>t())}),y.push(t)):t()},x=()=>"rtl"===document.documentElement.dir,I=t=>{A(()=>{const e=v();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}})},w=(t,e,i,s)=>{let n=t.indexOf(e);if(-1===n)return t[!i&&s?t.length-1:0];const o=t.length;return n+=i?1:-1,s&&(n=(n+o)%o),t[Math.max(0,Math.min(n,o-1))]},E="carousel",j="bs.carousel",L="."+j,C=".data-api",_="ArrowLeft",S="ArrowRight",k=500,Q=40,O={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},B={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},T="next",M="prev",R="left",V="right",D={[_]:V,[S]:R},J="slide"+L,G="slid"+L,X="keydown"+L,Y="mouseenter"+L,H="mouseleave"+L,Z="touchstart"+L,W="touchmove"+L,z="touchend"+L,U="pointerdown"+L,N="pointerup"+L,F="dragstart"+L,P=`load${L}${C}`,q=`click${L}${C}`,K="carousel",$="active",tt="slide",et="carousel-item-end",it="carousel-item-start",st="carousel-item-next",nt="carousel-item-prev",ot="pointer-event",at=".active",rt=".active.carousel-item",lt=".carousel-item",ct=".carousel-item img",dt=".carousel-item-next, .carousel-item-prev",ut=".carousel-indicators",ft="[data-bs-target]",ht="[data-bs-slide], [data-bs-slide-to]",pt='[data-bs-ride="carousel"]',mt="touch",gt="pen";class bt extends l.default{constructor(t,e){super(t),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._indicatorsElement=r.default.findOne(ut,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return O}static get NAME(){return E}next(){this._slide(T)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(M)}pause(t){t||(this._isPaused=!0),r.default.findOne(dt,this._element)&&(h(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(t){this._activeElement=r.default.findOne(rt,this._element);const e=this._getItemIndex(this._activeElement);if(t>this._items.length-1||t<0)return;if(this._isSliding)return void o.default.one(this._element,G,()=>this.to(t));if(e===t)return this.pause(),void this.cycle();const i=t>e?T:M;this._slide(i,this._items[t])}_getConfig(t){return t={...O,...a.default.getDataAttributes(this._element),..."object"===typeof t?t:{}},m(E,t,B),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=Q)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?V:R)}_addEventListeners(){this._config.keyboard&&o.default.on(this._element,X,t=>this._keydown(t)),"hover"===this._config.pause&&(o.default.on(this._element,Y,t=>this.pause(t)),o.default.on(this._element,H,t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const t=t=>this._pointerEvent&&(t.pointerType===gt||t.pointerType===mt),e=e=>{t(e)?this.touchStartX=e.clientX:this._pointerEvent||(this.touchStartX=e.touches[0].clientX)},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},s=e=>{t(e)&&(this.touchDeltaX=e.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),k+this._config.interval))};r.default.find(ct,this._element).forEach(t=>{o.default.on(t,F,t=>t.preventDefault())}),this._pointerEvent?(o.default.on(this._element,U,t=>e(t)),o.default.on(this._element,N,t=>s(t)),this._element.classList.add(ot)):(o.default.on(this._element,Z,t=>e(t)),o.default.on(this._element,W,t=>i(t)),o.default.on(this._element,z,t=>s(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=D[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(t){return this._items=t&&t.parentNode?r.default.find(lt,t.parentNode):[],this._items.indexOf(t)}_getItemByOrder(t,e){const i=t===T;return w(this._items,e,i,this._config.wrap)}_triggerSlideEvent(t,e){const i=this._getItemIndex(t),s=this._getItemIndex(r.default.findOne(rt,this._element));return o.default.trigger(this._element,J,{relatedTarget:t,direction:e,from:s,to:i})}_setActiveIndicatorElement(t){if(this._indicatorsElement){const e=r.default.findOne(at,this._indicatorsElement);e.classList.remove($),e.removeAttribute("aria-current");const i=r.default.find(ft,this._indicatorsElement);for(let s=0;s<i.length;s++)if(Number.parseInt(i[s].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(t)){i[s].classList.add($),i[s].setAttribute("aria-current","true");break}}}_updateInterval(){const t=this._activeElement||r.default.findOne(rt,this._element);if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(t,e){const i=this._directionToOrder(t),s=r.default.findOne(rt,this._element),n=this._getItemIndex(s),a=e||this._getItemByOrder(i,s),l=this._getItemIndex(a),c=Boolean(this._interval),d=i===T,u=d?it:et,f=d?st:nt,h=this._orderToDirection(i);if(a&&a.classList.contains($))return void(this._isSliding=!1);if(this._isSliding)return;const p=this._triggerSlideEvent(a,h);if(p.defaultPrevented)return;if(!s||!a)return;this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(a),this._activeElement=a;const m=()=>{o.default.trigger(this._element,G,{relatedTarget:a,direction:h,from:n,to:l})};if(this._element.classList.contains(tt)){a.classList.add(f),b(a),s.classList.add(u),a.classList.add(u);const t=()=>{a.classList.remove(u,f),a.classList.add($),s.classList.remove($,f,u),this._isSliding=!1,setTimeout(m,0)};this._queueCallback(t,s,!0)}else s.classList.remove($),a.classList.add($),this._isSliding=!1,m();c&&this.cycle()}_directionToOrder(t){return[V,R].includes(t)?x()?t===R?M:T:t===R?T:M:t}_orderToDirection(t){return[T,M].includes(t)?x()?t===M?R:V:t===M?V:R:t}static carouselInterface(t,e){const i=bt.getOrCreateInstance(t,e);let{_config:s}=i;"object"===typeof e&&(s={...s,...e});const n="string"===typeof e?e:s.slide;if("number"===typeof e)i.to(e);else if("string"===typeof n){if("undefined"===typeof i[n])throw new TypeError(`No method named "${n}"`);i[n]()}else s.interval&&s.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){bt.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=f(this);if(!e||!e.classList.contains(K))return;const i={...a.default.getDataAttributes(e),...a.default.getDataAttributes(this)},s=this.getAttribute("data-bs-slide-to");s&&(i.interval=!1),bt.carouselInterface(e,i),s&&bt.getInstance(e).to(s),t.preventDefault()}}return o.default.on(document,q,ht,bt.dataApiClickHandler),o.default.on(window,P,()=>{const t=r.default.find(pt);for(let e=0,i=t.length;e<i;e++)bt.carouselInterface(t[e],bt.getInstance(t[e]))}),I(bt),bt}))},1936:function(t,e,i){t.exports=i.p+"img/banner.2a5e8925.png"},"1dde":function(t,e,i){var s=i("d039"),n=i("b622"),o=i("2d00"),a=n("species");t.exports=function(t){return o>=51||!s((function(){var e=[],i=e.constructor={};return i[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25b0":function(t,e,i){t.exports=i.p+"img/review4.e75fdfc7.png"},"28e8":function(t,e,i){t.exports=i.p+"img/shape.05aaa08c.png"},"302d":function(t,e,i){
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6ee1"),i("6a95"))})(0,(function(t,e){"use strict";const i=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},s=i(t),n=i(e),o=1e3,a="transitionend",r=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(i))*o):0},l=t=>{t.dispatchEvent(new Event(a))},c=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),d=t=>c(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,u=t=>{"function"===typeof t&&t()},f=(t,e,i=!0)=>{if(!i)return void u(t);const s=5,n=r(e)+s;let o=!1;const c=({target:i})=>{i===e&&(o=!0,e.removeEventListener(a,c),u(t))};e.addEventListener(a,c),setTimeout(()=>{o||l(e)},n)},h="5.1.3";class p{constructor(t){t=d(t),t&&(this._element=t,s.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.default.remove(this._element,this.constructor.DATA_KEY),n.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){f(t,e,i)}static getInstance(t){return s.default.get(d(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}return p}))},"45cd":function(t,e,i){t.exports=i.p+"img/shape4.57759fb2.png"},4811:function(t,e,i){t.exports=i.p+"img/color-simulation.17f1d3d4.png"},"52f7":function(t,e,i){t.exports=i.p+"img/review1.3d83cab6.png"},"65f0":function(t,e,i){var s=i("0b42");t.exports=function(t,e){return new(s(t))(0===e?0:e)}},6661:function(t,e){t.exports="data:image/png;base64,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"},"6a95":function(t,e,i){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,i=/\..*/,s=/::\d+$/,n={};let o=1;const a={mouseenter:"mouseover",mouseleave:"mouseout"},r=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(t,e){return e&&`${e}::${o++}`||t.uidEvent||o++}function d(t){const e=c(t);return t.uidEvent=e,n[e]=n[e]||{},n[e]}function u(t,e){return function i(s){return s.delegateTarget=t,i.oneOff&&y.off(t,s.type,e),e.apply(t,[s])}}function f(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:a}=n;a&&a!==this;a=a.parentNode)for(let r=o.length;r--;)if(o[r]===a)return n.delegateTarget=a,s.oneOff&&y.off(t,n.type,e,i),i.apply(a,[n]);return null}}function h(t,e,i=null){const s=Object.keys(t);for(let n=0,o=s.length;n<o;n++){const o=t[s[n]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function p(t,e,i){const s="string"===typeof e,n=s?i:e;let o=v(t);const a=l.has(o);return a||(o=t),[s,n,o]}function m(t,i,s,n,o){if("string"!==typeof i||!t)return;if(s||(s=n,n=null),r.test(i)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):s=t(s)}const[a,l,m]=p(i,s,n),g=d(t),b=g[m]||(g[m]={}),v=h(b,l,a?s:null);if(v)return void(v.oneOff=v.oneOff&&o);const y=c(l,i.replace(e,"")),A=a?f(t,s,n):u(t,s);A.delegationSelector=a?s:null,A.originalHandler=l,A.oneOff=o,A.uidEvent=y,b[y]=A,t.addEventListener(m,A,a)}function g(t,e,i,s,n){const o=h(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent])}function b(t,e,i,s){const n=e[i]||{};Object.keys(n).forEach(o=>{if(o.includes(s)){const s=n[o];g(t,e,i,s.originalHandler,s.delegationSelector)}})}function v(t){return t=t.replace(i,""),a[t]||t}const y={on(t,e,i,s){m(t,e,i,s,!1)},one(t,e,i,s){m(t,e,i,s,!0)},off(t,e,i,n){if("string"!==typeof e||!t)return;const[o,a,r]=p(e,i,n),l=r!==e,c=d(t),u=e.startsWith(".");if("undefined"!==typeof a){if(!c||!c[r])return;return void g(t,c,r,a,o?i:null)}u&&Object.keys(c).forEach(i=>{b(t,c,i,e.slice(1))});const f=c[r]||{};Object.keys(f).forEach(i=>{const n=i.replace(s,"");if(!l||e.includes(n)){const e=f[i];g(t,c,r,e.originalHandler,e.delegationSelector)}})},trigger(e,i,s){if("string"!==typeof i||!e)return null;const n=t(),o=v(i),a=i!==o,r=l.has(o);let c,d=!0,u=!0,f=!1,h=null;return a&&n&&(c=n.Event(i,s),n(e).trigger(c),d=!c.isPropagationStopped(),u=!c.isImmediatePropagationStopped(),f=c.isDefaultPrevented()),r?(h=document.createEvent("HTMLEvents"),h.initEvent(o,d,!0)):h=new CustomEvent(i,{bubbles:d,cancelable:!0}),"undefined"!==typeof s&&Object.keys(s).forEach(t=>{Object.defineProperty(h,t,{get(){return s[t]}})}),f&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof c&&c.preventDefault(),h}};return y}))},"6ee1":function(t,e,i){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";const t=new Map,e={set(e,i,s){t.has(e)||t.set(e,new Map);const n=t.get(e);n.has(i)||0===n.size?n.set(i,s):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get(e,i){return t.has(e)&&t.get(e).get(i)||null},remove(e,i){if(!t.has(e))return;const s=t.get(e);s.delete(i),0===s.size&&t.delete(e)}};return e}))},8418:function(t,e,i){"use strict";var s=i("a04b"),n=i("9bf2"),o=i("5c6c");t.exports=function(t,e,i){var a=s(e);a in t?n.f(t,a,o(0,i)):t[a]=i}},"848f":function(t,e,i){
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";const t=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),e=e=>!(!t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),i=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),s=3,n={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(t,e){const i=[];let n=t.parentNode;while(n&&n.nodeType===Node.ELEMENT_NODE&&n.nodeType!==s)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;while(i){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;while(i){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(", ");return this.find(s,t).filter(t=>!i(t)&&e(t))}};return n}))},8559:function(t,e,i){t.exports=i.p+"img/review2.c3afa6df.png"},8813:function(t,e,i){t.exports=i.p+"img/banner2.9b44254d.png"},"8c13":function(t,e,i){t.exports=i.p+"img/color-simulation3.23528a3b.png"},"92b2":function(t,e,i){t.exports=i.p+"img/coupon.755872c6.jpg"},"99af":function(t,e,i){"use strict";var s=i("23e7"),n=i("da84"),o=i("d039"),a=i("e8b5"),r=i("861d"),l=i("7b0b"),c=i("07fa"),d=i("8418"),u=i("65f0"),f=i("1dde"),h=i("b622"),p=i("2d00"),m=h("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=n.TypeError,y=p>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),A=f("concat"),x=function(t){if(!r(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},I=!y||!A;s({target:"Array",proto:!0,forced:I},{concat:function(t){var e,i,s,n,o,a=l(this),r=u(a,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?a:arguments[e],x(o)){if(n=c(o),f+n>g)throw v(b);for(i=0;i<n;i++,f++)i in o&&d(r,f,o[i])}else{if(f>=g)throw v(b);d(r,f++,o)}return r.length=f,r}})},af1d:function(t,e,i){t.exports=i.p+"img/color-simulation2.474a1b64.png"},d504:function(t,e,i){"use strict";i.r(e);var s=i("7a23"),n=i("28e8"),o=i.n(n),a=i("6661"),r=i.n(a),l=i("4811"),c=i.n(l),d=i("af1d"),u=i.n(d),f=i("8c13"),h=i.n(f),p=i("e5eb"),m=i.n(p),g=i("45cd"),b=i.n(g),v=i("92b2"),y=i.n(v),A=i("52f7"),x=i.n(A),I=i("8559"),w=i.n(I),E=i("fa0f"),j=i.n(E),L=i("25b0"),C=i.n(L),_=Object(s["i"])('<div class="cut-scenes mt-5 mb-5"></div><div class="container-fluid pt-5 position-relative"><div class="row g-4 align-items-center justify-content-center"><div class="col-md-4 col-10"><h2 class="fw-bold">Introduction</h2><p class="fs-2 notoTC">品牌獨創，引領新潮流</p><p class="lh-lg notoTC"> 主要生產運動鞋、運動服裝、體育用品 <br> 致力於設計及製造優質的鞋款 <br> 滿足消費者在運動上需求以及場外的時尚風格營造 <br> 推廣體育風潮 <br> 品牌內涵主打年輕活力 <br> 打造專屬於年輕人的新世代 <br></p><p class="lh-lg noto"> Mainly produces sports shoes, sportswear, sporting goods <br> Committed to the design and manufacture of high-quality shoes <br> Meet the needs of consumers in sports and create fashion styles off the field <br> Promote sports trends <br> Brand connotation focuses on youthful vitality <br> Create a new generation dedicated to young people <br></p></div><div class="col-md-4 col-10 introduction-images rounded-3"></div></div><div style="position:absolute;top:0;left:50px;z-index:-10;"><img class="img-fluid" src="'+o.a+'" alt=""></div><div style="position:absolute;bottom:-10px;right:0px;z-index:2;"><img class="img-fluid" src="'+r.a+'" alt=""></div></div>',2),S={class:"position-relative"},k={class:"container mt-5 mb-5 pt-5"},Q=Object(s["h"])("h2",{class:"display-5 fw-bold text-center"},"COLOR SIMULATION",-1),O=Object(s["h"])("p",{class:"text-center mb-5 notoTC"},"尋找你最喜歡的個性風格",-1),B={id:"carouselExampleSlidesOnly",class:"carousel slide carousel-fade","data-bs-ride":"carousel",style:{position:"relative"}},T={class:"carousel-inner rounded-3 shadow",ref:"colorSimulation"},M=Object(s["i"])('<div class="carousel-item active"><img src="'+c.a+'" class="d-block w-100" alt="color-simulation"></div><div class="carousel-item"><img src="'+u.a+'" class="d-block w-100" alt="color-simulation2"></div><div class="carousel-item"><img src="'+h.a+'" class="d-block w-100" alt="color-simulation3"></div><div class="card text-center rounded-3 overflow-hidden w-50 d-none d-lg-block notoTC" style="position:absolute;right:50px;top:50px;z-index:1;opacity:90%;"><div class="card-header"> 特惠季-要買要快 </div><div class="card-body"><h5 class="card-title">多種款式、顏色任君挑選</h5><p class="card-text">本店有包含各種運動服裝、運動鞋、運動器材等等產品等您來選購，價格便宜、風格多樣，滿足客人的願望和感受。</p><a href="#" class="btn btn-primary">手刀選購</a></div></div>',4),R=[M],V=Object(s["i"])('<div class="loop-holder" style="bottom:-50px;opacity:30%;"><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div></div>',1),D=Object(s["i"])('<div class="container pt-5 notoTC"><h2 class="display-5 fw-bold text-center noto">Item Lists</h2><p class="text-center">各種顏色流線型設計，想怎麼搭，就怎麼搭</p><div class="row row-cols-lg-2 align-items-center justify-content-center position-relative"><div class="col-lg-7 col-10 product"></div><div class="col-lg-5 col-10 pe-5"><h2 class="fw-bold">#247</h2><p class="lh-lg">在2016年推出的247襲捲平民時尚界的風潮，歐美韓台的明星也在各個場合挑戰穿搭，在設計時就以型號247為主軸，也就是能夠穿24小時X 7天，主打以舒適度及每天都能輕鬆搭配，白話一點就是「你整年只需要這一雙鞋就夠了！」<br> 在247身上，我們可以看見許多以往款式的身影，用最扎實又奢華的路線成功打造了這款247。</p></div><div class="position-absolute top-50 start-50 translate-middle" style="z-index:-10;"><img class="img-fluid" src="'+m.a+'" alt=""></div></div><div class="row row-cols-lg-2 flex-row-reverse align-items-center justify-content-center position-relative"><div class="col-lg-7 col-10 product-2"></div><div class="col-lg-4 col-10 text-end"><h2 class="fw-bold">#Bounce M</h2><p class="lh-lg text-start">新推出的Bounce M系列鞋款，從專業運動員的跑步與訓練出發，也成為了各界運動員訓練時的最佳選擇。 <br> 不只外表潮流，它採用FORGED Mesh透氣網面，讓包覆感和透氣合而為一，同時搭載BOUNCE緩震中底，適合跑步及多面向訓練等各種強度的訓練，最重要的是鞋底所採用的Continental™ 馬牌輪胎鞋底，增強抓地力讓跑者在變換方向及調整速度都有更好的體驗。</p></div><div class="position-absolute top-50 start-50 translate-middle" style="z-index:-10;"><img class="img-fluid" src="'+b.a+'" alt=""></div></div></div><div class="cut-scenes-2 mt-5 mb-5"></div><div class="container"><div class="row justify-content-center align-items-center text-center"><div class="col-6 p-0"><img class="img-fluid" src="'+y.a+'" alt=""></div><div class="col-6 bg-light p-5" style="height:500px;"><h2 class="fw-bold display-5 mt-5 text-muted">享受商品折扣優惠</h2><p class="mb-5">感謝祭活動期間快來領取優惠券！ <br> （活動至 2022/4/30 截止）</p><h4 class="fw-bold text-success mb-4"><i class="bi bi-gift-fill me-2"></i>恭喜您獲得優惠碼<i class="bi bi-gift-fill ms-2"></i></h4><div class="bg-secondary h-25 d-flex text-white justify-content-evenly align-items-center fw-bold fs-2"><div class="bg-dark w-25">商品 <br> 75折</div><div class="">Vigorisgood</div></div></div></div></div><div class="container pt-5 mb-5 notoTC"><h2 class="display-5 fw-bold text-center noto">REVIEW</h2><p class="text-center mb-5">這裡有很棒的評論對於顧客使用的想法</p><div class="row"><div class="col-3"><div class="card h-100" style="width:18rem;"><div class="card-body"><h6 class="card-subtitle mb-2 text-muted d-flex justify-content-between align-items-center"><div><img class="img-fluid me-2" style="width:50px;" src="'+x.a+'" alt=""> Chen Lin </div><div><span class="rounded-pill bg-secondary text-white badge ms-5"><i class="bi bi-star-fill"></i>4.6</span></div></h6><h5 class="card-title">質量很好!!!</h5><p class="card-text">包裝上也很用心，新開幕的優惠折扣真的太佛心啦~之後絕對會再回購的。</p><a href="#/product/-MwL4lWhQXNtAPPaxNiO" class="card-link text-decoration-none text-muted d-flex justify-content-end align-items-center small">灰色牛仔造型鴨舌帽<img class="img-fluid ms-3" style="width:50px;" src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt=""></a></div></div></div><div class="col-3"><div class="card bg-secondary text-white h-100" style="width:18rem;"><div class="card-body"><h6 class="card-subtitle mb-2 d-flex justify-content-between align-items-center"><div><img class="img-fluid me-2" style="width:50px;" src="'+w.a+'" alt=""> Mia Rose </div><div><span class="rounded-pill bg-white text-secondary badge ms-5"><i class="bi bi-star-fill"></i>5.0</span></div></h6><h5 class="card-title">快速的出貨速度</h5><p class="card-text">包裝很完整，商品質感超極佳，物超所值，優質的店家給予五星評價。</p><a href="#/product/-MwL4j7NPwSI6rTx5Jce" class="card-link text-decoration-none text-white d-flex justify-content-end align-items-center small">緊身牛仔破褲<img class="img-fluid ms-3" style="width:50px;" src="https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=706&amp;q=80" alt=""></a></div></div></div><div class="col-3"><div class="card h-100" style="width:18rem;"><div class="card-body"><h6 class="card-subtitle mb-2 text-muted d-flex justify-content-between align-items-center"><div><img class="img-fluid me-2" style="width:50px;" src="'+j.a+'" alt=""> James Smith </div><div><span class="rounded-pill bg-secondary text-white badge ms-5"><i class="bi bi-star-fill"></i>4.7</span></div></h6><h5 class="card-title">品質與價格一致</h5><p class="card-text">cp值高、包裝完善，商品無色差，穿起來真的好看，物美價廉，願意再次購買。</p><a href="#/product/-MwL4qTwDWIcdXOXU13J" class="card-link text-decoration-none text-muted d-flex justify-content-end align-items-center small">黑色骷髏圖示襯衫<img class="img-fluid ms-3" style="width:50px;" src="https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt=""></a></div></div></div><div class="col-3"><div class="card bg-secondary text-white h-100" style="width:18rem;"><div class="card-body"><h6 class="card-subtitle mb-2 d-flex justify-content-between align-items-center"><div><img class="img-fluid me-2" style="width:50px;" src="'+C.a+'" alt=""> Emma Liz </div><div><span class="rounded-pill bg-white text-secondary badge ms-5"><i class="bi bi-star-fill"></i>4.5</span></div></h6><h5 class="card-title">質量很好!!!</h5><p class="card-text">回購好多次了，真的很愛這家的衣服，穿起來超級舒服，都會付出貨單讓買家確認商品。</p><a href="#/product/-MwL5Gio_FVPeUaFBGEB" class="card-link text-decoration-none d-flex justify-content-end align-items-center small text-white">Neon Light螢光鞋款<img class="img-fluid ms-3" style="width:50px;" src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" alt=""></a></div></div></div></div></div><div class="container pb-5"><h2 class="fw-bold">News</h2><p class="pb-4">目前沒有新的公告</p></div>',5);function J(t,e,i,n,o,a){var r=Object(s["H"])("Loading"),l=Object(s["H"])("BannerSwiper");return Object(s["z"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(r,{isLoading:o.isLoading},null,8,["isLoading"]),Object(s["k"])(l),_,Object(s["h"])("div",S,[Object(s["h"])("div",k,[Q,O,Object(s["h"])("div",B,[Object(s["h"])("div",T,R,512)])]),V]),D],64)}i("99af");var G=i("1936"),X=i.n(G),Y=i("8813"),H=i.n(Y),Z=i("e5d4"),W=i.n(Z),z={class:"position-relative"},U={class:"container",style:{"margin-top":"83px"}},N={id:"carouselExampleIndicators",class:"carousel slide carousel-fade","data-bs-ride":"carousel"},F=Object(s["h"])("div",{class:"carousel-indicators"},[Object(s["h"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(s["h"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(s["h"])("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1),P={class:"carousel-inner banner",ref:"myCarousel"},q=Object(s["i"])('<div class="carousel-item active"><img src="'+X.a+'" class="d-block w-100 banner-transform img-fluid" alt="banner1"></div><div class="carousel-item"><img src="'+H.a+'" class="d-block w-100 banner-transform img-fluid" alt="banner2"></div><div class="carousel-item"><img src="'+W.a+'" class="d-block w-100 banner-transform img-fluid" alt="banner3"></div><div class="banner-text fw-bold text-white font-monospace text-uppercase"><p>Fashion <br> Dynamic</p></div>',4),K=[q],$=Object(s["i"])('<div class="loop-holder" style="top:250px;"><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div><div class="loop-holder__text">VigΩr - VigΩr - VigΩr - </div></div>',1);function tt(t,e,i,n,o,a){return Object(s["z"])(),Object(s["g"])("div",z,[Object(s["h"])("div",U,[Object(s["h"])("div",N,[F,Object(s["h"])("div",P,K,512)])]),$])}var et=i("1741"),it=i.n(et),st={data:function(){return{carousel:""}},mounted:function(){this.carousel=new it.a(this.$refs.myCarousel,{interval:1e3})}},nt=i("6b0d"),ot=i.n(nt);const at=ot()(st,[["render",tt]]);var rt=at,lt={data:function(){return{products:[],isLoading:!1}},components:{BannerSwiper:rt},methods:{getProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("betty-api","/products/all");this.isLoading=!0,this.$http.get(e).then((function(e){t.products=e.data.products,console.log("products:",e),t.isLoading=!1}))}},mounted:function(){this.getProducts()}};const ct=ot()(lt,[["render",J]]);e["default"]=ct},e5d4:function(t,e,i){t.exports=i.p+"img/banner3.81cbd249.png"},e5eb:function(t,e,i){t.exports=i.p+"img/shape3.6d562c6e.png"},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},fa0f:function(t,e,i){t.exports=i.p+"img/review3.73aa39c3.png"}}]);
//# sourceMappingURL=chunk-4738d581.31815cfe.js.map