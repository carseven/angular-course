import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-counter',
  template: `
    <h1 style="text-align: center; font-size: 50px">Counter</h1>
    <h2 style="text-align: center">{{ counter }}</h2>
    <div style="display: flex; justify-content: center; gap: 40px">
      <button (click)="counter = increaseNumber(counter, counterInterval)">
        Increase +{{ counterInterval }}
      </button>
      <button (click)="counter = 0">Reset</button>
      <button (click)="counter = decreaseNumber(counter, counterInterval)">
        Decrease -{{ counterInterval }}
      </button>
    </div>
  `,
})
export class CounterComponent {
  @Input()
  public counter: number = 0;

  @Input()
  public counterInterval: number = 5;

  public increaseNumber(value: number, counterInterval: number): number {
    return value + counterInterval;
  }

  public decreaseNumber(value: number, counterInterval: number): number {
    return value - counterInterval;
  }
}
