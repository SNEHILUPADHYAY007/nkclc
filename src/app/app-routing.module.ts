import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { NameComponent } from './name/name.component';
import { DetailsComponent } from './details/details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes:Routes=[
    {
        path:"",
        component:NameComponent,
        pathMatch:"full"
    },
    {
        path:"address",
        component:AddressComponent,
    },
    {
        path:'details',
        component:DetailsComponent
    },
    {
        path:'company',
        component:CompanyDetailsComponent
    }
]



@NgModule({
    imports:[
        RouterModule.forRoot(routes,{
            scrollPositionRestoration: "enabled",
            anchorScrolling: "enabled",
        })
    ],
    exports: [RouterModule],
})

export class AppRoutingModule{}