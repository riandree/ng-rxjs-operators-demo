import { Component, DestroyRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoHeaderComponent } from '../demo-header/demo-header.component';
import { startWith, take, takeUntil, timer } from 'rxjs';
import { ConsoleService } from '../service/console.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'rxd-start-with',
  standalone: true,
  imports: [ DemoHeaderComponent, FormsModule ],
  templateUrl: './start-with.component.html',
  styleUrl : './start-with.component.css'
})
export class StartWithComponent {

    startItems : string[] = [];
    currentItem : string = "";
 
    constructor(private consoleService : ConsoleService, private destroyRef : DestroyRef) {}

    addItem() {
      this.startItems.push(this.currentItem);
      this.currentItem = "";
    }

    startNew() {
      timer(0,500).pipe(
        startWith(...this.startItems),
        take(15),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(s => {
        this.consoleService.println(s)
      });
      this.startItems.length=0;
    }    
  
}
