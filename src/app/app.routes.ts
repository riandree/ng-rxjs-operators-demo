import { Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUnitlChangedComponent } from './distinct-unitl-changed/distinct-unitl-changed.component';

export const routes: Routes = [
    {
        path : "catcherror",
        title : "catchError",
        component : CatchErrorComponent
    },
    {
        path : "concatmap",
        title : "concatMap",
        component : ConcatMapComponent
    },
    {
        path : "debouncetime",
        title : "debounceTime",
        component : DebounceTimeComponent
    },
    {
        path : "distinctuntilchanged",
        title : "distinctUntilChanged",
        component : DistinctUnitlChangedComponent
    }
];
