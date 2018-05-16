import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

	constructor(private personService: PersonService) { }

	persons: Person[];

	ngOnInit() {
		this.getAllPerson();
	}

	getAllPerson(){
		this.personService.getPersons().subscribe((data: Person[])=>{
			this.persons = data;
		}, error=>{
			alert("No data found");
		});
	}

}
