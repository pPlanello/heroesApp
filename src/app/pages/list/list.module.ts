import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroeCardModule } from 'src/app/shared/modules/heroe-card/heroe-card.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HeroeCardModule
  ]
})
export class ListModule { }
