import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
  title:any;
  constructor(private route:ActivatedRoute){
    this.title=this.route.snapshot.paramMap.get('id');
  }

}
