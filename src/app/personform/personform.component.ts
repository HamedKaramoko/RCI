import { Component, OnInit } from '@angular/core';

import { Person } from "../model/person";
import { Gender } from "../model/gender";

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.css']
})
export class PersonformComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	//person: Person = new Person("", "", Gender.F);

	genders: String[] = Object.values(Gender);

	//get diagnostic() { return JSON.stringify(this.person); }

	clear(){
		//this.person = new Person("", "", Gender.F);
	}

}
