import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IsAuthenticatedGuardService } from './guard/is-authenticated-guard.service';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'dashboard', component: DashboardComponent, canActivate:[IsAuthenticatedGuardService]},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes/*,
		{ enableTracing: true }*/ // <-- debugging purposes only
	)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
