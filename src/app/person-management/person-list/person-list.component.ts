
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../model/person';
import { HttpResponse } from '@angular/common/http';
import { Gender } from '../../model/gender';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

	constructor(private personService: PersonService) { }

	persons: Person[];
	currentPerson: Person;

	ngOnInit() {
		//this.getAllPerson();
		//this.getPerson(); // To check
		//this.savePerson();
		//this.updatePerson();
		//this.deletePerson();
	}

	getAllPerson(){
		this.personService.getPersons().subscribe((data: HttpResponse<Person[]>)=>{
			this.persons = data.body;
			alert(JSON.stringify(this.persons));
		}, error=>{
			console.log(error);
		});
	}

	getPerson(){
		this.personService.getPerson('hamed').subscribe((data: HttpResponse<Person>)=>{
			this.currentPerson = data.body;
			alert(JSON.stringify(this.currentPerson));
		}, error=>{
			console.log(error);
		});
	}

	savePerson(){
		let person: Person;
		person = {
			id: 0,
			login: 'hamed',
			password: 'hamed',
			gender: Gender.M,
			email: 'a@b.c'
		}
		this.personService.savePerson(person).subscribe((data: Person)=>{
			alert(JSON.stringify(data));
		}, error=>{
			console.log(error);
		});
	}
}
