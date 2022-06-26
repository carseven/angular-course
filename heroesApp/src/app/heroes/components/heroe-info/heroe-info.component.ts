import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../pages/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',
  styles: [],
})
export class HeroeInfoComponent {
  @Input()
  public hero!: Hero;

  @Input()
  public goBackUrl: string[] = [];

  constructor(private readonly router: Router) {}

  goBack(): void {
    this.router.navigate(this.goBackUrl);
  }
}
