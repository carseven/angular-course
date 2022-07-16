import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { Pagination } from '../interfaces/gifs.interfaces';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    pages: [0],
  });

  get pages(): number[] {
    const pagination = this.gifService.gifDataGrid.pagination;
    return this.getPages(pagination);
  }

  get pagination(): Pagination {
    return this.gifService.gifDataGrid.pagination;
  }

  constructor(private gifService: GifService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subsOnChangePageSelector();
    this.setSelectorValue(0);
  }

  public setSelectorValue(changeIncrement: number): void {
    const page = this.form.get('pages')?.value;
    this.form.reset({
      pages: page ? page + changeIncrement : 0,
    });
  }

  private subsOnChangePageSelector(): void {
    this.form
      .get('pages')
      ?.valueChanges.pipe(
        tap((offset: string) => {
          const lastSearchQuery =
            this.gifService.getLastQueryFromLocalStorage();
          if (lastSearchQuery) {
            this.gifService.searchGif(lastSearchQuery, +offset);
          }
          this.scrollToSearchInput();
        })
      )
      .subscribe();
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
