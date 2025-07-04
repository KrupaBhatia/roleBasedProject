import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login.js';
import { Signup } from './signup/signup.js';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
