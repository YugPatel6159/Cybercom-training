import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    Array= [{text:'',category:''}];

  add(v1:string, v2:string){
    this.Array.push({text:v1 , category:v2});
  }  
  
}
 // new(){
    //   return 'this is new function'
    // }
    // color = 'red';