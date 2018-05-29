import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorage } from '@ngx-pwa/local-storage';

import { LoginParameter } from '../../model/login-parameter';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { Person } from '../../model/person';
import { Gender } from '../../model/gender';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

	loginParameters: LoginParameter;

  constructor(private localStorage: LocalStorage, private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
		this.loginForm = this.fb.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	cleanForm(){
		this.loginForm.setValue({
			login: '',
			password: ''
		});
	}

	onSubmit(){
		let formModel = this.loginForm.value;

		this.loginParameters = {
			login: formModel.login,
			password: formModel.password
		}
    	console.log("Authentication parameters sent: ", this.loginParameters);
		// Http call
		this.authenticationService.signin(this.loginParameters).subscribe(() => {
			this.router.navigate([this.authenticationService.redirectionUrl]);
		}, error => {
			console.error("I got an error: ", error)
		})
		let personFound: Person = {
			id: 1,
			login: 'hamed',
			password: 'hamed',
			surname: 'KARAMOKO',
			firstname: 'Hamed',
			gender: Gender.M,
			email: 'hamed.karamoko@outlook.com'
		};
		if(personFound){
				this.authenticationService.connectedUser = personFound;
		let urlToGo = this.authenticationService.redirectionUrl || '/dashboard';
		this.router.navigate([urlToGo]);
		}
		// End Http call
	}

}
