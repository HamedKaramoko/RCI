import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthenticationService } from "../../authentication.service";

import { LoginParameter } from '../../model/login-parameter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	loginForm: FormGroup;

	loginParameters: LoginParameter;

	constructor(private location: Location, private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) {
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
		if(this.authenticationService.login(this.loginParameters)){
			console.log("je pars.");
			let urlToGo = this.authenticationService.redirectUrl ? this.authenticationService.redirectUrl : '/home';
			this.router.navigate([urlToGo]);
		}
	}
}
