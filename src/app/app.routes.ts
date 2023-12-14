import { Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ConcatMapComponent } from './higherorder/concat-map/concat-map.component';
import { DistinctUnitlChangedComponent } from './distinct-unitl-changed/distinct-unitl-changed.component';
import { MergeMapComponent } from './higherorder/merge-map/merge-map.component';
import { SwitchMapComponent } from './higherorder/switch-map/switch-map.component';
import { ExhaustMapComponent } from './higherorder/exhaust-map/exhaust-map.component';
import { ReduceComponent } from './aggregates/reduce/reduce.component';
import { MinMaxCountComponent } from './aggregates/min-max-count/min-max-count.component';
import { ScanComponent } from './aggregates/scan/scan.component';
import { DummyComponent } from './dummy/dummy.component';

export const routes: Routes = [
    {
        path : "catcherror",
        title : "catchError",
        data : { operatorClass : "error" },
        component : CatchErrorComponent
    },
    {
        path : "concatmap",
        title : "concatMap",
        data : { operatorClass : "higherorder" },
        component : ConcatMapComponent
    },
    {
        path : "mergemap",
        title : "mergeMap", 
        data : { operatorClass : "higherorder" },
        component : MergeMapComponent
    },
    {
        path : "switchmap",
        title : "switchMap",
        data : { operatorClass : "higherorder" },
        component : SwitchMapComponent
    },
    {
        path : "exhaustmap",
        title : "exhaustMap",
        data : { operatorClass : "higherorder" },
        component : ExhaustMapComponent
    },
    {
        path : "distinctuntilchanged",
        title : "distinctUntilChanged",
        data : { operatorClass : "filter" },
        component : DistinctUnitlChangedComponent
    },
    {
        path : "reduce",
        title : "reduce", 
        data : { operatorClass : "aggregate" },
        component : ReduceComponent
    },
    {
        path : "scan",
        title : "scan", 
        data : { operatorClass : "aggregate" },
        component : ScanComponent
    },
    {
        path : "minmaxcount",
        title : "min/max/count", 
        data : { operatorClass : "aggregate" },
        component : MinMaxCountComponent
    },
    {
        path : "share",
        title : "share",
        component : DummyComponent
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
