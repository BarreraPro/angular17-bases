
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  // imports: [],
  template: `

<h3>Counter: {{ counter  }}</h3>

<button (click)="incrementBy(1)" >+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="incrementBy(-1)">-1</button>


<hr>
  `
})
export class CounterComponent{

  public counter: number = 5;

  incrementBy( value: number): void { // este es el metodo
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}

