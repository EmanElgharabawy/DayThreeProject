import { Component,ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Iproduct } from '../Model/iproduct';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {
  @Output() sendEvent: EventEmitter<Iproduct[]> = new EventEmitter();
  products: Iproduct[] = [];
  productForm: FormGroup = new FormGroup({
    quantity: new FormControl(null, [Validators.required, Validators.min(5)]),
    price: new FormControl(null, [Validators.required, Validators.min(100)]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    category: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Image: new FormControl(''),
    discount: new FormControl(null, [Validators.required, Validators.min(5), Validators.max(25)]),
    onSale: new FormControl()
  });

  get nameControl() {
    return this.productForm.get("name");
  }
  get categoryControl() {
    return this.productForm.get("category");
  }
  get imageControl() {
    return this.productForm.get("Image");
  }
  get quantityControl() {
    return this.productForm.get("quantity");
  }
  get priceControl() {
    return this.productForm.get("price");
  }
  get discountControl() {
    return this.productForm.get("discount");
  }
  get saleControl(){
    return this.productForm.get("sale");
  }

  sendProducts() {
    let product: Iproduct = this.productForm.value;
    this.products.push(product);
    this.sendEvent.emit(this.products)
  }

}
