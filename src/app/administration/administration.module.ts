import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  declarations: [GroupListComponent, AdministrationComponent]
})
export class AdministrationModule { }
