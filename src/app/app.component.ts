import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RCI P.C.';

  constructor(){}

  logout(){
	  //this.loginService.logout();
  }
}
