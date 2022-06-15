import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  public countries: CountryResponse[] = [];
  public lastQuerySearch: string = '';

  constructor(private countryService: CountryService) {}

  searchCountry(inputCountry: string): void {
    this.countryService
      .searchCountriesByCapitalCityName(inputCountry)
      .subscribe((response: CountryResponse[]) => {
        this.countries = response;
        this.lastQuerySearch = inputCountry;
      });
  }

  suggestions(inputCountry: string): void {
    console.log(inputCountry);
  }
}
