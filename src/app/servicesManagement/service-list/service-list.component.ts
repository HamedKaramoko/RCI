import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Service } from '../../model/service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

	services$ : Observable<Service[]>;

	constructor(private serviceService: ServiceService) { }

	ngOnInit() {
	}

	getServiceList(){
		this.services$ = this.serviceService.getServices();
	}

}
