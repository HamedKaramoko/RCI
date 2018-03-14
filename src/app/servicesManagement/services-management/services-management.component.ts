import { Component, OnInit } from '@angular/core';

@Component({
  template: `
	<div>
		<h2 class="text-center">SERVICES</h2>
		<router-outlet></router-outlet>
	</div>
  `,
  styleUrls: ['./services-management.component.css']
})
export class ServicesManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
