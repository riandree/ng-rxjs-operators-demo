import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { Observable, Subject, concatMap, interval, map, of, take, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'rxd-concat-map',
  standalone: true,
  imports: [ DemoHeaderComponent, CommonModule ],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {

  readonly description = `
  This example shows the behavior of 'concatMap'.`;

  readonly outer = new Subject<Observable<[number,string]>>();

  constructor(console : ConsoleService) {
    this.outer.pipe(
      concatMap((no : Observable<[number,string]>) => {
        return no.pipe(map(([n,s]) => `${n}-${s}`))
      }),
      takeUntilDestroyed()
    ).subscribe(s => {
      console.println(s);
    })
  }

  nextInner(value: string) {
    this.outer.next(timer(100,1000)
      .pipe(
        take(10),
        map(n => [n,value])
      )
    );
  }
}
