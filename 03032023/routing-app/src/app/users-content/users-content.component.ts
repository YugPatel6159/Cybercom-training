import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css']
})
export class UsersContentComponent {
  title;
  constructor(private route:ActivatedRoute){
    this.title=this.route.snapshot.paramMap.get('id');
    console.log(this.title);
  }
  ngOnInit(){
  }
}
