import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, catchError, interval, map, of, take } from 'rxjs';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'rxd-catch-error',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css'
})
export class CatchErrorComponent {

    constructor(console : ConsoleService) {
      console.println("Welcome to 'catchError'\n");

      interval(1000).pipe(
        catchError(() => {
          throw new Error();
        }),
        takeUntilDestroyed()
      ).subscribe((element) => {
        console.println("from throwing Observable",element);
      });

      interval(1000).pipe(
        catchError(() => {
          return of("I think something happened")
        }),
        takeUntilDestroyed()
      ).subscribe((element) => {
        console.println("from error transforming Observable",element);
      });

      interval(1000).pipe(
        catchError(() => {
          return EMPTY;
        }),
        takeUntilDestroyed()
      ).subscribe((element) => {
        console.println("from ignoring Observable",element);
      });
    }
}
