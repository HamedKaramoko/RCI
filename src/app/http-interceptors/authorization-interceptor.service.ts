import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor{

	constructor() { }

	unSecuredAPI: string[] = ['/RCI/authentication/signin', '/RCI/authentication/refresh'];

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let requestWithAuthorization = req;

		if(this.unSecuredAPI.indexOf(req.url) === -1){
			requestWithAuthorization = req.clone({
				setHeaders: {
					Authorization: `Bearer `
				}
			})
		}

		return next.handle(requestWithAuthorization);
	}

}
