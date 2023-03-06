import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './hr/hr.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path:'hr', component:HrComponent
  },
  {
    path:'manager', component:ManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
