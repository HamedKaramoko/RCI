import { Gender } from "./gender";

export class Person {
	id: string;
	login: string;
	password: string;

	constructor(public surname: string, public firstname: string, public gender: Gender, public email?: string) {
	}
}
