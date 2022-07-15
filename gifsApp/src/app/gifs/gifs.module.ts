import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GifsPageComponent } from './gifs-page/gifts-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { GiftTitleShortenerPipe } from './pipes/gift-title-shortener.pipe';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent, GiftTitleShortenerPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
