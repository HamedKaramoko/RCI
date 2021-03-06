import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	title = 'RCI P.C.';

	constructor(private authenticationService: AuthenticationService, private router: Router) { }

	ngOnInit() {
	}

}
