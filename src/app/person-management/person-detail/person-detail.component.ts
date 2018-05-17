import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../../model/person';
import { Gender } from '../../model/gender';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  updatePerson(){
		let person: Person;
		person = {
			id: 1,
			login: 'hamed',
			password: 'hamedO',
			gender: Gender.M,
			email: 'hk@b.c'
		}
		this.personService.updatePerson(person).subscribe((data: Person)=>{
			alert(JSON.stringify(data));
		}, error=>{
			console.log(error);
		});
	}

	deletePerson(){
		this.personService.deletePerson(2).subscribe(data=>{
			alert('The deleted person has id : ' + data);
		}, error=>{
			console.log(error);
		});
	}

}
