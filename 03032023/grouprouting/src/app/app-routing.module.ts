import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from './admin/hr/hr.component';
import { ManagerComponent } from './admin/manager/manager.component';
import { AppComponent } from './app.component';
import { User1Component } from './user/user1/user1.component';
import { User2Component } from './user/user2/user2.component';

const routes: Routes = [
{
  path:'lobby',
  component:AppComponent
},
{
  path:'/admin',
  children:[
    {
      path:'/admin/hr',
      component:HrComponent
    },
    {
      path:'/admin/manager',
      component:ManagerComponent
    }
  ]
},
{
  path:'/user',
  children:[
    {
      path:'/user/user1',
      component:User1Component
    },
    {
      path:'/user/user2',
      component:User2Component
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
