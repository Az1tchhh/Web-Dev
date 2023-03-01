import {Component, EventEmitter, Output} from '@angular/core';
import { products, Product } from "../products";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  @Output() getBackItems = new EventEmitter<Product>();
  product = products;
  setBackItems(){
    // @ts-ignore
    this.getBackItems.emit(this.product)
  }
}
