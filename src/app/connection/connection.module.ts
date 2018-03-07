import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { ConnectionRoutingModule } from './connection-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Services
import { LoginService } from './login.service';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	ConnectionRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [LoginService]
})
export class ConnectionModule { }