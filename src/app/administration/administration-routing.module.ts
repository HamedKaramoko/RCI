import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { GroupListComponent } from './group-list/group-list.component';
import { IsAuthenticatedGuardService } from '../guard/is-authenticated-guard.service';

const routes: Routes = [
	{
		path: 'administration',
		component: AdministrationComponent,
		canActivate: [IsAuthenticatedGuardService],
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
