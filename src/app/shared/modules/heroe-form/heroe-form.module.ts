import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { HeroeFormComponent } from './heroe-form.component';



@NgModule({
  declarations: [
    HeroeFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    HeroeFormComponent
  ]
})
export class HeroeFormModule { }
