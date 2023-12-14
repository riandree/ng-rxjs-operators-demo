import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AggregateBaseComponent } from '../aggregate-base.component';
import { OperatorFunction, count, max, min } from 'rxjs';

@Component({
  selector: 'rxd-min-max-count',
  standalone: true,
  imports: [DemoHeaderComponent, FormsModule, CommonModule ],
  templateUrl: './min-max-count.component.html'
})
export class MinMaxCountComponent extends AggregateBaseComponent{

  override getAggregateOperators(): { op: OperatorFunction<number, number>; desc: string; }[] {
    return [
      {
        op : min(),
        desc : "min"
      },
      {
        op : max(),
        desc : "max"
      },
      {
        op : count(),
        desc : "count"
      },
    ];
  }


}

