import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ManagerComponent } from './manager/manager.component';
import { HrComponent } from './hr/hr.component';
import { UsersComponent } from './users/users.component';
import { UsersContentComponent } from './user-content/user-content.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    HomeComponent,
    ContactusComponent,
    ManagerComponent,
    HrComponent,
    UsersComponent,
    UsersContentComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }