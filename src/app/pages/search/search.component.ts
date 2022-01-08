import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NavigationExtras, Router } from '@angular/router';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  textSearch: string = '';

  heroesSuggestions: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
  }

  searching() {
    this.heroesService.getHeroesSuggestions(this.textSearch).subscribe(data => this.heroesSuggestions = data);
  }

  heroeSelection(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    this.textSearch = heroe.superhero;
    const navigationExtras: NavigationExtras = {
      state: {
        redirectSearch: true
      }
    };
    this.router.navigate([`/heroe/${heroe.id!}`], navigationExtras);
  }
}
