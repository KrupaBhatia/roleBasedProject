import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list.js';
import { ProductForm } from './product-form/product-form.js';
import { adminGuard } from '../core/guards/admin-guard.js';
import {authGuard} from '../core/guards/auth-guard.js'

const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'create', component: ProductForm, canActivate: [adminGuard ,authGuard] },
  { path: 'edit/:id', component: ProductForm, canActivate: [adminGuard ,authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
