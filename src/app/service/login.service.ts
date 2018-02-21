import { Injectable } from '@angular/core';

import { LoginParameter } from '../model/login-parameter';
import { Person } from '../model/person';
import { Gender } from '../model/gender';

@Injectable()
export class LoginService {

	constructor() { }

	connected: LoginParameter = null;

	private findLogin(givenLogin: string): LoginParameter {
		return logins.find((element) => {
			return element.login === givenLogin;
		});
	}

	private findPersonById(givenId: string): Person {
		return persons.find((element) => {
			return element.id === givenId;
		});
	}

	login(givenLoginInfo: LoginParameter): Person{
		let loginInfo = this.findLogin(givenLoginInfo.login);

		if(loginInfo === undefined){
			console.log("Cet utilisateur n'est pas connu");
			return null;
		} else {
			if(loginInfo.password !== givenLoginInfo.password)
				return null;

			let person = this.findPersonById(loginInfo.idPerson);
			this.connected = loginInfo;
			console.log("Connected : ", person);
			return person;
		}

	}

	logout(login: string){
		console.log("Disconnected : ", this.connected);
		this.connected = null;
	}
}

const persons: Person[] = [
	{
		id: '1',
		surname: 'KARAMOKO',
		firstname: 'Hamed',
		gender: Gender.M,
		email: 'hamed.karamoko@outlook.com'
	},
	{
		id: '2',
		surname: 'OUATTARA',
		firstname: 'MAriama Yusuf',
		gender: Gender.F,
		email: 'omariamayusuf@gmail.com'
	}
];

const logins: LoginParameter[] = [
	{
		idPerson: '1',
		login: 'HamedKaramoko',
		password: 'hamed',
		stayConnected: true
	},
	{
		idPerson: '2',
		login: 'MariamaOuattara',
		password: 'mariama',
		stayConnected: false
	}
];
