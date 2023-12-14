import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { OperatorFunction, scan } from 'rxjs';
import { AggregateBaseComponent } from '../aggregate-base.component';

@Component({
  selector: 'rxd-scan',
  standalone: true,
  imports: [DemoHeaderComponent, FormsModule, CommonModule ],
  templateUrl: './scan.component.html'
})
export class ScanComponent extends AggregateBaseComponent {
  
  override getAggregateOperators(): { op: OperatorFunction<number, number>; desc: string; }[] {
    return [{ op : scan((acc,n) => acc+n), desc : "scan"}];
  }

}
