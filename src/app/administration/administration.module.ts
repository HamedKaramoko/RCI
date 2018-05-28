import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { AdministrationComponent } from './administration/administration.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GroupService } from './group.service';
import { MatSortModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  AdministrationRoutingModule
  ],
  declarations: [GroupListComponent, AdministrationComponent],
  providers: [GroupService]
})
export class AdministrationModule { }
