import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
    <h2>PERSONS MODULE</h2>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
