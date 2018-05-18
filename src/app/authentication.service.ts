import { Injectable } from '@angular/core';

import { Person } from './model/person';

@Injectable()
export class AuthenticationService {

	constructor() { }

	connectedUser: Person = null;
	// store the URL so we can redirect after logging in
	redirectUrl: string = null;

	signin(){

	}

	signout(){

	}
}
