import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ServicesManagementComponent } from './services-management/services-management.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ExtendedServiceListComponent } from './extended-service-list/extended-service-list.component';

// Services
import { AuthGuardService } from '../auth-guard.service';

const serviceRoutes: Routes = [
	{
		path: 'services',
		component: ServicesManagementComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: '',
				canActivateChild: [AuthGuardService],
				children: [
					{ path: 'serviceslist', component: ServiceListComponent },
					{ path: 'service/:id', component: ServiceDetailComponent },
					{ path: 'extendedService', component: ExtendedServiceListComponent}
				]
			}
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(serviceRoutes)
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
