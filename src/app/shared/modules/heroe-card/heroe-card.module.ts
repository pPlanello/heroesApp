import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { HeroeCardComponent } from './heroe-card.component';



@NgModule({
  declarations: [
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeroeCardComponent
  ]
})
export class HeroeCardModule { }
