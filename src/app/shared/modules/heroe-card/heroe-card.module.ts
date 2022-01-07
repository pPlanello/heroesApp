import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { HeroeCardComponent } from './heroe-card.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    AngularMaterialModule
  ],
  exports: [
    HeroeCardComponent
  ]
})
export class HeroeCardModule { }
