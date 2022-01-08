import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingHeroesRoutingModule } from './adding-heroes-routing.module';
import { AddingHeroesComponent } from './adding-heroes.component';
import { HeroeFormModule } from 'src/app/shared/modules/heroe-form/heroe-form.module';



@NgModule({
  declarations: [
    AddingHeroesComponent
  ],
  imports: [
    CommonModule,
    AddingHeroesRoutingModule,
    HeroeFormModule
  ]
})
export class AddingHeroesModule { }
