import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard.js';
import { adminGuard } from './core/guards/admin-guard.js';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module.js').then(m => m.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products-module.js').then(m => m.ProductsModule),
    canActivate: [authGuard] 
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
