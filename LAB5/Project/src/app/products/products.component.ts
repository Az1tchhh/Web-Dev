import { Component } from '@angular/core';
import {Product, products} from "../products";
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
  getDefaultList(){
    this.items = this.product;

  }

  likePressed(productId: number){
      this.product.forEach(product => {
        if (product.id === productId) {
          if(product.isLikePressed === false) {
            product.like += 1;
            product.isLikePressed = true;
          }
          else{
            product.like -=1;
            product.isLikePressed = false;
          }
        }
      })
  }

  remove(productId: number){
    let index: number = 0;
    for(let i = 0; i<this.product.length; i++){
      if(this.product[i].id === productId){
        index = i;
        break;
      }
    }
    this.product.splice(index, 1);

  }
}
