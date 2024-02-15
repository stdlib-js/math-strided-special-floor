"use strict";var a=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var n=a(function(rr,B){B.exports={nargs:7,nin:1,nout:1}});var s=a(function(er,C){C.exports=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,11,6,15,4,4,4,6,4,10,4,11,4,15,1,1,1,4,1,6,1,10,1,11,1,15,7,7,7,11,7,15,5,6,5,5,5,7,5,10,5,11,5,15,2,4,2,6,2,2,2,3,2,5,2,7,2,10,2,11,2,15,3,4,3,6,3,2,3,3,3,5,3,7,3,10,3,11,3,15]});var d=a(function(ar,m){
var t=require('@stdlib/math-base-special-floor/dist'),D=require('@stdlib/math-base-special-floorf/dist'),r=require('@stdlib/math-base-special-identity/dist'),F=[t,t,D,t,t,t,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r];m.exports=F
});var g=a(function(ir,j){
var G=require('@stdlib/strided-dispatch/dist'),H=require('@stdlib/strided-base-unary/dist'),x=require('@stdlib/strided-base-dtype-resolve-enum/dist'),I=s(),y=n(),J=d(),K=G(H,I,J,y.nargs,y.nin,y.nout);function L(i,e,o,q,c,f,p){return K(i,x(e),o,q,x(c),f,p)}j.exports=L
});var _=a(function(tr,R){
var M=require('@stdlib/strided-dispatch/dist'),N=require('@stdlib/strided-base-unary/dist').ndarray,h=require('@stdlib/strided-base-dtype-resolve-enum/dist'),Q=s(),u=n(),S=d(),T=M(N,Q,S,u.nargs+u.nin+u.nout,u.nin,u.nout);function U(i,e,o,q,c,f,p,z,A){return T(i,h(e),o,q,c,h(f),p,z,A)}R.exports=U
});var k=a(function(ur,b){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/strided-base-meta-data-props/dist'),O=n(),P=s(),v=g(),W=_();V(v,"ndarray",W);E(O,P,v,!1);E(O,P,v.ndarray,!0);b.exports=v
});var X=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=k(),l,w=Y(X(__dirname,"./native.js"));w instanceof Error?l=Z:l=w;module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
