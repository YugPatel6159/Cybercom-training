import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(){
    console.warn('user Id is',this.route.snapshot.paramMap.get('id'))
  }

  users:any=[{
    name: 'yug',
    id: 1
  },
  {
    name: 'rutvik',
    id: 2
  },
  {
    name: 'tejas',
    id: 3
  },
  {
    name: 'param',
    id: 4
  }]
}
