import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Module
import { ServiceRoutingModule } from './service-routing.module';

// Components
import { ServicesManagementComponent } from './services-management/services-management.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ExtendedServiceListComponent } from './extended-service-list/extended-service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

// Services
import { ServiceService } from './service.service';


@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	ServiceRoutingModule
  ],
  declarations: [ServicesManagementComponent, ServiceListComponent, ExtendedServiceListComponent, ServiceDetailComponent],
  providers: [ServiceService]
})
export class ServiceModule { }
