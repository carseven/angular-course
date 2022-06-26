import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/heroe-card/hero-card.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';

@NgModule({
  declarations: [
    CreateComponent,
    SearchComponent,
    ListComponent,
    HeroeComponent,
    HomeComponent,
    HeroCardComponent,
    HeroImagePipe,
    HeroeInfoComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
})
export class HeroesModule {}
