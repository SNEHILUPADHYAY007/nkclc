import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { NameComponent } from './name/name.component';
import { DetailsComponent } from './details/details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    NameComponent,
    DetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
