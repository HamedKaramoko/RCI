import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonManagementRoutingModule } from './person-management-routing.module';
import { PersonService } from './person.service';

@NgModule({
  imports: [
	CommonModule,
	PersonManagementRoutingModule
  ],
  declarations: [PersonComponent, PersonListComponent, PersonDetailComponent],
  providers: [PersonService]
})
export class PersonManagementModule { }
