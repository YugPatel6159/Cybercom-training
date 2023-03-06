import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HrComponent } from './hr/hr.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    HrComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
