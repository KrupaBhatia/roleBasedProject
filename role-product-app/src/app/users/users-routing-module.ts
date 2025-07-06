import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUser } from './create-user/create-user.js';
import { adminGuard } from '../core/guards/admin-guard';
import { authGuard } from '../core/guards/auth-guard.js';

const routes: Routes = [
  {
    path: 'create',
    component: CreateUser,
    canActivate: [adminGuard , authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
