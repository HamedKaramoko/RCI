import { Gender } from "./gender";

export class Person {
	id: number;
	login: string;
	// Not mandatory because often it will not be in person information when sending to the server.
	// As an example, when user profile is updated. All informations are updated but not the password.
	// Of course, except when the user want to.
	password: string;
	surname?: string;
	firstname?: string
	gender: Gender;
	email: string;
}
