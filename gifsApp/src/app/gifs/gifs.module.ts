import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GifsPageComponent } from './gifs-page/gifts-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
