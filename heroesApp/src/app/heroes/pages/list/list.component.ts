import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getheroes()
      .subscribe((response: Hero[]) => (this.heroes = response));
  }
}
