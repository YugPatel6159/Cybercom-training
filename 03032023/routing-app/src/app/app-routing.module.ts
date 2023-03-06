import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { HrComponent } from './hr/hr.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ManagerComponent } from './manager/manager.component';
import { UsersContentComponent } from './user-content/user-content.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'lobby',
    component:LobbyComponent,
  },
  {
    path:'contactus',
    component:ContactusComponent,
  },
  {
    path:'contactus/contactus/hr',
    component:HrComponent,
  },
  {
    path:'contactus/contactus/manager',
    component:ManagerComponent,
  },
  {
    path:'user',
    component:UsersComponent,
  },
    {
      path:'user/users/:id',
      component:UsersContentComponent,
    },
  {
    component:HomeComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }