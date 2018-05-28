import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class IsAuthenticatedGuardService implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authenticationService.isAuthenticated().pipe(
            switchMap((response: boolean) => {
                if(!response) {
                    this.authenticationService.redirectionUrl = state.url;
                    this.router.navigate(['/signin']);
                }
                return of(response);
            })
        );
    }

}
