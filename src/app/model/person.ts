import { Gender } from "./gender";

export class Person {
	id: string;
	login: string;
	// Not mandatory because often it will not be in person information when sending to the server.
	// As an example, when user profile is updated. All informations are updated but not the password.
	// Of course, except when the user want to.
	password?: string;

	constructor(public surname: string, public firstname: string, public gender: Gender, public email?: string) {
	}
}
