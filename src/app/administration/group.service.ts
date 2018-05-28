import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../model/group';

@Injectable()
export class GroupService {

  	constructor(private httpClient: HttpClient) { }

  	apiUrl: string = '/RCI/group';

	getGroups(): Observable<HttpResponse<Group[]>>{
		return this.httpClient.get<Group[]>(this.apiUrl + '/list', {
			headers: new HttpHeaders({'Accept':  'application/json'}), observe: 'response'
		})
	}

	getGroupByName(name: string): Observable<HttpResponse<Group>>{
		return this.httpClient.get<Group>(this.apiUrl + `/name/${name}`, {
			headers: new HttpHeaders({
				'Accept':  'application/json'
			}),
			observe: 'response'
		})
	}

	saveGroup(group: Group): Observable<Group>{
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Accept':  'application/json'
			})
		};
		return this.httpClient.post<Group>(this.apiUrl, group, httpOptions)
	}

	deleteGroup(name: string): Observable<string>{
		return this.httpClient.delete<string>(this.apiUrl + `/${name}`)
	}

}
