import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { Observable, OperatorFunction, concatMap, map, } from 'rxjs';
import { HigherorderMapBaseComponent } from '../higherorder.component';

@Component({
  selector: 'rxd-concat-map',
  standalone: true,
  imports: [ DemoHeaderComponent, CommonModule ],
  templateUrl: './concat-map.component.html',
  styleUrls: []
})
export class ConcatMapComponent extends HigherorderMapBaseComponent{

  readonly description = `
  This example shows the behavior of 'concatMap'.`;

  override getConcatOperator(): OperatorFunction<Observable<[number, string]>, string> {
    return concatMap((no : Observable<[number,string]>) => {
      return no.pipe(map(([n,s]) => `${n}-${s}`))
    });
  }

}
