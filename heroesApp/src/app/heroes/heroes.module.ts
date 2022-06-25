import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [CreateComponent, SearchComponent, ListComponent, HeroeComponent, HomeComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
