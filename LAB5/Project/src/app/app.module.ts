import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from "@angular/router";
import { GreetingComponent } from './greeting/greeting.component';
import { SharingComponent } from './sharing/sharing.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GreetingComponent,
    SharingComponent,
    CategoryListComponent,
    ListByCategoryComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: SharingComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
