import{a as y,b as S,c as b,e as x}from"./chunk-GPN5BPXS.js";import"./chunk-NSKHDLLC.js";import{a as M}from"./chunk-KL4EIJ7V.js";import{Ga as s,Ha as f,Pa as V,Va as L,Wa as v,X as d,Xa as g,Ya as n,Za as a,_a as C,bb as u,eb as l,fb as _,ga as h,i as c,kb as F,wb as m,x as p,xb as w}from"./chunk-JXFUZVYF.js";function T(i,e){if(i&1&&(n(0,"li"),l(1),a()),i&2){let $=e.$implicit;s(1),_($)}}var H=(()=>{let e=class e{constructor(o){this.currentLastValue="42",this.values=[],this.lastValues$=new c,this.lastValues$.pipe(m()).subscribe(t=>{this.currentLastValue=t}),p(0,300).pipe(m(),d(this.lastValues$)).subscribe(t=>{o.print(`(${t})  `)}),this.lastValues$.next(this.currentLastValue),this.values.push(this.currentLastValue)}newLastValue(){this.lastValues$.next(this.currentLastValue),this.values.push(this.currentLastValue)}};e.\u0275fac=function(t){return new(t||e)(f(w))},e.\u0275cmp=h({type:e,selectors:[["rxd-with-latest-from"]],standalone:!0,features:[F],decls:8,vars:1,consts:[["title","withLatestFrom"],["type","text",3,"ngModel","ngModelChange"],[2,"margin-left","0.3em",3,"click"]],template:function(t,r){t&1&&(l(0,`ssss
`),C(1,"rxd-demo-header",0),n(2,"input",1),u("ngModelChange",function(D){return r.currentLastValue=D}),a(),n(3,"button",2),u("click",function(){return r.newLastValue()}),l(4,"set new 'last' Value"),a(),n(5,"ul"),v(6,T,2,1,"li",null,L),a()),t&2&&(s(2),V("ngModel",r.currentLastValue),s(4),g(r.values))},dependencies:[M,x,y,S,b],encapsulation:2});let i=e;return i})();export{H as WithLatestFromComponent};
