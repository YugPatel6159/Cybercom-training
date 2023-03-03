import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'lobby',
    component:LobbyComponent
  },
  {
    path:'**',
    component:TestComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
