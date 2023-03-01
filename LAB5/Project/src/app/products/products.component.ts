import { Component } from '@angular/core';
import { products } from "../products";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product = products
  items = products
  setCategorisedList(event: any){
    this.items = event;
  }
  setBackItems(event: any){
    this.items = event;
  }
}
