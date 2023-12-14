import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { Observable, OperatorFunction, map, mergeMap } from 'rxjs';
import { HigherorderMapBaseComponent } from '../higherorder.component';

@Component({
  selector: 'rxd-merge-map',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './merge-map.component.html',
  styleUrls: []
})
export class MergeMapComponent extends HigherorderMapBaseComponent {

  readonly description = `This example shows the behavior of 'mergeMap'.`;

  override getConcatOperator(): OperatorFunction<Observable<[number, string]>, string> {
    return mergeMap((no : Observable<[number,string]>) => {
      return no.pipe(map(([n,s]) => `${n}-${s}`))
    });
  }

}
