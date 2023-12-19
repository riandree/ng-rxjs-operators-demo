import { Component } from '@angular/core';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { MonoTypeOperatorFunction, Observable, interval, share } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConsoleService } from '../../service/console.service';
import { ShareBaseComponent } from '../share.base.component';

@Component({
  selector: 'rxd-share',
  standalone: true,
  imports: [ DemoHeaderComponent ],
  templateUrl: './share.component.html'
})
export class ShareComponent extends ShareBaseComponent {

  description = "explains the 'share' operator and how it's linked to multicast() and publish() as well as ConnectableObservable.";

  override getShareOperator(): MonoTypeOperatorFunction<number> {
    return share();
  }

}
