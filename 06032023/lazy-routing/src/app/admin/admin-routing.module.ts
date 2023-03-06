import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminsComponent } from './admins/admins.component';


const routes: Routes = [
  {
    path:'',
    component:AdminsComponent
  },
  {
    path:'admin/:id',
    component:AdminDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
