import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModRoutingModule } from './first-mod-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstModRoutingModule
  ],
  exports:[
    FirstComponent,
  ]
})
export class FirstModModule { }
