import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProductosModule {}
