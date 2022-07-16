import { Component, OnInit } from '@angular/core';
import { Pagination } from '../interfaces/gifs.interfaces';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  get pages(): number[] {
    const pagination = this.gifService.gifDataGrid.pagination;
    return this.getPages(pagination);
  }

  get pagination(): Pagination {
    return this.gifService.gifDataGrid.pagination;
  }

  get hasDataLoad() {
    return this.gifService.hasDataLoaded;
  }

  get searchQueryTitle() {
    return this.gifService.getLastQueryFromLocalStorage();
  }

  constructor(private gifService: GifService) {}

  ngOnInit(): void {
    this.setSelectorValue(0);
  }

  public setSelectorValue(changeIncrement: number): void {
    const page = this.pagination.offset;

    const followingPage = page + changeIncrement;

    const lastSearchQuery = this.gifService.getLastQueryFromLocalStorage();
    if (lastSearchQuery) {
      this.gifService.searchGif(lastSearchQuery, +followingPage);
    }
    this.scrollToSearchInput();
  }

  private getPages(pagination: Pagination): number[] {
    const pages = [];
    for (let i = 0; i <= pagination.total_count - 1; i++) {
      pages.push(i);
    }
    return pages;
  }

  private scrollToSearchInput(): void {
    const element = document.getElementById('searchInput');
    if (element) {
      const offset = 45;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      location.href = '#searchInput';
    }
  }
}
