import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoHeaderComponent } from '../../demo-header/demo-header.component';
import { MonoTypeOperatorFunction, shareReplay } from 'rxjs';
import { ShareBaseComponent } from '../share.base.component';

@Component({
  selector: 'rxd-share-replay',
  standalone: true,
  imports: [ DemoHeaderComponent, RouterLink ],
  templateUrl: './share-replay.component.html'
})
export class ShareReplayComponent extends ShareBaseComponent {

  description = "explains the 'shareReplay' operator.";

  override getShareOperator(): MonoTypeOperatorFunction<number> {
    return shareReplay();
  }

}

