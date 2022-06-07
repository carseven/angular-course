import { Component } from '@angular/core';

@Component({
  selector: 'base-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public surName: string = 'Ejemplo';
  public age: number = 23;

  get fullName() {
    return `${this.name} - ${this.surName}`;
  }
}
