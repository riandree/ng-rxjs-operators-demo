import { Component, DestroyRef } from '@angular/core';
import { OperatorFunction, Subject, reduce, tap } from 'rxjs';
import { ConsoleService } from '../service/console.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import zip from 'lodash/zip';

type AggregateOperator = {
   op : OperatorFunction<number,number>,
   desc : string
}

@Component({
  template: ''
})
export abstract class AggregateBaseComponent {

  currentValue = "";

  lastValues : Array<number> = [];

  subjects : Subject<number>[] = [];
  finishable = false;

  private aggregateOps : AggregateOperator[] = [];

  constructor(private console : ConsoleService, private destroyref : DestroyRef) {
    this.aggregateOps = this.getAggregateOperators();
    this.setupSubject();
  }

  abstract getAggregateOperators() : AggregateOperator[];

  private setupSubject() {
    const self=this;
    this.subjects = [...new Array(this.aggregateOps.length)].map(() => new Subject<number>());  
    const subjectsWithOperators=zip(this.subjects,this.aggregateOps) as Array<[Subject<number>,AggregateOperator]>;

    console.log(this.subjects);

    subjectsWithOperators.forEach(([subject,operator]) => {
      subject.pipe(
        tap(() => { 
          self.finishable=true; 
        }),
        operator.op,
        takeUntilDestroyed(self.destroyref)
      ).subscribe({
        next(v) {
          self.console.println(`[Pipeline with ${operator.desc}] Received Value -> ${v}`)
        },
        complete() {
          self.console.println(`[Pipeline with ${operator.desc}] COMPLETED !!`);
        },
      });
    });
  }

  next(v : string) {
    const iv=parseInt(v);
    this.subjects.forEach(s => s.next(iv));
    this.currentValue="";
    this.lastValues.push(iv);
  }

  complete() {
    this.subjects.forEach(s => s.complete());
    this.lastValues=[];
    this.finishable=false;
    this.setupSubject();
  }

}
