import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonformComponent } from './personform/personform.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonformComponent
  ],
  imports: [
		BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
