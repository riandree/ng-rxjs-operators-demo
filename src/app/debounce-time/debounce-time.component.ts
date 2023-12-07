import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';

@Component({
  selector: 'rxd-debounce-time',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.css'
})
export class DebounceTimeComponent {

}
