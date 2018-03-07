import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const connectionRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(connectionRoutes)
  ],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
