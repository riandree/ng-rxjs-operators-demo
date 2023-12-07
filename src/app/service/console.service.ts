import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ConsoleCommand = {
  command : "PRINT" | "CLEAR";
  param? : string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private consoleCommand$ = new Subject<ConsoleCommand>();

  get commands() {
    return this.consoleCommand$.asObservable();
  }

  println(...msg : any[]) {
    this.print(...msg);
    this.print('\n');
  }

  print(...msg : any[]) {
    this.consoleCommand$.next({
      command : "PRINT",
      param : msg.join(" ")
    });
  }

  clear() {
    this.consoleCommand$.next({ command : "CLEAR" });
  }
}
