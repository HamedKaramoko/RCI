import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationGuardService } from './guard/authentication-guard.service';
import { IsAuthenticatedGuardService } from './guard/is-authenticated-guard.service';
import { AdministrationModule } from './administration/administration.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
		BrowserModule,
		BrowserAnimationsModule,
		// HttpClientModule has to be imported after BrowserModule
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		ConnectionModule,
		ServiceModule,
		PersonManagementModule,
		AdministrationModule,
		AppRoutingModule
  ],
  providers: [httpInterceptorProviders, AuthenticationService, AuthGuardService, AuthenticationGuardService, IsAuthenticatedGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
