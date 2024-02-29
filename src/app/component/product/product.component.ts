import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Model/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
product :Iproduct[]=[]

getProducts(products: Iproduct[]) {
  this.product = products;
}
}