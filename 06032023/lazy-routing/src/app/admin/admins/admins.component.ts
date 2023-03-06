import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  title:any;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.title= this.route.snapshot.paramMap.get('id');
    console.log(this.title);
  }
  admins:any[]=[
    {
      id:1,name:'yug'
    },
    {
      id:2, name:'param'
    }
  ]
}
