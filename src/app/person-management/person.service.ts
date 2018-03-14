import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable()
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'api/persons';

  getPersons(): Observable<Person[]>{
	  return this.httpClient.get<Person[]>(this.apiUrl).pipe(
		  catchError(this.handleError<Person[]>('getPersons', []))
	  );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
	return (error: any): Observable<T> => {

	  // TODO: send the error to remote logging infrastructure
	  console.error(error); // log to console instead

	  // TODO: better job of transforming error for user consumption

	  // Let the app keep running by returning an empty result.
	  return Observable.of(result as T);
	};
  }

}
