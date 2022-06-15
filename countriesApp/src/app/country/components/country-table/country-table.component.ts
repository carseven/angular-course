import { Component, Input } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  @Input()
  public countries: CountryResponse[] = [];
}
