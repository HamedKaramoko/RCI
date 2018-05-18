import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';

const connectionRoutes: Routes = [
	{ path: 'signin', component: SignInComponent },
	{ path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(connectionRoutes)
  ],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
