import { Component,Input } from '@angular/core';
import { Iproduct } from '../Model/iproduct';

@Component({
  selector: 'app-productdetailes',
  templateUrl: './productdetailes.component.html',
  styleUrls: ['./productdetailes.component.css']
})
export class ProductdetailesComponent {
  @Input() products : Iproduct[] = [];
}
