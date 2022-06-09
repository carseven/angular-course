import { Component, Input } from '@angular/core';
import { DragonBallCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  @Input()
  public dragonBallCharacters: DragonBallCharacter[] = [];
}
