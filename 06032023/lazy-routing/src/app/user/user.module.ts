import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
