import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const personRoutes: Routes = [
	{
		path: 'persons',
		component: PersonComponent,
		children: [
			{
				path: '',
				children: [
					{
						path: '',
						component: PersonListComponent
					},
					{
						path: 'person/:id',
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
