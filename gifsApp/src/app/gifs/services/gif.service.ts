import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { GifDataGrid, GifResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifDataGrid: GifDataGrid = {
    data: [],
    pagination: {
      count: 0,
      offset: 0,
      total_count: 0,
    },
  };
  private _searchHistory: string[] = [];
  private LOCAL_STORAGE_HISTORY_KEY = 'searchHistory';
  private LOCAL_STORAGE_LAST_SEARCH_KEY = 'lastSearchQuery';
  private GIPHY_URL = 'https://api.giphy.com/v1/gifs';
  private GIPHY_API_KEY = 'ulds2F3ZDomLZuBKoLXNZW5x9FFLr8PM';

  get searchHistory() {
    return [...this._searchHistory];
  }

  constructor(private httpClient: HttpClient) {
    this.loadHistoryFromLocalStorage();
    this.loadLastQuerySearch();
  }

  saveQueryToHistory(searchQuery: string): void {
    if (this._searchHistory.includes(searchQuery)) {
      return;
    }
    this._searchHistory.unshift(searchQuery);
    this._searchHistory = this._searchHistory.slice(0, 10);

    localStorage.setItem(
      this.LOCAL_STORAGE_HISTORY_KEY,
      JSON.stringify(this._searchHistory)
    );
    localStorage.setItem(this.LOCAL_STORAGE_LAST_SEARCH_KEY, searchQuery);
  }

  searchGif(query: string, offset: number = 0) {
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('q', query)
      .set('limit', 25)
      .set('offset', offset)
      .set('rating', 'g')
      .set('lang', 'en');

    this.httpClient
      .get<GifResponse>(`${this.GIPHY_URL}/search`, { params })
      .pipe(
        map((gifResponse: GifResponse) => {
          return {
            data: gifResponse.data,
            pagination: gifResponse.pagination,
          } as GifDataGrid;
        }),
        catchError(() => {
          return of({
            data: [],
            pagination: {
              count: 0,
              offset: 0,
              total_count: 0,
            },
          } as GifDataGrid);
        })
      )
      .subscribe(
        (gifDataGrid: GifDataGrid) => (this.gifDataGrid = gifDataGrid)
      );
  }

  getMetaUrlGiphy(gifId: string): string {
    return `https://media.giphy.com/media/${gifId}/giphy-downsized-large.gif`;
  }

  public getLastQueryFromLocalStorage(): string | null {
    return localStorage.getItem(this.LOCAL_STORAGE_LAST_SEARCH_KEY);
  }

  private loadHistoryFromLocalStorage(): void {
    try {
      const localStorageSearchHistory = JSON.parse(
        localStorage.getItem(this.LOCAL_STORAGE_HISTORY_KEY) || ''
      );

      if (localStorageSearchHistory) {
        this._searchHistory = localStorageSearchHistory;
      }
    } catch (error) {
      localStorage.removeItem(this.LOCAL_STORAGE_HISTORY_KEY);
    }
  }

  private loadLastQuerySearch(): void {
    try {
      const lastSearchQuery = this.getLastQueryFromLocalStorage();

      if (lastSearchQuery) {
        this.searchGif(lastSearchQuery);
      }
    } catch (error) {
      localStorage.removeItem(this.LOCAL_STORAGE_LAST_SEARCH_KEY);
    }
  }
}
