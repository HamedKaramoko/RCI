import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	constructor() { }

		storedCredential: String[];

		login(login: String, password: String): String{
				let credential: String = login + '' + password;
				let index = this.getStatus(login, password);
				if(index === -1){
						this.storedCredential.push(credential);
				}
				return credential;
		}

		getStatus(login: String, password: String): number{
				let credential: String = login + '' + password;
				let result = this.storedCredential.findIndex((element) => {
					return element === credential;
				});
				return result;
		}

		logout(login: String, password: String){
				let index = this.getStatus(login, password);
				if(index > -1){
					this.storedCredential.splice(index, 1);
				} else{
					 console.log("User not authenticated");
				}
		}

}
