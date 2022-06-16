import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CountryComponent {
  public countries: CountryResponse[] = [];
  public lastQuerySearch: string = '';
  public countriesSuggestions: CountryResponse[] = [];
  public debounceInputSearch: string = '';

  constructor(private countryService: CountryService) {}

  searchCountry(inputCountry: string): void {
    this.countryService
      .searchCountriesByName(inputCountry)
      .subscribe((response: CountryResponse[]) => {
        this.countries = response;
        this.lastQuerySearch = inputCountry;
        this.countriesSuggestions = [];
      });
  }

  suggestions(inputCountry: string): void {
    this.debounceInputSearch = inputCountry;
    this.countryService
      .searchCountriesByName(inputCountry)
      .subscribe((response: CountryResponse[]) => {
        this.countriesSuggestions = response.slice(0, 4);
      });
  }
}
