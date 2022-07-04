import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styles: [],
})
export class SelectorsComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    regions: ['default', Validators.required],
    countries: ['default', Validators.required],
    borderCountries: ['default', Validators.required],
  });

  public regions: string[] = [];
  public countries: PaisSmall[] = [];
  public borderCountries: PaisSmall[] = [];
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private readonly countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.setRegions();
    this.subsRegionChanges();
    this.subsCountriesChanges();
  }

  saveForm(): void {
    console.log(this.form.value);
  }

  private setRegions(): void {
    this.regions = this.countriesService.regiones;
  }

  private subsRegionChanges(): void {
    this.form
      .get('regions')
      ?.valueChanges.pipe(
        tap(() => {
          this.form.get('countries')?.reset('default');
          this.isLoading = true;
        }),
        switchMap((region: string) =>
          this.countriesService.getPaisesPorRegion(region)
        )
      )
      .subscribe((countries: PaisSmall[]) => (this.countries = countries))
      .add(() => (this.isLoading = false));
  }

  private subsCountriesChanges(): void {
    this.form
      .get('countries')
      ?.valueChanges.pipe(
        tap(() => {
          this.form.get('frontera')?.reset('');
          this.isLoading = true;
        }),
        switchMap((countryCode: string) =>
          this.countriesService.getPaisPorCodigo(countryCode)
        ),
        switchMap((pais) =>
          this.countriesService.getPaisesPorCodigos(pais?.borders!)
        )
      )
      .subscribe((paises) => {
        this.borderCountries = paises;
      })
      .add(() => (this.isLoading = false));
  }
}
