import { Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
    {
        path : "catcherror",
        title : "catchError",
        data : { operatorClass : "error" },
        loadComponent : () => import("./catch-error/catch-error.component").then(m => m.CatchErrorComponent)
    },
    {
        path : "concatmap",
        title : "concatMap",
        data : { operatorClass : "higherorder" },
        loadComponent : () => import("./higherorder/concat-map/concat-map.component").then(m => m.ConcatMapComponent)
    },
    {
        path : "mergemap",
        title : "mergeMap", 
        data : { operatorClass : "higherorder" },
        loadComponent : () => import("./higherorder/merge-map/merge-map.component").then(m => m.MergeMapComponent)
    },
    {
        path : "switchmap",
        title : "switchMap",
        data : { operatorClass : "higherorder" },
        loadComponent : () => import("./higherorder/switch-map/switch-map.component").then(m => m.SwitchMapComponent)
    },
    {
        path : "exhaustmap",
        title : "exhaustMap",
        data : { operatorClass : "higherorder" },
        loadComponent : () => import("./higherorder/exhaust-map/exhaust-map.component").then(m => m.ExhaustMapComponent)
    },
    {
        path : "distinctuntilchanged",
        title : "distinctUntilChanged",
        data : { operatorClass : "filter" },
        loadComponent : () => import("./distinct-unitl-changed/distinct-unitl-changed.component").then(m => m.DistinctUnitlChangedComponent)
    },
    {
        path : "reduce",
        title : "reduce", 
        data : { operatorClass : "aggregate" },
        loadComponent : () => import("./aggregates/reduce/reduce.component").then(m => m.ReduceComponent)    },
    {
        path : "scan",
        title : "scan", 
        data : { operatorClass : "aggregate" },
        loadComponent : () => import("./aggregates/scan/scan.component").then(m => m.ScanComponent)
    },
    {
        path : "minmaxcount",
        title : "min/max/count", 
        data : { operatorClass : "aggregate" },
        loadComponent : () => import("./aggregates/min-max-count/min-max-count.component").then(m => m.MinMaxCountComponent)
    },
    {
        path : "share",
        title : "share",
        loadComponent : () => import("./share/share.component").then(m => m.ShareComponent)
    },
    {
        path : "sharereplay",
        title : "shareReplay",
        component : DummyComponent
    },
    {
        path : "startwith",
        title : "startWith",
        component : DummyComponent
    },
    {
        path : "withlatestfrom",
        title : "withLatestFrom",
        component : DummyComponent
    }
];
