import{a as T}from"./chunk-KL4EIJ7V.js";import{$a as C,A as b,F as j,Ha as _,O as p,Pa as x,Ya as t,Za as s,_a as a,bb as u,db as v,eb as i,ga as y,i as h,ka as f,kb as k,la as w,q as d,wb as E,x as S,xb as H,y as m}from"./chunk-JXFUZVYF.js";var F=(()=>{let n=class n{constructor(r){this.description=`
      This example has two 'interval(1000)' Observables for each of which errors
      are handled differently.
    `,this.firstErrorSubject=new h,this.secondErrorSubject=new h,r.println(`Welcome to 'catchError'
`),m(1e3).pipe(p(this.firstErrorSubject),b(e=>{throw r.println(`
catchError Handler catched error :`+e),r.println("A new Error() is thrown now which will not be handled and will therefore END this observable"),r.println("and render the button you just pressed disfunctional."),r.println(`NOW : throw new Error("Error thrown from within 'catchError' : "+e);`),r.println(`Have a look at the browser console to see the unhandled error there.
`),new Error("Error thrown from within 'catchError' : "+e)}),E()).subscribe(e=>{r.println("from throwing Observable",e)}),m(1e3).pipe(p(this.secondErrorSubject),d(e=>e),b(e=>(r.println(`
catchError Handler catched error :`+e),r.println("A new Observable is returned that replaces the old one."),r.println("The new observable will emit 10 events at an interval of 0.1s"),r.println("After the 10 Events have been emitted the observable will complete."),S(0,100).pipe(j(10),d(o=>` ${o+1}/10 event from new observable after catching error ${e}`)))),E()).subscribe(e=>{r.println("from error transforming Observable",e)})}};n.\u0275fac=function(e){return new(e||n)(_(H))},n.\u0275cmp=y({type:n,selectors:[["rxd-catch-error"]],standalone:!0,features:[k],decls:19,vars:1,consts:[["title","catchError",3,"desc"],["type","text"],["firstMsg",""],[3,"click"],["secondMsg",""]],template:function(e,o){if(e&1){let g=C();a(0,"rxd-demo-header",0),t(1,"p")(2,"label"),i(3," The first observable stream handles errors by catching the error and throwing a new Error-Object by means of the Javascript 'throw' statement from within the 'catchError' Handler. "),t(4,"p"),a(5,"input",1,2),t(7,"button",3),u("click",function(){f(g);let c=v(6);return w(o.firstErrorSubject.error(c.value))}),i(8,"inject Error into first reactive stream"),s()(),i(9," This error thrown from within the catchError-Handler will become an rxjs error-event and could be handled by catchError-handlers further down the pipeline but since the are no other error-handlers it will be catched by rxjs resulting in the observable stream being ended and the error logged on the browser console. "),s()(),a(10,"hr"),t(11,"p")(12,"label"),i(13," The second observable stream handles errors by catching the error and returning a new observable. In this case the new observable will emit 10 events at an interval of 0.1s and complete afterwards. "),t(14,"p"),a(15,"input",1,4),t(17,"button",3),u("click",function(){f(g);let c=v(16);return w(o.secondErrorSubject.error(c.value))}),i(18,"inject Error into second reactive stream"),s()()()()}e&2&&x("desc",o.description)},dependencies:[T],encapsulation:2});let l=n;return l})();export{F as CatchErrorComponent};