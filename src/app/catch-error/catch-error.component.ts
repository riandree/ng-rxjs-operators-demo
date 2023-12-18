import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConnectableObservable, EMPTY, Subject, catchError, interval, map, merge, mergeAll, mergeWith, of, publish, share, take, timer, withLatestFrom } from 'rxjs';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'rxd-catch-error',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './catch-error.component.html'
})
export class CatchErrorComponent {

    readonly description = `
      This example has two 'interval(1000)' Observables for each of which errors
      are handled differently.
    `;
    
    readonly firstErrorSubject = new Subject();
    readonly secondErrorSubject = new Subject();

    constructor(console : ConsoleService) {
      console.println("Welcome to 'catchError'\n");

      interval(1000).pipe(
        mergeWith(this.firstErrorSubject),
        catchError((e) => {
          console.println("\ncatchError Handler catched error :"+e);
          console.println("A new Error() is thrown now which will not be handled and will therefore END this observable");
          console.println("and render the button you just pressed disfunctional.");
          console.println("NOW : throw new Error(\"Error thrown from within 'catchError' : \"+e);");
          console.println("Have a look at the browser console to see the unhandled error there.\n");
          throw new Error("Error thrown from within 'catchError' : "+e);
        }),
        takeUntilDestroyed()
      ).subscribe((element) => {
        console.println("from throwing Observable",element);
      });

      interval(1000).pipe(
        mergeWith(this.secondErrorSubject),
        map(v => v),
        catchError((e) => {
          console.println("\ncatchError Handler catched error :"+e);
          console.println("A new Observable is returned that replaces the old one.");
          console.println("The new observable will emit 10 events at an interval of 0.1s");
          console.println("After the 10 Events have been emitted the observable will complete.");
          return timer(0,100).pipe(take(10),map(n => ` ${n+1}/10 event from new observable after catching error ${e}`))
        }),
        takeUntilDestroyed()
      ).subscribe((element) => {
        console.println("from error transforming Observable",element);
      });
    }
}
