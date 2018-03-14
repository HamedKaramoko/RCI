import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';

// Modules
import { ConnectionModule } from './connection/connection.module';
import { PersonManagementModule } from './person-management/person-management.module';
import { ServiceModule } from './servicesManagement/service.module';

// Components
import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';
import { AppRoutingModule } from './/app-routing.module';

// Services
import { InMemoryDataService }  from './in-memory-data.service';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		),
		FormsModule,
		ReactiveFormsModule,
		ConnectionModule,
		ServiceModule,
		PersonManagementModule,
		AppRoutingModule
  ],
  providers: [LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
