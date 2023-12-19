import { Component } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, interval, share, shareReplay } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsoleService } from '../service/console.service';

@Component({template : ''})
export abstract class ShareBaseComponent {

  private shared$! : Observable<number>;

  constructor(private consoleService : ConsoleService) {
    this.shared$=interval(1000).pipe(
      takeUntilDestroyed(),
      this.getShareOperator()
    );
  }

  abstract getShareOperator() : MonoTypeOperatorFunction<number>;

  addSubscriber(msg : string) {
    this.shared$.subscribe(n => this.consoleService.println(`${msg} received ${n}`));
  }
}
