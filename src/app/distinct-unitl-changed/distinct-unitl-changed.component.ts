import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { ConsoleService } from '../service/console.service';
import { Subject, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'rxd-distinct-unitl-changed',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './distinct-unitl-changed.component.html'
})
export class DistinctUnitlChangedComponent {

  readonly description = `
    This example allows to manually put Values into an observable stream to show the effect of the distictUntilChanged-Operator.
  `;

  private subject = new Subject<string>();

  constructor(console : ConsoleService) {
    this.subject
      .pipe(
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe(v => {
        console.println("received value from observable stream -> "+v);
      });
  }

  nextValue(value : string) {
    this.subject.next(value);
  }
}
