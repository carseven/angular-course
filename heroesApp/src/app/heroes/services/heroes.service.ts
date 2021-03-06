import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../pages/interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {}

  getheroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(heroId: string): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${heroId}`);
  }

  getHeroesContainsName(searchQuery: string): Observable<Hero[]> {
    const params: Params = new HttpParams()
      .set('q', searchQuery)
      .set('_limit', 6);
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`, { params });
  }

  createHero(heroe: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, heroe);
  }

  updateHero(heroe: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(
      `${this.baseUrl}/heroes/${heroe.id}`,
      heroe
    );
  }

  deleteHero(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
