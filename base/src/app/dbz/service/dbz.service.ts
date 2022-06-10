import { Injectable } from '@angular/core';
import { DragonBallCharacter } from '../interfaces/dbz.interface';

@Injectable()
export class DragonBallZService {
  private _personajes: DragonBallCharacter[] = [
    {
      name: 'Vegeta',
      power: 2000,
    },
    {
      name: 'Goku',
      power: 3000,
    },
  ];

  /**
   * Para evitar que se utilice el array que devolvemos por referencia
   * usarmos el spreadOperator para crear un nuevo array, pero ojo esto
   * solo funciona en un solo nivel.
   */
  get personajes(): DragonBallCharacter[] {
    return [...this._personajes];
  }

  /**
   *
   * @param character
   */
  onSubmitCharacter(character: DragonBallCharacter): void {
    this._personajes.push(character);
  }
}
