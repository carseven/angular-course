import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { FormComponent } from './form/form.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DragonBallZModule],
})
export class DragonBallZModule {}
