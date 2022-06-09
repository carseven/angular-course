import { Component, EventEmitter, Output } from '@angular/core';
import { DragonBallCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public dragonBallCharacter: DragonBallCharacter = {};

  @Output()
  public dragonBallCharactersEmitter = new EventEmitter<DragonBallCharacter>();

  onFormSubmit(): void {
    if (
      this.dragonBallCharacter.name &&
      (this.dragonBallCharacter.power || this.dragonBallCharacter.power === 0)
    ) {
      this.dragonBallCharactersEmitter.emit(this.dragonBallCharacter);
    }
    this.dragonBallCharacter = {};
  }
}
