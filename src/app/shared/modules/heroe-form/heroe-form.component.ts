import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publishers } from '../../models/heroe.model';
import { Publisher } from '../../models/publisher.model';
import { HeroesService } from '../../services/heroes.service';

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

  constructor(private heroesService: HeroesService) {
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
          console.log('Resultado', result);
        });
      } else {
        this.heroesService.editHeroe(this.heroe).subscribe(result => {
          console.log('Resultado', result);
        });
      }
    }
  }
}
