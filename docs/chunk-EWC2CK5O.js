import{a as O}from"./chunk-TN3P4HXQ.js";import{a as x}from"./chunk-7OOZIZJO.js";import"./chunk-RQIQXLRU.js";import{$a as l,Na as m,Qa as p,S as b,Za as n,_a as t,ab as v,cb as f,eb as C,fb as e,ga as c,ka as u,la as d,lb as S,ma as h}from"./chunk-FMOREFH7.js";var T=(()=>{let r=class r extends O{constructor(){super(...arguments),this.description="explains the 'share' operator and how it's linked to multicast() and publish() as well as ConnectableObservable."}getShareOperator(){return b()}};r.\u0275fac=(()=>{let i;return function(a){return(i||(i=h(r)))(a||r)}})(),r.\u0275cmp=c({type:r,selectors:[["rxd-share"]],standalone:!0,features:[m,S],decls:36,vars:1,consts:[["title","share",3,"desc"],[3,"click"],["type","text","placeholder","please type a name"],["input",""]],template:function(o,a){if(o&1){let w=v();l(0,"rxd-demo-header",0),n(1,"p"),e(2," This demo has a source observable producing events on a regular basis using "),n(3,"b"),e(4,"timeout(500)"),t(),e(5,". This observable is multicasted using the "),n(6,"b"),e(7,"shared"),t(),e(8,` operator (see below). Each click on the button below adds a new subscriber to the "shared" observable.
`),t(),n(9,"p"),e(10,` A ConnectableObservable encapsulates a 'Source' Observable but does not subscribe to it until its own 'connect' method is called. Furthermore the ConnectableObservable internally uses a Subject to multicast upstream events to a number of downstream subscribers. For example, it is possible to wrap a ConnectableObservable around a Cold Observable, then subscribe different Subscribers to the ConnectableObservable (which are forwarded by the ConnectableObservable to the enclosed Subject), and only initiate the subscription to the inner Cold Observable when all Subscribers of the ConnectableObservable are set up. When the ConnectableObservables connect method is finally called the inner subject is subscribed to the observable wrapped by the ConnectableObservable.
`),t(),e(11," To setup a ConnectableObservable one can either use ConnectableObservables constructor directly or an operator like "),n(12,"ul")(13,"li")(14,"b"),e(15,"multicast"),t(),e(16," expects a Subject or a factory producing a subject and creates a ConnectableObservable that will subscribe it's inner Subject to the upstream observable thereby multicasting the upstream events"),t(),n(17,"li")(18,"b"),e(19,"publish"),t(),e(20," wraps the source observable in a 'Connectable Observable' and generates the necessary Subject for it."),t()(),n(21,"pre"),e(22,`        Whether via the constructor of the 'ConnectableObservable', via the multicast or publish operator, in all cases, 'connect' must be called on the
        delivered ConnectableObservable to start processing the Source Observable.
        Using the `),n(23,"b"),e(24,"refCount()"),t(),e(25,` operator, it is possible to do this automatically. The operator ensures that when at least one Subscriber is present,
        the 'connect' method of the ConnectableObservable is called, and also that when there are 0 Subscribers, the ConnectableObservable is unsubscribed.
    `),t(),n(26,"ul")(27,"li")(28,"b"),e(29,"share"),t(),e(30,"is the combination of publish() and refCount, i.e., it delivers a 'Normal' Observable that multicasts its events to all Subscribers."),t()(),n(31,"button",1),f("click",function(){u(w);let y=C(35);return d(a.addSubscriber(y.value))}),e(32,"Add (another) subscriber named ..."),t(),e(33,"\xA0"),l(34,"input",2,3)}o&2&&p("desc",a.description)},dependencies:[x],encapsulation:2});let s=r;return s})();export{T as ShareComponent};
