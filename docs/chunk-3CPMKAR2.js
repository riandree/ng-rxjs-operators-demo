import{a as g}from"./chunk-KL4EIJ7V.js";import{$a as b,H as d,Ha as h,Pa as v,Ya as s,Za as o,_a as a,bb as f,db as x,eb as e,ga as u,i as c,ka as p,kb as w,la as m,wb as C,xb as y}from"./chunk-JXFUZVYF.js";var E=(()=>{let t=class t{constructor(n){this.description=`
    This example allows to manually put Values into an observable stream to show the effect of the distictUntilChanged-Operator.
  `,this.subject=new c,this.subject.pipe(d(),C()).subscribe(i=>{n.println("received value from observable stream -> "+i)})}nextValue(n){this.subject.next(n)}};t.\u0275fac=function(i){return new(i||t)(h(y))},t.\u0275cmp=u({type:t,selectors:[["rxd-distinct-unitl-changed"]],standalone:!0,features:[w],decls:12,vars:1,consts:[["title","distinctUntilChanged",3,"desc"],["type","text"],["input",""],[3,"click"]],template:function(i,l){if(i&1){let k=b();a(0,"rxd-demo-header",0),s(1,"p"),e(2," Fill in a value "),a(3,"input",1,2),e(5," and press this "),s(6,"button",3),f("click",function(){p(k);let U=x(4);return m(l.nextValue(U.value))}),e(7,"button"),o(),e(8,` to put new values into the observable stream of this example. Notice what happens if you provide the same value several times.
`),o(),e(9,`
The observable that will receive the values is configured with a pipe like this:
`),s(10,"pre"),e(11,`    subject.pipe(
        distinctUntilChanged(),          // makes sure no two consecutive values are the same
        takeUntilDestroyed()             // makes sure observable is unsubscribed when demo component is destroyed
    ).subscribe(v = console.println(v))  // write received values to the textarea of this demo
`),o()}i&2&&v("desc",l.description)},dependencies:[g],encapsulation:2});let r=t;return r})();export{E as DistinctUnitlChangedComponent};
