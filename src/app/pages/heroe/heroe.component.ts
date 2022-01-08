import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;
  redirectSearch: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state !== undefined && state['redirectSearch']) {
      this.redirectSearch = true;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroeService.getHeroeById(id))
      )
      .subscribe( heroe => this.heroe = heroe );
  }

  clickBehind() {
    if (this.redirectSearch) {
      this.router.navigate(['/search']);
    } else {
      this.router.navigate(['/list']);
    }
  }

}
