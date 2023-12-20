import{a as y}from"./chunk-KAT2M4H3.js";import{a as M}from"./chunk-KL4EIJ7V.js";import{$a as f,I as m,Ma as b,Pa as x,Ya as t,Za as n,_a as l,bb as v,db as g,eb as e,ga as c,ka as u,kb as E,la as d,ma as h,q as p}from"./chunk-JXFUZVYF.js";var k=(()=>{let i=class i extends y{constructor(){super(...arguments),this.description="This example shows the behavior of 'exhaustMap'."}getConcatOperator(){return m(a=>a.pipe(p(([o,r])=>`${o}-${r}`)))}};i.\u0275fac=(()=>{let a;return function(r){return(a||(a=h(i)))(r||i)}})(),i.\u0275cmp=c({type:i,selectors:[["rxd-exhaust-map"]],standalone:!0,features:[b,E],decls:23,vars:1,consts:[["title","exhaustMap",3,"desc"],["type","text"],["input",""],[3,"click"]],template:function(o,r){if(o&1){let S=f();l(0,"rxd-demo-header",0),t(1,"p"),e(2," This example facilitates an observable of observables. I.e. each event of the "),t(3,"em"),e(4,'"outer"'),n(),e(5," observable is an observable itself that, in this case, represents a limited stream of numbers. "),n(),t(6,"p"),e(7," The pipe of the outer observable uses the "),t(8,"b"),e(9,"exhaustMap"),n(),e(10,` operator to map the numbers by turning them into a string and concatenating the value of the textfield below.
`),n(),t(11,"p"),e(12,` Each time this button below is pressed a new "inner" observable providing the sequence 0..9 at an interval of 1 second is put into the stream of the "outer" observable.
`),n(),l(13,"input",1,2),e(15,"\xA0"),t(16,"button",3),v("click",function(){u(S);let w=g(14);return d(r.nextInner(w.value))}),e(17,"next(interval(1000).pipe(take(10)))"),n(),t(18,"p"),e(19," The "),t(20,"b"),e(21,"exhaustMap"),n(),e(22,`-Operator subscribes to incoming "inner" observable as long as there exists no active subscription of an earlier "inner" observable. If there is still an active subscription to an "inner" observable any incoming new "inner" observables are ignored and discarded.
`),n()}o&2&&x("desc",r.description)},dependencies:[M],encapsulation:2});let s=i;return s})();export{k as ExhaustMapComponent};
