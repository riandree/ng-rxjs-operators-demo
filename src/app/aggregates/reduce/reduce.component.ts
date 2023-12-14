import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { OperatorFunction, reduce } from 'rxjs';
import { AggregateBaseComponent } from '../aggregate-base.component';

@Component({
  selector: 'rxd-reduce',
  standalone: true,
  imports: [DemoHeaderComponent, FormsModule, CommonModule ],
  templateUrl: './reduce.component.html'
})
export class ReduceComponent extends AggregateBaseComponent {
  
  override getAggregateOperators(): { op: OperatorFunction<number, number>; desc: string; }[] {
    return [{ op : reduce((acc,n) => acc+n), desc : "reduce"}];
  }

}
