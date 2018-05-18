import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { ConnectionRoutingModule } from './connection-routing.module';

// Components
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';

// Services
import { ConnectionService } from './connection.service';


@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	ConnectionRoutingModule
  ],
  declarations: [SignupComponent, SignInComponent],
  providers: [ConnectionService]
})
export class ConnectionModule { }
