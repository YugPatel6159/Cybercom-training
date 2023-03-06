import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  title:any;
  users:any[]=[{id:1,name:'rutvik'},{id:2,name:"tejas"}]
}
