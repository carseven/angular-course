import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  public hero!: Hero;

  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly heroService: HeroesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        pluck('id'),
        switchMap((heroId: string) => this.heroService.getHeroById(heroId))
      )
      .subscribe((hero: Hero) => (this.hero = hero));
  }
}
