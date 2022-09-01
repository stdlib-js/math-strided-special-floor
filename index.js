// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).floor={})}(this,(function(t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,i=Object.prototype,o=i.toString,u=i.__defineGetter__,a=i.__defineSetter__,f=i.__lookupGetter__,l=i.__lookupSetter__;e=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,e){var r,c,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(t,n)||l.call(t,n)?(r=t.__proto__,t.__proto__=i,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),s="get"in e,p="set"in e,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,n,e.get),p&&a&&a.call(t,n,e.set),t};var c=e;function s(t,n,e){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=Math.floor;function g(t){return p(t)===t}var y=4294967295;function m(t){return"number"==typeof t}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;function w(t,n){return null!=t&&h.call(t,n)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var E=v()?function(t){var n,e,r;if(null==t)return b.call(t);e=t[j],n=w(t,j);try{t[j]=void 0}catch(n){return b.call(t)}return r=b.call(t),n?t[j]=e:delete t[j],r}:function(t){return b.call(t)},O=Number,_=O.prototype.toString;var T=v();function x(t){return"object"==typeof t&&(t instanceof O||(T?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===E(t)))}function S(t){return m(t)||x(t)}s(S,"isPrimitive",m),s(S,"isObject",x);var I=Number.POSITIVE_INFINITY,P=O.NEGATIVE_INFINITY;function V(t){return t<I&&t>P&&g(t)}function F(t){return m(t)&&V(t)}function k(t){return x(t)&&V(t.valueOf())}function A(t){return F(t)||k(t)}function B(t){return F(t)&&t>=0}function N(t){return k(t)&&t.valueOf()>=0}function M(t){return B(t)||N(t)}function R(t){return Object.keys(Object(t))}s(A,"isPrimitive",F),s(A,"isObject",k),s(M,"isPrimitive",B),s(M,"isObject",N);var L,G=void 0!==Object.keys;function U(t){return"[object Arguments]"===E(t)}L=function(){return U(arguments)}();var Y=L;function C(t){return"string"==typeof t}var X=String.prototype.valueOf;var H=v();function W(t){return"object"==typeof t&&(t instanceof String||(H?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object String]"===E(t)))}function q(t){return C(t)||W(t)}function D(t){return t!=t}function z(t){return m(t)&&D(t)}function J(t){return x(t)&&D(t.valueOf())}function K(t){return z(t)||J(t)}s(q,"isPrimitive",C),s(q,"isObject",W),s(K,"isPrimitive",z),s(K,"isObject",J);var Q=Object.prototype.propertyIsEnumerable;var Z=!Q.call("beep","0");function $(t,n){var e;return null!=t&&(!(e=Q.call(t,n))&&Z&&q(t)?!z(n=+n)&&F(n)&&n>=0&&n<t.length:e)}var tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===E(t)};var nt=Y?U:function(t){return null!==t&&"object"==typeof t&&!tt(t)&&"number"==typeof t.length&&g(t.length)&&t.length>=0&&t.length<=4294967295&&w(t,"callee")&&!$(t,"callee")},et=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}s(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!tt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(rt));var it=$((function(){}),"prototype"),ot=!$({toString:null},"toString");function ut(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&g(t.length)&&t.length>=0&&t.length<=9007199254740991}function at(t,n,e){var r,i;if(!ut(t)&&!C(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!F(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(K(n)){for(;i<r;i++)if(K(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var st=v();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(st?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===E(t)))}function gt(t){return lt(t)||pt(t)}function yt(){return new Function("return this;")()}s(gt,"isPrimitive",lt),s(gt,"isObject",pt);var mt="object"==typeof self?self:null,dt="object"==typeof window?window:null,vt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},bt="object"==typeof vt?vt:null;var ht=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(mt)return mt;if(dt)return dt;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")}(),wt=ht.document&&ht.document.childNodes,jt=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var Ot=/^\s*function\s*([^(]*)/i;function _t(t){var n,e,r,i;if(("Object"===(e=E(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ot.exec(r.toString()))return n[1]}return rt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}s(Et,"REGEXP",Ot);var Tt="function"==typeof ft||"object"==typeof jt||"function"==typeof wt?function(t){return _t(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?_t(t).toLowerCase():n};function xt(t){return t.constructor&&t.constructor.prototype===t}var St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===Tt(It))return!1;for(t in It)try{-1===at(St,t)&&w(It,t)&&null!==It[t]&&"object"===Tt(It[t])&&xt(It[t])}catch(t){return!0}return!1}(),Vt="undefined"!=typeof window;var Ft,kt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ft=G?function(){return 2!==(R(arguments)||"").length}(1,2)?function(t){return nt(t)?R(et.call(t)):R(t)}:R:function(t){var n,e,r,i,o,u,a;if(i=[],nt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!w(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!rt(t))return i;e=it&&r}for(o in t)e&&"prototype"===o||!w(t,o)||i.push(String(o));if(ot)for(n=function(t){if(!1===Vt&&!Pt)return xt(t);try{return xt(t)}catch(t){return!1}}(t),a=0;a<kt.length;a++)u=kt[a],n&&"constructor"===u||!w(t,u)||i.push(String(u));return i};var At=Ft;function Bt(t){return"function"===Tt(t)}var Nt,Mt=Object.getPrototypeOf;Nt=Bt(Object.getPrototypeOf)?Mt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===E(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Rt=Nt;var Lt=Object.prototype;function Gt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!tt(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Rt(t))}(t),!n||!w(t,"constructor")&&w(n,"constructor")&&Bt(n.constructor)&&"[object Function]"===E(n.constructor)&&w(n,"isPrototypeOf")&&Bt(n.isPrototypeOf)&&(n===Lt||function(t){var n;for(n in t)if(!w(t,n))return!1;return!0}(t)))}function Ut(t,n){var e,r,i,o,u,a,f,l=!0;if(!rt(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Gt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(w(n,"duplicates")&&!lt(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=At(t)).length,u={},l)for(f=0;f<r;f++)w(u,o=t[i=e[f]])?(a=u[o],tt(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<r;f++)u[t[i=e[f]]]=i;return u}var Yt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Yt.slice()}var Xt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ht(){return Xt.slice()}function Wt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function qt(t,n,e){c(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}s(Ht,"enum",Wt),function(t,n){var e,r,i;for(e=At(n),i=0;i<e.length;i++)qt(t,r=e[i],n[r])}(Ht,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Dt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function zt(){return{bool:Dt.bool,int8:Dt.int8,uint8:Dt.uint8,uint8c:Dt.uint8c,int16:Dt.int16,uint16:Dt.uint16,int32:Dt.int32,uint32:Dt.uint32,int64:Dt.int64,uint64:Dt.uint64,float32:Dt.float32,float64:Dt.float64,complex64:Dt.complex64,complex128:Dt.complex128,binary:Dt.binary,generic:Dt.generic,notype:Dt.notype,userdefined_type:Dt.userdefined_type}}s(Ct,"enum",zt),function(t,n){var e,r,i;for(e=At(n),i=0;i<e.length;i++)qt(t,r=e[i],n[r])}(Ct,zt());var Jt=Ut(zt(),{duplicates:!1});var Kt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Qt(t){var n=typeof t;return"string"===n?null===function(t){var n=Kt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Jt[t];return"string"==typeof n?n:null}(t):null}function Zt(t,n,e){var r,i,o,u,a,f,l,c,s;if(!("object"==typeof(s=t)&&null!==s&&"number"==typeof s.length&&g(s.length)&&s.length>=0&&s.length<=y))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!B(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!B(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,c=2*n,l=0;l<=f;l++)0===l?l===c?o.push("() => ("):o.push("("):l===f?l===c?o.push(") => ()"):o.push(")"):l===c?o.push(") => ("):l%2==1?o.push(""):o.push(", ");for(l=0;l<r;l++)null===(u=Qt(t[l]))&&(u=t[l]),o[2*(c=l%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function $t(t,n,e,r){return s(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),s(e,"nin",t.nin),s(e,"nout",t.nout),function(t,n,e){c(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Zt(n,t.nin,t.nout)})),e}var tn={nargs:7,nin:1,nout:1},nn=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,11,6,15,4,4,4,6,4,10,4,11,4,15,1,1,1,4,1,6,1,10,1,11,1,15,7,7,7,11,7,15,5,6,5,5,5,7,5,10,5,11,5,15,2,4,2,6,2,2,2,3,2,5,2,7,2,10,2,11,2,15,3,4,3,6,3,2,3,3,3,5,3,7,3,10,3,11,3,15];function en(t){return F(t)&&t>0}function rn(t){return k(t)&&t.valueOf()>0}function on(t){return en(t)||rn(t)}s(on,"isPrimitive",en),s(on,"isObject",rn);var un=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&g(t.length)&&t.length>=0&&t.length<=y}(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Bt);function an(t){return Math.abs(t)}function fn(t,n,e,r,i,o,u,a,f){var l,c,s,p;for(l=o,s=0;s<t;s++){for(c=f,p=0;p<n&&e[l+p*i]===u[c];p++)c+=a;if(p===n)return s;l+=r}return-1}function ln(t,n,e,r,i,o){var u,a,f,l,c,s;if(Bt(t))s=t;else if(!un(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!ut(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!on(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!B(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!B(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!F(l=n.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=t.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===r)a=!1;else{if(4*f+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var p,g,y,m,d,v,b,h,w,j,E,O;if((v=arguments.length)!==r){if(v<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!F(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(d=[h],m=[],E=1;E<r;E+=u)m.push(arguments[E]);for(p=[],E=3;E<r;E+=u){if(!F(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(g=[],E=4;E<r;E+=u){if(!B(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");g.push(w)}for(y=[],E=2;E<r;E+=u){if(!ut(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=g[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*an(p[O])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");y.push(w)}if((b=fn(l,f,n,f,1,0,m,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||t[b];e?a?j(y,d,p,g,e[b]):j(y,d,p,e[b]):a?j(y,d,p,g):j(y,d,p);if(1===o)return y[f-1];if(0===o)return;return y.slice(i)}}function cn(t,n){return t[n]}function sn(t,n){return t.get(n)}function pn(t,n,e){t[n]=e}function gn(t,n,e){t.set(e,n)}function yn(t,n,e,r){var i,o,u,a;return(u=t[0]).get&&u.set&&(i=sn),(a=t[1]).get&&a.set&&(o=gn),i||o?function(t,n,e,r,i){var o,u,a,f,l,c,s,p,g,y;if(!((g=n[0])<=0))for(l=(a=e[0])<0?(1-g)*a:0,c=(f=e[1])<0?(1-g)*f:0,s=t[0],p=t[1],o=r[0],u=r[1],y=0;y<g;y++)u(p,c,i(o(s,l))),l+=a,c+=f}(t,n,e,[i=i||cn,o=o||pn],r):function(t,n,e,r){var i,o,u,a,f,l,c,s;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,a=(o=e[1])<0?(1-c)*o:0,f=t[0],l=t[1],s=0;s<c;s++)l[a]=r(f[u]),u+=i,a+=o}(t,n,e,r)}function mn(t,n,e,r,i){var o,u,a,f;return(a=t[0]).get&&a.set&&(o=sn),(f=t[1]).get&&f.set&&(u=gn),o||u?function(t,n,e,r,i,o){var u,a,f,l,c,s,p,g,y,m;if(!((y=n[0])<=0))for(c=r[0],s=r[1],f=e[0],l=e[1],p=t[0],g=t[1],u=i[0],a=i[1],m=0;m<y;m++)a(g,s,o(u(p,c))),c+=f,s+=l}(t,n,e,r,[o=o||cn,u=u||pn],i):function(t,n,e,r,i){var o,u,a,f,l,c,s,p;if(!((s=n[0])<=0))for(a=r[0],f=r[1],o=e[0],u=e[1],l=t[0],c=t[1],p=0;p<s;p++)c[f]=i(l[a]),a+=o,f+=u}(t,n,e,r,i)}s(yn,"ndarray",mn);var dn=Ut(zt(),{duplicates:!1});var vn=zt();function bn(t){var n=typeof t;return"number"===n?function(t){var n=dn[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=vn[t];return"number"==typeof n?n:null}(t):null}var hn=Math.floor;function wn(t){return t}var jn=[p,p,hn,p,p,p,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn,wn],En=ln(yn,nn,jn,tn.nargs,tn.nin,tn.nout);function On(t,n,e,r,i,o,u){return En(t,bn(n),e,r,bn(i),o,u)}var _n=ln(mn,nn,jn,tn.nargs+tn.nin+tn.nout,tn.nin,tn.nout);function Tn(t,n,e,r,i,o,u,a,f){return _n(t,bn(n),e,r,i,bn(o),u,a,f)}s(On,"ndarray",Tn),$t(tn,nn,On,!1),$t(tn,nn,On.ndarray,!0),t.default=On,t.ndarray=Tn,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
