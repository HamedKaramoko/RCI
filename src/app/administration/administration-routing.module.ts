import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
	{
		path: 'administration',
		component: AdministrationComponent,
		canLoad: [],
		children: [
			{
				path: '',
				children: [
					{
						path: 'group',
						component: GroupListComponent
					}
				]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
