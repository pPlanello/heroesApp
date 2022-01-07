import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeEditComponent } from './edit/heroe-edit.component';

import { HeroeComponent } from './heroe.component';

const routes: Routes = [
  {
    path: ':id', component: HeroeComponent
  },
  {
    path: 'edit/:id', component: HeroeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroeRoutingModule { }
