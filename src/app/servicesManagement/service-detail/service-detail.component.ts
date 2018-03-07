import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

// Services
import { ServiceService } from '../service.service';

// Models
import { Service } from '../../model/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

	service: Observable<Service>;
	serviceForm: FormGroup;

	constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private serviceService: ServiceService) {
		this.createForm();
	}

	ngOnInit() {
		this.route.paramMap.switchMap((params: ParamMap) =>
			this.service = this.serviceService.getService(params.get('id'))
		);
	}

	createForm(){
		this.serviceForm = this.fb.group({
			label: ['', Validators.required],
			description: ['', Validators.required],
			cost: ['', Validators.required]
		});
	}

}
