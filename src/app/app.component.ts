import { Component } from '@angular/core';
import { LoginService } from './connection/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RCI P.C.';

  constructor(private loginService: LoginService, private router: Router){}

  logOut(){
	  this.loginService.logout();
	  this.router.navigate(['/home']);
  }
}
