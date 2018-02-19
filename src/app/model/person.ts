import { Gender } from "./gender";

export class Person {
	id: String;

	constructor(public surname: String, public firstname: String, public gender: Gender, public email?: String) {
	}
}
