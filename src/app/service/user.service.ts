import { Injectable } from '@angular/core';

import { Person } from "../model/person";

@Injectable()
export class UserService {

  constructor() { }

  saveUser(givenPerson: Person): Person{
	  return null;
  }

}
