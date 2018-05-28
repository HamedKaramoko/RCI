import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	template: `
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<a class="navbar-brand" routerLink="/home">
						<img alt="Brand" src="...">
					</a>
				</div>
				<div class="navbar-form navbar-right" *ngIf="!isAuthenticated">
					<a class="btn btn-default" routerLink="/signin">Sign in</a>
				</div>
				<div class="navbar-form navbar-right" *ngIf="isAuthenticated">
					<div class="dropdown">
						<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							<!--{{connectedUser.login}}-->
							<span class="caret"></span>
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
							<li><a [routerLink]="['/dashboard']">Board</a></li>
							<li role="separator" class="divider"></li>
							<li><a (click)="logOut()">Log out</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	`,
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isAuthenticated: boolean;

	constructor(private authenticationService: AuthenticationService,  private router: Router) {
		this.authenticationService.isAuthenticated$.subscribe((response: boolean) => {
			this.isAuthenticated = response;
		})
	}

	ngOnInit() {
	}

	logOut(){
		this.authenticationService.signOut().subscribe(() => {
			this.router.navigate(['/home']);
		})
	}

}
