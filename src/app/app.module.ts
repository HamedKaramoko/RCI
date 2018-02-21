import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

// Services
import { LoginService } from "./service/login.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
