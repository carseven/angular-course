import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  public heroeNames: string[] = ['Superman', 'Spiderman', 'Batman', 'Ironman'];
  public deletedHeroeNames: string[] = [];

  public deleteHeroeName(): void {
    if (this.heroeNames.length <= 0) return;

    const deletedHeroName = this.heroeNames.pop();
    if (deletedHeroName === undefined) return;
    this.deletedHeroeNames.push(deletedHeroName);
  }
}
