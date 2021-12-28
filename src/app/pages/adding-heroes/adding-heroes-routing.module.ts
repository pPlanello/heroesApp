import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddingHeroesComponent } from './adding-heroes.component';

const routes: Routes = [
  {
    path: '', component: AddingHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddingHeroesRoutingModule { }
