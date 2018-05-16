import { Injectable } from '@angular/core';

import { LoginParameter } from './model/login-parameter';
import { Person } from './model/person';
import { Gender } from './model/gender';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {

	constructor() { }

	private connectedUser: Person;
	// store the URL so we can redirect after logging in
	redirectUrl: string;

	get getConnectedUser(){
		return this.connectedUser;
	}

	set setConnectedUser(newConnectedUser: Person){
		this.connectedUser = newConnectedUser;
	}

	private findPersonByLogin(givenLogin: string): Person {
		return persons.find((element) => {
			return element.login === givenLogin;
		});
	}

	login(givenLoginInfo: LoginParameter): Observable<Person>{
		let foundPerson = this.findPersonByLogin(givenLoginInfo.login);

		if(foundPerson === undefined){
			console.log("Unknown user!!!");
			return Observable.of(null);
		} else {
			if(foundPerson.password !== givenLoginInfo.password){
				console.log("Incorrect password!!!");
				return Observable.of(null);
			}
			console.log("Connected : ", foundPerson);
			this.connectedUser = foundPerson;
			return Observable.of(foundPerson).delay(2000);
		}

	}

	logout(){
		console.log("User {} Disconnected!!!", this.connectedUser.login);
		this.connectedUser = null;
		this.redirectUrl = null;
	}
}

const persons: Person[] = [
	{
		id: 1,
		login: 'hamed',
		password: 'hamed',
		surname: 'KARAMOKO',
		firstname: 'Hamed',
		gender: Gender.M,
		email: 'hamed.karamoko@outlook.com'
	},
	{
		id: 2,
		login: 'mariama',
		password: 'mariama',
		surname: 'OUATTARA',
		firstname: 'MAriama Yusuf',
		gender: Gender.F,
		email: 'omariamayusuf@gmail.com'
	}
];