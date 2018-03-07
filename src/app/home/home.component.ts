import { Component, OnInit } from '@angular/core';
import { LoginService } from '../connection/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	title = 'RCI P.C.';

	constructor(private loginService: LoginService) { }

	ngOnInit() {
	}

}
