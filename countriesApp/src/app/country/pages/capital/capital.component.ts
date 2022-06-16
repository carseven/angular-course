import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CapitalComponent {
  public countries: CountryResponse[] = [];
  public lastQuerySearch: string = '';
  public capitalSuggestions: CountryResponse[] = [];
  public debounceInputSearch: string = '';

  constructor(private countryService: CountryService) {}

  searchCountry(inputCountry: string): void {
    this.capitalSuggestions = [];
    this.countryService
      .searchCountriesByCapitalCityName(inputCountry)
      .subscribe((response: CountryResponse[]) => {
        this.countries = response;
        this.lastQuerySearch = inputCountry;
      });
  }

  suggestions(inputCountry: string): void {
    this.debounceInputSearch = inputCountry;
    this.countryService
      .searchCountriesByCapitalCityName(inputCountry)
      .subscribe((response: CountryResponse[]) => {
        this.capitalSuggestions = response.slice(0, 8);
      });
  }
}
