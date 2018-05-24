import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Service } from '../../model/service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

	services$: Observable<Service[]>;
	selectedServiceId: string;

	constructor(private route: ActivatedRoute,
		private serviceService: ServiceService) { }

	ngOnInit() {
		this.services$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
			this.selectedServiceId = params.get('id');
			console.log("The id is : ", this.selectedServiceId);
			return this.serviceService.getServices();
			})
		);
	}
}
