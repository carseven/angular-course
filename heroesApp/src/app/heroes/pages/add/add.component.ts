import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ModalComponent } from '../../components/modal/modal.component';

import { HeroesService } from '../../services/heroes.service';
import { Hero, Publisher } from '../interfaces/heroes.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }: Params) => this.heroesService.getHeroById(id)))
      .subscribe((heroe: Hero) => (this.heroe = heroe));
  }

  save() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actualizar
      this.heroesService
        .updateHero(this.heroe)
        .subscribe(() => this.showSnakbar('Hero saved!'));
    } else {
      // Crear
      this.heroesService.createHero(this.heroe).subscribe((heroe: Hero) => {
        this.router.navigate(['/heroes/edit', heroe.id]);
        this.showSnakbar('Registro creado');
      });
    }
  }

  deleteHeroe() {
    const dialog = this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService
          .deleteHero(this.heroe.id!)
          .subscribe(() => this.router.navigate(['/heroes']));
      }
    });
  }

  showSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
