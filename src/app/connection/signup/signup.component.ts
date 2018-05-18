import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup } from "@angular/forms";

import { AuthenticationService } from "../../authentication.service";
import { ConnectionService } from '../connection.service';

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

	constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private connectionService: ConnectionService) {
		this.createForm();
	}

	ngOnInit() {
	}

  	createForm(){
		this.signUpForm = this.fb.group({
			login: ['', Validators.required],
			password: ['', Validators.required],
			confirmpassword: ['', Validators.required],
			gender: [Gender.F],
			email: ['', Validators.required],
		});
	}

	onSubmit(){
		let formModel = this.signUpForm.value;
		let updatePerson:Person = {
			id: 0,
			login: formModel.login,
			password: formModel.password,
			gender: formModel.gender,
			email: formModel.email
		};
		this.connectionService.signup(updatePerson);
	}

}
