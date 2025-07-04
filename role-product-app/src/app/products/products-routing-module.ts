import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list.js';
import { ProductForm } from './product-form/product-form.js';
import { adminGuard } from '../core/guards/admin-guard.js';

const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'create', component: ProductForm, canActivate: [adminGuard] },
  { path: 'edit/:id', component: ProductForm, canActivate: [adminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
