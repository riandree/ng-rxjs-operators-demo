import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class MylibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: MylibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: MylibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: MylibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MylibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: MylibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: MylibComponent, isStandalone: true, selector: "lib-mylib", ngImport: i0, template: `
    <p>
      mylib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: MylibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-mylib', standalone: true, imports: [], template: `
    <p>
      mylib works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of mylib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MylibComponent, MylibService };
//# sourceMappingURL=mylib.mjs.map
