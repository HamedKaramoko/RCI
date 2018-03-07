import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Service } from '../model/service';

@Injectable()
export class ServiceService {

  constructor() { }

  getService(id: string): Observable<Service>{
	  let result = registeredService.find(service => service.id === id);
	  if(result){
		  return of(result);
	  }
	  return null;
  }

  getServices(): Observable<Service[]>{
	  return of(registeredService);
  }

}

const registeredService: Service[] = [
	{
		id: '1',
		label: 'ONI',
		description: 'ONI is a service that allows you to manage almost all administrative tasks from your home.',
		cost: 10000
	},
	{
		id: '2',
		label: 'OrangeMoney',
		description: 'OrangeMoney with which you can easily send money to your peers. But also pay for several services such as SODECI, CIE, ... .',
		cost: 2000
	},
	{
		id: '3',
		label: 'ChildRescue',
		description: 'ChildRescue is dedicated to help you fastly find your children when their get lost.',
		cost: 1000
	},
	{
		id: '4',
		label: 'Others',
		description: 'Others represents other services comming soon.',
		cost: 100
	}
];
