import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';

@NgModule({
  declarations: [CapitalComponent, CountryComponent, RegionComponent],
  imports: [CommonModule],
  exports: [CapitalComponent, CountryComponent, RegionComponent],
})
export class CountryModule {}
