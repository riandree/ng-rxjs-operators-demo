import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ConsoleService, ConsoleCommand } from '../service/console.service';

@Component({
  selector: 'rxd-console',
  standalone: true,
  imports: [],
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent {

  text = "";

  constructor(private console : ConsoleService) {
    console.commands.pipe(
      takeUntilDestroyed()
    ).subscribe(command => this.handleCommand(command));
  }

  private handleCommand(command : ConsoleCommand) {
    switch(command.command) {
      case "PRINT" : 
            this.text+=command.param;
            break;
      case "CLEAR" : 
            this.text = "";
            break;
    }
  }

  clear() {
    this.console.clear();
  }

}
