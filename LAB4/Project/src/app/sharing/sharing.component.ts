import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css'],

})
export class SharingComponent implements OnInit{
  product: { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | { image: string; price: number; name: string; rating: number; description: ({ subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string } | { subdescr: string })[]; id: number } | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
