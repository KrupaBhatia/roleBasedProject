import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard.js';

import { adminGuard } from './core/guards/admin-guard.js';
import { LoginGuard } from './core/guards/login-guard.js';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module.js').then(m => m.AuthModule),
    canActivate: [LoginGuard] 
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-module.js').then(m => m.ProductsModule),
    canActivate: [authGuard] 
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users-module').then(m => m.UsersModule),
    canActivate: [authGuard, adminGuard] 
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
