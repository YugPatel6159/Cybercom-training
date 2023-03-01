import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  a= 10;
  user = [
    {name: 'yug', id: 1},
    {name: 'Rutvik', id: 2},
    {name: 'tejas', id: 3},
    {name: 'param', id: 4}
  ];
  numbers =[1,2,3,4,5,6];

  style1= 'color:blue';

  myFun(){
  return 'this is function data'
  }

  userFun(name:any){
    alert(name)
  }

  getData(box:any){
    console.warn(box)
  }
}
