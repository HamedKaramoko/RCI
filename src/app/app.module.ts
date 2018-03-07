import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

// Modules
import { ConnectionModule } from './connection/connection.module';
import { ServiceModule } from './servicesManagement/service.module';

// Components
import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';
import { AppRoutingModule } from './/app-routing.module';

// Services
import { UserService } from "./service/user.service";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		ConnectionModule,
		ServiceModule,
		AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
