import{Ba as m,Ca as C,Da as b,Ga as a,Ja as _,Qa as I,Y as c,Z as S,aa as D,ba as f,ca as h,fa as v,ga as g,jb as M,za as p}from"./chunk-6IM2VTGI.js";var w=null;function F(){return w}function Ne(i){w||(w=i)}var B=class{},k=new D("DocumentToken"),x=(()=>{let n=class n{historyGo(e){throw new Error("Not implemented")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>(()=>h($))(),providedIn:"platform"});let i=n;return i})();var $=(()=>{let n=class n extends x{constructor(){super(),this._doc=h(k),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return F().getBaseHref(this._doc)}onPopState(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,r){this._history.pushState(e,t,r)}replaceState(e,t,r){this._history.replaceState(e,t,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>(()=>new n)(),providedIn:"platform"});let i=n;return i})();function N(i,n){if(i.length==0)return n;if(n.length==0)return i;let s=0;return i.endsWith("/")&&s++,n.startsWith("/")&&s++,s==2?i+n.substring(1):s==1?i+n:i+"/"+n}function L(i){let n=i.match(/#|\?|$/),s=n&&n.index||i.length,e=s-(i[s-1]==="/"?1:0);return i.slice(0,e)+i.slice(s)}function d(i){return i&&i[0]!=="?"?"?"+i:i}var y=(()=>{let n=class n{historyGo(e){throw new Error("Not implemented")}};n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c({token:n,factory:()=>(()=>h(z))(),providedIn:"root"});let i=n;return i})(),U=new D("appBaseHref"),z=(()=>{let n=class n extends y{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??h(k).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return N(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${t}${r}`:t}pushState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.pushState(e,t,o)}replaceState(e,t,r,u){let o=this.prepareExternalUrl(r+d(u));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};n.\u0275fac=function(t){return new(t||n)(f(x),f(U,8))},n.\u0275prov=c({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var j=(()=>{let n=class n{constructor(e){this._subject=new _,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=H(L(O(t))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+d(t))}normalize(e){return n.stripTrailingSlash(G(this._basePath,O(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",r=null){this._locationStrategy.pushState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(t)),r)}replaceState(e,t="",r=null){this._locationStrategy.replaceState(r,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+d(t)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)})),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(r=>r(e,t))}subscribe(e,t,r){return this._subject.subscribe({next:e,error:t,complete:r})}};n.normalizeQueryParams=d,n.joinWithSlash=N,n.stripTrailingSlash=L,n.\u0275fac=function(t){return new(t||n)(f(y))},n.\u0275prov=c({token:n,factory:()=>V(),providedIn:"root"});let i=n;return i})();function V(){return new j(f(y))}function G(i,n){if(!i||!n.startsWith(i))return n;let s=n.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:n}function O(i){return i.replace(/\/index.html$/,"")}function H(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function $e(i,n){n=encodeURIComponent(n);for(let s of i.split(";")){let e=s.indexOf("="),[t,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(t.trim()===n)return decodeURIComponent(r)}return null}var E=/\s+/,R=[],Ue=(()=>{let n=class n{constructor(e,t,r,u){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=r,this._renderer=u,this.initialClasses=R,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(E):R}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==t&&(r.changed=!0,r.enabled=t),r.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],r=e[1];r.changed?(this._toggleClass(t,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),r.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(E).forEach(r=>{t?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};n.\u0275fac=function(t){return new(t||n)(a(C),a(b),a(p),a(m))},n.\u0275dir=g({type:n,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"},standalone:!0});let i=n;return i})();var A=class{constructor(n,s,e,t){this.$implicit=n,this.ngForOf=s,this.index=e,this.count=t}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ze=(()=>{let n=class n{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,t,r){this._viewContainer=e,this._template=t,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(!1)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((r,u,o)=>{if(r.previousIndex==null)t.createEmbeddedView(this._template,new A(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(u===null?void 0:u);else if(u!==null){let l=t.get(u);t.move(l,o),T(l,r)}});for(let r=0,u=t.length;r<u;r++){let l=t.get(r).context;l.index=r,l.count=u,l.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let u=t.get(r.currentIndex);T(u,r)})}static ngTemplateContextGuard(e,t){return!0}};n.\u0275fac=function(t){return new(t||n)(a(I),a(M),a(C))},n.\u0275dir=g({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=n;return i})();function T(i,n){i.context.$implicit=n.item}var je=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=v({type:n}),n.\u0275inj=S({});let i=n;return i})(),Ve="browser",Y="server";function Ge(i){return i===Y}var P=class{};export{F as a,Ne as b,B as c,k as d,y as e,j as f,$e as g,Ue as h,ze as i,je as j,Ve as k,Ge as l,P as m};
