import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ConsoleComponent } from './console/console.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ConsoleService } from './service/console.service';

@Component({
  selector: 'rxd-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, ConsoleComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-rxjs-operators-demo';

  constructor(router : Router, console : ConsoleService) {
    router.events.pipe(
      filter((e) => e.type === 0),
      takeUntilDestroyed()
    ).subscribe(() => {
      console.clear();
    });
  }
}
