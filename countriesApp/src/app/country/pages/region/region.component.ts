import { Component } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-top: 5px;
      }

      .active-btn {
      }
    `,
  ],
})
export class RegionComponent {
  readonly regions: [string, string][] = [
    ['EU', ' European Union'],
    ['EFTA', ' European Free Trade Association'],
    ['CARICOM', ' Caribbean Community'],
    ['PA', ' Pacific Alliance'],
    ['AU', ' African Union'],
    ['USAN', ' Union of South American Nations'],
    ['EEU', ' Eurasian Economic Union'],
    ['AL', ' Arab League'],
    ['ASEAN', ' Association of Southeast Asian Nations'],
    ['CAIS', ' Central American Integration System'],
    ['CEFTA', ' Central European Free Trade Agreement'],
    ['NAFTA', ' North American Free Trade Agreement'],
    ['SAARC', ' South Asian Association for Regional Cooperation'],
  ];

  countries: CountryResponse[] = [];
  selectedRegion: string = '';

  constructor(private readonly countryService: CountryService) {}
  searchRegion(region: [string, string]) {
    this.selectedRegion = region[0];

    this.countryService
      .getCountriesByRegionalBloc(this.selectedRegion)
      .subscribe((response: CountryResponse[]) => (this.countries = response));
  }
}
