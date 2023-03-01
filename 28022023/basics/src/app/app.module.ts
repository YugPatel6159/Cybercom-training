import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstModModule } from './first-mod/first-mod.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
