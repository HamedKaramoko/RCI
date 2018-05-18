import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';

// Interceptors
import { httpInterceptorProviders } from './http-interceptors';

// Modules
import { AppRoutingModule } from './/app-routing.module';
import { ConnectionModule } from './connection/connection.module';
import { PersonManagementModule } from './person-management/person-management.module';
import { ServiceModule } from './servicesManagement/service.module';

// Components
import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// Services
import { InMemoryDataService }  from './in-memory-data.service';
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationGuardService } from './guard/authentication-guard.service';
import { IsAuthenticatedGuardService } from './guard/is-authenticated-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
		BrowserModule,
		// HttpClientModule has to be imported after BrowserModule
		HttpClientModule,
		/*environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		),*/
		FormsModule,
		ReactiveFormsModule,
		ConnectionModule,
		ServiceModule,
		PersonManagementModule,
		AppRoutingModule
  ],
  providers: [httpInterceptorProviders, AuthenticationService, AuthGuardService, AuthenticationGuardService, IsAuthenticatedGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
