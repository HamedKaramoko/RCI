import { Injectable } from '@angular/core';

import { LoginParameter } from '../model/login-parameter';
import { Person } from '../model/person';
import { Gender } from '../model/gender';

@Injectable()
export class LoginService {

	constructor() { }

	private findPersonByLogin(givenLogin: string): Person {
		return persons.find((element) => {
			return element.login === givenLogin;
		});
	}

	login(givenLoginInfo: LoginParameter): Person{
		let foundPerson = this.findPersonByLogin(givenLoginInfo.login);

		if(foundPerson === undefined){
			console.log("Unknown user!!!");
			return null;
		} else {
			if(foundPerson.password !== givenLoginInfo.password){
				console.log("Incorrect password!!!");
				return null;
			}
			console.log("Connected : ", foundPerson);
			return foundPerson;
		}

	}

	logout(login: string){
		console.log("User {} Disconnected!!!", login);
	}
}

const persons: Person[] = [
	{
		id: '1',
		login: 'hamedkaramoko',
		password: 'hamed',
		surname: 'KARAMOKO',
		firstname: 'Hamed',
		gender: Gender.M,
		email: 'hamed.karamoko@outlook.com'
	},
	{
		id: '2',
		login: 'yuyu',
		password: 'yuyu',
		surname: 'OUATTARA',
		firstname: 'MAriama Yusuf',
		gender: Gender.F,
		email: 'omariamayusuf@gmail.com'
	}
];
