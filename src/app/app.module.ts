import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

// Modules
import { ServiceModule } from './servicesManagement/service.module';

// Components
import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';

// Services
import { LoginService } from "./service/login.service";
import { UserService } from "./service/user.service";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		ServiceModule,
		AppRoutingModule
  ],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
