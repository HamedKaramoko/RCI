import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from '../model/person';
import { Config } from '../model/Config';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = '/RCI/person';

  getPersons(): Observable<Person[]>{
	const httpOptions = {
		headers: new HttpHeaders({
		  'accept':  'application/json'
		})
	};
	return this.httpClient.get<Person[]>(this.apiUrl + '/list', httpOptions).pipe(
		catchError(this.handleError)
	);
  }

  getPersonByLogin(login: string){
	const httpOptions = {
		headers: new HttpHeaders({
		  'Accept':  'application/json'
		})
	};
	return this.httpClient.get<Person>(this.apiUrl).pipe(
		catchError(this.handleError)
	)
  }

  savePerson(personToSave: Person): Observable<Person>{
	const httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Accept':  'application/json'
		})
	};
	return this.httpClient.post<Person>(this.apiUrl, personToSave, httpOptions).pipe(
		catchError(this.handleError)
	);
  }

  updatePerson(personToUpdate: Person): Observable<Person>{
	const httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Accept':  'application/json'
		})
	};
	return this.httpClient.put<Person>(this.apiUrl, personToUpdate, httpOptions).pipe(
		catchError(this.handleError)
	)
  }

  deletePerson(id: string): Observable<string>{
	return this.httpClient.delete<Person>(this.apiUrl + '/${id}', {observe: 'response'}).pipe(
		catchError(this.handleError)
	)
  }

  private handleError(error: HttpErrorResponse): ErrorObservable {
	if (error.error instanceof ErrorEvent) {
	  // A client-side or network error occurred. Handle it accordingly.
	  console.error('An error occurred:', error.error.message);
	} else {
	  // The backend returned an unsuccessful response code.
	  // The response body may contain clues as to what went wrong,
	  console.error(
		`Backend returned code ${error.status}, ` +
		`body was: ${error.error}`);
	}
	// return an observable with a user-facing error message
	return Observable.throw(
	  'Something bad happened; please try again later.');
  };

}
