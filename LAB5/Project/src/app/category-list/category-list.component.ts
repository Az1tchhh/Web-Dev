import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product, products } from "../products";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  product = products
  isBackAppeared = false
  @Output() childEvent = new EventEmitter<Product>();
  @Output() getBackItems = new EventEmitter<Product>();
  getUniqueCategories() {
    const categories = new Set<string>();
    this.product.forEach(product => {
      categories.add(product.category);
    });
    return Array.from(categories);
  }

  getCategorisedList(settedCategory: String){
    let categoryItem = new Array<Product>();
    this.product.forEach(product =>{
      if(product.category === settedCategory)
      { // @ts-ignore
        categoryItem.push(product);
      }
    })
    // @ts-ignore
    this.childEvent.emit(categoryItem);

    if(this.isBackAppeared === false){
      let parentDiv = document.getElementById("category");
      let backButton = document.createElement("button");
      backButton.textContent = "Go back";
      // @ts-ignore
      parentDiv.appendChild(backButton);
      this.isBackAppeared = true;
    }

  }
  getBackCategory(){
    // @ts-ignore
    this.getBackItems.emit(this.product)
  }

}
