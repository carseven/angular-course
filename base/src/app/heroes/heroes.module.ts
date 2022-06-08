import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './heroe/heroe.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@NgModule({
  declarations: [HeroComponent, HeroesListComponent],
  exports: [HeroesListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
