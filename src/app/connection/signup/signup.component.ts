import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators , FormGroup } from "@angular/forms";

import { LoginService } from "../../login.service";
import { UserService } from "../user.service";

import { Gender } from "../../model/gender";
import { Person } from "../../model/person";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signUpForm: FormGroup;
	connectedUser: Person;

	genders: String[] = Object.values(Gender);

	constructor(private location: Location, private fb: FormBuilder, private loginService: LoginService, private userService: UserService) {
		this.createForm();
		this.connectedUser = loginService.getConnectedUser;
	}

	ngOnInit() {
	}

  	createForm(){
		this.signUpForm = this.fb.group({
			login: ['', Validators.required],
			surname: ['', Validators.required],
			firstname: ['', Validators.required],
			gender: [Gender.F],
			email: [''],
		});
	}

	onSubmit(){
		let formModel = this.signUpForm.value;
		let updatePerson:Person = {
			id: this.connectedUser.id,
			login: formModel.login,
			password: this.connectedUser.password,
			surname: formModel.surname,
			firstname: formModel.firstname,
			gender: formModel.gender,
			email: formModel.email
		};
		console.log("Old user : ", this.connectedUser);
		console.log("Updated user : ", updatePerson);

		this.userService.saveUser(updatePerson);
	}

	reset(){
		this.location.back();
	}

}
