import { Component } from '@angular/core';
import { Observable, OperatorFunction, Subject, concatMap, interval, map, of, take, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsoleService } from '../service/console.service';

@Component({
  template : ''
})
export abstract class HigherorderMapBaseComponent {

  protected readonly outer = new Subject<Observable<[number,string]>>();

  constructor(console : ConsoleService) {
    this.outer.pipe(
      this.getConcatOperator(),
      takeUntilDestroyed()
    ).subscribe(s => {
      console.println(s);
    })
  }

  abstract getConcatOperator() : OperatorFunction<Observable<[number, string]>, string>;

  nextInner(value: string) {
    this.outer.next(timer(100,1000)
      .pipe(
        take(10),
        map(n => [n,value])
      )
    );
  }

}
