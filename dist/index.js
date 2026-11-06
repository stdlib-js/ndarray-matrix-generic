"use strict";var u=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var n=u(function(l,a){
var s=require('@stdlib/assert-is-arraybuffer/dist'),g=require('@stdlib/ndarray-matrix-ctor/dist').factory,m=require('@stdlib/error-tools-fmtprodmsg/dist'),t=g("generic");function o(){var r;if(arguments.length===0)return new t;if(r=arguments[0],s(r))throw new TypeError(m("invalid argument. First argument must be either a shape, an integer, an array-like object, or an iterable. Value: `%s`.",r));return arguments.length===1?new t(r):arguments.length===2?new t(r,arguments[1]):new t(r,arguments[1],arguments[2])}a.exports=o
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
