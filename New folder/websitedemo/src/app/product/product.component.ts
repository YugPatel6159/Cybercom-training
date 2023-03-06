import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
constructor(private route:ActivatedRoute){}
ngOnInit(): void {}
  products=[
    {id:1,name:'white jeans', price:1000},
    {id:2,name:'black jeans', price:900},
    {id:3,name:'blue jeans', price:700},
    {id:4,name:'white tshirt', price:500}
  ]
}
