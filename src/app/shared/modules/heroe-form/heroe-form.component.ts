import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Heroe, Publishers } from '../../models/heroe.model';
import { Publisher } from '../../models/publisher.model';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
import { DataDialogAngularMaterial, TypeDialog } from '../../models/data-dialog.model';

@Component({
  selector: 'app-heroe-form',
  templateUrl: './heroe-form.component.html',
  styleUrls: ['./heroe-form.component.css']
})
export class HeroeFormComponent implements OnInit {

  @Input() isEditMode: boolean = false;

  @Input() heroe: Heroe = {
    superhero: '',
    publisher: Publishers.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: ''
  };

  publishers: Publisher[] = [];

  constructor(private heroesService: HeroesService, private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog) {
    this.publishers = [
      {
        id: 'DC Comics',
        desc: 'DC - Comics'
      },
      {
        id: 'Marvel Comics',
        desc: 'Marvel - Comics'
      }
    ];
  }

  ngOnInit(): void {
  }

  saveHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    } else {
      if (!this.isEditMode) {
        this.heroesService.saveHeroe(this.heroe).subscribe(result => {

          this.openSnackBar('Se ha actualizado correctamente el heroe: ' + result.superhero);

          const navigationExtras: NavigationExtras = {
            state: {
              heroe: result
            }
          };
          this.router.navigate([`/heroe/edit/${result.id!}`], navigationExtras);
        });
      } else {
        this.heroesService.editHeroe(this.heroe).subscribe(result => {
          this.openSnackBar('Se ha creado correctamente el heroe: ' + result.superhero);
        });
      }
    }
  }

  deleteHeroe() {
    const dialog = this.openDialog(TypeDialog.delete);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.deleteHeroe(this.heroe.id!).subscribe(result => {
          this.router.navigate(['/list'])
        });
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

  openDialog(typeDialog: TypeDialog) {
    const dataDialog: DataDialogAngularMaterial = {
      type: typeDialog,
      data: this.heroe
    };
    return this.dialog.open(DialogConfirmComponent, {
      width: '250px;',
      data: dataDialog
    });
  }
}
