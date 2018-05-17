import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RCI P.C.';

  constructor(private authenticationService: AuthenticationService, private router: Router){}

  logOut(){
	  this.authenticationService.logout();
	  this.router.navigate(['/home']);
  }
}
