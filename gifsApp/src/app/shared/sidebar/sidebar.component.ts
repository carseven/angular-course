import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get searchedQueriesHistory() {
    return this.gifService.searchHistory;
  }
  constructor(private gifService: GifService) {}

  searchGif(query: string): void {
    this.gifService.searchGif(query);
  }
}
