import { Component, Input } from '@angular/core';
import { Hero } from '../../pages/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent {
  @Input()
  public hero!: Hero;
}
