(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function u(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}!function(){var e={454:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",""]);var i=o},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},810:function(){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,r;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()},379:function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=a(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:b(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var i=v++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(379),t=n.n(e),r=n(454);function o(e){if(!e.hasAttribute("autocompleted")){e.setAttribute("autocompleted","");var t=new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!0,detail:null});e.dispatchEvent(t)||(e.value="")}}function i(e){e.hasAttribute("autocompleted")&&(e.removeAttribute("autocompleted"),e.dispatchEvent(new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!1,detail:null})))}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(810),document.addEventListener("animationstart",(function(e){"onautofillstart"===e.animationName?o(e.target):i(e.target)}),!0),document.addEventListener("input",(function(e){"insertReplacementText"!==e.inputType&&"data"in e?i(e.target):o(e.target)}),!0)}()}();var l=function(){"use strict";function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.o=this._m({s:"form",e:"pl-none",a:!0,i:{p:"div.widget",l:"label",i:["input","select","textarea"],e:['[type="checkbox"]','[type="radio"]','[type="range"]','[type="hidden"]','[type="submit"]','[type="file"]','[class="rsas-field"]']},onFocus:function(){},onBlur:function(){},onChange:function(){},onInit:function(){}},e||{}),this.f=document.querySelectorAll(this.o.s),this.f.length&&(this.c={i:"pl-init",p:"pl-parent",f:"_focus",b:"_blur",c:"_changed",l:"_filled"},this._i())}var a,u,l;return a=t,(u=[{key:"_m",value:function(t,i){return o(new Set([].concat(o(Object.keys(t)),o(Object.keys(i))))).reduce((function(o,a){return n(n({},o),{},r({},a,"object"===e(t[a])?Object.assign({},t[a],i[a]):i[a]?i[a]:t[a]))}),{})}},{key:"_i",value:function(){var t=this;this.b=[];var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}(this.f);try{var a=function(){var e=n.value;if(t.o.e&&e.classList.contains(t.o.e))return{v:void 0};if(e.hasOwnProperty("phl"))return"continue";e.classList.add(t.c.i),e.phl={i:!0,p:[]};var r=e.querySelectorAll(t.o.i.i.join(","));if(!r.length)return"continue";var i=o(r).filter((function(e){return!e.matches(t.o.i.e.join(","))}));i.forEach((function(n){t._r(e,n),t._u(n)})),t.b.push({f:e,p:i})};for(r.s();!(n=r.n()).done;){var c=a();if("continue"!==c&&"object"===e(c))return c.v}}catch(e){r.e(e)}finally{r.f()}this.o.onInit.call(this)}},{key:"_r",value:function(e,t){var n=this,r=new Event("change");t.addEventListener("onautocomplete",(function(e){e.currentTarget.dispatchEvent(r)}),!1),t.addEventListener("focus",(function(e){n._e(e)}),!1),t.addEventListener("blur",(function(e){n._e(e)}),!1),t.addEventListener("change",(function(e){n._e(e)}),!1);var o=t.closest(this.o.i.p);o.classList.add(this.c.p),t.phl={l:o.querySelector(this.o.i.l),p:o},e.phl.p.push(t)}},{key:"_e",value:function(e){var t=e.target,n=e.target.phl.p;switch(e.type){case"focus":n.classList.add(this.c.f),n.classList.remove(this.c.b),this.o.onFocus.call(this,e,t);break;case"blur":n.classList.add(this.c.b),n.classList.remove(this.c.f),this.o.onBlur.call(this,e,t);break;case"change":n.classList.add(this.c.c),this.o.onChange.call(this,e,t),"select"===t.nodeName.toLowerCase()&&this._u(t)}"select"!==t.nodeName.toLowerCase()&&this._u(t)}},{key:"_u",value:function(e,t){var n=this,r=e.phl.p,o=e.nodeName.toLowerCase(),i="select"===o&&0===e.value.length&&e.options[e.selectedIndex].innerHTML.replace(/&nbsp;/g," ").trim(),a="select"===o&&"&nbsp;"===e.options[e.selectedIndex].innerHTML;if(0===e.value.length&&!e.matches(":-webkit-autofill")&&!i&&""===e.placeholder||a?r.classList.remove(this.c.l):r.classList.add(this.c.l),t&&this.o.a)var c=0,u=setInterval((function(){n._u(e),5==c++&&clearInterval(u)}),50)}},{key:"add",value:function(e,t){this._r(e,t)}}])&&c(a.prototype,u),l&&c(a,l),Object.defineProperty(a,"prototype",{writable:!1}),t}();document.addEventListener("DOMContentLoaded",(function(){window.pl=new l}))})();