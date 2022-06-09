import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DragonBallZModule {}
