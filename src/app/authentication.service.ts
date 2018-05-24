
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Person } from './model/person';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import {  ErrorObservable} from 'rxjs/observable/ErrorObservable';
import { catchError, shareReplay } from 'rxjs/operators';
import { LoginParameter } from './model/login-parameter';

@Injectable()
export class AuthenticationService {

	constructor(private httpClient: HttpClient) { }

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
