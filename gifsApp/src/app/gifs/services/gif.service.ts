import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Gif, GifsSearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  public gifSearchResults: Gif[] = [];
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
    this._searchHistory.slice(0, 10);

    localStorage.setItem(
      this.LOCAL_STORAGE_HISTORY_KEY,
      JSON.stringify(this._searchHistory)
    );
    localStorage.setItem(this.LOCAL_STORAGE_LAST_SEARCH_KEY, searchQuery);
  }

  searchGif(query: string) {
    const params = new HttpParams()
      .set('api_key', this.GIPHY_API_KEY)
      .set('q', query)
      .set('limit', 25)
      .set('offset', 0)
      .set('rating', 'g')
      .set('lang', 'en');

    this.httpClient
      .get<GifsSearchResponse>(`${this.GIPHY_URL}/search`, { params })
      .pipe(map((response: GifsSearchResponse) => response.data))
      .subscribe((gifs: Gif[]) => (this.gifSearchResults = gifs));
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
      const lastSearchQuery = localStorage.getItem(
        this.LOCAL_STORAGE_LAST_SEARCH_KEY
      );

      if (lastSearchQuery) {
        this.searchGif(lastSearchQuery);
      }
    } catch (error) {
      localStorage.removeItem(this.LOCAL_STORAGE_LAST_SEARCH_KEY);
    }
  }
}
