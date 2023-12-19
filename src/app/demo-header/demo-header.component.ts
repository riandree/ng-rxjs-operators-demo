import { Component, Input } from '@angular/core';

@Component({
  selector: 'rxd-demo-header',
  standalone: true,
  imports: [],
  templateUrl: './demo-header.component.html'
})
export class DemoHeaderComponent {

  @Input({ required : true })
  title! : string;

  @Input()
  desc? : string;

}
