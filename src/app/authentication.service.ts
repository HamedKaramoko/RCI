
import {throwError as observableThrowError,  Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Person } from './model/person';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import {  ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { catchError, shareReplay, flatMap } from 'rxjs/operators';
import { LoginParameter } from './model/login-parameter';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class AuthenticationService {

	constructor(private httpClient: HttpClient, private localStorage: LocalStorage) { }

	isAuthenticated$$: BehaviorSubject<boolean> = new BehaviorSubject(false)
	isAuthenticated$: Observable<boolean> = this.isAuthenticated$$.asObservable();

	apiUrl: string = '/RCI/authentication';

	connectedUser: Person = null;
	// store the URL so we can redirect after logging in
	redirectUrl: string = null;

	signin(authenticationParams: LoginParameter): Observable<any>{
		return this.httpClient.post(`${this.apiUrl}/signin`, {
			'login': authenticationParams.login,
			'password': authenticationParams.password
		}, {
			headers: new HttpHeaders({'Accept':  'application/json', 'Content-Type': 'application/json'})
		}).pipe(
			shareReplay()
		)
	}

	refresh(refreshToken: string): Observable<any>{
		return this.httpClient.post(`${this.apiUrl}/refresh`, {
			'refreshToken': refreshToken
		}, {
			headers: new HttpHeaders({'Accept':  'application/json', 'Content-Type': 'application/json'})
		}).pipe(
			shareReplay()
		)
	}

	isAuthenticated(): Observable<boolean> {
		return this.localStorage.getItem("tokens").pipe(
			flatMap((tokens: { token: string, refreshToken: string}) => {
				if(!tokens) { return of(false) }
				// Faire des controles pour le cas où la date de validité du token est passée
				return of(true)
			})
		)
	}

	signOut(): Observable<any> {
		return this.localStorage.removeItem('tokens');
	}

	/*private handleError(error: HttpErrorResponse): ErrorObservable {
		if (error.error instanceof ErrorEvent) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error.message);
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong,
		  console.error(`Backend returned code ${error.status}, ` +	`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return observableThrowError('Something bad happened; please try again later.');
	  };*/
}
