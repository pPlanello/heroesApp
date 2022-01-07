import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe.component';
import { HeroeEditComponent } from './edit/heroe-edit.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { HeroeRoutingModule } from './heroe-routing.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HeroeComponent,
    HeroeEditComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HeroeRoutingModule,
    FlexLayoutModule,
    PipesModule
  ]
})
export class HeroeModule { }
