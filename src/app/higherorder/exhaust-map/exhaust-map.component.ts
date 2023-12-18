import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { Observable, OperatorFunction, exhaustMap, map } from 'rxjs';
import { HigherorderMapBaseComponent } from '../higherorder.component';

@Component({
  selector: 'rxd-exhaust-map',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './exhaust-map.component.html',
  styleUrls: []
})
export class ExhaustMapComponent extends HigherorderMapBaseComponent {

  readonly description = `This example shows the behavior of 'exhaustMap'.`;

  override getConcatOperator(): OperatorFunction<Observable<[number, string]>, string> {
    return exhaustMap((no : Observable<[number,string]>) => {
      return no.pipe(map(([n,s]) => `${n}-${s}`))
    });
  }

}