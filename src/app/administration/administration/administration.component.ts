import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-administration',
  	template: `
		<p>administration works!</p>
		<router-outlet></router-outlet>
	`,
  	styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
