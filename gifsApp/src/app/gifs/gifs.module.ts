import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GifsPageComponent } from './gifs-page/gifts-page.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GiftTitleShortenerPipe } from './pipes/gift-title-shortener.pipe';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultsComponent,
    GiftTitleShortenerPipe,
    PaginationComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
