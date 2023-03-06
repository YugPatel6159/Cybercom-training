import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminsComponent } from './admins/admins.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';



@NgModule({
  declarations: [
  
    AdminsComponent,
       AdminDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
