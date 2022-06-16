import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private httpCliente: HttpClient) {}

  searchCountriesByName(countryQuery: string): Observable<CountryResponse[]> {
    const url: string = `${this.apiUrl}/name/${countryQuery}`;
    return this.httpCliente
      .get<CountryResponse[]>(url, { params: this.getParamsTable() })
      .pipe(catchError(() => of<CountryResponse[]>([])));
  }

  searchCountriesByCapitalCityName(
    capitalCityQuery: string
  ): Observable<CountryResponse[]> {
    const url: string = `${this.apiUrl}/capital/${capitalCityQuery}`;
    return this.httpCliente
      .get<CountryResponse[]>(url, { params: this.getParamsTable() })
      .pipe(catchError(() => of<CountryResponse[]>([])));
  }

  getCountryByAlphaId(alphaId: string): Observable<CountryResponse | null> {
    const url: string = `${this.apiUrl}/alpha/${alphaId}`;
    return this.httpCliente
      .get<CountryResponse | null>(url, { params: this.getParamsTable() })
      .pipe(catchError(() => of(null)));
  }

  getCountriesByRegionalBloc(
    regionalBloc: string
  ): Observable<CountryResponse[]> {
    const url: string = `${this.apiUrl}/regionalbloc/${regionalBloc}`;
    return this.httpCliente
      .get<CountryResponse[]>(url, { params: this.getParamsTable() })
      .pipe(catchError(() => of<CountryResponse[]>([])));
  }

  private getParamsTable(): HttpParams {
    return new HttpParams().set('fiels', 'name,alpha2code,flag,population');
  }
}
