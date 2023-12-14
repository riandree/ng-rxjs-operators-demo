import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { Observable, OperatorFunction, map, switchMap } from 'rxjs';
import { HigherorderMapBaseComponent } from '../higherorder.component';

@Component({
  selector: 'rxd-merge-map',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './switch-map.component.html',
  styleUrls: []
})
export class SwitchMapComponent extends HigherorderMapBaseComponent {

  readonly description = `This example shows the behavior of 'switchMap'.`;

  override getConcatOperator(): OperatorFunction<Observable<[number, string]>, string> {
    return switchMap((no : Observable<[number,string]>) => {
      return no.pipe(map(([n,s]) => `${n}-${s}`))
    });
  }

}
