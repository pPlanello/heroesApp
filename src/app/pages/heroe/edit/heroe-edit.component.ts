import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from 'src/app/shared/models/heroe.model';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.css']
})
export class HeroeEditComponent implements OnInit {

  heroe!: Heroe;

  constructor(private router: Router, private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state !== undefined && state['heroe']) {
      this.heroe = state['heroe'];
    }
  }

  ngOnInit(): void {
    if (this.heroe === undefined) {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeById(id))
      )
      .subscribe( heroe => this.heroe = heroe );
    }
  }

}
