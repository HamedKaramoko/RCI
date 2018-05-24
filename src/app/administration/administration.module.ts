import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { AdministrationComponent } from './administration/administration.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GroupService } from './group.service';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatGridListModule,
    AdministrationRoutingModule
  ],
  declarations: [GroupListComponent, AdministrationComponent],
  providers: [GroupService]
})
export class AdministrationModule { }
