import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editHeroe() {
    const navigationExtras: NavigationExtras = {
      state: {
        heroe: this.heroe
      }
    };
    this.router.navigate(['/heroe/edit', this.heroe.id], navigationExtras);
  }

}
