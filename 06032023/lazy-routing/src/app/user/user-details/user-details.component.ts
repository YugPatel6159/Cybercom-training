import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  title:any;
constructor(private route:ActivatedRoute){
  this.title = this.route.snapshot.paramMap.get('id');
}
}
