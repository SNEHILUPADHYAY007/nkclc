import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { NameComponent } from './name/name.component';
import { DetailsComponent } from './details/details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './localStorage.service';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    NameComponent,
    DetailsComponent,
    CompanyDetailsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,ReactiveFormsModule,StorageServiceModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
