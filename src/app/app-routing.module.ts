import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'dashboard', component: DashboardComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes/*,
		{ enableTracing: true }*/ // <-- debugging purposes only
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
