import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';

@Component({
  selector: 'rxd-concat-map',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent {

}
