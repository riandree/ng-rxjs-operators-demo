import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { Subject, timer, withLatestFrom } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'rxd-with-latest-from',
  standalone: true,
  imports: [ DemoHeaderComponent, FormsModule ],
  templateUrl: './with-latest-from.component.html'
})
export class WithLatestFromComponent {

  currentLastValue = "42";

  values : string[] = [];

  private lastValues$=new Subject<string>();

  constructor(consoleService : ConsoleService) {
    this.lastValues$.pipe(
      takeUntilDestroyed()      
    ).subscribe(v => {
      this.currentLastValue = v;
    });

    timer(0,300).pipe(
      takeUntilDestroyed(),
      withLatestFrom(this.lastValues$)      
    ).subscribe(v => {
      consoleService.print(`(${v})  `);
    });
    this.lastValues$.next(this.currentLastValue);
    this.values.push(this.currentLastValue);
  } 

  newLastValue() {
    this.lastValues$.next(this.currentLastValue);
    this.values.push(this.currentLastValue);
  }

}