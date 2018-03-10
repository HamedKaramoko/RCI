import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ExtendedServiceListComponent } from './extended-service-list/extended-service-list.component';

const serviceRoutes: Routes = [
	{ path: 'services', component: ServiceListComponent },
	{ path: 'service/:id', component: ServiceDetailComponent },
	{ path: 'extendedService', component: ExtendedServiceListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(serviceRoutes)
  ],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
