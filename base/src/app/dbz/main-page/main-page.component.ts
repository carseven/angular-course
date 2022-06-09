import { Component } from '@angular/core';
import { DragonBallCharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public dragonBallCharacters: DragonBallCharacter[] = [];

  constructor() {}
}
