import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/shared/models/publisher.model';

@Component({
  selector: 'app-adding-heroes',
  templateUrl: './adding-heroes.component.html',
  styleUrls: ['./adding-heroes.component.css']
})
export class AddingHeroesComponent implements OnInit {

  publishers: Publisher[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
