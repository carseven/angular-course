import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private readonly heroesService: HeroesService) {}

  ngOnInit(): void {}

  search() {
    this.heroesService
      .getHeroesContainsName(this.searchQuery.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    this.selectedHero = event.option.value as Hero;
    this.searchQuery = this.selectedHero!.superhero;
  }
}
