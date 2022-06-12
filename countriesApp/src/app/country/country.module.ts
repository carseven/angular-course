import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SeeCountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SeeCountryComponent,
  ],
})
export class CountryModule {}
