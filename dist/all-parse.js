!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.allParse=t():e.allParse=t()}(this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}e.r(t),e.d(t,{default:()=>r});const r=function e(t,r=JSON.parse){return o(t,"Array")&&t.forEach((t=>{e(t)})),o(t,"Object")&&Object.keys(t).forEach((n=>{const c=t[n];if(function(e){return o(e,"String")}(c))try{t[n]=r(c),e(t[n])}catch{}else e(c)})),t};return t})()));