/*! VueStringFilter v.1.3.0 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueStringFilter",[],t):"object"==typeof exports?exports.VueStringFilter=t():e.VueStringFilter=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={install:function(e){e.filter("lowercase",function(e){return e.toString().toLowerCase()}),e.filter("uppercase",function(e){return e.toString().toUpperCase()}),e.filter("capitalize",function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),e.filter("titlecase",function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}),e.filter("slug",function(e){return e.toString().toLowerCase().trim().replace(/&/g,"-and-").replace(/[\s\W-]+/g,"-").replace(/--+/g,"-").replace(/^-+|-+$/g,"")}),e.filter("truncate",function(e,t){return e.length<t?e:e.slice(0,t)+"..."}),e.filter("cut",function(e,t){return e.length<t?e:e.slice(0,t)}),e.filter("remove",function(e,t){return e.replace(new RegExp(t,"g"),"")}),e.filter("remove_first",function(e,t){return e.replace(t,"")}),e.filter("replace",function(e,t){return e.replace(new RegExp(e,"g"),t)}),e.filter("replace_first",function(e,t){return e.replace(e,t)}),e.filter("append",function(e,t){return e.toString().concat(t)})}};t.default=n}])});
//# sourceMappingURL=VueStringFilter.bundle.js.map