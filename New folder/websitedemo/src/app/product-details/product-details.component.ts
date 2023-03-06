import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface iProductDetail{
  id:any,
  name:string|null,
  price:any
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productDetail:iProductDetail={
    id:'',
    name:'',
    price:''
  }
  constructor(private route:ActivatedRoute){
    this.productDetail.id=this.route.snapshot.paramMap.get('id');
    this.productDetail.name=this.route.snapshot.paramMap.get('name');
    this.productDetail.price=this.route.snapshot.paramMap.get('price');
    
    console.log(this.productDetail.id);
    console.log(this.productDetail.name);
    console.log(this.productDetail.price);
  }
}
