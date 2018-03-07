import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: HomeComponent }
];

@NgModule({
		exports: [RouterModule],
		imports: [RouterModule.forRoot(routes/*,
			{ enableTracing: true }*/ // <-- debugging purposes only
		)]
})
export class AppRoutingModule { }
