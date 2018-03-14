import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

	constructor(private loginService: LoginService, private router: Router) { }

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('AuthGuard#canActivateChild called');
		return this.canActivate(childRoute, state);
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		console.log('AuthGuard#canActivate called');
		// Keep the current route
		let url: string = state.url;
		return this.isAuthenticated(url);
	}

	isAuthenticated(url: string): boolean{
		if(this.loginService.getConnectedUser){
			return true;
		}
		this.loginService.redirectUrl = url;
		this.router.navigate(['/login']);
		return false;
	}
}
