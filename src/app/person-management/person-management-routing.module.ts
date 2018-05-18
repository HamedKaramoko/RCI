import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationGuardService } from '../guard/authentication-guard.service';

const personRoutes: Routes = [
	{
		path: 'person',
		component: PersonComponent,
		canActivate: [AuthenticationGuardService],
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: PersonListComponent
					},
					{
						path: ':id',
						component: PersonDetailComponent
					}
				]
			}
		]
	}
];

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forChild(personRoutes)
  ],
  exports: [RouterModule]
})
export class PersonManagementRoutingModule { }
