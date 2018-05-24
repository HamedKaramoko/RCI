import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor{

	constructor(private localStorage: LocalStorage) { }

	unSecuredAPI: string[] = ['/RCI/authentication/signin', '/RCI/authentication/refresh'];

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if(this.unSecuredAPI.indexOf(req.url) !== -1) {	return next.handle(req); }

		let requestWithAuthorization = req;

		return this.localStorage.getItem("tokens").pipe(
			flatMap((tokens: { token: string, refreshToken: string}) => {
				requestWithAuthorization = req.clone({
					setHeaders: {
						Authorization: `Bearer ${tokens.token}`
					}
				})
				return next.handle(requestWithAuthorization);
			})
		);
	}

}
