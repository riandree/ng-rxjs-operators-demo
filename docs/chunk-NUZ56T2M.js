import{a as w}from"./chunk-CKMIPC5U.js";import{d as g}from"./chunk-VH7UP2WO.js";import"./chunk-NSKHDLLC.js";import{a as v}from"./chunk-KL4EIJ7V.js";import{$a as f,Ma as h,Pa as b,S as p,Ya as n,Za as r,_a as l,bb as y,db as x,eb as e,ga as c,ka as m,kb as S,la as d,ma as u}from"./chunk-JXFUZVYF.js";var I=(()=>{let t=class t extends w{constructor(){super(...arguments),this.description="explains the 'shareReplay' operator."}getShareOperator(){return p()}};t.\u0275fac=(()=>{let o;return function(i){return(o||(o=u(t)))(i||t)}})(),t.\u0275cmp=c({type:t,selectors:[["rxd-share-replay"]],standalone:!0,features:[h,S],decls:18,vars:1,consts:[["title","share",3,"desc"],["routerLink","/share"],[3,"click"],["type","text","placeholder","please type a name"],["input",""]],template:function(s,i){if(s&1){let C=f();l(0,"rxd-demo-header",0),n(1,"p"),e(2," This demo has a source observable producing events on a regular basis using "),n(3,"b"),e(4,"timeout(500)"),r(),e(5,". This observable is multicasted using the "),n(6,"b"),e(7,"shared"),r(),e(8,` operator (see below). Each click on the button below adds a new subscriber to the "shared" observable.
`),r(),n(9,"a",1),e(10,"See 'share' for an explanation of the basic functionality"),r(),e(11,`. In contrast to 'share' the 'shareReplay'
operator 'replays' all events of the source when a new subscription is made.
`),n(12,"p")(13,"button",2),y("click",function(){m(C);let E=x(17);return d(i.addSubscriber(E.value))}),e(14,"Add (another) subscriber named ..."),r(),e(15,"\xA0"),l(16,"input",3,4),r()}s&2&&b("desc",i.description)},dependencies:[v,g],encapsulation:2});let a=t;return a})();export{I as ShareReplayComponent};
