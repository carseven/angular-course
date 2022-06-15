import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  public country: CountryResponse | null = null;
  get imgAlt(): string {
    return `Flag of ${this.country?.name || ''} contry`;
  }

  public countryTranslations: [string, string][] = [];

  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.countryService.getCountryByAlphaId(id)),
        tap(console.log)
      )
      .subscribe((countryResponse: CountryResponse | null) => {
        this.country = countryResponse;
        this.countryTranslations = Object.entries(
          this.country?.translations || {}
        );
      });
  }
}
