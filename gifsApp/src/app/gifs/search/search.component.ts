import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('searchInput')
  private searchInput!: ElementRef<HTMLInputElement>;
  constructor(private gifService: GifService) {}

  search(searchInputValue: string): void {
    const query = searchInputValue?.trim().toLocaleLowerCase();
    if (!query) {
      this.searchInput.nativeElement.value = '';
      return;
    }

    this.gifService.searchGif(query);

    this.gifService.saveQueryToHistory(query);
    this.searchInput.nativeElement.value = '';
  }
}
