import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'adding',
    loadChildren: () => import('./pages/adding-heroes/adding-heroes.module').then(m => m.AddingHeroesModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'heroe',
    loadChildren: () => import('./pages/heroe/heroe.module').then(m => m.HeroeModule),
    canActivate: [ AuthGuard ]
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
