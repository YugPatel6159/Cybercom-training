import { Component } from '@angular/core';

interface iAdd{
  text:string,
  category:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray:iAdd[]= [];
  add(v1:string, v2:string){
    this.todoArray.push({text:v1 , category:v2});
  }  
  // array =[1,2,3,4,5,6,7]
  // title='app-root';
  // text = 'text';
  // src='../assets/src.png'
//   isSpecial = false;
//   isUnchanged=true;
//   canSave = true;
//   currentStyles: Record<string, string> = {};
// /* . . . */
// setCurrentStyles() {
//   // CSS styles: set per current state of component properties
//   this.currentStyles = {
//     'font-style':  this.canSave      ? 'italic' : 'normal',
//     'font-weight': this.isUnchanged ? 'bold'   : 'normal',
//     'font-size':   this.isSpecial    ? '24px'   : '12px'
//   };
// }  
//   items = [{
//     name:'abc',age:10
//   },
// {
//   name:"bcd",age:20
// }]
  //  new(){
  //     this.text='button Clicked';
  //     return 'this is new function'
  //   }
  //   color = 'red';
}
