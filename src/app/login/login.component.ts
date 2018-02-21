import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup, FormControl } from "@angular/forms";
import { Location } from '@angular/common';

import { LoginService } from "../service/login.service";

import { LoginParameter } from '../model/login-parameter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	loginForm: FormGroup;

	loginParameters: LoginParameter;

	constructor(private location: Location, private fb: FormBuilder, private loginService: LoginService) {
		console.log("constructor");
		this.createForm();
	}

	ngOnInit() {
		console.log("ngOnInit");
	}

	createForm(){
		this.loginForm = this.fb.group({
			login: ['', Validators.required],
			password: ['', Validators.required],
			stayConnected: false
		});
	}

	cleanForm(){
		this.loginForm.setValue({
			login: '',
			password: '',
			stayConnected: false
		});
	}

	onSubmit(){
		let formModel = this.loginForm.value;

		this.loginParameters = {
			login: formModel.login,
			password: formModel.password,
			stayConnected: formModel.stayConnected
		}
		console.log(this.loginParameters);
		this.loginService.login(this.loginParameters);
	}
}
