import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormpadreComponent } from './formpadre/formpadre.component';
import { AdressComponent } from './adress/adress.component';
import { FormsModule } from '@angular/forms';
import { ActuoComponent } from './actuo/actuo.component';
import { RadioPreComponent } from './radio-pre/radio-pre.component';
@NgModule({
  declarations: [
    AppComponent,
    FormpadreComponent,
    AdressComponent,
    ActuoComponent,
    RadioPreComponent
  ],
  imports: [
    BrowserModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
